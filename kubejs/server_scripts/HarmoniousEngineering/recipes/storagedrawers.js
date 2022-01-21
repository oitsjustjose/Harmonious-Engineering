onEvent("recipes", (event) => {
  event.remove({ output: "storagedrawers:controller" });
  global.genCombinedRecipe(event, Ingredient.of("storagedrawers:controller_slave"), Ingredient.of("mekanism:ultimate_control_circuit"), Item.of("storagedrawers:controller"));
});
