import json

DATA = [{
    "modid": "atmospheric",
    "name": "morado",
    "tag": "morado_logs",
    "plank": "morado_planks"
}, {
    "modid": "atmospheric",
    "name": "rosewood",
    "tag": "rosewood_logs",
    "plank": "rosewood_planks"
}, {
    "modid": "atmospheric",
    "name": "yucca",
    "tag": "yucca_logs",
    "plank": "yucca_planks"
}, {
    "modid": "upgrade_aquatic",
    "name": "river",
    "tag": "river_logs",
    "plank": "river_planks"
}, {
    "modid": "upgrade_aquatic",
    "name": "driftwood",
    "tag": "driftwood_logs",
    "plank": "driftwood_planks"
}, {
    "modid": "autumnity",
    "name": "maple",
    "tag": "maple_logs",
    "plank": "maple_planks"
}, {
    "modid": "enhanced_mushrooms",
    "name": "red_mushroom",
    "tag": "red_mushroom_stems",
    "plank": "red_mushroom_planks"
}, {
    "modid": "enhanced_mushrooms",
    "name": "brown_mushroom",
    "tag": "brown_mushroom_stems",
    "plank": "brown_mushroom_planks"
}]

BLOCK_TYPES = [{
    "name": "palisade",
    "requires": "tag",
    "creates": 4
}, {
    "name": "beam",
    "requires": "tag",
    "creates": 1
}, {
    "name": "seat",
    "requires": "plank",
    "creates": 1
}, {
    "name": "support",
    "requires": "plank",
    "creates": 1
}]

for d in DATA:
    for b in BLOCK_TYPES:
        datapack = {
            "type": "corail_woodcutter:woodcutting",
            "ingredient": {
                "tag": f"{d['modid']}:{d['tag']}"
            } if b["requires"] == "tag" else {
                "item": f"{d['modid']}:{d['plank']}"
            },
            "result": f"decorative_blocks_abnormals:{d['name']}_{b['name']}",
            "count": b["creates"]
        }

        with open(f"{d['name']}_{b['name']}.json", "w") as fh:
            fh.write(json.dumps(datapack))