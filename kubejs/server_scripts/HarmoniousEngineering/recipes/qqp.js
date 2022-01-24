onEvent("recipes", (event) => {
  event.remove({ mod: "quantumquarryplus" });

  global.genLargeRecipe(
    event,
    ["GGGGGGG", "DDDDDDD", "DDDDDDD", "SSSESSS", "SSSSSSS", "SSSSSSS", "SSSSSSS"],
    {
      G: { item: "minecraft:grass_block" },
      D: { item: "minecraft:dirt" },
      S: { item: "minecraft:stone" },
      E: { item: "kubejs:ender_singularity" },
    },
    {
      item: "quantumquarryplus:earth_orb",
    }
  );

  global.genLargeRecipe(
    event,
    ["EEWWWWWEE", "EKK   KKE", "WK NCN KW", "W NSSSN W", "W CSISC W", "W NSSSN W", "WK NCN KW", "EKK   KKE", "EEWWWWWEE"],
    {
      E: { tag: "forge:storage_blocks/enderium" },
      S: { item: "kubejs:ender_singularity" },
      W: { item: "wormhole:portal_frame" },
      C: { item: "chickenchunks:spot_loader" },
      K: { item: "moreminecarts:chunkrodite" },
      I: { item: "mekanism:digital_miner" },
      N: { item: "minecraft:nether_star" },
    },
    {
      item: "quantumquarryplus:quantum_quarry_plus",
    }
  );

  global.genCombinedRecipe(event, Ingredient.of("thermal:item_filter_augment"), Ingredient.of("kubejs:ender_singularity"), Item.of("quantumquarryplus:filter_upgrade"));
  global.genCombinedRecipe(event, Ingredient.of("thermal:fluid_tank_augment"), Ingredient.of("rangedpumps:pump"), Item.of("quantumquarryplus:pump_upgrade"));
});
