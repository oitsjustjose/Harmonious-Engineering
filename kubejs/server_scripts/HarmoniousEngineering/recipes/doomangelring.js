onEvent('recipes', event => {
  event.remove({output: 'doomangelring:itemdoomangelring'});

  event.custom({
    type: 'create:mechanical_crafting',
    pattern: ['FFIIIFF', 'FIBTBIF', 'IRSPSRI', 'ITP PTI', 'IRSPSRI', ' IBTBI ', '  III  '],
    key: {
      I: {tag: 'forge:ingots/brass'},
      F: {item: 'minecraft:feather'},
      P: {item: 'industrialforegoing:pink_slime_ingot'},
      S: {item: 'minecraft:nether_star'},
      R: {item: 'create:refined_radiance'},
      T: {item: 'mekanism:teleportation_core'},
      B: {item: 'buzzier_bees:bee_bottle'},
    },
    result: {item: 'doomangelring:itemdoomangelring'},
  });
});
