onEvent('recipes', event => {
  // Make natprog bone stuff make some sense
  event.remove({output: 'natural-progression:bone_knife'});
  event.remove({output: 'natural-progression:bone_pickaxe'});
  event.shaped('natural-progression:bone_pickaxe', ['B', 'S'], {
    S: '#forge:rods/wooden',
    B: 'natural-progression:bone_shard',
  });

  // STEP 1: DUSTS
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {item: 'natural-progression:bone_pickaxe'},
      {item: 'create:andesite_cobblestone'},
    ],
    result: {item: 'kubejs:andesite_dust'},
  });
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {item: 'natural-progression:bone_pickaxe'},
      {item: 'emendatusenigmatica:zinc_chunk'},
    ],
    result: {item: 'kubejs:zinc_dust_pile'},
  });
  // STEP 2: CREATE BLEND
  event.shapeless('1x kubejs:andesite_zinc_blend', [
    'kubejs:zinc_dust_pile',
    'kubejs:andesite_dust',
    'kubejs:zinc_dust_pile',
  ]);
  // STEP 3: PROFIT??
  event.smelting('create:andesite_alloy', 'kubejs:andesite_zinc_blend');

  // Easier recipes for once you get some machinery going :)
  event.shapeless('2x kubejs:andesite_zinc_blend', ['#forge:dusts/zinc', 'kubejs:andesite_dust']);
  global.genAlloyingRecipe(
    event,
    {item: 'create:andesite_cobblestone'},
    {tag: 'forge:ingots/zinc'},
    'create:andesite_alloy',
    2
  );
  global.genUniversalCrushingRecipe(
    event,
    Ingredient.of('create:andesite_cobblestone'),
    Item.of('4x kubejs:andesite_dust'),
    0.5
  );
});
