// priority: 512

onEvent('item.tags', event => {
  const unifyMaterials = () => {
    global.duplicateItemResources.forEach(x => {
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

    event.add('forge:dusts/saltpeter', 'thermal:niter_dust');
  };

  const clearTags = () => {
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

  const oreItemTags = () => {
    global.ores.forEach(ore => {
      const allOtherOres = [ore.variants.stone].concat(ore.variants.others).filter(x => !!x);
      event.add(`forge:non_deepslate_ores`, allOtherOres);
      event.add(`forge:non_deepslate_ores/${ore.resourceName}`, allOtherOres);
    });

    const deepslateOres = global.ores
      .filter(x => !!x.variants.deepslate)
      .filter(x => x.dropsRaw)
      .map(x => x.variants.deepslate);
    event.add('forge:deepslate_ores', deepslateOres);
  };

  unifyMaterials();
  clearTags();
  oreItemTags();

  event.add('thermal:crafting/dies', 'immersiveengineering:mold_wire');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_bullet_casing');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_rod');
  event.add('forge:dusts/calorite', 'kubejs:calorite_dust');
  event.add('forge:dusts/desh', 'kubejs:desh_dust');
  event.add('forge:dusts/ostrum', 'kubejs:ostrum_dust');
  event.removeAllTagsFrom('minecraft:chest');

  /* Remove tags from Ruby & Sapphire */
  /* This prevents them appearing in the Ore Laser */
  event.removeAllTagsFrom('thermal:ruby_ore');
  event.removeAllTagsFrom('thermal:sapphire_ore');
  event.removeAllTagsFrom('thermal:deepslate_ruby_ore');
  event.removeAllTagsFrom('thermal:deepslate_sapphire_ore');
});

onEvent('block.tags', event => {
  /* Remove tags from Ruby & Sapphire */
  /* This prevents them appearing in the Ore Laser */
  event.removeAllTagsFrom('thermal:ruby_ore');
  event.removeAllTagsFrom('thermal:sapphire_ore');
  event.removeAllTagsFrom('thermal:deepslate_ruby_ore');
  event.removeAllTagsFrom('thermal:deepslate_sapphire_ore');
});

onEvent('fluid.tags', event => {
  event.remove('forge:latex', 'thermal:latex');

  /* Unf**k the state of minecraft's "water" */
  event.removeAll('minecraft:water');
  event.add('minecraft:water', ['minecraft:water', 'minecraft:flowing_water']);
});
