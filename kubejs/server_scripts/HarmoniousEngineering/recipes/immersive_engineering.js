onEvent('recipes', event => {
  const modid = 'immersiveengineering';
  [
    'aluminum',
    'ardite',
    'cobalt',
    'copper',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'tungsten',
    'uranium',
    'zinc',
  ].forEach(x => {
    event.remove({id: `${modid}:crafting/hammercrushing_${x}`});
    event.remove({id: `${modid}:crafting/plate_${x}_hammering`});
  });

  event.remove({output: `${modid}:alloybrick`});
  event.remove({output: `${modid}:blastbrick`});
  event.remove({output: `${modid}:cokebrick`});
  event.remove({output: `${modid}:hammer`});
  event.remove({output: `${modid}:watermill`});
  event.remove({output: `${modid}:windmill`});

  event.remove({output: `${modid}:hemp_fabric`});
  event.remove({output: `${modid}:windmill_sail`});

  global.genCombinedRecipe(
    event,
    Ingredient.of('createdeco:dean_bricks'),
    Ingredient.of('minecraft:sandstone'),
    Item.of(`${modid}:alloybrick`)
  );

  event.shaped(`27x ${modid}:blastbrick`, ['CHC', 'BSB', 'CBC'], {
    C: 'minecraft:clay',
    B: 'createdeco:dusk_bricks',
    S: 'create:blaze_burner',
    H: 'create:chute',
  });

  event.shaped(`27x ${modid}:cokebrick`, ['CHC', 'BSB', 'CBC'], {
    C: 'minecraft:clay',
    B: 'createdeco:blue_bricks',
    H: 'create:chute',
    S: 'createaddition:crude_burner',
  });

  event.shaped(`1x ${modid}:hammer`, [' IR', ' SI', 'S  '], {
    S: '#forge:rods/wooden',
    I: '#forge:plates/iron',
    R: 'immersiveengineering:hemp_fiber',
  });

  event.remove({id: 'farmersdelight:canvas'});
  event.shaped('1x farmersdelight:canvas', ['HS', 'SH'], {
    H: 'immersiveengineering:hemp_fiber',
    S: 'farmersdelight:straw',
  });

  global.genCombinedRecipeSewing(
    event,
    Ingredient.of('4x farmersdelight:canvas'),
    Ingredient.of(`${modid}:stick_treated`),
    Item.of(`${modid}:hemp_fabric`),
    1
  );
  global.genCombinedRecipeSewing(
    event,
    Ingredient.of(`4x ${modid}:hemp_fabric`),
    Ingredient.of(`2x #forge:treated_wood_slab`),
    Item.of(`${modid}:windmill_sail`),
    1
  );

  global.genLargeRecipe(
    event,
    ['BBB', 'BSB', 'BBB'],
    {
      B: {item: `${modid}:windmill_blade`},
      S: {tag: 'forge:ingots/steel'},
    },
    {item: `${modid}:windmill`}
  );

  global.genLargeRecipe(
    event,
    [' B ', 'BSB', ' B '],
    {
      B: {item: `${modid}:waterwheel_segment`},
      S: {tag: 'forge:ingots/steel'},
    },
    {item: `${modid}:watermill`}
  );

  // Fixes some IE machines not being able to be created
  event.stonecutting('immersiveengineering:storage_steel', 'emendatusenigmatica:steel_block');
  event.stonecutting('emendatusenigmatica:steel_block', 'immersiveengineering:storage_steel');
});
