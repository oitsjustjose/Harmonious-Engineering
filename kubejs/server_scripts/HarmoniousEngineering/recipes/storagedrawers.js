onEvent("recipes", (event) => {
  event.remove({ output: "storagedrawers:controller" });
  global.genCombinedRecipe(event, "storagedrawers:controller_slave", "mekanism:ultimate_control_circuit", "storagedrawers:controller");
});
