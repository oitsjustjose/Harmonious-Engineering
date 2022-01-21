onEvent("recipes", (event) => {
  event.remove({ output: "entangled:block" });
  global.genCombinedRecipe(event, "thermal:machine_frame", "kubejs:ender_singularity", "entangled:block");
});
