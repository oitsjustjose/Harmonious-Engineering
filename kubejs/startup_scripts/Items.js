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
