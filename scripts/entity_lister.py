"""
@author: Jose Stovall | oitsjustjose @ github | twitter | anywhere really
A tool for scanning your mods folder for any particular item to figure out which mod did it, where, etc..
"""

import os
import zipfile

def fmt(filename: str) -> str:
    """Formats a given data path to the modid:entity format"""
    modid = filename[5:][:filename[5:].index("/")]
    entity = filename[filename.rindex("/") + 1:].replace(".json", "")
    return f"{modid}:{entity}"


def main() -> None:
    """ The main runfunction of this file """
    entity_loot_tables = []
    for root, _, files in os.walk("./mods"):
        for file in files:
            if not file.endswith(".jar"):
                continue
            zip_fh = zipfile.ZipFile(f"{root}/{file}", "r")
            for zip_item in zip_fh.infolist():
                if "loot_tables/entities" in zip_item.filename and zip_item.filename.endswith(".json"):
                    entity_loot_tables.append(zip_item.filename)
    entity_loot_tables = list( map( fmt, entity_loot_tables ) )
    print("\n".join(entity_loot_tables))
        


if __name__ == "__main__":
    main()
