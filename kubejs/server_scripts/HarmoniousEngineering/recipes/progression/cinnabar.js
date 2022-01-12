/* Handles turning cinnabar into redstone in the many ways */
const ieCrusher = (event) => {
  event.custom({
    type: "immersiveengineering:crusher",
    secondaries: [
      {
        chance: 0.6,
        output: {
          item: "minecraft:redstone",
        },
      },
    ],
    result: {
      count: 4,
      base_ingredient: {
        item: "minecraft:redstone",
      },
    },
    input: {
      tag: "forge:gems/cinnabar",
    },
    energy: 9000,
  });

  event.custom({
    type: "immersiveengineering:crusher",
    secondaries: [
      {
        chance: 0.6,
        output: {
          item: "minecraft:redstone",
        },
      },
    ],
    result: {
      count: 6,
      base_ingredient: {
        item: "minecraft:redstone",
      },
    },
    input: {
      tag: "forge:ores/cinnabar",
    },
    energy: 12000,
  });
};

const mill = (event) => {
  event.custom({
    type: "create:milling",
    ingredients: [
      {
        tag: "forge:gems/cinnabar",
      },
    ],
    results: [
      {
        item: "minecraft:redstone",
        count: 1,
      },
      {
        item: "minecraft:redstone",
        count: 1,
        chance: 0.5,
      },
    ],
    processingTime: 500,
    conditions: [
      {
        value: {
          tag: "forge:gems/cinnabar",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
  });
};

const crushingWheel = (event) => {
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        tag: "forge:ores/cinnabar",
      },
    ],
    results: [
      {
        item: "minecraft:redstone",
        count: 8,
      },
      {
        item: "minecraft:cobblestone",
        chance: 0.3,
      },
    ],
    processingTime: 850,
    conditions: [
      {
        value: {
          tag: "forge:ores/cinnabar",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
  });

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        tag: "forge:gems/cinnabar",
      },
    ],
    results: [
      {
        item: "minecraft:redstone",
        count: 5,
      },
      {
        item: "minecraft:redstone",
        count: 1,
        chance: 0.3,
      },
    ],
    processingTime: 600,
    conditions: [
      {
        value: {
          tag: "forge:gems/cinnabar",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
  });
};

const enrichmentChamber = (event) => {
  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: {
        tag: "forge:gems/cinnabar",
      },
    },
    output: {
      item: "minecraft:redstone",
      count: 7,
    },
  });
};

const purifier = (event) => {
  event.custom({
    type: "mekanism:purifying",
    itemInput: {
      ingredient: {
        tag: "forge:gems/cinnabar",
      },
    },
    gasInput: {
      amount: 1,
      gas: "mekanism:oxygen",
    },
    output: {
      item: "minecraft:redstone",
      count: 11,
    },
  });
};

const pulverizer = (event) => {
  event.remove({ id: "thermal:machine/pulverizer/pulverizer_cinnabar" });
  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      tag: "forge:ores/cinnabar",
    },
    result: [
      {
        item: "minecraft:redstone",
        count: 8,
      },
      {
        item: "minecraft:redstone",
        count: 3,
        chance: 0.85,
      },
      {
        item: "minecraft:gravel",
        chance: 0.2,
      },
    ],
    experience: 1.4,
  });

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      tag: "forge:gems/cinnabar",
    },
    result: [
      {
        item: "minecraft:redstone",
        count: 6,
      },
      {
        item: "minecraft:redstone",
        count: 2,
        chance: 0.65,
      },
    ],
    experience: 0.8,
  });
};

onEvent("recipes", (event) => {
  crushingWheel(event);
  enrichmentChamber(event);
  ieCrusher(event);
  mill(event);
  pulverizer(event);
  purifier(event);
});
