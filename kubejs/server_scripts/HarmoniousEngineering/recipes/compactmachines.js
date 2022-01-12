onEvent("recipes", (event) => {
  event.remove({ output: "compactmachines:wall" });
  event.remove({ output: "compactmachines:machine_tiny" });
  event.remove({ output: "compactmachines:machine_small" });
  event.remove({ output: "compactmachines:machine_normal" });
  event.remove({ output: "compactmachines:machine_large" });
  event.remove({ output: "compactmachines:machine_giant" });
  event.remove({ output: "compactmachines:machine_maximum" });

  event.smithing(
    "compactmachines:wall",
    "minecraft:iron_block",
    "minecraft:redstone"
  );
  event.smithing(
    "compactmachines:machine_tiny",
    "immersiveengineering:heavy_engineering",
    "immersiveengineering:circuit_board"
  );
  event.smithing(
    "compactmachines:machine_small",
    "compactmachines:machine_tiny",
    "immersiveengineering:maintenance_kit"
  );
  event.smithing(
    "compactmachines:machine_normal",
    "compactmachines:machine_small",
    "immersivepetroleum:projector"
  );
  event.smithing(
    "compactmachines:machine_large",
    "compactmachines:machine_normal",
    "entangled:block"
  );
});
