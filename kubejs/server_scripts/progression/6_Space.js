onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  /** DEDUPLICATION OF RESOURCES **/
  event.remove({output: 'beyond_earth:iron_plate'});
  event.remove({output: 'beyond_earth:iron_stick'});
  event.remove({output: 'beyond_earth:compressed_steel'});
  event.replaceInput({}, 'beyond_earth:iron_plate', '#forge:plates/iron');
  event.replaceInput({}, 'beyond_earth:iron_stick', '#forge:rods/iron');
  event.replaceInput({}, 'beyond_earth:compressed_steel', '#forge:plates/steel');

  event.remove({output: 'beyond_earth:iron_plating_block'});
  event.stonecutting('4x beyond_earth:iron_plating_block', '#forge:plates/iron');
  event.stonecutting('beyond_earth:iron_plating_block', 'beyond_earth:blue_iron_plating_block');
  event.stonecutting('beyond_earth:blue_iron_plating_block', 'beyond_earth:iron_plating_block');

  event.remove({output: 'beyond_earth:iron_mark_block'});
  CustomRecipeHandler.event.smithing(
    '2x beyond_earth:iron_mark_block',
    'minecraft:iron_block',
    'davebuildingmod:stripedblock'
  );

  event.remove({output: 'beyond_earth:rusted_iron_pillar_block'});
  event.remove({output: 'beyond_earth:rusted_iron_plating_block'});
  event.stonecutting(
    'beyond_earth:rusted_iron_pillar_block',
    'beyond_earth:rusted_iron_plating_block'
  );
  event.stonecutting(
    'beyond_earth:rusted_iron_plating_block',
    'beyond_earth:rusted_iron_pillar_block'
  );
  event.recipes.create.splashing(
    ['beyond_earth:rusted_iron_plating_block'],
    'beyond_earth:iron_plating_block'
  );

  event.remove({output: 'beyond_earth:nasa_workbench'});
  // CustomRecipeHandler.
});

onEvent('item.tags', event => {
  event.removeAllTagsFrom(
    'beyond_earth:iron_plate',
    'beyond_earth:iron_stick',
    'beyond_earth:compressed_steel'
  );
});
