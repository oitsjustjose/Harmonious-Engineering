// Gate the Brass Age behind the IE Arc Furnace
onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({id: 'immersiveengineering:alloysmelter/brass'});
  event.remove({id: 'create:mixing/brass_ingot'});

  CustomRecipeHandler.warping(
    Item.of('#forge:ingots/brass'),
    Item.of('4x architects_palette:nether_brass_ingot')
  );
});
