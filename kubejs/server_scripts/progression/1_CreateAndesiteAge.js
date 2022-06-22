// Gate Early-game Create Behind PnC
onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);
  event.remove({output: 'create:andesite_alloy'});

  CustomRecipeHandler.pressurizing(
    [
      {type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:ingot_iron_compressed', count: 1},
      {type: 'pneumaticcraft:stacked_item', item: 'minecraft:andesite', count: 2},
    ],
    [{item: 'create:andesite_alloy', count: 3}],
    6.0
  );
});
