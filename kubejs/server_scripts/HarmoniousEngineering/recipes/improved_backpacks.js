onEvent('recipes', event => {
  event.remove({output: 'improvedbackpacks:sewing_spool'});
  event.shaped('8x improvedbackpacks:sewing_spool', ['SSS', 'SRS', 'SSS'], {
    S: 'minecraft:string',
    R: 'minecraft:stick',
  });

  event.shaped('10x improvedbackpacks:sewing_spool', ['SSS', 'SRS', 'SSS'], {
    S: 'immersiveengineering:hemp_fiber',
    R: 'minecraft:stick',
  });
});
