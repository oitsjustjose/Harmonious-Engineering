onEvent('recipes', event => {
  const modid = 'immersiveengineering';
  event.remove({id: `${modid}:crafting/hammercrushing_aluminum`});
  event.remove({id: `${modid}:crafting/hammercrushing_ardite`});
  event.remove({id: `${modid}:crafting/hammercrushing_cobalt`});
  event.remove({id: `${modid}:crafting/hammercrushing_copper`});
  event.remove({id: `${modid}:crafting/hammercrushing_gold`});
  event.remove({id: `${modid}:crafting/hammercrushing_iron`});
  event.remove({id: `${modid}:crafting/hammercrushing_lead`});
  event.remove({id: `${modid}:crafting/hammercrushing_nickel`});
  event.remove({id: `${modid}:crafting/hammercrushing_osmium`});
  event.remove({id: `${modid}:crafting/hammercrushing_platinum`});
  event.remove({id: `${modid}:crafting/hammercrushing_silver`});
  event.remove({id: `${modid}:crafting/hammercrushing_tin`});
  event.remove({id: `${modid}:crafting/hammercrushing_tungsten`});
  event.remove({id: `${modid}:crafting/hammercrushing_uranium`});
  event.remove({id: `${modid}:crafting/hammercrushing_zinc`});

  event.remove({id: `${modid}:crafting/plate_aluminum_hammering`});
  event.remove({id: `${modid}:crafting/plate_constantan_hammering`});
  event.remove({id: `${modid}:crafting/plate_copper_hammering`});
  event.remove({id: `${modid}:crafting/plate_electrum_hammering`});
  event.remove({id: `${modid}:crafting/plate_gold_hammering`});
  event.remove({id: `${modid}:crafting/plate_iron_hammering`});
  event.remove({id: `${modid}:crafting/plate_lead_hammering`});
  event.remove({id: `${modid}:crafting/plate_nickel_hammering`});
  event.remove({id: `${modid}:crafting/plate_silver_hammering`});
  event.remove({id: `${modid}:crafting/plate_steel_hammering`});
  event.remove({id: `${modid}:crafting/plate_uranium_hammering`});

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

  event.custom({
    type: 'corail_woodcutter:woodcutting',
    ingredient: {tag: 'forge:treated_wood'},
    result: `${modid}:waterwheel_segment`,
    count: 1,
  });

  event.custom({
    type: 'corail_woodcutter:woodcutting',
    ingredient: {tag: 'forge:treated_wood'},
    result: `${modid}:windmill_blade`,
    count: 1,
  });

  // Fixes some IE machines not being able to be created
  event.stonecutting('immersiveengineering:storage_steel', 'emendatusenigmatica:steel_block');
  event.stonecutting('emendatusenigmatica:steel_block', 'immersiveengineering:storage_steel');
});
