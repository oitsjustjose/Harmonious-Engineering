// priority: 1024

onEvent('server.datapack.first', _ => {
  global._planks = [
    'atmospheric:aspen_planks',
    'atmospheric:grimwood_planks',
    'atmospheric:kousa_planks',
    'atmospheric:morado_planks',
    'atmospheric:rosewood_planks',
    'atmospheric:yucca_planks',
    'autumnity:maple_planks',
    'betterendforge:dragon_tree_planks',
    'betterendforge:end_lotus_planks',
    'betterendforge:helix_tree_planks',
    'betterendforge:jellyshroom_planks',
    'betterendforge:lacugrove_planks',
    'betterendforge:lucernia_planks',
    'betterendforge:mossy_glowshroom_planks',
    'betterendforge:pythadendron_planks',
    'betterendforge:tenanea_planks',
    'betterendforge:umbrella_tree_planks',
    'enhanced_mushrooms:brown_mushroom_planks',
    'enhanced_mushrooms:glowshroom_planks',
    'enhanced_mushrooms:red_mushroom_planks',
    'immersiveengineering:treated_wood_horizontal',
    'immersiveengineering:treated_wood_packaged',
    'immersiveengineering:treated_wood_vertical',
    'quark:black_stained_planks',
    'quark:blue_stained_planks',
    'quark:brown_stained_planks',
    'quark:cyan_stained_planks',
    'quark:gray_stained_planks',
    'quark:green_stained_planks',
    'quark:light_blue_stained_planks',
    'quark:light_gray_stained_planks',
    'quark:lime_stained_planks',
    'quark:magenta_stained_planks',
    'quark:orange_stained_planks',
    'quark:pink_stained_planks',
    'quark:purple_stained_planks',
    'quark:red_stained_planks',
    'quark:white_stained_planks',
    'quark:yellow_stained_planks',
    'tconstruct:bloodshroom_planks',
    'tconstruct:greenheart_planks',
    'tconstruct:skyroot_planks',
    'upgrade_aquatic:driftwood_planks',
    'upgrade_aquatic:river_planks',
  ];

  global.minecraftColors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
  ];

  global.generateDrawerName = (plank, type) => {
    const mp = {
      'framedcompactdrawers:framed_full_one': 'Framed Drawer',
      'framedcompactdrawers:framed_full_two': 'Framed Drawers 1x2',
      'framedcompactdrawers:framed_full_four': 'Framed Drawers 2x2',
      'framedcompactdrawers:framed_half_one': 'Framed Half Drawer',
      'framedcompactdrawers:framed_half_two': 'Framed Half Drawers 1x2',
      'framedcompactdrawers:framed_half_four': 'Framed Half Drawers 2x2',
      'framedcompactdrawers:framed_trim': 'Framed Trim',
    };
    let plankName = plank
      .split(':')[1]
      .replace(/_planks/g, '')
      .replace(/planks_/g, '')
      .replace(/planks/g, '')
      .replace(/_/g, ' ')
      .split(' ')
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
      .join(' ');
    return `${plankName} ${mp[type]}`;
  };

  /* Creates */
  global.genNatProgRecipes = (base, stripped, planks) => {
    const stripLogWithSaw = {
      type: 'natural-progression:damage_tools',
      ingredients: [
        {
          tag: 'natural-progression:saw',
        },
        {
          item: base,
        },
      ],
      result: {
        item: stripped,
      },
    };

    const planksFromStrippedAxe = {
      type: 'natural-progression:damage_tools',
      ingredients: [
        {
          item: stripped,
        },
        {
          tag: 'natural-progression:axe',
        },
      ],
      result: {
        item: planks,
        count: 1,
      },
    };

    const planksFromStrippedSaw = {
      type: 'natural-progression:damage_tools',
      ingredients: [
        {
          item: stripped,
        },
        {
          tag: 'natural-progression:saw',
        },
      ],
      result: {
        item: planks,
        count: 4,
      },
    };

    return [stripLogWithSaw, planksFromStrippedAxe, planksFromStrippedSaw];
  };

  /**
   *
   * @param {event} evt
   * @param {IngredientJS} left
   * @param {IngredientJS} right
   * @param {ItemStackJS} output
   */
  global.genSmithingRecipe = (evt, left, right, output) => {
    evt.smithing(output, left, right);
    evt.recipes.custommachinery
      .custom_machine('harmeng:auto_smither', 85)
      .requireItem(left)
      .requireItem(right)
      .requireEnergyPerTick(300)
      .produceItem(output);
  };

  global.genLargeRecipe = (evt, pattern, key, result) => {
    ['extendedcrafting:shaped_table', 'create:mechanical_crafting'].forEach(type => {
      evt.custom({type: type, pattern: pattern, key: key, result: result});
    });
  };

  /**
   *
   * @param {RecipeEventJS} evt
   * @param {Object} first { tag/item: ResourceLocation }
   * @param {Object} second { tag/item: ResourceLocation }
   * @param {string} output
   * @param {number} qty
   */
  global.genUniversalAlloyingRecipe = (evt, first, second, output, qty) => {
    evt.custom({
      type: 'mekanism:combining',
      mainInput: {ingredient: first},
      extraInput: {ingredient: second},
      output: {
        item: output,
        count: qty,
      },
    });

    evt.custom({
      type: 'thermal:smelter',
      ingredients: [
        {value: [first], count: 1},
        {value: [second], count: 1},
      ],
      result: [{item: output, count: qty}],
      energy: 4800,
    });

    evt.custom({
      type: 'immersiveengineering:alloy',
      time: 400,
      input0: {base_ingredient: first},
      input1: second,
      result: {count: qty, base_ingredient: {item: output}},
    });

    evt.custom({
      type: 'create:mixing',
      ingredients: [first, second],
      results: [{item: output, count: qty}],
      heatRequirement: 'heated',
    });
  };

  /**
   * @param {IngredientJS} input
   * @param {ItemStackJS} output
   * @param {int | null} timeScale A scalar for how long the processing should take.
   */
  global.genUniversalCrushingRecipe = (evt, input, output, timeScale) => {
    const main = JSON.parse(input.toJson());
    const t = timeScale || 1;

    evt.custom({
      type: 'immersiveengineering:crusher',
      input: main,
      result: {count: output.getCount(), base_ingredient: {item: output.getId()}},
      energy: 1500 * t,
    });

    evt.custom({
      type: 'create:milling',
      ingredients: [main],
      results: [{item: output.getId(), count: output.getCount()}],
      processingTime: 500 * t,
    });

    evt.custom({
      type: 'create:crushing',
      ingredients: [main],
      results: [{item: output.getId(), count: output.getCount()}],
      processingTime: 400 * t,
    });

    evt.custom({
      type: 'mekanism:crushing',
      input: {ingredient: main},
      output: {item: output.getId(), count: output.getCount()},
    });

    evt.custom({
      type: 'thermal:pulverizer',
      ingredient: main,
      result: [{item: output.getId(), count: output.getCount()}],
      experience: 0,
    });
  };
});
