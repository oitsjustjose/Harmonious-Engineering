onEvent('recipes', event => {
  event.remove({mod: 'demagnetize'});

  global.genSmithingRecipe(
    event,
    Ingredient.of('thermal:machine_frame'),
    Ingredient.of('thermal:flux_magnet'),
    Item.of('demagnetize:demagnetizer')
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of('demagnetize:demagnetizer'),
    Ingredient.of('modularrouters:range_up_augment'),
    Item.of('demagnetize:demagnetizer_advanced')
  );
});
