onEvent('recipes', event => {
  event.remove({output: 'enderstorage:ender_chest'});
  event.remove({output: 'enderstorage:ender_tank'});
  event.remove({output: 'enderstorage:ender_pouch'});

  global.genCombinedRecipe(
    event,
    Ingredient.of('minecraft:ender_chest'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('enderstorage:ender_chest')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('#harmeng:basic_tank'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('enderstorage:ender_tank')
  );
  global.genCombinedRecipeSewing(
    event,
    Ingredient.of('improvedbackpacks:large_pocket'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('enderstorage:ender_pouch'),
    2
  );
});
