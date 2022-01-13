onEvent("recipes", (event) => {
  event.remove({ output: "create:copper_ingot" });
  event.remove({ output: "create:zinc_ingot" });

  event.remove({ output: "create:hand_crank" });
  event.remove({ output: "create:shaft" });
  event.remove({ output: "create:water_wheel" });
  event.remove({ output: "create:white_sail" });
  // Leave the createadditions recipe behind
  event.remove({ id: "create:crafting/kinetics/white_sail" });
  event.remove({ id: "create:cutting/andesite_alloy" });

  event.shaped("18x create:shaft", ["R", "R"], { R: "#forge:rods/steel" });
  event.shaped("1x create:hand_crank", [" C ", "PPP", "  A"], {
    P: "#minecraft:planks",
    C: "create:cogwheel",
    A: "create:andesite_alloy",
  });
  event.shaped("1x create:water_wheel", ["SSS", "SCS", "SSS"], {
    S: "#forge:treated_wood_slab",
    C: "create:large_cogwheel",
  });

  event.custom({
    type: "create:cutting",
    ingredients: [
      {
        tag: "forge:ingots/steel",
      },
    ],
    results: [
      {
        item: "create:shaft",
        count: 20,
      },
    ],
    processingTime: 200,
  });

  event.custom({
    type: "improvedbackpacks:sewing",
    spools_count: 4,
    first: {
      item: "create:sail_frame",
    },
    first_count: 1,
    second: {
      item: "immersiveengineering:windmill_sail",
    },
    second_count: 1,
    result: `create:white_sail`,
  });
});
