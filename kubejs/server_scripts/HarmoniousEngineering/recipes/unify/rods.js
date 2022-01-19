const removeRodRecipes = (event) => {
  const rodMats = [
    "forge:ingots/aluminum",
    "forge:ingots/brass",
    "forge:ingots/bronze",
    "forge:ingots/cast_iron",
    "forge:ingots/cobalt",
    "forge:ingots/constantan",
    "forge:ingots/copper",
    "forge:gems/diamond",
    "forge:ingots/electrum",
    "forge:gems/emerald",
    "forge:ingots/enderium",
    "forge:ingots/gold",
    "forge:ingots/invar",
    "forge:ingots/iridium",
    "forge:ingots/iron",
    "forge:gems/lapis",
    "forge:ingots/lead",
    "forge:ingots/lumium",
    "forge:ingots/nickel",
    "forge:ingots/osmium",
    "forge:gems/peridot",
    "forge:gems/ruby",
    "forge:gems/sapphire",
    "forge:ingots/signalum",
    "forge:ingots/silver",
    "forge:ingots/steel",
    "forge:ingots/tin",
    "forge:ingots/uranium",
    "forge:ingots/zinc",
  ];

  rodMats.forEach((tag) => {
    const baseMat = tag.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.remove({ output: `#forge:rods/${baseMat}` });
    // Remove existing inconsistent tcon recipes
    event.remove({
      id: `tconstruct:smeltery/casting/metal/${baseMat}/rod_gold_cast`,
    });
    event.remove({
      id: `tconstruct:smeltery/casting/metal/${baseMat}/rod_sand_cast`,
    });
    event.remove({ id: `createaddition:rolling/${baseMat}_ingot` });
    event.remove({ id: `immersiveengineering:metalpress/rod_${baseMat}` });
  });
};

const addRodRecipesForEE = (event) => {
  const allEeMaterials = [
    "forge:ingots/aluminum",
    "forge:ingots/brass",
    "forge:ingots/bronze",
    "forge:ingots/cast_iron",
    "forge:ingots/cobalt",
    "forge:ingots/constantan",
    "forge:ingots/copper",
    "forge:gems/diamond",
    "forge:ingots/electrum",
    "forge:gems/emerald",
    "forge:ingots/enderium",
    "forge:ingots/gold",
    "forge:ingots/invar",
    "forge:ingots/iridium",
    "forge:ingots/iron",
    "forge:gems/lapis",
    "forge:ingots/lead",
    "forge:ingots/lumium",
    "forge:ingots/nickel",
    "forge:ingots/osmium",
    "forge:gems/peridot",
    "forge:gems/ruby",
    "forge:gems/sapphire",
    "forge:ingots/signalum",
    "forge:ingots/silver",
    "forge:ingots/steel",
    "forge:ingots/tin",
    "forge:ingots/uranium",
    "forge:ingots/zinc",
  ];

  // Manual crafting
  allEeMaterials.forEach((tag) => {
    const baseMat = tag.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.shaped(`2x emendatusenigmatica:${baseMat}_rod`, ["I", "I"], {
      I: `#${tag}`,
    });
  });

  // Thermal multiservo press
  allEeMaterials.forEach((tag) => {
    const baseMat = tag.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "thermal:press",
      ingredients: [
        {
          tag: tag,
        },
        {
          item: "immersiveengineering:mold_rod",
        },
      ],
      result: [
        {
          item: `emendatusenigmatica:${baseMat}_rod`,
          count: 2,
        },
      ],
    });
  });

  // IE Press (overwritten from AVSP/replaceoutputs.js)
  allEeMaterials.forEach((mat) => {
    const baseMat = mat.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "immersiveengineering:metal_press",
      mold: {
        item: "immersiveengineering:mold_rod",
      },
      input: {
        count: 1,
        base_ingredient: {
          tag: mat,
        },
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_rod`,
        count: 2,
      },
      energy: 2400,
    });
  });

  // TConstruct Casting
  allEeMaterials.forEach((tag) => {
    const baseMat = tag.replace("forge:ingots/", "").replace("forge:gems/", "");

    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/rod",
      },
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 72,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_rod`,
      },
      cooling_time: 20,
    });

    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/single_use/rod",
      },
      cast_consumed: true,
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 72,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_rod`,
      },
      cooling_time: 20,
    });
  });

  // Create Additions Rolling
  allEeMaterials.forEach((tag) => {
    const baseMat = tag.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: tag,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_rod`,
        count: 2,
      },
    });
  });
};

onEvent("recipes", (event) => {
  removeRodRecipes(event);
  addRodRecipesForEE(event);

  // custom thermal recipe for graphite electrode
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/hop_graphite",
        count: 4,
      },
      {
        item: "immersiveengineering:mold_rod",
      },
    ],
    result: [
      {
        item: "immersiveengineering:graphite_electrode",
        count: 1,
        nbt: {
          graphDmg: 48000,
        },
      },
    ],
  });
});
