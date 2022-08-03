onEvent('recipes', event => {
  event.remove({mod: 'dimstorage'});

  // global.genSmithingRecipe(
  //   event,
  //   Ingredient.of('create:andesite_casing'),
  //   Ingredient.of('immersiveengineering:rockcutter'),
  //   Item.of('create:mechanical_saw')
  // );

  global.genSmithingRecipe(
    event,
    Item.of('thermal:machine_frame'),
    Item.of('#forge:ingots/enderium'),
    Item.of('dimstorage:dimensional_chest')
  );

  global.genSmithingRecipe(
    event,
    Item.of('thermal:fluid_cell_frame'),
    Item.of('#forge:ingots/enderium'),
    Item.of('dimstorage:dimensional_tank')
  );

  global.genSmithingRecipe(
    event,
    Item.of('mekanism:energy_tablet'),
    Item.of('#forge:ingots/enderium'),
    Item.of('dimstorage:dimensional_tablet')
  );
});
