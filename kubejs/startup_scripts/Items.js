// priority: 0

onEvent('item.registry', event => {
  event.create('crude_hammer').texture('kubejs:item/incomplete_hammer').maxStackSize(1);
  event
    .create('incomplete_hammer')
    .texture('kubejs:item/incomplete_hammer')
    .type('create:sequenced_assembly')
    .maxStackSize(1);
});
