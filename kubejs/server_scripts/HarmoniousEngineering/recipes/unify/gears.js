const removeThermalGearRecipes = event => {
  const gears = [
    'aluminum',
    'brass',
    'bronze',
    'cast_iron',
    'cobalt',
    'constantan',
    'copper',
    'diamond',
    'electrum',
    'emerald',
    'enderium',
    'gold',
    'invar',
    'iridium',
    'iron',
    'lapis',
    'lead',
    'lumium',
    'nickel',
    'osmium',
    'peridot',
    'ruby',
    'sapphire',
    'signalum',
    'silver',
    'steel',
    'tin',
    'uranium',
    'zinc',
  ];

  gears.forEach(mat => {
    event.remove({output: `thermal:${mat}_gear`});
    event.remove({id: `thermal:machine/press/press_${mat}_ingot_to_gear`});
    event.remove({output: `emendatusenigmatica:${mat}_gear`});
  });

  event.remove({output: 'emendatusenigmatica:quartz_gear'});
};

const addGearRecipesForEE = event => {
  const allEeMaterials = [
    'forge:ingots/aluminum',
    'forge:ingots/brass',
    'forge:ingots/bronze',
    'forge:ingots/cast_iron',
    'forge:ingots/cobalt',
    'forge:ingots/constantan',
    'forge:ingots/copper',
    'forge:gems/diamond',
    'forge:ingots/electrum',
    'forge:gems/emerald',
    'forge:ingots/enderium',
    'forge:ingots/gold',
    'forge:ingots/invar',
    'forge:ingots/iridium',
    'forge:ingots/iron',
    'forge:gems/lapis',
    'forge:ingots/lead',
    'forge:ingots/lumium',
    'forge:ingots/nickel',
    'forge:ingots/osmium',
    'forge:gems/peridot',
    'forge:gems/ruby',
    'forge:gems/sapphire',
    'forge:ingots/signalum',
    'forge:ingots/silver',
    'forge:ingots/steel',
    'forge:ingots/tin',
    'forge:ingots/uranium',
    'forge:ingots/zinc',
  ];

  // Manual crafting
  allEeMaterials.forEach(mat => {
    const baseMat = mat.replace('forge:ingots/', '').replace('forge:gems/', '');

    event.remove({id: `emendatusenigmatica:gear_from_ingot/${baseMat}`});
    event.remove({id: `emendatusenigmatica:gear_from_gem/${baseMat}`});
    event.custom({
      result: {
        item: `emendatusenigmatica:${baseMat}_gear`,
      },
      type: 'natural-progression:damage_tools',
      ingredients: [
        {
          item: 'create:cogwheel',
        },
        {
          item: 'immersiveengineering:hammer',
        },
        {
          tag: `forge:plates/${baseMat}`,
        },
        {
          tag: `forge:plates/${baseMat}`,
        },
        {
          tag: `forge:plates/${baseMat}`,
        },
        {
          tag: `forge:plates/${baseMat}`,
        },
      ],
    });
  });

  // Thermal Multiservo Press
  allEeMaterials.forEach(mat => {
    const baseMat = mat.replace('forge:ingots/', '').replace('forge:gems/', '');
    event.remove({output: `emendatusenigmatica:${baseMat}_gear`});
    event.custom({
      type: 'thermal:press',
      ingredients: [
        {
          tag: mat,
          count: 4,
        },
        {
          item: 'thermal:press_gear_die',
        },
      ],
      result: [
        {
          item: `emendatusenigmatica:${baseMat}_gear`,
        },
      ],
    });
  });

  // IE Metal Press
  allEeMaterials.forEach(mat => {
    const baseMat = mat.replace('forge:ingots/', '').replace('forge:gems/', '');
    event.custom({
      type: 'immersiveengineering:metal_press',
      mold: {
        item: 'immersiveengineering:mold_gear',
      },
      input: {
        count: 4,
        base_ingredient: {
          tag: mat,
        },
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_gear`,
      },
      energy: 2400,
    });
  });

  // Tinkers Casting
  allEeMaterials.forEach(mat => {
    const baseMat = mat.replace('forge:ingots/', '').replace('forge:gems/', '');

    event.custom({
      type: 'tconstruct:casting_table',
      cast: {
        tag: 'tconstruct:casts/multi_use/gear',
      },
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 576,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_gear`,
      },
      cooling_time: 100,
    });

    event.custom({
      type: 'tconstruct:casting_table',
      cast: {
        tag: 'tconstruct:casts/single_use/gear',
      },
      cast_consumed: true,
      fluid: {
        tag: `forge:molten_${baseMat}`,
        amount: 576,
      },
      result: {
        item: `emendatusenigmatica:${baseMat}_gear`,
      },
      cooling_time: 100,
    });
  });
};

onEvent('recipes', event => {
  removeThermalGearRecipes(event);
  addGearRecipesForEE(event);
});
