onEvent('recipes', event => {
  event.remove({mod: 'enderchests'});

  event.custom({
    type: 'improvedbackpacks:sewing',
    first: {item: 'improvedbackpacks:tanned_leather'},
    first_count: 4,
    second: {item: 'moreminecarts:chunkrodite'},
    second_count: 2,
    spools_count: 1,
    result: 'enderchests:ender_bag',
  });

  global.genSmithingRecipe(
    event,
    Ingredient.of('minecraft:ender_chest'),
    Ingredient.of('moreminecarts:chunkrodite'),
    Item.of('enderchests:ender_chest')
  );
});
