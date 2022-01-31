onEvent('recipes', event => {
  event.remove({id: 'redstone_arsenal:materials/flux_gem'});
  event.remove({id: 'redstone_arsenal:materials/flux_dust'});
  event.remove({id: 'redstone_arsenal:materials/flux_gear'});
  event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'});
  event.remove({id: 'redstone_arsenal:materials/obsidian_rod'});
  event.remove({id: 'redstone_arsenal:flux_elytra'});

  event.shaped('redstone_arsenal:flux_elytra', ['PRP', 'IEI', 'P P'], {
    R: 'redstone_arsenal:flux_obsidian_rod',
    P: 'redstone_arsenal:flux_plating',
    I: 'redstone_arsenal:flux_ingot',
    E: '#forge:elytra',
  });

  [
    {input: {tag: 'forge:ingots/electrum'}, output: 'redstone_arsenal:flux_ingot'},
    {input: {tag: 'forge:dusts/electrum'}, output: 'redstone_arsenal:flux_dust'},
    {input: {item: 'minecraft:diamond'}, output: 'redstone_arsenal:flux_gem'},
  ].forEach(x =>
    event.custom({
      type: 'thermal:bottler',
      ingredient: [x.input, {fluid: 'thermal:redstone', amount: 1000}],
      result: [{item: x.output}],
    })
  );

  // Obsidian Rod using Rod Mold
  event.custom({
    type: 'immersiveengineering:metal_press',
    mold: {item: 'immersiveengineering:mold_rod'},
    input: {base_ingredient: {tag: 'forge:obsidian'}},
    result: {item: 'redstone_arsenal:obsidian_rod'},
    energy: 9600,
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:obsidian'}, {item: 'immersiveengineering:mold_rod'}],
    result: [{item: 'redstone_arsenal:obsidian_rod'}],
  });

  // Manual Gear Crafting
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {item: 'create:cogwheel'},
      {item: 'immersiveengineering:hammer'},
      {item: 'redstone_arsenal:flux_plating'},
      {item: 'redstone_arsenal:flux_plating'},
      {item: 'redstone_arsenal:flux_plating'},
      {item: 'redstone_arsenal:flux_plating'},
    ],
    result: {item: 'redstone_arsenal:flux_gear'},
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [
      {item: 'redstone_arsenal:flux_ingot', count: 4},
      {item: 'thermal:press_gear_die'},
    ],
    result: [{item: 'redstone_arsenal:flux_gear'}],
  });

  // IE Metal Press
  event.custom({
    type: 'immersiveengineering:metal_press',
    mold: {item: 'immersiveengineering:mold_gear'},
    input: {base_ingredient: {item: 'redstone_arsenal:flux_ingot'}, count: 4},
    result: {item: 'redstone_arsenal:flux_gear'},
    energy: 4800,
  });
});
