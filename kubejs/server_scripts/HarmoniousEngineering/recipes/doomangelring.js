onEvent("recipes", (event) => {
  event.remove({ output: "doomangelring:itemdoomangelring" });

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      "FFBBBFF",
      "FBNRNBF",
      "BHSGSHB",
      "BLT TLB",
      "BHSGSHB",
      " BNRNB ",
      "  BBB  ",
    ],
    key: {
      B: {
        item: "create:brass_ingot",
      },
      S: {
        item: "minecraft:nether_star",
      },
      G: {
        item: "tconstruct:hepatizon_ingot",
      },
      R: {
        item: "create:refined_radiance",
      },
      L: {
        item: "alexsmobs:void_worm_eye",
      },
      H: {
        item: "buzzier_bees:bee_bottle",
      },
      N: {
        item: "minecraft:netherite_block",
      },
      T: {
        item: "alexsmobs:tarantula_hawk_wing",
      },
      F: {
        item: "minecraft:feather",
      },
    },
    result: {
      item: "doomangelring:itemdoomangelring",
      count: 1,
    },
  });
});