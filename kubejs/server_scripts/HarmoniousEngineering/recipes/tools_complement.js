onEvent('recipes', event => {
  ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots'].forEach(
    x => {
      event.remove({output: `tools_complement:bronze_${x}`});
    }
  );
  event.remove({id: 'tools_complement:netherite_excavator'});
  event.remove({id: 'tools_complement:netherite_hammer'});
  event.remove({id: 'tools_complement:netherite_sickle'});
  event.remove({id: 'tools_complement:netherite_knife'});

  event.smithing(
    'tools_complement:netherite_excavator',
    'tools_complement:diamond_excavator',
    'minecraft:netherite_ingot'
  );
  event.smithing(
    'tools_complement:netherite_hammer',
    'tools_complement:diamond_hammer',
    'minecraft:netherite_ingot'
  );
  event.smithing(
    'tools_complement:netherite_sickle',
    'tools_complement:diamond_sickle',
    'minecraft:netherite_ingot'
  );
  event.smithing(
    'tools_complement:netherite_knife',
    'tools_complement:diamond_knife',
    'minecraft:netherite_ingot'
  );
});
