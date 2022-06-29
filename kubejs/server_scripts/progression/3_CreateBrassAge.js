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

  // Re-add precision mech recipe because it was removed by its inclusion in global.duplicateResources
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:plates/gold'},
    transitionalItem: {item: 'create:incomplete_precision_mechanism'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'create:incomplete_precision_mechanism'}, {item: 'create:cogwheel'}],
        results: [{item: 'create:incomplete_precision_mechanism'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'create:large_cogwheel'},
        ],
        results: [{item: 'create:incomplete_precision_mechanism'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'create:incomplete_precision_mechanism'}, {tag: 'forge:nuggets/iron'}],
        results: [{item: 'create:incomplete_precision_mechanism'}],
      },
    ],
    results: [
      {item: 'create:precision_mechanism', chance: 120.0},
      {item: 'thermal:gold_plate', chance: 8.0},
      {item: 'create:andesite_alloy', chance: 8.0},
      {item: 'create:cogwheel', chance: 5.0},
      {item: 'create:shaft', chance: 2.0},
      {item: 'thermal:gold_dust', chance: 2.0},
      {item: 'minecraft:gold_nugget', chance: 2.0},
      {item: 'minecraft:iron_ingot'},
      {item: 'minecraft:clock'},
    ],
    loops: 5,
  });
});
