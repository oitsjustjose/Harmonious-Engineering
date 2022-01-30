"""
@author: Jose Stovall | oitsjustjose @ github | twitter | anywhere really
A tool for inspecting your mods folder to give you a list of all mod_id's in your pack
"""

import os
import sys
import zipfile

def main() -> None:
    """ The main runfunction of this file """
    all_modids = []
    for root, dir, files in os.walk("./mods"):
        for file in files:
            if not file.endswith(".jar"):
                continue
            temmolds = []
            zip_fh = zipfile.ZipFile(f"{root}/{file}", "r")
            for zip_item in zip_fh.infolist():
                if zip_item.filename.endswith("mods.toml"):
                    temmolds.append(zip_item)

            for toml in temmolds:
                data = zip_fh.read(toml).decode("utf-8").lower()
                idx = data.index("modid")
                while idx:
                    try:
                        start = data[idx:]
                        end = start.index("\n")
                        modid = start[:end]
                        all_modids.append(modid)
                        data = start[end:]
                        idx = data.index("modid")
                    except ValueError:
                        idx = None
    all_modids = list(map(lambda x: x.replace("modid", "").replace("=", "").replace(" ", "").replace('"', "").replace("'", "").replace("#mandatory", "").replace(".dependenciesareoptional.", "").replace("ofthemod", "").replace("ofthedependency", "").strip(), all_modids))
    all_modids = list(filter(lambda x: x, all_modids))
    all_modids = list(set(all_modids))
    print(sorted(all_modids))

if __name__ == "__main__":
    main()
