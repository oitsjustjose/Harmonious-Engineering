onEvent('recipes', event => {
  event.remove({output: 'entangled:block'});
  global.genSmithingRecipe(
    event,
    Ingredient.of('thermal:machine_frame'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('entangled:block')
  );
});
