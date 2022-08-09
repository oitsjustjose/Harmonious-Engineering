onEvent('recipes', event => {
  const resourceFromName = (metal, type, qty) => {
    const mc = Item.of(`${qty || 1}x minecraft:${metal}_${type}`);
    const thermal = Item.of(`${qty || 1}x thermal:${metal}_${type}`);
    const create = Item.of(`${qty || 1}x create:${metal}_${type}`);
    const ie = Item.of(`${qty || 1}x immersiveengineering:${type}_${metal}`);
    const be = Item.of(`${qty || 1}x beyond_earth:${metal}_${type}`);
    if (mc !== Item.empty) return mc;
    if (thermal !== Item.empty) return thermal;
    if (create !== Item.empty) return create;
    if (ie !== Item.empty) return ie;
    if (be !== Item.empty) return be;

    console.log(`FAILED TO GUESS ${metal} ${type}`);
    return Item.empty;
  };

  const remove = () => {
    event.remove({input: 'thermal:apatite_ore'});
    event.remove({input: 'thermal:deepslate_apatite_ore'});
    event.remove({input: 'thermal:apatite'});
    event.remove({output: 'thermal:apatite'});

    // Remove Raw Ore -> Dusts and all Create Crushing Recipes
    event.remove({input: '#forge:ores', output: '#forge:dusts'});
    event.remove({input: '#forge:ores', output: '#forge:ingots'});
    event.remove({input: '#forge:ores', output: '#forge:nuggets'});
    event.remove({input: '#forge:raw_materials', output: '#forge:dusts'});
    event.remove({input: '#forge:raw_materials', output: '#forge:ingots'});
    event.remove({input: '#forge:raw_materials', output: '#forge:nuggets'});

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

  const toNuggets = () => {
    global.metals.forEach(metal => {
      // Raw Ore to Nuggets
      event.smelting(resourceFromName(metal, 'nugget', 3), `#forge:raw_materials/${metal}`);
      event.blasting(resourceFromName(metal, 'nugget', 4), `#forge:raw_materials/${metal}`);
      // Ore to Nuggets
      event.smelting(resourceFromName(metal, 'ingot', 1), `#forge:ores/${metal}`);
      event.blasting(resourceFromName(metal, 'nugget', 11), `#forge:ores/${metal}`);
    });
  };

  const toDust = () => {
    global.metals.forEach(metal => {
      const raw = `#forge:raw_materials/${metal}`;
      const dust = `#forge:dusts/${metal}`;
      const ore = `#forge:ores/${metal}`;

      event.recipes.createCrushing([`2x ${dust}`], [ore]);
      event.recipes.createCrushing([dust], [raw]);
      event.recipes.immersiveengineeringCrusher(`2x ${dust}`, ore);
      event.recipes.immersiveengineeringCrusher(dust, raw);
      event.recipes.thermal.pulverizer(Item.of(dust).withChance(2.0), ore);
      event.recipes.thermal.pulverizer(Item.of(dust).withChance(1.025), raw);
    });
  };

  const toIngots = () => {
    global.metals.forEach(metal => {
      event.smelting(resourceFromName(metal, 'ingot'), `#forge:dusts/${metal}`);
      event.blasting(resourceFromName(metal, 'ingot'), `#forge:dusts/${metal}`);
    });
  };

  remove();
  toNuggets();
  toDust();
  toIngots();
});
