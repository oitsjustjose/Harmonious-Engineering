onEvent('recipes', event => {
  event.remove({output: 'create:copper_ingot'});
  event.remove({output: 'create:zinc_ingot'});

  event.remove({output: 'create:hand_crank'});
  event.remove({output: 'create:shaft'});
  event.remove({output: 'create:water_wheel'});
  event.remove({output: 'create:white_sail'});
  // Leave the createadditions recipe behind
  event.remove({id: 'create:crafting/kinetics/white_sail'});
  event.remove({id: 'create:cutting/andesite_alloy'});

  event.shaped('18x create:shaft', ['R', 'R'], {R: '#forge:rods/steel'});
  event.shaped('1x create:hand_crank', [' C ', 'PPP', '  A'], {
    P: '#minecraft:planks',
    C: 'create:cogwheel',
    A: 'create:andesite_alloy',
  });

  global.genCombinedRecipeSewing(
    event,
    Ingredient.of('create:sail_frame'),
    Ingredient.of('immersiveengineering:windmill_sail'),
    Item.of('create:white_sail'),
    4
  );

  event.custom({
    type: 'create:cutting',
    ingredients: [
      {
        tag: 'forge:ingots/steel',
      },
    ],
    results: [
      {
        item: 'create:shaft',
        count: 20,
      },
    ],
    processingTime: 200,
  });

  global.genLargeRecipe(
    event,
    [' B ', 'BCB', ' B '],
    {
      B: {
        item: 'immersiveengineering:waterwheel_segment',
      },
      C: {
        item: 'create:large_cogwheel',
      },
    },
    {
      item: 'create:water_wheel',
    }
  );

  event.replaceInput(
    {output: 'steampowered:cast_iron_burner'},
    '#forge:plates/iron',
    '#forge:plates/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_boiler'},
    '#forge:plates/iron',
    '#forge:plates/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_steam_engine'},
    '#forge:plates/iron',
    '#forge:plates/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_steam_engine'},
    'minecraft:iron_ingot',
    '#forge:ingots/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_flywheel'},
    'minecraft:iron_ingot',
    '#forge:ingots/cast_iron'
  );

  event.replaceInput(
    {output: 'steampowered:cast_iron_cogwheel'},
    'minecraft:iron_ingot',
    '#forge:ingots/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_large_cogwheel'},
    'minecraft:iron_ingot',
    '#forge:ingots/cast_iron'
  );
  event.replaceInput(
    {output: 'steampowered:cast_iron_large_cogwheel'},
    '#forge:plates/iron',
    '#forge:plates/cast_iron'
  );
});
