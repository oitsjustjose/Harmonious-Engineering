onEvent('recipes', event => {
  // Ender Singularity Crafting
  event.recipes.custommachinery
    .custom_machine('harmeng:fluid_injector', 250)
    .requireItem(Item.of('powah:ender_core'))
    .requireFluid(Fluid.of('minecraft:water', 1000))
    .requireEnergyPerTick(1000)
    .produceItem(Item.of(`kubejs:ender_singularity`));

  // Fluxed Singularity Crafting
  event.custom({
    type: 'appliedenergistics2:inscriber',
    mode: 'press',
    result: {item: 'kubejs:fluxed_singularity'},
    ingredients: {
      top: {item: 'kubejs:ender_singularity'},
      middle: {item: 'appliedenergistics2:purified_fluix_crystal'},
    },
  });
});
