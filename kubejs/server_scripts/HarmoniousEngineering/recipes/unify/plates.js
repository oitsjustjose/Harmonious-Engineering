const addPlateRecipesForEE = (event) => {
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

  // Thermal Multiservo Press
  allEeMaterials.forEach((mat) => {
    const baseMat = mat.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "thermal:press",
      ingredients: [
        {
          tag: mat,
          count: 1,
        },
      ],
      result: [
        {
          item: `emendatusenigmatica:${baseMat}_plate`,
        },
      ],
    });
  });

  // Create metal press
  allEeMaterials.forEach((mat) => {
    const baseMat = mat.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "create:pressing",
      ingredients: [
        {
          tag: mat,
        },
      ],
      results: [
        {
          item: `emendatusenigmatica:${baseMat}_plate`,
        },
      ],
    });
  });

  // IE Metal Press
  allEeMaterials.forEach((mat) => {
    const baseMat = mat.replace("forge:ingots/", "").replace("forge:gems/", "");
    event.custom({
      type: "immersiveengineering:metal_press",
      mold: {
        item: "immersiveengineering:mold_plate",
      },
      input: {
        tag: mat,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_plate`,
      },
      energy: 2400,
    });
  });

  // Tinkers Casting
  allEeMaterials.forEach((mat) => {
    const baseMat = mat.replace("forge:ingots/", "").replace("forge:gems/", "");

    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/plate",
      },
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 144,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_plate`,
      },
      cooling_time: 65,
    });

    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/single_use/plate",
      },
      cast_consumed: true,
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 144,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_plate`,
      },
      cooling_time: 65,
    });
  });
};

const removeIERecipes = (event) => {
  [
    "aluminum",
    "brass",
    "bronze",
    "cast_iron",
    "cobalt",
    "constantan",
    "copper",
    "electrum",
    "enderium",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lead",
    "lumium",
    "nickel",
    "osmium",
    "signalum",
    "silver",
    "steel",
    "tin",
    "uranium",
    "zinc",
  ].forEach((mat) => {
    event.remove({ id: `immersiveengineering:metalpress/plate_${mat}` });
  });
};

const removeThermalPlateRecipes = (event) => {
  const plates = [
    "bronze_plate",
    "constantan_plate",
    "copper_plate",
    "diamond_plate",
    "electrum_plate",
    "emerald_plate",
    "enderium_plate",
    "gold_plate",
    "invar_plate",
    "iron_plate",
    "lapis_plate",
    "lead_plate",
    "lumium_plate",
    "nickel_plate",
    "quartz_plate",
    "signalum_plate",
    "silver_plate",
    "tin_plate",
  ];

  plates.forEach((plate) => {
    const mat = plate.replace("_plate", "");
    event.remove({ output: `thermal:${plate}` });
    event.remove({ id: `thermal:machine/press/press_${mat}_ingot_to_plate` });
  });
  event.remove({
    id: "thermal:compat/immersiveengineering/press_ie_uranium_ingot_to_plate",
  });
};

const removeTinkersPlateRecipes = (event) => {
  [
    "aluminum",
    "brass",
    "bronze",
    "cast_iron",
    "cobalt",
    "constantan",
    "copper",
    "electrum",
    "enderium",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lead",
    "lumium",
    "nickel",
    "osmium",
    "signalum",
    "silver",
    "steel",
    "tin",
    "uranium",
    "zinc",
  ].forEach((mat) => {
    event.remove({
      id: `tconstruct:smeltery/casting/metal/${mat}/plate_gold_cast`,
    });
    event.remove({
      id: `tconstruct:smeltery/casting/metal/${mat}/plate_sand_cast`,
    });
  });
};

const removeCreateRecipes = (event) => {
  event.remove({ id: "create:pressing/iron_ingot" });
  event.remove({ id: "create:pressing/gold_ingot" });
  event.remove({ id: "create:pressing/copper_ingot" });
  event.remove({ id: "create:pressing/brass_ingot" });
  event.remove({ id: "createaddition:pressing/zinc_ingot" });
  event.remove({ id: "minecraft:pressing/zinc_sheet" });
  event.remove({ id: "minecraft:pressing/netherite_sheet" });
};

onEvent("recipes", (event) => {
  removeThermalPlateRecipes(event);
  removeTinkersPlateRecipes(event);
  removeCreateRecipes(event);
  removeIERecipes(event);

  addPlateRecipesForEE(event);
});
