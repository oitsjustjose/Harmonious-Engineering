const redstoneServoRecipes = event => {
  // Hard recipe for these
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:plates/steel'},
    transitionalItem: {item: 'kubejs:incomplete_redstone_servo'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_redstone_servo'}, {item: 'minecraft:piston'}],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_redstone_servo'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_redstone_servo'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
    ],
    results: [
      {item: 'thermal:redstone_servo', chance: 300.0},
      {item: 'emendatusenigmatica:steel_ingot', chance: 8.0},
      {item: 'immersiveengineering:wirecoil_redstone', chance: 80.0},
      {item: 'minecraft:piston'},
    ],
    loops: 2,
  });

  // Easier recipe
  event.custom({
    type: 'thermal:press',
    ingredients: [
      {tag: 'forge:plates/steel'},
      {item: 'immersiveengineering:wirecoil_redstone', count: 4},
    ],
    result: [{item: 'kubejs:incomplete_redstone_servo'}],
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:incomplete_redstone_servo'}, {item: 'minecraft:piston', count: 2}],
    result: [{item: 'thermal:redstone_servo'}],
  });
};

const rfCoilRecipes = event => {
  // Hard recipe for these
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:rods/gold'},
    transitionalItem: {item: 'kubejs:incomplete_rf_coil'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_rf_coil'}, {tag: 'forge:plates/gold'}],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_rf_coil'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_rf_coil'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
    ],
    results: [
      {item: 'thermal:rf_coil', chance: 300.0},
      {tag: 'forge:ingots/gold', chance: 2.0},
      {item: 'immersiveengineering:wirecoil_redstone', chance: 40.0},
      {tag: 'forge:plates/gold'},
    ],
    loops: 2,
  });

  // Easier recipe
  event.custom({
    type: 'thermal:press',
    ingredients: [
      {tag: 'forge:rods/gold'},
      {item: 'immersiveengineering:wirecoil_redstone', count: 4},
    ],
    result: [{item: 'kubejs:incomplete_rf_coil'}],
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:incomplete_rf_coil'}, {tag: 'forge:plates/gold'}],
    result: [{item: 'thermal:rf_coil'}],
  });
};

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

  rfCoilRecipes(event);
  redstoneServoRecipes(event);

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

  // An alternative later game choice for creating a Mekanism Steel Casing
  event.custom({
    type: 'mekanism:combining',
    mainInput: {ingredient: {item: 'mekanism:advanced_control_circuit'}},
    extraInput: {ingredient: {tag: 'forge:gears/invar'}},
    output: {item: 'thermal:upgrade_augment_1'},
  });

  event.custom({
    type: 'mekanism:combining',
    mainInput: {ingredient: {item: 'thermal:upgrade_augment_1'}},
    extraInput: {ingredient: {tag: 'forge:gears/electrum'}},
    output: {item: 'thermal:upgrade_augment_2'},
  });

  event.custom({
    type: 'mekanism:combining',
    mainInput: {ingredient: {item: 'thermal:upgrade_augment_2'}},
    extraInput: {ingredient: {tag: 'forge:gears/enderium'}},
    output: {item: 'thermal:upgrade_augment_3'},
  });
});
