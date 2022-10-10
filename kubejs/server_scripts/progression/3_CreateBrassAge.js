// Gate the Brass Age behind the IE Arc Furnace
onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({id: 'immersiveengineering:alloysmelter/brass'});
  event.remove({id: 'create:mixing/brass_ingot'});
  event.remove({output: 'create:electron_tube'});
  event.replaceInput({output: 'create:steam_engine'}, '#forge:plates/gold', '#forge:plates/brass');

  event.shaped('2x create:electron_tube', ['R', 'T', 'P'], {
    R: 'create:polished_rose_quartz',
    T: 'minecraft:redstone_torch',
    P: 'pneumaticcraft:printed_circuit_board',
  });

  CustomRecipeHandler.warping(
    Item.of('#forge:ingots/brass'),
    Item.of('architects_palette:nether_brass_ingot')
  );

  // Re-add precision mech recipe because it was removed by its inclusion in global.duplicateItemResources
  const icpm = Item.of('create:incomplete_precision_mechanism');
  event.recipes.create
    .sequenced_assembly([Item.of('create:precision_mechanism')], '#forge:plates/gold', [
      event.recipes.create.deploying(icpm, [icpm, 'create:cogwheel']),
      event.recipes.create.deploying(icpm, [icpm, 'create:large_cogwheel']),
      event.recipes.create.deploying(icpm, [icpm, '#forge:nuggets/iron']),
    ])
    .transitionalItem(icpm)
    .loops(5);
});
