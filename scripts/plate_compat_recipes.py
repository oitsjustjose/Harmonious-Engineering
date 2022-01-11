import json

TAGS = {
    "forge:ingots/netherite": "createdeco:netherite_sheet",
    # "forge:ingots/iron": "emendatusenigmatica:iron_plate",
    # "forge:ingots/gold": "emendatusenigmatica:gold_plate",
    # "forge:ingots/copper": "emendatusenigmatica:copper_plate",
    # "forge:ingots/silver": "emendatusenigmatica:silver_plate",
    # "forge:ingots/lead": "emendatusenigmatica:lead_plate",
    # "forge:ingots/nickel": "emendatusenigmatica:nickel_plate",
    # "forge:ingots/osmium": "emendatusenigmatica:osmium_plate",
    # "forge:ingots/tin": "emendatusenigmatica:tin_plate",
    # "forge:ingots/zinc": "emendatusenigmatica:zinc_plate",
    # "forge:ingots/cobalt": "emendatusenigmatica:cobalt_plate",
    # "forge:ingots/bronze": "emendatusenigmatica:bronze_plate",
    # "forge:ingots/constantan": "emendatusenigmatica:constantan_plate",
    # "forge:ingots/electrum": "emendatusenigmatica:electrum_plate",
    # "forge:ingots/invar": "emendatusenigmatica:invar_plate",
    "forge:ingots/signalum": "emendatusenigmatica:signalum_plate",
    "forge:ingots/lumium": "emendatusenigmatica:lumium_plate",
    "forge:ingots/enderium": "emendatusenigmatica:enderium_plate",
}


TEMPLATES = {
    # "create_pressing_template": {
    #     "_root": "./pressing",
    #     "_templ": {
    #         "type": "create:pressing",
    #         "ingredients": [{"tag": "<INPUT_ITEM>"}],
    #         "results": [{"item": "<OUTPUT_ITEM>"}],
    #     },
    # },
    # "multiservo_press_template": {
    #     "_root": "./multiservo_press",
    #     "_templ": {
    #         "type": "thermal:press",
    #         "ingredient": {"tag": "<INPUT_ITEM>"},
    #         "result": [{"item": "<OUTPUT_ITEM>"}],
    #     },
    # },
    "metal_press_template": {
        "_root": "./metal_press",
        "_templ": {
            "type": "immersiveengineering:metal_press",
            "mold": {"item": "immersiveengineering:mold_plate"},
            "input": {"tag": "<INPUT_ITEM>"},
            "result": {"item": "<OUTPUT_ITEM>"},
            "energy": 2400,
        },
    },
}


for tag in TAGS:
    for template in TEMPLATES:
        output = TAGS[tag]
        file_name = output[output.index(":") + 1 :]
        with open(f"{TEMPLATES[template]['_root']}/{file_name}.json", "w") as fh:
            data = json.dumps(TEMPLATES[template]["_templ"])
            data = data.replace("<INPUT_ITEM>", tag).replace("<OUTPUT_ITEM>", TAGS[tag])
            fh.write(data)
