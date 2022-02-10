// priority: 0

onEvent('item.registry', event => {
  event.create('cloth_covered_windmill_blade').texture('kubejs:item/cloth_covered_windmill_blade');
  event.create('ender_singularity').texture('kubejs:item/ender_singularity');
  event.create('crude_andesite_alloy').texture('kubejs:item/crude_andesite_alloy');
  event
    .create('incomplete_redstone_servo')
    .texture('kubejs:item/incomplete_redstone_servo')
    .type('create:sequenced_assembly');
});

onEvent('item.modification', event => {
  event.modify('corail_woodcutter:acacia_woodcutter', item => {
    item.maxStackSize = 1;
  });
});
