onEvent('recipes', event => {
  event.remove({output: 'thermal:rf_coil'});
  event.remove({output: 'thermal:machine_frame'});
  event.remove({output: 'thermal:latex_bucket'});
  event.remove({output: 'thermal:rubber'});
  event.remove({output: 'thermal:redstone_servo'});
  event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_jungle'});
  event.remove({id: 'thermal:machine/press/press_vine_to_latex'});
  event.remove({id: 'thermal:machine/press/press_dandelion_to_latex'});
  event.remove({id: 'thermal:machine/chiller/chiller_ender_to_ender_pearl'});

  event.shaped('1x thermal:rf_coil', [' RG', 'RSR', 'GR '], {
    R: 'immersiveengineering:wirecoil_redstone',
    S: '#forge:ingots/steel',
    G: '#forge:nuggets/gold',
  });

  event.shaped('1x thermal:machine_frame', ['SGS', 'GTG', 'SGS'], {
    G: 'mekanism:structural_glass',
    S: '#forge:ingots/steel',
    T: '#forge:gears/tin',
  });

  event.replaceInput({output: 'thermal:saw_blade'}, 'minecraft:iron_ingot', '#forge:ingots/steel');
  event.replaceInput({output: 'thermal:drill_head'}, 'minecraft:iron_ingot', '#forge:ingots/steel');

  event.custom({
    type: 'thermal:tree_extractor',
    trunk: 'minecraft:jungle_log',
    leaves: 'minecraft:jungle_leaves',
    result: {
      fluid: 'industrialforegoing:latex',
      amount: 25,
    },
  });

  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      {
        fluid: 'industrialforegoing:latex',
        amount: 100,
      },
    ],
    result: [{item: 'thermal:rubber'}],
    energy: 2000,
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {
      tag: 'forge:plates/steel',
    },
    // item: 'kubejs:incomplete_redstone_servo',
    transitionalItem: {item: 'minecraft:redstone'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
          {item: 'minecraft:piston'},
        ],
        results: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
        ],
      },
      {
        type: 'create:deploying',
        ingredients: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [
          // item: 'kubejs:incomplete_redstone_servo',
          {item: 'minecraft:redstone'},
        ],
      },
    ],
    results: [
      {
        item: 'thermal:redstone_servo',
        chance: 300.0,
        count: 2,
      },
      {
        item: 'emendatusenigmatica:steel_ingot',
        chance: 8.0,
      },
      {
        item: 'immersiveengineering:wirecoil_redstone',
        chance: 80.0,
      },
      {
        item: 'minecraft:piston',
      },
    ],
    loops: 2,
  });
});
