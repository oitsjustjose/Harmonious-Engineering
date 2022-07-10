// Gate IE behind Create Contraptions

onEvent('recipes', event => {
  // Uncraft preheaters
  event.shapeless(global.ie('furnace_heater'), [global.ie('blastfurnace_preheater')]);

  // Make electron tubes tolerable
  event.remove({id: 'immersiveengineering:blueprint/graphite_electrode'});
  event.remove({id: 'immersiveengineering:metalpress/electrode'});
  event.recipes.immersiveengineeringMetalPress(
    Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
    `4x #forge:ingots/hop_graphite`,
    global.ie('mold_rod')
  );

  event.remove({output: global.ie('hammer')});
  event.shaped('kubejs:crude_hammer', [' A ', 'ASA', 'SA '], {
    A: 'create:andesite_alloy',
    S: 'minecraft:stick',
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {item: 'kubejs:crude_hammer'},
    transitionalItem: {item: 'kubejs:incomplete_hammer'},
    sequence: [
      {
        type: 'create:pressing',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
      {
        type: 'create:pressing',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
      {
        type: 'create:cutting',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
    ],
    results: [{item: global.ie('hammer')}],
    loops: 2,
  });

  event.remove({id: 'immersiveengineering:crafting/redstone_acid'});
  event.custom({
    type: 'pneumaticcraft:thermo_plant',
    item_input: {tag: 'forge:dusts/redstone'},
    fluid_input: {
      type: 'pneumaticcraft:fluid',
      tag: 'pneumaticcraft:etching_acid',
      amount: 1000,
    },
    fluid_output: {
      fluid: 'immersiveengineering:redstone_acid',
      amount: 1000,
    },
    temperature: {min_temp: 373},
    exothermic: false,
  });

  event.remove({id: 'immersiveengineering:mixer/redstone_acid'});
  event.custom({
    type: 'immersiveengineering:mixer',
    inputs: [{tag: 'forge:dusts/redstone'}],
    result: {fluid: 'immersiveengineering:redstone_acid', amount: 250},
    fluid: {tag: 'pneumaticcraft:etching_acid', amount: 250},
    energy: 1600,
  });

  event.remove({output: global.ie('sawblade')});
  event.shaped(global.ie('sawblade'), ['PIP', 'I I', 'PIP'], {
    P: '#forge:plates/iron',
    I: '#forge:ingots/compressed_iron',
  });

  event.replaceInput(
    {output: global.ie('drillhead_iron')},
    'minecraft:iron_block',
    '#forge:storage_blocks/compressed_iron'
  );

  event.remove({id: '/immersiveengineering:arcfurnace/ore_*/'});
  event.remove({id: '/immersiveengineering:arcfurnace/raw_ore_*/'});
  event.remove({id: 'immersiveengineering:arcfurnace/dust_uranium'});
  event.remove({id: 'immersiveengineering:alloysmelter/invar'});
  event.remove({id: 'immersiveengineering:alloysmelter/electrum'});

  event.replaceInput(
    {output: 'createaddition:heater'},
    '#forge:ingots/brass',
    '#forge:ingots/steel'
  );

  event.remove({output: global.ie('windmill')});
  event.remove({output: global.ie('watermill')});
  event.remove({output: global.ie('waterwheel_segment')});
});
