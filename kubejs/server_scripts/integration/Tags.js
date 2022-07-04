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

const clearTags = event => {
  [
    'createaddition:brass_rod',
    'createaddition:copper_rod',
    'createaddition:copper_spool',
    'createaddition:copper_wire',
    'createaddition:diamond_grit',
    'createaddition:gold_rod',
    'createaddition:gold_spool',
    'createaddition:gold_wire',
    'createaddition:iron_rod',
    'createaddition:iron_wire',
    'createaddition:zinc_sheet',
  ].forEach(x => event.removeAllTagsFrom(x));
};

const mapAtlasesTags = event => {
  [
    'naturalist:glow_goop',
    'pneumaticcraft:glycerol',
    'thermal:tar',
    '#forge:slimeballs',
    'ecologics:surface_moss',
  ].forEach(x => event.add('map_atlases:sticky_crafting_items', x));
};

onEvent('item.tags', event => {
  mapAtlasesTags(event);
  unifyMaterials(event);
  clearTags(event);
  event.add('thermal:crafting/dies', global.ie('mold_wire'));
  event.add('thermal:crafting/dies', global.ie('mold_bullet_casing'));
});
