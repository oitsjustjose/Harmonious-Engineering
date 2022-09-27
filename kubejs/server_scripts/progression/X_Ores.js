onEvent('recipes', event => {
  const smeltingTypes = ['minecraft:smelting', 'minecraft:blasting'];

  const remove = () => {
    /*----------------- STATIC REMOVALS -----------------*/
    /* remove uraninite mineral from excavator */
    event.remove({id: 'immersiveengineering:mineral/uraninite'});

    /* Remove apatite recipes, since apatite doesn't generate */
    event.remove({input: 'thermal:apatite_ore'});
    event.remove({input: 'thermal:deepslate_apatite_ore'});
    event.remove({input: 'thermal:apatite'});
    event.remove({output: 'thermal:apatite'});

    /* Remove Create Outputs: */
    event.remove({input: '#create:crushed_ores'});
    event.remove({output: '#create:crushed_ores'});
    /*--------------- END STATIC REMOVALS ---------------*/

    global.ores
      .filter(x => x.dropsRaw)
      .forEach(ore => {
        /* Remove basic {x} -> ingot smelting */
        smeltingTypes.forEach(sType =>
          event.remove({type: sType, input: `#forge:ingots/${ore.resourceName}`})
        );

        /* Remove machine-based recipes that yield dusts */
        event.remove({input: `#forge:ores/${ore.resourceName}`, output: `#forge:dusts`});
        event.remove({input: `#forge:raw_materials/${ore.resourceName}`, output: `#forge:dusts`});
        event.remove({id: `thermal:machines/smelter/smelter_raw_${ore.resourceName}`});
        event.remove({id: `immersiveengineering:crusher/raw_block_${ore.resourceName}`});
        event.remove({id: `immersiveengineering:crusher/raw_ore_${ore.resourceName}`});
        event.remove({id: `immersiveengineering:arcfurnace/raw_block_${ore.resourceName}`});
        event.remove({
          input: `#forge:storage_blocks/raw_${ore.resourceName}`,
          output: `#forge:dusts`,
        });

        /* Remove Raw Ore -> Dust recipes for this ore */
        event.remove({input: `#forge:ores/${ore.resourceName}`, output: '#forge:dusts'});
        event.remove({input: `#forge:ores/${ore.resourceName}`, output: '#forge:ingots'});
        event.remove({input: `#forge:ores/${ore.resourceName}`, output: '#forge:nuggets'});
        event.remove({input: `#forge:raw_materials/${ore.resourceName}`, output: '#forge:dusts'});
        event.remove({input: `#forge:raw_materials/${ore.resourceName}`, output: '#forge:ingots'});
        event.remove({input: `#forge:raw_materials/${ore.resourceName}`, output: '#forge:nuggets'});
      });
  };

  const oreSmelting = () => {
    global.ores
      .filter(x => x.dropsRaw)
      .forEach(ore => {
        /* 1 Raw Ore to 3 Nuggets Via Smelting */
        event.smelting(
          `3x #forge:nuggets/${ore.resourceName}`,
          `#forge:raw_materials/${ore.resourceName}`
        );
        /* 1 Raw Ore to 4 Nuggets Via Blasting */
        event.blasting(
          `4x #forge:nuggets/${ore.resourceName}`,
          `#forge:raw_materials/${ore.resourceName}`
        );
        /* 1 Ore to 5 Nuggets Via Smelting */
        event.smelting(`5x #forge:nuggets/${ore.resourceName}`, `#forge:ores/${ore.resourceName}`);
        /* 1 Ore to 11 Nuggets Via Blasting */
        event.blasting(`11x #forge:nuggets/${ore.resourceName}`, `#forge:ores/${ore.resourceName}`);
        /* 1 Dust to 1 Ingot via Smelting or Blasting*/
        event.smelting(`#forge:ingots/${ore.resourceName}`, `#forge:dusts/${ore.resourceName}`);
        event.blasting(`#forge:ingots/${ore.resourceName}`, `#forge:dusts/${ore.resourceName}`);
      });
  };

  const oreProcessing = () => {
    global.ores
      .filter(x => x.dropsRaw)
      .forEach(ore => {
        const raw = `#forge:raw_materials/${ore.resourceName}`;
        const dust = `#forge:dusts/${ore.resourceName}`;

        const deepslateOre = ore.variants.deepslate;
        const nonDsOres = `#forge:non_deepslate_ores/${ore.resourceName}`;

        /* Crush Raw {x} to {x} Dust */
        event.recipes.createCrushing([dust], [raw]);
        event.recipes.immersiveengineeringCrusher(dust, raw);
        event.recipes.thermal.pulverizer(Item.of(dust).withChance(1.025), raw);

        /* Crush {x} Ore to {x} Dust -- includes Deepslate Handling :) */
        event.recipes.createCrushing([`2x ${dust}`], [nonDsOres]);
        event.recipes.immersiveengineeringCrusher(`2x ${dust}`, nonDsOres);
        event.recipes.thermal.pulverizer(Item.of(dust).withChance(2.0), nonDsOres);

        if (!!deepslateOre) {
          event.recipes.createCrushing([`3x ${dust}`], [deepslateOre]);
          event.recipes.immersiveengineeringCrusher(`3x ${dust}`, deepslateOre);
          event.recipes.thermal.pulverizer(Item.of(dust).withChance(3.0), deepslateOre);
        }
      });
  };

  remove();
  oreSmelting();
  oreProcessing();
});
