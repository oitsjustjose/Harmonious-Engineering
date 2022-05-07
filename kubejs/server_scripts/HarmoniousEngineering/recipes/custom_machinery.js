onEvent('recipes', event => {
  const fluidInjector = Item.of('custommachinery:custom_machine_item', {
    machine: 'harmeng:fluid_injector',
  });
  const autoSmither = Item.of('custommachinery:custom_machine_item', {
    machine: 'harmeng:auto_smither',
  });

  event.shaped(fluidInjector, ['AFA', 'LSL', 'AFA'], {
    F: 'mekanism:fluidic_plenisher',
    S: 'mekanism:steel_casing',
    A: 'mekanism:alloy_atomic',
    L: 'mekanism:laser',
  });

  event.shaped(autoSmither, [' H ', 'PFP', 'GRG'], {
    F: 'thermal:machine_frame',
    P: '#forge:plates/cast_iron',
    G: '#forge:gears/invar',
    R: 'thermal:rf_coil',
    H: 'tools_complement:iron_hammer',
  });
});
