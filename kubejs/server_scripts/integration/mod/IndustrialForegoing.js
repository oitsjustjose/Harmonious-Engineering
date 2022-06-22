onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({output: 'industrialforegoing:diamond_gear'});
  event.remove({output: 'industrialforegoing:gold_gear'});
  event.remove({output: 'industrialforegoing:iron_gear'});
  event.remove({output: 'industrialforegoing:diamond_gear'});
  event.remove({output: 'industrialforegoing:gold_gear'});
  event.remove({output: 'industrialforegoing:iron_gear'});

  event.remove({output: 'industrialforegoing:plastic'});
  event.remove({output: 'industrialforegoing:dryrubber'});
  event.remove({output: 'industrialforegoing:tinydryrubber'});
  event.remove({output: 'industrialforegoing:latex_processing_unit'});

  // Progression
  event.remove({output: 'industrialforegoing:machine_frame_pity'});
  // Automatable recipe using the Mechanical Crafting
  CustomRecipeHandler.giant(Item.of('industrialforegoing:machine_frame_pity'), ['FB'], {
    F: 'compactmachines:machine_normal',
    B: '#forge:storage_blocks/brass',
  });
  event.smithing(
    'industrialforegoing:machine_frame_pity',
    'compactmachines:machine_normal',
    '#forge:storage_blocks/brass'
  );
});

onEvent('item.tags', event => {
  event.remove('forge:gears', 'industrialforegoing:diamond_gear');
  event.remove('forge:gears', 'industrialforegoing:gold_gear');
  event.remove('forge:gears', 'industrialforegoing:iron_gear');
  event.remove('forge:gears/diamond', 'industrialforegoing:diamond_gear');
  event.remove('forge:gears/gold', 'industrialforegoing:gold_gear');
  event.remove('forge:gears/iron', 'industrialforegoing:iron_gear');
});
