onEvent('recipes', event => {
  const modid = 'modularrouters';

  event.remove({output: `${modid}:augment_core`});
  event.remove({output: `${modid}:blank_module`});
  event.remove({output: `${modid}:blank_upgrade`});
  event.remove({output: `${modid}:item_router`});

  event.stonecutting(`2x ${modid}:augment_core`, 'mekanism:module_base');
  event.stonecutting(`${modid}:blank_module`, 'mekanism:module_base');
  event.stonecutting(`4x ${modid}:blank_upgrade`, 'mekanism:module_base');
  event.shaped(`4x ${modid}:item_router`, ['SBS', 'BFB', 'SBS'], {
    S: '#forge:plates/enderium',
    B: `${modid}:blank_module`,
    F: 'industrialforegoing:machine_frame_pity',
  });
});
