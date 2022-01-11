import json

TEMPLATE = """{
    "type": "thermal:press",
    "ingredients": [
        {"tag": "<INPUT_ITEM>"},
        {"item": "immersiveengineering:mold_rod"}
    ],
    "result": [{"item": "<OUTPUT_ITEM>", "count": 2}]
}"""

METALS = [
    "iron",
    "gold",
    "copper",
    "tin",
    "aluminum",
    "silver",
    "lead",
    "nickel",
    "uranium",
    "osmium",
    "zinc",
    "cobalt",
    "bronze",
    "constantan",
    "brass",
    "electrum",
    "steel",
    "invar",
    "signalum",
    "lumium",
    "enderium",
]

for metal in METALS:
    input = f"forge:ingots/{metal}"
    output = f"emendatusenigmatica:{metal}_rod"

    with open(f"./{metal}_rod.json", "w") as fh:
        fh.write(
            TEMPLATE.replace("<INPUT_ITEM>", input).replace("<OUTPUT_ITEM>", output)
        )
