onEvent("recipes", (event) => {
  event.remove({ output: "enderstorage:ender_chest" });
  event.remove({ output: "enderstorage:ender_tank" });
  event.remove({ output: "enderstorage:ender_pouch" });

  global.genCombinedRecipe(event, "minecraft:ender_chest", "#forge:storage_blocks/enderium", "enderstorage:ender_chest");
  global.genCombinedRecipe(event, "#harmeng:basic_tank", "#forge:storage_blocks/enderium", "enderstorage:ender_tank");
  global.genCombinedRecipe(event, "improvedbackpacks:large_pocket", "#forge:storage_blocks/enderium", "enderstorage:ender_pouch");
});
