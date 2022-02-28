onEvent('recipes', event => {
  event.stonecutting('appliedenergistics2:calculation_processor_press', '#forge:plates/steel');
  event.stonecutting('appliedenergistics2:engineering_processor_press', '#forge:plates/steel');
  event.stonecutting('appliedenergistics2:logic_processor_press', '#forge:plates/steel');
  event.stonecutting('appliedenergistics2:silicon_press', '#forge:plates/steel');
  event.stonecutting('appliedenergistics2:name_press', '#forge:plates/steel');

  // Uncraft quartz block via stonecutting
  event.stonecutting('4x minecraft:quartz', 'minecraft:quartz_block');
});
