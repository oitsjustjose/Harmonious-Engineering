onEvent('recipes', event => {
  event.remove({id: 'minecraft:wooden_axe'});
  event.remove({id: 'minecraft:wooden_hoe'});
  event.remove({id: 'minecraft:wooden_pickaxe'});
  event.remove({id: 'minecraft:wooden_shovel'});
  event.remove({id: 'minecraft:wooden_sword'});

  event.remove({id: 'minecraft:stonecutter'});
  event.shaped('1x minecraft:stonecutter', [' B ', 'SSS'], {
    B: 'immersiveengineering:rockcutter',
    S: '#forge:stone',
  });

  event.remove({output: 'minecraft:furnace'});
  event.shaped('1x minecraft:furnace', ['CCC', 'C C', 'CCC'], {C: '#forge:cobblestone'});
});
