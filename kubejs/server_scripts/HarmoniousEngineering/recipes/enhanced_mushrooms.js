onEvent("recipes", (event) => {
  event.remove({
    id: "enhanced_mushrooms:crafting/red_mushroom/red_mushroom_planks",
  });
  event.remove({
    id: "enhanced_mushrooms:crafting/brown_mushroom/brown_mushroom_planks",
  });
  event.remove({
    id: "enhanced_mushrooms:crafting/glowshroom/glowshroom_planks",
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_red_mushroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:red_mushroom_planks",
      count: 4,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_brown_mushroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:brown_mushroom_planks",
      count: 4,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_glowshroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:glowshroom_planks",
      count: 4,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_brown_mushroom_hyphae",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:brown_mushroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_brown_mushroom_stem",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:brown_mushroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_glowshroom_hyphae",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:glowshroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_glowshroom_stem",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:glowshroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_red_mushroom_hyphae",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:red_mushroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_red_mushroom_stem",
      },
      {
        tag: "natural-progression:axe",
      },
    ],
    result: {
      item: "enhanced_mushrooms:red_mushroom_planks",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:brown_mushroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_brown_mushroom_hyphae",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:brown_mushroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_brown_mushroom_stem",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:glowshroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_glowshroom_hyphae",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:glowshroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_glowshroom_stem",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:red_mushroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_red_mushroom_hyphae",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:red_mushroom_stem",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:stripped_red_mushroom_stem",
      count: 1,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_brown_mushroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:brown_mushroom_planks",
      count: 4,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_glowshroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:glowshroom_planks",
      count: 4,
    },
  });

  event.custom({
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "enhanced_mushrooms",
      },
    ],
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "enhanced_mushrooms:stripped_red_mushroom_hyphae",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "enhanced_mushrooms:red_mushroom_planks",
      count: 4,
    },
  });
});
