import json
import os
import sys
import zipfile
from json.decoder import JSONDecodeError
from typing import Collection, Dict, List, Tuple

from deepdiff import DeepDiff

EMENDATUS_METALS = [
    "copper",
    "tin",
    "silver",
    "lead",
    "nickel",
    "uranium",
    "osmium",
    "aluminum",
    "zinc",
    "cobalt",
    "bronze",
    "brass",
    "constantan",
    "electrum",
    "steel",
    "invar",
    "signalum",
    "lumium",
    "enderium",
]

MATERIAL_TYPES = ["dust", "ingot", "nugget"]


def _repl_with_ee_variant(item: str) -> str:
    try:
        namespace, path = item.split(":")
    except ValueError:
        # Means that it's a minecraft item because namespace not included
        return item

    # Already converted case
    if namespace == "emendatusenigmatica":
        return item

    for metal in EMENDATUS_METALS:
        for mat in MATERIAL_TYPES:
            if path == f"{metal}_{mat}" or path == f"{mat}_{metal}":
                return f"emendatusenigmatica:{metal}_{mat}"
    return item


def _walk_json(obj):
    """Walks a json file"""
    ret = {}
    if isinstance(obj, dict):
        for key, val in obj.items():
            if isinstance(val, dict):
                rest = _walk_json(val)
                ret[key] = rest
            elif isinstance(val, list):
                rest = [_walk_json(x) for x in val]
                ret[key] = rest
            elif key == "item":  # leaf
                ret[key] = _repl_with_ee_variant(val)

        return ret
    elif isinstance(obj, list):
        ret = []
        for val in obj:
            if isinstance(val, dict):
                rest = _walk_json(val)
                ret.append(rest)
            elif isinstance(val, list):
                rest = [_walk_json(x) for x in val]
                ret.append(rest)
            else:
                return val
        return ret
    else:
        return obj


def main() -> None:
    """The main runfunction of this file"""

    for root, _, files in os.walk("./mods"):
        for file in files:
            if not file.endswith(".jar"):
                continue

            with zipfile.ZipFile(f"{root}/{file}", "r") as zip_fh:
                recipe_files: List[zipfile.ZipInfo] = []
                # Only include the files that end with .json and are in the recipes folder somewhere
                for zip_item in zip_fh.infolist():
                    if (
                        "data/" in zip_item.filename
                        and "recipes/" in zip_item.filename
                        and zip_item.filename.endswith(".json")
                    ):
                        recipe_files.append(zip_item)

                for recipe in recipe_files:
                    try:
                        data = zip_fh.read(recipe).decode("utf-8")
                        json_data = json.loads(data)
                    except JSONDecodeError:
                        print(f"Recipe {recipe.filename} in {file} is not a valid JSON")
                        continue
                    # Iterate over every possible K/V Pair in the JSON
                    walked = _walk_json(json_data)
                    ddiff = DeepDiff(walked, json_data, ignore_order=True)
                    if ddiff != {}:
                        print(ddiff)
                    # TODO: verify if any change was made
                    # TODO: verify that file doesn't already exist before writing
                    break

                    # for metal in EMENDATUS_METALS:
                    #     for mat in MATERIAL_TYPES:
                    #         if not (
                    #             "crafting_shaped" in data
                    #             or "crafting_shapeless" in data
                    #         ):
                    #             if f"{metal}_{mat}" in data or f"{mat}_{metal}" in data:
                    #                 if not f"emendatusenigmatica:{metal}_{mat}" in data:
                    #                     print(
                    #                         f"Found the following non-Emendatus {mat} output:"
                    #                     )
                    #                     print(data)
                    #                     print(
                    #                         "---------------------------------------------"
                    #                     )


if __name__ == "__main__":
    main()
