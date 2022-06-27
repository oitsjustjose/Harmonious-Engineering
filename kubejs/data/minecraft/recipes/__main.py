"""
@Author: Jose Stovall | github.com/oitsjustjose
Generates clean JSON files for upgrading equipment w/ enchantments saved in the smithing table
"""

import json

# Vanilla Mappings
vanilla = [
    # Leather -> Iron
    ("minecraft:leather_helmet", "#forge:ingots/iron", "minecraft:iron_helmet"),
    ("minecraft:leather_chestplate", "#forge:ingots/iron", "minecraft:iron_chestplate"),
    ("minecraft:leather_leggings", "#forge:ingots/iron", "minecraft:iron_leggings"),
    ("minecraft:leather_boots", "#forge:ingots/iron", "minecraft:iron_boots"),
    # Leather -> Chainmail
    ("minecraft:leather_helmet", "tetra:forged_mesh", "minecraft:chainmail_helmet"),
    ("minecraft:leather_chestplate", "tetra:forged_mesh", "minecraft:chainmail_chestplate"),
    ("minecraft:leather_leggings", "tetra:forged_mesh", "minecraft:chainmail_leggings"),
    ("minecraft:leather_boots", "tetra:forged_mesh", "minecraft:chainmail_boots"),
    # Wood -> Stone
    ("minecraft:wooden_sword", "#minecraft:stone_crafting_materials", "minecraft:stone_sword"),
    ("minecraft:wooden_pickaxe", "#minecraft:stone_crafting_materials", "minecraft:stone_pickaxe"),
    ("minecraft:wooden_shovel", "#minecraft:stone_crafting_materials", "minecraft:stone_shovel"),
    ("minecraft:wooden_axe", "#minecraft:stone_crafting_materials", "minecraft:stone_axe"),
    ("minecraft:wooden_hoe", "#minecraft:stone_crafting_materials", "minecraft:stone_hoe"),
    # Stone -> Iron
    ("minecraft:stone_sword", "#forge:ingots/iron", "minecraft:iron_sword"),
    ("minecraft:stone_pickaxe", "#forge:ingots/iron", "minecraft:iron_pickaxe"),
    ("minecraft:stone_shovel", "#forge:ingots/iron", "minecraft:iron_shovel"),
    ("minecraft:stone_axe", "#forge:ingots/iron", "minecraft:iron_axe"),
    ("minecraft:stone_hoe", "#forge:ingots/iron", "minecraft:iron_hoe"),
    # Iron -> Gold
    ("minecraft:iron_sword", "#forge:ingots/gold", "minecraft:golden_sword"),
    ("minecraft:iron_pickaxe", "#forge:ingots/gold", "minecraft:golden_pickaxe"),
    ("minecraft:iron_shovel", "#forge:ingots/gold", "minecraft:golden_shovel"),
    ("minecraft:iron_axe", "#forge:ingots/gold", "minecraft:golden_axe"),
    ("minecraft:iron_hoe", "#forge:ingots/gold", "minecraft:golden_hoe"),
    ("minecraft:iron_helmet", "#forge:ingots/gold", "minecraft:golden_helmet"),
    ("minecraft:iron_chestplate", "#forge:ingots/gold", "minecraft:golden_chestplate"),
    ("minecraft:iron_leggings", "#forge:ingots/gold", "minecraft:golden_leggings"),
    ("minecraft:iron_boots", "#forge:ingots/gold", "minecraft:golden_boots"),
    # Iron -> Diamond
    ("minecraft:iron_sword", "minecraft:diamond", "minecraft:diamond_sword"),
    ("minecraft:iron_pickaxe", "minecraft:diamond", "minecraft:diamond_pickaxe"),
    ("minecraft:iron_shovel", "minecraft:diamond", "minecraft:diamond_shovel"),
    ("minecraft:iron_axe", "minecraft:diamond", "minecraft:diamond_axe"),
    ("minecraft:iron_hoe", "minecraft:diamond", "minecraft:diamond_hoe"),
    ("minecraft:iron_helmet", "minecraft:diamond", "minecraft:diamond_helmet"),
    ("minecraft:iron_chestplate", "minecraft:diamond", "minecraft:diamond_chestplate"),
    ("minecraft:iron_leggings", "minecraft:diamond", "minecraft:diamond_leggings"),
    ("minecraft:iron_boots", "minecraft:diamond", "minecraft:diamond_boots"),
]

immersive = [
    # Iron -> Steel
    ("minecraft:iron_sword", "#forge:ingots/steel", "immersiveengineering:sword_steel"),
    ("minecraft:iron_pickaxe", "#forge:ingots/steel", "immersiveengineering:pickaxe_steel"),
    ("minecraft:iron_shovel", "#forge:ingots/steel", "immersiveengineering:shovel_steel"),
    ("minecraft:iron_axe", "#forge:ingots/steel", "immersiveengineering:axe_steel"),
    ("minecraft:iron_hoe", "#forge:ingots/steel", "immersiveengineering:hoe_steel"),
    ("minecraft:iron_helmet", "#forge:ingots/steel", "immersiveengineering:armor_steel_head"),
    ("minecraft:iron_chestplate", "#forge:ingots/steel", "immersiveengineering:armor_steel_chest"),
    ("minecraft:iron_leggings", "#forge:ingots/steel", "immersiveengineering:armor_steel_legs"),
    ("minecraft:iron_boots", "#forge:ingots/steel", "immersiveengineering:armor_steel_feet"),
    # Steel -> Diamond
    ("immersiveengineering:sword_steel", "minecraft:diamond", "minecraft:diamond_sword"),
    ("immersiveengineering:pickaxe_steel", "minecraft:diamond", "minecraft:diamond_pickaxe"),
    ("immersiveengineering:shovel_steel", "minecraft:diamond", "minecraft:diamond_shovel"),
    ("immersiveengineering:axe_steel", "minecraft:diamond", "minecraft:diamond_axe"),
    ("immersiveengineering:hoe_steel", "minecraft:diamond", "minecraft:diamond_hoe"),
    ("immersiveengineering:armor_steel_head", "minecraft:diamond", "minecraft:diamond_helmet"),
    ("immersiveengineering:armor_steel_chest", "minecraft:diamond", "minecraft:diamond_chestplate"),
    ("immersiveengineering:armor_steel_legs", "minecraft:diamond", "minecraft:diamond_leggings"),
    ("immersiveengineering:armor_steel_feet", "minecraft:diamond", "minecraft:diamond_boots"),
]

pnc = [
    # Iron -> Compressed Iron
    ("minecraft:iron_helmet", "#forge:ingots/compressed_iron", "pneumaticcraft:compressed_iron_helmet"),
    ("minecraft:iron_chestplate", "#forge:ingots/compressed_iron", "pneumaticcraft:compressed_iron_chestplate"),
    ("minecraft:iron_leggings", "#forge:ingots/compressed_iron", "pneumaticcraft:compressed_iron_leggings"),
    ("minecraft:iron_boots", "#forge:ingots/compressed_iron", "pneumaticcraft:compressed_iron_boots"),
    # Compressed Iron -> Diamond
    ("pneumaticcraft:compressed_iron_helmet", "minecraft:diamond", "minecraft:diamond_helmet"),
    ("pneumaticcraft:compressed_iron_chestplate", "minecraft:diamond", "minecraft:diamond_chestplate"),
    ("pneumaticcraft:compressed_iron_leggings", "minecraft:diamond", "minecraft:diamond_leggings"),
    ("pneumaticcraft:compressed_iron_boots", "minecraft:diamond", "minecraft:diamond_boots"),
]

tools_complement = []

# Dynamic Recipes for Stone + <ingot> => Tier and <Tier> + Diamond => Diamond 
tc_basic_tiers= ["copper", "tin", "silver", "lead", "nickel"]
tc_adv_tiers= ["bronze", "constantan", "electrum", "invar"]

for t in tc_basic_tiers:
    # Stone -> {MAT}
    tools_complement.append(("minecraft:stone_sword", f"#forge:ingots/{t}", f"tools_complement:{t}_sword"))
    tools_complement.append(("minecraft:stone_pickaxe", f"#forge:ingots/{t}", f"tools_complement:{t}_pickaxe"))
    tools_complement.append(("minecraft:stone_shovel", f"#forge:ingots/{t}", f"tools_complement:{t}_shovel"))
    tools_complement.append(("minecraft:stone_axe", f"#forge:ingots/{t}", f"tools_complement:{t}_axe"))
    tools_complement.append(("minecraft:stone_hoe", f"#forge:ingots/{t}", f"tools_complement:{t}_hoe"))
    tools_complement.append(("minecraft:leather_helmet", f"#forge:ingots/{t}", f"tools_complement:{t}_helmet"))
    tools_complement.append(("minecraft:leather_chestplate", f"#forge:ingots/{t}", f"tools_complement:{t}_chestplate"))
    tools_complement.append(("minecraft:leather_leggings", f"#forge:ingots/{t}", f"tools_complement:{t}_leggings"))
    tools_complement.append(("minecraft:leather_boots", f"#forge:ingots/{t}", f"tools_complement:{t}_boots"))
    # {MAT} -> Iron
    tools_complement.append((f"tools_complement:{t}_sword", "#forge:ingots/iron", "minecraft:iron_sword"))
    tools_complement.append((f"tools_complement:{t}_pickaxe", "#forge:ingots/iron", "minecraft:iron_pickaxe"))
    tools_complement.append((f"tools_complement:{t}_shovel", "#forge:ingots/iron", "minecraft:iron_shovel"))
    tools_complement.append((f"tools_complement:{t}_axe", "#forge:ingots/iron", "minecraft:iron_axe"))
    tools_complement.append((f"tools_complement:{t}_hoe", "#forge:ingots/iron", "minecraft:iron_hoe"))
    tools_complement.append((f"tools_complement:{t}_helmet", "#forge:ingots/iron", "minecraft:iron_helmet"))
    tools_complement.append((f"tools_complement:{t}_chestplate", "#forge:ingots/iron", "minecraft:iron_chestplate"))
    tools_complement.append((f"tools_complement:{t}_leggings", "#forge:ingots/iron", "minecraft:iron_leggings"))
    tools_complement.append((f"tools_complement:{t}_boots", "#forge:ingots/iron", "minecraft:iron_boots"))

for t in tc_adv_tiers:
    # Iron -> {MAT}
    tools_complement.append(("minecraft:iron_sword", f"#forge:ingots/{t}", f"tools_complement:{t}_sword"))
    tools_complement.append(("minecraft:iron_pickaxe", f"#forge:ingots/{t}", f"tools_complement:{t}_pickaxe"))
    tools_complement.append(("minecraft:iron_shovel", f"#forge:ingots/{t}", f"tools_complement:{t}_shovel"))
    tools_complement.append(("minecraft:iron_axe", f"#forge:ingots/{t}", f"tools_complement:{t}_axe"))
    tools_complement.append(("minecraft:iron_hoe", f"#forge:ingots/{t}", f"tools_complement:{t}_hoe"))
    tools_complement.append(("minecraft:iron_helmet", f"#forge:ingots/{t}", f"tools_complement:{t}_helmet"))
    tools_complement.append(("minecraft:iron_chestplate", f"#forge:ingots/{t}", f"tools_complement:{t}_chestplate"))
    tools_complement.append(("minecraft:iron_leggings", f"#forge:ingots/{t}", f"tools_complement:{t}_leggings"))
    tools_complement.append(("minecraft:iron_boots", f"#forge:ingots/{t}", f"tools_complement:{t}_boots"))
    tools_complement.append(("tools_complement:iron_sickle", f"#forge:ingots/{t}", f"tools_complement:{t}_sickle"))
    tools_complement.append(("tools_complement:iron_knife", f"#forge:ingots/{t}", f"tools_complement:{t}_knife"))
    # {MAT} -> Diamond
    tools_complement.append((f"tools_complement:{t}_sword", "minecraft:diamond", "minecraft:diamond_sword"))
    tools_complement.append((f"tools_complement:{t}_pickaxe", "minecraft:diamond", "minecraft:diamond_pickaxe"))
    tools_complement.append((f"tools_complement:{t}_shovel", "minecraft:diamond", "minecraft:diamond_shovel"))
    tools_complement.append((f"tools_complement:{t}_axe", "minecraft:diamond", "minecraft:diamond_axe"))
    tools_complement.append((f"tools_complement:{t}_hoe", "minecraft:diamond", "minecraft:diamond_hoe"))
    tools_complement.append((f"tools_complement:{t}_helmet", "minecraft:diamond", "minecraft:diamond_helmet"))
    tools_complement.append((f"tools_complement:{t}_chestplate", "minecraft:diamond", "minecraft:diamond_chestplate"))
    tools_complement.append((f"tools_complement:{t}_leggings", "minecraft:diamond", "minecraft:diamond_leggings"))
    tools_complement.append((f"tools_complement:{t}_boots", "minecraft:diamond", "minecraft:diamond_boots"))

recipe = {
  "type": "minecraft:smithing",
  "base": None,
  "addition": None,
  "result": None
}


for left, upgrade, right in vanilla+immersive+pnc+tools_complement:
    r = recipe.copy()
    r["base"] = {"item": left}
    if "#" in upgrade:
        r["addition"] = {"tag": upgrade.replace("#", "")}
    else:
        r["addition"] = {"item": upgrade}
    r["result"] = {"item": right}


    input_name = left.split(":")[1]
    output_name = right.split(":")[1]
    file_name = f"{output_name}_from_smithing_{input_name}.json"
    with open(f"./smithing/{file_name}", "w", encoding="utf-8") as fh:
        fh.write(json.dumps(r))
