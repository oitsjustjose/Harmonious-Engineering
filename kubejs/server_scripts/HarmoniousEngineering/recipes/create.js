/* disables CreateAddition's conenctors from being placed */
onEvent('block.right_click', event => {
  if (event.getItem() === 'createaddition:connector') {
    event.cancel();
  }
});

const createDecoDecalChanges = event => {
  global.minecraftColors.forEach(color => {
    event.remove({output: `createdeco:${color}_decal`});
    event.stonecutting(`createdeco:${color}_decal`, '#forge:plates/iron');
  });
};

onEvent('recipes', event => {
  createDecoDecalChanges(event);
  event.remove({output: 'create:copper_ingot'});
  event.remove({output: 'create:zinc_ingot'});

  event.remove({output: 'create:hand_crank'});
  event.remove({output: 'create:shaft'});
  event.remove({output: 'create:water_wheel'});
  event.remove({output: 'create:white_sail'});
  // Leave the createadditions recipe behind
  event.remove({id: 'create:crafting/kinetics/white_sail'});
  event.remove({id: 'create:cutting/andesite_alloy'});

  event.remove({output: 'steampowered:alternator'});
  event.remove({output: 'createaddition:alternator'});
  event.remove({output: 'createaddition:accumulator'});
  event.remove({output: 'createaddition:furnace_burner'});
  event.remove({output: 'createaddition:redstone_relay'});
  event.remove({output: 'createaddition:overcharged_casing'});
  event.remove({output: 'createaddition:copper_spool'});
  event.remove({output: 'createaddition:gold_spool'});
  event.remove({output: 'createaddition:gold_wire'});
  event.remove({output: 'createaddition:spool'});

  event.remove({id: 'create:mixing/chromatic_compound'});
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {tag: 'forge:dusts/glowstone'},
      {tag: 'forge:dusts/glowstone'},
      {tag: 'forge:dusts/glowstone'},
      {tag: 'forge:dusts/obsidian'},
      {tag: 'forge:dusts/obsidian'},
      {tag: 'forge:dusts/obsidian'},
      {item: 'create:polished_rose_quartz'},
    ],
    results: [{item: 'create:chromatic_compound'}],
    heatRequirement: 'superheated',
  });

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

  // Crushed Cobalt Compat
  event.custom({
    type: 'create:crushing',
    ingredients: [{tag: 'forge:ores/cobalt'}],
    results: [
      {
        item: 'emendatusenigmatica:cobalt_crushed',
        count: 1,
      },
      {
        item: 'emendatusenigmatica:cobalt_crushed',
        count: 2,
        chance: 0.3,
      },
    ],
    processingTime: 900,
  });

  event.custom({
    type: 'create:splashing',
    ingredients: [{item: 'emendatusenigmatica:cobalt_crushed'}],
    results: [
      {
        item: 'emendatusenigmatica:cobalt_nugget',
        count: 10,
      },
      {
        item: 'emendatusenigmatica:cobalt_nugget',
        count: 5,
        chance: 0.5,
      },
    ],
  });

  event.smelting('emendatusenigmatica:cobalt_ingot', 'emendatusenigmatica:cobalt_crushed');
});
