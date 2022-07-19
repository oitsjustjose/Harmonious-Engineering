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

  event.add('forge:tools/knives', 'tools_complement:iron_knife');
  event.add('forge:tools/knives', 'tools_complement:gold_knife');
  event.add('forge:tools/knives', 'tools_complement:diamond_knife');
  event.add('forge:tools/knives', 'tools_complement:netherite_knife');
  event.add('forge:tools/knives', 'tools_complement:copper_knife');
  event.add('forge:tools/knives', 'tools_complement:tin_knife');
  event.add('forge:tools/knives', 'tools_complement:lead_knife');
  event.add('forge:tools/knives', 'tools_complement:silver_knife');
  event.add('forge:tools/knives', 'tools_complement:nickel_knife');
  event.add('forge:tools/knives', 'tools_complement:bronze_knife');
  event.add('forge:tools/knives', 'tools_complement:electrum_knife');
  event.add('forge:tools/knives', 'tools_complement:invar_knife');
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

onEvent('item.tags', event => {
  unifyMaterials(event);
  clearTags(event);
  event.add('thermal:crafting/dies', global.ie('mold_wire'));
  event.add('thermal:crafting/dies', global.ie('mold_bullet_casing'));
  event.removeAllTagsFrom('minecraft:chest');
});

onEvent('fluid.tags', event => {
  event.remove('forge:latex', 'thermal:latex');
});
