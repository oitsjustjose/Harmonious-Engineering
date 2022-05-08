onEvent('recipes', event => {
  const modid = 'modularrouters';
  event.remove({output: `${modid}:augment_core`});
  event.remove({output: `${modid}:blank_module`});
  event.remove({output: `${modid}:blank_upgrade`});
  event.remove({output: `${modid}:item_router`});

  event.stonecutting(`${modid}:blank_module`, 'mekanism:module_base');
  event.stonecutting(`2x ${modid}:augment_core`, 'mekanism:module_base');
  event.stonecutting(`4x ${modid}:blank_upgrade`, 'mekanism:module_base');

  global.genSmithingRecipe(
    event,
    Ingredient.of('industrialforegoing:machine_frame_simple'),
    Ingredient.of(`${modid}:blank_module`),
    Item.of(`${modid}:item_router`)
  );
});
