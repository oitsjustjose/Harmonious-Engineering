onEvent('entity.spawned', event => {
  const itemEntity = event.getEntity();
  if (!itemEntity || !itemEntity.getItem()) return;

  if (itemEntity.getItem().getId() === 'minecraft:chest') {
    itemEntity.setItem(Item.of('expandedstorage:wood_chest'));
  }
});
