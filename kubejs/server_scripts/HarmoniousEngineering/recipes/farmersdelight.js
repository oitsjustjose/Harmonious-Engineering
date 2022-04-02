onEvent('recipes', event => {
  event.remove({output: 'farmersdelight:cooking_pot'});
  event.remove({output: 'farmersdelight:skillet'});

  event.shaped('1x farmersdelight:cooking_pot', ['B B', 'IWI', 'III'], {
    I: '#forge:ingots/cast_iron',
    W: 'minecraft:water_bucket',
    B: 'minecraft:brick',
  });
  event.shaped('1x farmersdelight:skillet', [' II', ' II', 'B  '], {
    I: '#forge:ingots/cast_iron',
    B: 'minecraft:brick',
  });
});
