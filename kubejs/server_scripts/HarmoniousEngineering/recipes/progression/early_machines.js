onEvent('recipes', event => {
  /*************************
   *    Andesite Alloys    *
   ************************/
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {item: 'minecraft:clay_ball'},
      {tag: 'forge:pebbles'},
      {tag: 'forge:pebbles'},
      {tag: 'harmeng:zinc_or_iron_chunk'},
      {tag: 'natural-progression:saw'},
    ],
    result: {
      item: 'kubejs:crude_andesite_alloy',
      count: 1,
    },
  });
  event.smelting('create:andesite_alloy', 'kubejs:crude_andesite_alloy');

  global.genAlloyingRecipe(
    event,
    {tag: 'chipped:andesite'},
    {tag: 'forge:ingots/zinc'},
    'create:andesite_alloy',
    2
  );
});
