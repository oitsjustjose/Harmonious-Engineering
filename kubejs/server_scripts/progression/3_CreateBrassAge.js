// Gate the Brass Age behind the IE Arc Furnace
onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({id: 'immersiveengineering:alloysmelter/brass'});
  event.remove({id: 'create:mixing/brass_ingot'});
  event.remove({output: 'create:electron_tube'});

  event.shaped('2x create:electron_tube', ['R', 'T', 'P'], {
    R: 'create:polished_rose_quartz',
    T: 'minecraft:redstone_torch',
    P: 'pneumaticcraft:printed_circuit_board',
  });

  CustomRecipeHandler.warping(
    Item.of('#forge:ingots/brass'),
    Item.of('4x architects_palette:nether_brass_ingot')
  );
});
