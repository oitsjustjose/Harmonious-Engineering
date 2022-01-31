onEvent('recipes', event => {
  event.remove({output: 'compactmachines:wall'});
  event.remove({output: 'compactmachines:machine_tiny'});
  event.remove({output: 'compactmachines:machine_small'});
  event.remove({output: 'compactmachines:machine_normal'});
  event.remove({output: 'compactmachines:machine_large'});
  event.remove({output: 'compactmachines:machine_giant'});
  event.remove({output: 'compactmachines:machine_maximum'});

  global.genCombinedRecipe(
    event,
    Ingredient.of('minecraft:iron_block'),
    Ingredient.of('minecraft:redstone'),
    Item.of('16x compactmachines:wall')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('immersiveengineering:heavy_engineering'),
    Ingredient.of('immersiveengineering:circuit_board'),
    Item.of('compactmachines:machine_tiny')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('compactmachines:machine_tiny'),
    Ingredient.of('immersiveengineering:maintenance_kit'),
    Item.of('compactmachines:machine_small')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('compactmachines:machine_small'),
    Ingredient.of('immersivepetroleum:projector'),
    Item.of('compactmachines:machine_normal')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('compactmachines:machine_normal'),
    Ingredient.of('entangled:block'),
    Item.of('compactmachines:machine_large')
  );
});
