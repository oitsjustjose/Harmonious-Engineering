onEvent('recipes', event => {
  event.remove({output: 'chickenchunks:chunk_loader'});
  event.remove({output: 'chickenchunks:spot_loader'});

  global.genCombinedRecipe(
    event,
    Ingredient.of('minecraft:enchanting_table'),
    Ingredient.of('moreminecarts:chunkrodite'),
    Item.of('chickenchunks:chunk_loader')
  );

  event.shaped('1x chickenchunks:chunk_loader', ['xxx', 'xxx', 'xxx'], {
    x: 'chickenchunks:spot_loader',
  });

  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {
        item: 'chickenchunks:chunk_loader',
      },
      {
        tag: 'harmeng:diamond_tier_saws',
      },
    ],
    result: {
      item: 'chickenchunks:spot_loader',
      count: 9,
    },
  });
});
