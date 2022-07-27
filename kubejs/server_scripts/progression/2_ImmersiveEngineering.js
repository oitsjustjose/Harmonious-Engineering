// Gate IE behind Create Contraptions

onEvent('recipes', event => {
  // Uncraft preheaters
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {item: 'immersiveengineering:blastfurnace_preheater'},
    transitionalItem: {item: 'immersiveengineering:blastfurnace_preheater'},
    sequence: [
      {
        type: 'create:pressing',
        ingredients: [{item: 'immersiveengineering:blastfurnace_preheater'}],
        results: [{item: 'immersiveengineering:blastfurnace_preheater'}],
        processingTime: 50,
      },
      {
        type: 'create:cutting',
        ingredients: [{item: 'immersiveengineering:blastfurnace_preheater'}],
        results: [{item: 'immersiveengineering:blastfurnace_preheater'}],
        processingTime: 50,
      },
    ],
    results: [
      {item: 'immersiveengineering:furnace_heater', chance: 75},
      {item: 'immersiveengineering:sheetmetal_iron', chance: 20},
      {tag: 'forge:plates/iron', chance: 5},
    ],
    loops: 3,
  });

  // Make electron tubes tolerable
  event.remove({id: 'immersiveengineering:blueprint/graphite_electrode'});
  event.remove({id: 'immersiveengineering:metalpress/electrode'});
  event.recipes.immersiveengineeringMetalPress(
    Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
    `4x #forge:ingots/hop_graphite`,
    'immersiveengineering:mold_rod'
  );

  event.remove({output: 'immersiveengineering:hammer'});
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
    results: [{item: 'immersiveengineering:hammer'}],
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

  event.remove({output: 'immersiveengineering:sawblade'});
  event.shaped('immersiveengineering:sawblade', ['PIP', 'I I', 'PIP'], {
    P: '#forge:plates/iron',
    I: '#forge:ingots/compressed_iron',
  });

  event.replaceInput(
    {output: 'immersiveengineering:drillhead_iron'},
    'minecraft:iron_block',
    '#forge:storage_blocks/compressed_iron'
  );

  event.remove({id: '/immersiveengineering:arcfurnace/ore_*/'});
  event.remove({id: '/immersiveengineering:arcfurnace/raw_ore_*/'});
  event.remove({id: 'immersiveengineering:arcfurnace/dust_uranium'});
  event.remove({id: 'immersiveengineering:alloysmelter/invar'});
  event.remove({id: 'immersiveengineering:alloysmelter/electrum'});
  event.remove({output: 'immersiveengineering:windmill'});
  event.remove({output: 'immersiveengineering:windmill_sail'});
  event.remove({output: 'immersiveengineering:windmill_blade'});
  event.remove({output: 'immersiveengineering:watermill'});
  event.remove({output: 'immersiveengineering:waterwheel_segment'});

  /* Coke Dust Recipes for other machines */
  event.recipes.createCrushing('immersiveengineering:dust_coke', ['#forge:coal_coke']);
  event.recipes.createCrushing(`9x ${'immersiveengineering:dust_coke'}`, [
    '#forge:storage_blocks/coal_coke',
  ]);
  event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke');
  event.recipes.thermal.pulverizer(
    `9x ${'immersiveengineering:dust_coke'}`,
    '#forge:storage_blocks/coal_coke'
  );
});
