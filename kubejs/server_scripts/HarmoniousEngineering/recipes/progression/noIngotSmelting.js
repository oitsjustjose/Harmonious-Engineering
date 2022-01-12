onEvent("recipes", (event) => {
  event.remove({
    output: "emendatusenigmatica:enigmatic_fortunizer",
  });

  // Removes all enigmatic hammer recipes even though the hammer itself can't be crafted
  event.remove({
    output: "#forge:plates",
    type: "minecraft:crafting_shapeless",
  });

  event.remove({
    output: "#forge:dusts",
    type: "minecraft:crafting_shapeless",
  });

  // Removes all smelting recipes with input <ore> and output <ingot>
  event.remove({
    input: "#forge:ores",
    output: "#forge:ingots",
    type: "minecraft:smelting",
  });

  // Removes all blasting recipes with input <ore> and output <ingot>
  event.remove({
    input: "#forge:ores",
    output: "#forge:ingots",
    type: "minecraft:blasting",
  });
});
