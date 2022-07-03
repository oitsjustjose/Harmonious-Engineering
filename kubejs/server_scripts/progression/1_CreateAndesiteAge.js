// Gate Early-game Create Behind PnC
onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_stone'});
  CustomRecipeHandler.pressurizing(
    [{type: 'pneumaticcraft:stacked_item', item: 'minecraft:stone', count: 1}],
    [{item: 'pneumaticcraft:compressed_stone'}],
    1.0
  );

  event.remove({output: 'create:andesite_alloy'});
  CustomRecipeHandler.pressurizing(
    [
      {type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:ingot_iron_compressed', count: 1},
      {type: 'pneumaticcraft:stacked_item', item: 'minecraft:andesite', count: 2},
    ],
    [{item: 'create:andesite_alloy', count: 3}],
    2.0
  );

  event.remove({output: 'create:mechanical_drill'});
  event.remove({output: 'create:mechanical_saw'});

  // Disable rolling
  event.remove({id: '/createaddition:rolling/*/'});

  event.remove({output: 'createaddition:accumulator'});
  event.remove({output: 'createaddition:brass_rod'});
  event.remove({output: 'createaddition:capacitor'});
  event.remove({output: 'createaddition:connector'});
  event.remove({output: 'createaddition:copper_rod'});
  event.remove({output: 'createaddition:copper_spool'});
  event.remove({output: 'createaddition:copper_wire'});
  event.remove({output: 'createaddition:diamond_grit'});
  event.remove({output: 'createaddition:gold_rod'});
  event.remove({output: 'createaddition:gold_spool'});
  event.remove({output: 'createaddition:gold_wire'});
  event.remove({output: 'createaddition:iron_rod'});
  event.remove({output: 'createaddition:iron_wire'});
  event.remove({output: 'createaddition:redstone_relay'});
  event.remove({output: 'createaddition:rolling_mill'});
  event.remove({output: 'createaddition:spool'});
  event.remove({output: 'createaddition:tesla_coil'});
  event.remove({output: 'createaddition:zinc_sheet'});

  event.replaceInput({}, 'createaddition:copper_spool', global.ie('wirecoil_copper'));
  event.replaceInput({}, 'createaddition:gold_spool', global.ie('wirecoil_electrum'));
  event.replaceInput({}, 'createaddition:capacitor', 'pneumaticcraft:capacitor');

  event.remove({output: 'createaddition:alternator'});
  event.shaped('createaddition:alternator', ['WSA', 'CDH', 'WST'], {
    A: 'pneumaticcraft:capacitor',
    C: global.ie('connector_lv'),
    D: global.ie('dynamo'),
    H: 'create:shaft',
    S: '#forge:ingots/steel',
    T: 'pneumaticcraft:transistor',
    W: global.ie('wirecoil_copper'),
  });

  event.remove({output: 'createaddition:electric_motor'});
  event.shaped('createaddition:electric_motor', ['PBW', 'HDC', 'PBW'], {
    B: '#forge:ingots/brass',
    D: global.ie('dynamo'),
    C: global.ie('connector_lv'),
    W: global.ie('wirecoil_copper'),
    P: 'pneumaticcraft:printed_circuit_board',
    H: 'create:shaft',
  });

  event.smithing('create:mechanical_saw', 'create:andesite_casing', global.ie('sawblade'));
  event.smithing('create:mechanical_drill', 'create:andesite_casing', global.ie('drillhead_steel'));
});
