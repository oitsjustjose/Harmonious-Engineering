// priority: 0

onEvent('item.registry', event => {
  event.create('crude_hammer').texture('kubejs:item/incomplete_hammer').maxStackSize(1);
  event
    .create('incomplete_hammer', 'create:sequenced_assembly')
    .texture('kubejs:item/incomplete_hammer')
    .maxStackSize(1);

  event
    .create('incomplete_redstone_servo', 'create:sequenced_assembly')
    .texture('kubejs:item/incomplete_redstone_servo');

  event
    .create('incomplete_rf_coil', 'create:sequenced_assembly')
    .texture('kubejs:item/incomplete_rf_coil');

  event.create('calorite_dust').texture('kubejs:item/calorite_dust');
  event.create('desh_dust').texture('kubejs:item/desh_dust');
  event.create('ostrum_dust').texture('kubejs:item/ostrum_dust');
});

onEvent('item.modification', event => {
  const minecarts = [
    'immersiveengineering:minecart_metalbarrel',
    'immersiveengineering:minecart_reinforcedcrate',
    'immersiveengineering:minecart_woodenbarrel',
    'immersiveengineering:minecart_woodencrate',
    'minecraft:chest_minecart',
    'minecraft:furnace_minecart',
    'minecraft:hopper_minecart',
    'minecraft:minecart',
    'minecraft:tnt_minecart',
    'moreminecarts:battery_cart',
    'moreminecarts:flag_cart',
    'moreminecarts:minecart_with_chunk_loader',
    'moreminecarts:minecart_with_net',
    'moreminecarts:pearl_stasis_minecart',
    'moreminecarts:tank_cart',
    'supplementaries:dispenser_minecart',
  ];

  minecarts.forEach(cart => {
    event.modify(cart, item => item.setMaxStackSize(16));
  });
});
