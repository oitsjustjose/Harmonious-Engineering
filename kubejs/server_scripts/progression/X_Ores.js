const remove = event => {
  // Remove Raw Ore -> Dusts and all Create Crushing Recipes
  event.remove({input: '#forge:raw_materials', output: '#forge:dusts'});
  event.remove({output: '#create:crushed_ores'});

  global.metals.forEach(metal => {
    event.remove({
      type: 'minecraft:smelting',
      output: `#forge:ingots/${metal}`,
    });

    event.remove({
      type: 'minecraft:blasting',
      output: `#forge:ingots/${metal}`,
    });

    event.remove({input: `#forge:ores/${metal}`, output: `#forge:dusts`});
    event.remove({input: `#forge:storage_blocks/raw_${metal}`, output: `#forge:dusts`});
    event.remove({id: `thermal:machines/smelter/smelter_raw_${metal}`});
    event.remove({id: `immersiveengineering:crusher/raw_block_${metal}`});
    event.remove({id: `immersiveengineering:crusher/raw_ore_${metal}`});
    event.remove({id: `immersiveengineering:arcfurnace/raw_block_${metal}`});
  });
};

const toNuggets = event => {
  global.metals.forEach(metal => {
    // Raw Ore to Nuggets
    event.smelting(`3x #forge:nuggets/${metal}`, `#forge:raw_materials/${metal}`);
    event.blasting(`4x #forge:nuggets/${metal}`, `#forge:raw_materials/${metal}`);
    // Ore to Nuggets
    event.smelting(`1x #forge:ingots/${metal}`, `#forge:ores/${metal}`);
    event.blasting(`11x #forge:nuggets/${metal}`, `#forge:ores/${metal}`);
  });
};

const toDust = event => {
  global.metals.forEach(metal => {
    const raw = `#forge:raw_materials/${metal}`;
    const dust = `#forge:dusts/${metal}`;
    const ore = `#forge:ores/${metal}`;

    event.recipes.createCrushing([`2x ${dust}`], [ore]);
    event.recipes.createCrushing([dust], [raw]);
    event.recipes.immersiveengineeringCrusher(`2x ${dust}`, ore);
    event.recipes.immersiveengineeringCrusher(dust, raw);
    event.recipes.thermal.pulverizer(`2x ${dust}`, ore);
    event.recipes.thermal.pulverizer(dust, raw);
  });
};

const toIngots = event => {
  global.metals.forEach(metal => {
    event.smelting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`);
    event.blasting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`);
  });
};

onEvent('recipes', event => {
  remove(event);
  toNuggets(event);
  toDust(event);
  toIngots(event);
});
