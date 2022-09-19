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
      {type: 'pneumaticcraft:stacked_item', item: 'create:zinc_ingot', count: 3},
      {type: 'pneumaticcraft:stacked_item', item: 'minecraft:andesite', count: 1},
    ],
    [{item: 'create:andesite_alloy', count: 4}],
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

  event.replaceInput({}, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper');
  event.replaceInput({}, 'createaddition:gold_spool', 'immersiveengineering:wirecoil_electrum');
  event.replaceInput({}, 'createaddition:capacitor', 'pneumaticcraft:capacitor');

  event.remove({output: 'createaddition:alternator'});
  event.shaped('createaddition:alternator', ['WSA', 'CDH', 'WST'], {
    A: 'pneumaticcraft:capacitor',
    C: 'immersiveengineering:connector_lv',
    D: 'immersiveengineering:dynamo',
    H: 'create:shaft',
    S: '#forge:ingots/steel',
    T: 'pneumaticcraft:transistor',
    W: 'immersiveengineering:wirecoil_copper',
  });

  event.remove({output: 'createaddition:electric_motor'});
  event.shaped('createaddition:electric_motor', ['PBW', 'HDC', 'PBW'], {
    B: '#forge:ingots/brass',
    D: 'immersiveengineering:dynamo',
    C: 'immersiveengineering:connector_lv',
    W: 'immersiveengineering:wirecoil_copper',
    P: 'pneumaticcraft:printed_circuit_board',
    H: 'create:shaft',
  });

  CustomRecipeHandler.automatableSmithing(
    Item.of('create:mechanical_saw'),
    Item.of('create:andesite_casing'),
    Item.of('immersiveengineering:sawblade')
  );
  CustomRecipeHandler.automatableSmithing(
    Item.of('create:mechanical_drill'),
    Item.of('create:andesite_casing'),
    Item.of('immersiveengineering:drillhead_steel')
  );
});
