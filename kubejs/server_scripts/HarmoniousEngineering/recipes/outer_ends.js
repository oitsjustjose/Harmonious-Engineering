onEvent('recipes', event => {
  const az = {
    log: 'outer_end:azure_stem',
    strippedLog: 'outer_end:azure_stripped_stem',
    wood: 'outer_end:azure_pith',
    strippedWood: 'outer_end:azure_stripped_pith',
    plank: 'outer_end:azure_planks',
  };

  event.remove({output: az.plank});

  global.genNatProgRecipes(az.log, az.strippedLog, az.plank).forEach(x => event.custom(x));
  global.genNatProgRecipes(az.wood, az.strippedWood, az.plank).forEach(x => event.custom(x));
});
