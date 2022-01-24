onEvent("recipes", (event) => {
  event.remove({ output: "betterendforge:end_stone_smelter" });
  event.remove({ output: "betterendforge:thallasium_ingot" });
  event.remove({ output: "betterendforge:terminite_ingot" });
  event.remove({ output: "betterendforge:aeternium_ingot" });

  event.smelting("betterendforge:thallasium_ingot", "betterendforge:thallasium_ore");
  global.genAlloyingRecipe(event, { tag: "forge:ingots/iron" }, { tag: "forge:dusts/ender_pearl" }, `betterendforge:terminite_ingot`, 1);
  global.genAlloyingRecipe(event, { item: "betterendforge:terminite_ingot" }, { tag: "forge:ingots/netherite" }, `betterendforge:aeternium_ingot`, 1);
});
