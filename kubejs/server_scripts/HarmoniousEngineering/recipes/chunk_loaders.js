onEvent('recipes', event => {
  const loaders = {
    single: 'chunkloaders:single_chunk_loader',
    basic: 'chunkloaders:basic_chunk_loader',
    advanced: 'chunkloaders:advanced_chunk_loader',
    ultimate: 'chunkloaders:ultimate_chunk_loader',
  };

  event.remove({mod: 'chunkloaders'});

  // One-off recipes that don't use upgrades
  event.shaped(loaders.single, ['IFI', 'EAE', 'IFI'], {
    A: 'create:andesite_casing',
    E: 'minecraft:ender_pearl',
    F: 'fluxnetworks:flux_dust',
    I: '#forge:ingots/cast_iron',
  });

  event.shaped(loaders.basic, ['IFI', 'EDE', 'IFI'], {
    D: '#forge:gems/diamond',
    E: 'minecraft:ender_pearl',
    F: 'fluxnetworks:flux_dust',
    I: '#forge:ingots/steel',
  });

  event.shaped(loaders.advanced, ['IFI', 'CPC', 'IFI'], {
    C: 'moreminecarts:chunkrodite',
    F: 'fluxnetworks:flux_dust',
    I: '#forge:ingots/gold',
    P: 'powah:dielectric_casing',
  });

  event.shaped(loaders.ultimate, ['DCD', 'IEI', 'DCD'], {
    C: 'moreminecarts:chunkrodite',
    D: '#forge:gems/diamond',
    E: 'kubejs:ender_singularity',
    I: 'create:chromatic_compound',
  });

  // Upgrading Recipes
  global.genSmithingRecipe(
    event,
    Ingredient.of(loaders.single),
    Ingredient.of('#forge:gems/diamond'),
    Item.of(loaders.basic)
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of(loaders.basic),
    Ingredient.of('moreminecarts:chunkrodite'),
    Item.of(loaders.advanced)
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of(loaders.advanced),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of(loaders.ultimate)
  );
});
