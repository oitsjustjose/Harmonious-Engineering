onEvent('recipes', event => {
  const fluidInjector = Item.of('custommachinery:custom_machine_item', {
    machine: 'harmeng:fluid_injector',
  });

  event.shaped(fluidInjector, ['NFN', 'SDS', 'NIN'], {
    D: 'draconicevolution:draconium_ingot',
    F: 'mekanism:fluidic_plenisher',
    I: 'mekanism:ultimate_induction_cell',
    N: 'powah:crystal_nitro',
    S: 'mekanism:steel_casing',
  });
});
