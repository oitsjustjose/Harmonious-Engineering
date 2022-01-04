"""
@author: Jose Stovall | oitsjustjose @ github | twitter | anywhere really
A tool for scanning your mods folder for any particular item to figure out which mod did it, where, etc..
"""

import os
import sys
import zipfile

def main(scannable: list) -> None:
    """ The main runfunction of this file """
    print(f"Scanning for {len(scannable)} items in ./mods..")
    for root, dir, files in os.walk("./mods"):
        for file in files:
            if not file.endswith(".jar"):
                continue
            chest_loot_tables = []
            zip_fh = zipfile.ZipFile(f"{root}/{file}", "r")
            for zip_item in zip_fh.infolist():
                if "loot_tables/chests" in zip_item.filename and zip_item.filename.endswith(".json"):
                    chest_loot_tables.append(zip_item)

            filtered_loot_tables = []
            for tbl in chest_loot_tables:
                # We can safely decode to utf8 because we filter .jsons here ^
                data = zip_fh.read(tbl).decode("utf-8")
                for scn in scannable:
                    if scn in data:
                        filtered_loot_tables.append(tbl.filename)
                        break

            if filtered_loot_tables:
                print(f"Mod {file} contained {len(filtered_loot_tables)} matches for your scanned items:")
                print(" - ", end="")
                print("\n - ".join(filtered_loot_tables))
                print("")

if __name__ == "__main__":
    _ITEMS_TO_SCAN = []
    for arg in sys.argv[1:]:
        if ":" in arg and len(arg.split(":")) == 2:
            _ITEMS_TO_SCAN.append(arg)
        else:
            print(f"{arg} is not a valid Minecraft item of form modid:item")
            sys.exit(0)
    if not _ITEMS_TO_SCAN:
        print("No items provided to scan structures for - run this script using python[3] scan_structures.py MODID:ITEM1 [...MODID:ITEM_X for all items]")
        sys.exit(0)
    main(_ITEMS_TO_SCAN)
