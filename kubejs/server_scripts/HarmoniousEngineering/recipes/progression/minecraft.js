onEvent('recipes', event => {
  event.remove({id: 'minecraft:wooden_axe'});
  event.remove({id: 'minecraft:wooden_hoe'});
  event.remove({id: 'minecraft:wooden_pickaxe'});
  event.remove({id: 'minecraft:wooden_shovel'});
  event.remove({id: 'minecraft:wooden_sword'});
  event.remove({output: 'minecraft:end_crystal'});
  event.shaped('1x minecraft:end_crystal', ['PPP', 'PRP', 'PGP'], {
    P: '#forge:glass/colorless',
    G: 'minecraft:ghast_tear',
    R: 'outer_end:rose_crystal',
  });

  event.remove({id: 'minecraft:stonecutter'});
  event.shaped('1x minecraft:stonecutter', [' B ', 'SSS'], {
    B: 'immersiveengineering:rockcutter',
    S: '#forge:stone',
  });

  event.remove({output: 'minecraft:smithing_table'});
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {item: 'natural-progression:improved_saw'},
      {item: 'immersiveengineering:hammer'},
      {item: 'immersiveengineering:wirecutter'},
      {tag: 'forge:workbenches'},
      {tag: 'forge:plates/cast_iron'},
      {tag: 'forge:plates/cast_iron'},
    ],
    result: {
      item: 'minecraft:smithing_table',
    },
  });

  event.remove({output: 'minecraft:furnace'});
  event.shaped('1x minecraft:furnace', ['CCC', 'C C', 'CCC'], {C: '#forge:cobblestone'});
});
