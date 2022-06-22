// priority: 512
const unifyMaterials = event => {
  global.duplicateResources.forEach(x => {
    const tag = x.tag;
    const item = x.item;
    const rootTag = tag.indexOf('/') >= 0 ? tag.split('/')[0] : tag;
    event.remove(tag, item);
    event.remove(rootTag, item);
  });

  event.add('forge:dusts/zinc', 'create:crushed_zinc_ore');
  event.add('forge:plastic', 'pneumaticcraft:plastic');

  event.add('forge:hides', 'minecraft:leather');
  event.add('forge:hides', 'minecraft:rabbit_hide');
};

onEvent('item.tags', event => {
  unifyMaterials(event);

  event.add('thermal:crafting/dies', global.ie('mold_wire'));
  event.add('thermal:crafting/dies', global.ie('mold_bullet_casing'));
});
