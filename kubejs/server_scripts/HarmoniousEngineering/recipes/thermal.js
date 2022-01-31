onEvent('recipes', event => {
  event.remove({output: 'thermal:rf_coil'});
  event.remove({output: 'thermal:machine_frame'});
  event.remove({output: 'thermal:saw_blade'});
  event.remove({output: 'thermal:latex_bucket'});
  event.remove({output: 'thermal:rubber'});
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

  event.shaped('1x thermal:saw_blade', ['SS ', 'SCS', ' SS'], {
    S: '#forge:ingots/steel',
    C: '#forge:ingots/copper',
  });

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
});
