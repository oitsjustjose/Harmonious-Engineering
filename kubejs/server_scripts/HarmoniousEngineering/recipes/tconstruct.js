onEvent('recipes', event => {
  event.remove({output: 'tconstruct:smeltery_controller'});
  event.remove({output: 'tconstruct:seared_heater'});
  event.remove({output: 'tconstruct:seared_melter'});

  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {
        item: 'immersiveengineering:hammer',
      },
      {
        tag: 'harmeng:diamond_tier_saws',
      },
      {
        item: 'tconstruct:seared_bricks',
      },
      {
        item: 'tconstruct:seared_bricks',
      },
      {
        tag: 'forge:plates/copper',
      },
    ],
    result: {
      item: 'tconstruct:smeltery_controller',
      count: 1,
    },
  });

  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {
        item: 'immersiveengineering:hammer',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
    ],
    result: {
      item: 'tconstruct:seared_heater',
      count: 1,
    },
  });

  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {
        tag: 'tconstruct:tanks',
      },
      {
        item: 'immersiveengineering:hammer',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
      {
        item: 'tconstruct:seared_brick',
      },
    ],
    result: {
      item: 'tconstruct:seared_melter',
      count: 1,
    },
  });

  const tconWoods = [
    {
      log: 'tconstruct:greenheart_log',
      strippedLog: 'tconstruct:stripped_greenheart_log',
      wood: 'tconstruct:greenheart_wood',
      strippedWood: 'tconstruct:stripped_greenheart_wood',
      plank: 'tconstruct:greenheart_planks',
    },
    {
      log: 'tconstruct:skyroot_log',
      strippedLog: 'tconstruct:stripped_skyroot_log',
      wood: 'tconstruct:skyroot_wood',
      strippedWood: 'tconstruct:stripped_skyroot_wood',
      plank: 'tconstruct:skyroot_planks',
    },
    {
      log: 'tconstruct:bloodshroom_log',
      strippedLog: 'tconstruct:stripped_bloodshroom_log',
      wood: 'tconstruct:bloodshroom_wood',
      strippedWood: 'tconstruct:stripped_bloodshroom_wood',
      plank: 'tconstruct:bloodshroom_planks',
    },
  ];

  tconWoods.forEach(woodType => {
    event.remove({output: woodType.plank});
    global
      .genNatProgRecipes(woodType.log, woodType.strippedLog, woodType.plank)
      .forEach(x => event.custom(x));
    global
      .genNatProgRecipes(woodType.wood, woodType.strippedWood, woodType.plank)
      .forEach(x => event.custom(x));
  });
});
