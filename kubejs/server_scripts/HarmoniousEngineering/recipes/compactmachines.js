onEvent("recipes", (event) => {
  event.remove({ output: "compactmachines:wall" });
  event.remove({ output: "compactmachines:machine_tiny" });
  event.remove({ output: "compactmachines:machine_small" });
  event.remove({ output: "compactmachines:machine_normal" });
  event.remove({ output: "compactmachines:machine_large" });
  event.remove({ output: "compactmachines:machine_giant" });
  event.remove({ output: "compactmachines:machine_maximum" });

  global.genCombinedRecipe(event, "minecraft:iron_block", "minecraft:redstone", "compactmachines:wall");
  global.genCombinedRecipe(event, "immersiveengineering:heavy_engineering", "immersiveengineering:circuit_board", "compactmachines:machine_tiny");
  global.genCombinedRecipe(event, "compactmachines:machine_tiny", "immersiveengineering:maintenance_kit", "compactmachines:machine_small");
  global.genCombinedRecipe(event, "compactmachines:machine_small", "immersivepetroleum:projector", "compactmachines:machine_normal");
  global.genCombinedRecipe(event, "compactmachines:machine_normal", "entangled:block", "compactmachines:machine_large");
});
