onEvent('recipes', event => {
  event.remove({output: 'compactmachines:wall'});
  event.remove({output: 'compactmachines:machine_tiny'});
  event.remove({output: 'compactmachines:machine_small'});
  event.remove({output: 'compactmachines:machine_normal'});
  event.remove({output: 'compactmachines:machine_large'});
  event.remove({output: 'compactmachines:machine_giant'});
  event.remove({output: 'compactmachines:machine_maximum'});
  event.remove({output: 'compactmachines:personal_shrinking_device'});

  const spatialCells = {
    two: 'appliedenergistics2:2_cubed_spatial_cell_component',
    sixteen: 'appliedenergistics2:16_cubed_spatial_cell_component',
    onetwentyeight: 'appliedenergistics2:128_cubed_spatial_cell_component',
  };

  global.genSmithingRecipe(
    event,
    Ingredient.of('immersiveengineering:sheetmetal_lead'),
    Ingredient.of('minecraft:ender_pearl'),
    Item.of('8x compactmachines:wall')
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of(spatialCells.two),
    Ingredient.of('rftoolsbase:information_screen'),
    Item.of('compactmachines:personal_shrinking_device')
  );

  global.genLargeRecipe(
    event,
    ['WWW', 'WGW', 'WWW'],
    {
      W: 'compactmachines:wall',
      G: spatialCells.two,
    },
    Item.of('compactmachines:machine_normal')
  );

  global.genLargeRecipe(
    event,
    ['WWWWW', 'WOOOW', 'WOPOW', 'WOOOW', 'WWWWW'],
    {
      W: 'compactmachines:wall',
      P: spatialCells.sixteen,
      O: '#forge:obsidian',
    },
    Item.of('compactmachines:machine_large')
  );

  global.genLargeRecipe(
    event,
    ['WWWWWWW', 'WBBBBBW', 'WBDEDBW', 'WBESEBW', 'WBDEDBW', 'WBBBBBW', 'WWWWWWW'],
    {
      W: 'compactmachines:wall',
      S: spatialCells.onetwentyeight,
      B: '#forge:gems/biotite',
      D: '#forge:gems/diamond',
      E: '#forge:gems/emerald',
    },
    Item.of('compactmachines:machine_giant')
  );
});
