onEvent("recipes", (event) => {
  event.remove({ output: "mekanism:metallurgic_infuser" });
  event.remove({ output: "mekanism:steel_casing" });
  event.remove({ output: "mekanism:teleportation_core" });
  event.remove({ output: "mekanism:digital_miner" });
  event.remove({ output: "mekanism:cardboard_box" });

  event.shaped("1x mekanism:teleportation_core", ["LAL", "GSG", "LAL"], {
    L: "#forge:gems/lapis",
    G: "#forge:ingots/gold",
    A: "mekanism:alloy_atomic",
    S: "kubejs:ender_singularity",
  });

  event.shaped("1x mekanism:steel_casing", ["SGS", "GAG", "SGS"], {
    S: "#forge:ingots/steel",
    G: "#forge:glass",
    A: "thermal:upgrade_augment_3",
  });

  event.shaped("1x mekanism:metallurgic_infuser", ["LBR", "LCR", "LLR"], {
    C: "mekanism:steel_casing",
    R: "minecraft:iron_bars",
    B: "minecraft:blast_furnace",
    L: "#forge:sheetmetals/lead",
  });

  event.shaped("mekanism:digital_miner", ["ACA", "LSL", "TOT"], {
    A: "mekanism:alloy_atomic",
    C: "mekanism:basic_control_circuit",
    L: "mekanism:logistical_sorter",
    S: "scannable:scanner",
    T: "mekanism:teleportation_core",
    O: "mekanism:steel_casing",
  });

  [("helmet", "chestplate", "leggings", "boots")].forEach((armor) => {
    event.remove({ id: `mekanismtools:lapis_lazuli/armor/${armor}` });
    event.remove({ id: `mekanismtools:osmium/armor/${armor}` });
  });

  ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
    event.remove({ id: `mekanismtools:lapis_lazuli/tools/${tool}` });
    event.remove({ id: `mekanismtools:osmium/tools/${tool}` });
  });
});
