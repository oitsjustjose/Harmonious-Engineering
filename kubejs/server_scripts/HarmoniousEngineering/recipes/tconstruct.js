onEvent("recipes", (event) => {
  event.remove({ output: "tconstruct:smeltery_controller" });
  event.remove({ output: "tconstruct:seared_heater" });
  event.remove({ output: "tconstruct:seared_melter" });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "immersiveengineering:hammer",
      },
      {
        tag: "harmeng:diamond_tier_saws",
      },
      {
        item: "tconstruct:seared_bricks",
      },
      {
        item: "tconstruct:seared_bricks",
      },
      {
        tag: "forge:plates/copper",
      },
    ],
    result: {
      item: "tconstruct:smeltery_controller",
      count: 1,
    },
  });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "immersiveengineering:hammer",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
    ],
    result: {
      item: "tconstruct:seared_heater",
      count: 1,
    },
  });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        tag: "tconstruct:tanks",
      },
      {
        item: "immersiveengineering:hammer",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
      {
        item: "tconstruct:seared_brick",
      },
    ],
    result: {
      item: "tconstruct:seared_melter",
      count: 1,
    },
  });
});
