"""
Cleans up existing datapack files to replace empty / {} files with properly formatted
empty recipes.
"""

import json
import os

for root, dirs, files in os.walk("./data"):
    for file in files:
        try:
            with open(f"{root}/{file}", "r", encoding="utf-8") as fh:
                raw_data = fh.read().strip()
                if raw_data and json.loads(raw_data) != {}:
                    print(f"Skipped {root}/{file} - has content")
                    continue
            data = {
                "type": "minecraft:crafting_shapeless",
                "ingredients": [{"item": "minecraft:air"}],
                "result": {"item": "minecraft:air"},
            }
            with open(f"{root}/{file}", "w", encoding="utf-8") as fh:
                fh.write(json.dumps(data))
        except Exception as exc:
            print(f"Failed to clean {root}/{file}: {exc}")
