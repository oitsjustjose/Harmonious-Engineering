onEvent('recipes', event => {
  // Ender Singularity Crafting
  event.custom({
    type: 'thermal:chiller',
    ingredients: [{fluid: 'minecraft:water', amount: 1000}, {item: 'powah:ender_core'}],
    result: [{item: 'kubejs:ender_singularity', count: 1}],
    energy: 20000,
  });

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
