onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  const cleanup = () => {
    /** DEDUPLICATION OF RESOURCES **/
    event.remove({output: 'beyond_earth:iron_plate'});
    event.remove({output: 'beyond_earth:iron_stick'});
    event.remove({output: 'beyond_earth:compressed_steel'});
    event.remove({output: 'beyond_earth:engine_frame'});
    event.remove({output: 'beyond_earth:engine_fan'});
    event.replaceInput({}, 'beyond_earth:iron_plate', '#forge:plates/iron');
    event.replaceInput({}, 'beyond_earth:iron_stick', '#forge:rods/iron');
    event.replaceInput({}, 'beyond_earth:compressed_steel', '#forge:plates/steel');
    event.replaceInput({}, '#beyond_earth:compresseds/steel', '#forge:plates/steel');
    event.replaceInput({}, 'beyond_earth:engine_frame', 'thermal:machine_frame');
    event.replaceInput({}, 'beyond_earth:engine_fan', 'create:propeller');

    /* Removed because of dupe glitch */
    event.remove({output: 'beyond_earth:rover'});
    /* Outright unwanted */
    event.remove({output: 'beyond_earth:coal_generator'});
    event.remove({output: 'beyond_earth:coal_lantern'});
    event.remove({output: 'beyond_earth:coal_torch'});
    event.remove({output: 'beyond_earth:compressor'});
    event.remove({output: 'beyond_earth:fuel_bucket'});
    event.remove({output: 'beyond_earth:fuel_refinery'});
    event.remove({output: 'beyond_earth:hammer'});
    event.remove({output: 'beyond_earth:oil_bucket'});
    event.remove({output: 'beyond_earth:solar_panel'});
    event.remove({output: 'beyond_earth:water_pump'});
    event.remove({output: 'beyond_earth:wheel'});
    event.remove({output: Fluid.of('beyond_earth:fuel_flowing')});
    event.remove({output: Fluid.of('beyond_earth:fuel')});
    event.remove({output: Fluid.of('beyond_earth:oil_flowing')});
    event.remove({output: Fluid.of('beyond_earth:oil')});
  };

  const integration = () => {
    /* Plates in Multiservo Press */
    event.remove({output: '#beyond_earth:compresseds'});
    event.remove({output: '#forge:plates', mod: 'beyond_earth'});
    event.recipes.thermal.press('beyond_earth:desh_plate', ['1x #forge:ingots/desh']);
    event.recipes.thermal.press('beyond_earth:compressed_desh', [ '2x beyond_earth:desh_ingot' ]);
    event.recipes.thermal.press('beyond_earth:compressed_calorite', [ '2x beyond_earth:calorite_ingot' ]);
    event.recipes.thermal.press('beyond_earth:compressed_ostrum', [ '2x beyond_earth:ostrum_ingot' ]);

    /* NASA workbench in Mechanical Crafter */
    event.remove({output: 'beyond_earth:nasa_workbench'});
    CustomRecipeHandler.giant(
      Item.of('beyond_earth:nasa_workbench'),
      ['  A  ', 'DPCPL', ' SSS ', 'PSFSP', 'PSSSP'],
      {
        A: [
          {item: 'pneumaticcraft:assembly_io_unit_export'},
          {item: 'pneumaticcraft:assembly_io_unit_import'},
        ],
        C: {item: 'minecraft:crafting_table'},
        D: {item: 'pneumaticcraft:assembly_drill'},
        F: {item: 'industrialforegoing:machine_frame_supreme'},
        L: {item: 'pneumaticcraft:assembly_laser'},
        P: {tag: 'forge:plates/signalum'},
        S: {tag: 'immersiveengineering:scaffoldings/steel'},
      }
    );

    [
      'beyond_earth:oxygen_mask',
      'beyond_earth:space_suit',
      'beyond_earth:space_pants',
      'beyond_earth:space_boots',
    ].forEach(x => event.replaceInput({output: x}, '#forge:plates/iron', 'create:sturdy_sheet'));

    event.remove({output: 'beyond_earth:oxygen_loader'});
    event.shaped('beyond_earth:oxygen_loader', ['SSS', 'OFO', 'SSS'], {
      F: 'industrialforegoing:machine_frame_supreme',
      O: 'beyond_earth:oxygen_tank',
      S: 'create:sturdy_sheet',
    });

    event.remove({output: 'beyond_earth:oxygen_bubble_distributor'});
    CustomRecipeHandler.automatableSmithing(
      Item.of('beyond_earth:oxygen_bubble_distributor'),
      Item.of('beyond_earth:oxygen_loader'),
      Item.of('create:propeller')
    );
  };

  const rockets = () => {
    /* Couldn't use replaceInput - probably because these recipes are formatted wierdly.. */

    event.remove({id: 'beyond_earth:nasa_workbenching/tier1'});
    event.custom({
      type: 'beyond_earth:nasa_workbench',
      input: {
        parts: {
          'beyond_earth:nose': [{item: 'beyond_earth:rocket_nose_cone'}],
          'beyond_earth:body': [
            {tag: 'forge:plates/steel'},
            {tag: 'forge:plates/steel'},
            {tag: 'forge:plates/steel'},
            {tag: 'forge:plates/steel'},
            {tag: 'forge:plates/steel'},
            {tag: 'forge:plates/steel'},
          ],
          'beyond_earth:tank': [
            {tag: 'beyond_earth:tanks/steel'},
            {tag: 'beyond_earth:tanks/steel'},
          ],
          'beyond_earth:fin_left': [
            {item: 'beyond_earth:rocket_fin'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:fin_right': [
            {item: 'beyond_earth:rocket_fin'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:engine': [{tag: 'beyond_earth:engines/steel'}],
        },
      },
      output: {item: 'beyond_earth:rocket_t1', count: 1},
    });

    event.remove({id: 'beyond_earth:nasa_workbenching/tier2'});
    event.custom({
      type: 'beyond_earth:nasa_workbench',
      input: {
        parts: {
          'beyond_earth:nose': [{item: 'beyond_earth:rocket_nose_cone'}],
          'beyond_earth:body': [
            {tag: 'beyond_earth:compresseds/desh'},
            {tag: 'beyond_earth:compresseds/desh'},
            {tag: 'beyond_earth:compresseds/desh'},
            {tag: 'beyond_earth:compresseds/desh'},
            {tag: 'beyond_earth:compresseds/desh'},
            {tag: 'beyond_earth:compresseds/desh'},
          ],
          'beyond_earth:tank': [{tag: 'beyond_earth:tanks/desh'}, {tag: 'beyond_earth:tanks/desh'}],
          'beyond_earth:fin_left': [{item: 'create:fluid_tank'}, {item: 'beyond_earth:rocket_fin'}],
          'beyond_earth:fin_right': [
            {item: 'create:fluid_tank'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:engine': [{tag: 'beyond_earth:engines/desh'}],
        },
      },
      output: {item: 'beyond_earth:rocket_t2', count: 1},
    });

    event.remove({id: 'beyond_earth:nasa_workbenching/tier3'});
    event.custom({
      type: 'beyond_earth:nasa_workbench',
      input: {
        parts: {
          'beyond_earth:nose': [{item: 'beyond_earth:rocket_nose_cone'}],
          'beyond_earth:body': [
            {tag: 'beyond_earth:compresseds/ostrum'},
            {tag: 'beyond_earth:compresseds/ostrum'},
            {tag: 'beyond_earth:compresseds/ostrum'},
            {tag: 'beyond_earth:compresseds/ostrum'},
            {tag: 'beyond_earth:compresseds/ostrum'},
            {tag: 'beyond_earth:compresseds/ostrum'},
          ],
          'beyond_earth:tank': [
            {tag: 'beyond_earth:tanks/ostrum'},
            {tag: 'beyond_earth:tanks/ostrum'},
          ],
          'beyond_earth:fin_left': [
            {item: 'thermal:fluid_cell'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:fin_right': [
            {item: 'thermal:fluid_cell'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:engine': [{tag: 'beyond_earth:engines/ostrum'}],
        },
      },
      output: {item: 'beyond_earth:rocket_t3', count: 1},
    });

    event.remove({id: 'beyond_earth:nasa_workbenching/tier4'});
    event.custom({
      type: 'beyond_earth:nasa_workbench',
      input: {
        parts: {
          'beyond_earth:nose': [{item: 'beyond_earth:rocket_nose_cone'}],
          'beyond_earth:body': [
            {tag: 'beyond_earth:compresseds/calorite'},
            {tag: 'beyond_earth:compresseds/calorite'},
            {tag: 'beyond_earth:compresseds/calorite'},
            {tag: 'beyond_earth:compresseds/calorite'},
            {tag: 'beyond_earth:compresseds/calorite'},
            {tag: 'beyond_earth:compresseds/calorite'},
          ],
          'beyond_earth:tank': [
            {tag: 'beyond_earth:tanks/calorite'},
            {tag: 'beyond_earth:tanks/calorite'},
          ],
          'beyond_earth:fin_left': [
            {item: 'industrialforegoing:advanced_black_hole_tank'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:fin_right': [
            {item: 'industrialforegoing:advanced_black_hole_tank'},
            {item: 'beyond_earth:rocket_fin'},
          ],
          'beyond_earth:engine': [{tag: 'beyond_earth:engines/calorite'}],
        },
      },
      output: {item: 'beyond_earth:rocket_t4', count: 1},
    });

    event.remove({output: 'beyond_earth:rocket_launch_pad'});
    CustomRecipeHandler.giant(Item.of('9x beyond_earth:rocket_launch_pad'), ['HHH', 'PFP', 'SSS'], {
      F: {item: 'industrialforegoing:machine_frame_supreme'},
      H: {item: 'pneumaticcraft:heat_sink'},
      S: {item: 'create:sturdy_sheet'},
      P: {tag: 'forge:plastic'},
    });
  };

  const cosmetic = () => {
    event.remove({output: 'beyond_earth:iron_plating_block'});
    event.stonecutting('2x beyond_earth:iron_plating_block', '#forge:plates/iron');
    event.stonecutting('beyond_earth:blue_iron_plating_block', 'beyond_earth:iron_plating_block');

    event.remove({output: 'beyond_earth:iron_mark_block'});
    event.shaped('8x beyond_earth:iron_mark_block', [' Y ', 'BSB', ' Y '], {
      Y: '#forge:dyes/yellow',
      B: '#forge:dyes/black',
      S: '#forge:plates/iron',
    });

    event.remove({output: 'beyond_earth:rusted_iron_pillar_block'});
    event.remove({output: 'beyond_earth:rusted_iron_plating_block'});
    event.stonecutting(
      'beyond_earth:rusted_iron_pillar_block',
      'beyond_earth:rusted_iron_plating_block'
    );
    event.stonecutting(
      'beyond_earth:rusted_iron_plating_block',
      'beyond_earth:rusted_iron_pillar_block'
    );
    event.recipes.create.splashing(
      ['beyond_earth:rusted_iron_plating_block'],
      'beyond_earth:iron_plating_block'
    );
  };

  const giselle = () => {
    // Remove by ID specifically since there's so much NBT
    event.remove({id: 'beyond_earth_giselle_addon:crafting/enchanted_book_gravity_normalizing'});
    event.remove({id: 'beyond_earth_giselle_addon:crafting/enchanted_book_space_breathing'});
    event.remove({id: 'beyond_earth_giselle_addon:crafting/enchanted_book_space_fire_proof'});
    event.remove({id: 'beyond_earth_giselle_addon:crafting/enchanted_book_venus_acid_proof'});

    event.remove({
      id: 'beyond_earth_giselle_addon:compat/immersiveengineering/metalpress/compressed_calorite',
    });
    event.remove({
      id: 'beyond_earth_giselle_addon:compat/immersiveengineering/metalpress/compressed_desh',
    });
    event.remove({
      id: 'beyond_earth_giselle_addon:compat/immersiveengineering/metalpress/compressed_ostrum',
    });
    event.remove({
      id: 'beyond_earth_giselle_addon:compat/immersiveengineering/metalpress/compressed_steel',
    });
    event.remove({
      id: 'beyond_earth_giselle_addon:compat/immersiveengineering/metalpress/plate_desh',
    });

    event.remove({output: 'beyond_earth_giselle_addon:advanced_compressor'});
    event.remove({output: 'beyond_earth_giselle_addon:electric_blast_furnace'});
    event.remove({output: 'beyond_earth_giselle_addon:fuel_loader'});
    event.remove({output: 'beyond_earth_giselle_addon:gravity_normalizer'});
    event.remove({output: 'beyond_earth_giselle_addon:mold_compressing'});
    event.remove({output: 'beyond_earth_giselle_addon:pneumatic_gravity_normalizing_upgrade'});
    event.remove({output: 'beyond_earth_giselle_addon:pneumatic_space_breathing_upgrade'});
    event.remove({output: 'beyond_earth_giselle_addon:pneumatic_space_fire_proof_upgrade'});
    event.remove({output: 'beyond_earth_giselle_addon:pneumatic_venus_acid_proof_upgrade'});
    event.remove({output: 'beyond_earth_giselle_addon:press_compressing_die'});

    const fireProofUnit = Item.of('beyond_earth_giselle_addon:module_space_fire_proof_unit');
    event.remove({output: fireProofUnit});
    CustomRecipeHandler.dissolution(
      fireProofUnit,
      [
        Item.of('mekanism:module_base'),
        Item.of('thermal:hazmat_fabric'),
        Item.of('minecraft:netherite_ingot'),
        Item.of('thermal:hazmat_fabric'),
      ],
      Fluid.of('industrialforegoing:ether_gas', 500)
    );

    const gravUnit = Item.of('beyond_earth_giselle_addon:module_gravity_normalizing_unit');
    event.remove({output: gravUnit});
    CustomRecipeHandler.dissolution(
      gravUnit,
      [
        Item.of('mekanism:module_base'),
        Item.of('pneumaticcraft:printed_circuit_board'),
        Item.of('headdons:desh_integral_components'),
        Item.of('pneumaticcraft:printed_circuit_board'),
      ],
      Fluid.of('industrialforegoing:ether_gas', 500)
    );

    const breathingUnit = Item.of('beyond_earth_giselle_addon:module_space_breathing_unit');
    event.remove({output: breathingUnit});
    CustomRecipeHandler.dissolution(
      breathingUnit,
      [
        Item.of('mekanism:module_base'),
        Item.of('beyond_earth:oxygen_tank'),
        Item.of('beyond_earth:oxygen_gear'),
        Item.of('beyond_earth:oxygen_tank'),
      ],
      Fluid.of('industrialforegoing:ether_gas', 500)
    );

    const acidUnit = Item.of('beyond_earth_giselle_addon:module_venus_acid_proof_unit');
    event.remove({output: acidUnit});
    CustomRecipeHandler.dissolution(
      acidUnit,
      [
        Item.of('mekanism:module_base'),
        Item.of('headdons:ostrum_integral_components'),
        Item.of('beyond_earth:ice_shard'),
        Item.of('beyond_earth:ice_shard'),
        Item.of('beyond_earth:ice_shard'),
        Item.of('thermal:blizz_rod'),
        Item.of('thermal:blizz_rod'),
        Item.of('thermal:blizz_rod'),
      ],
      Fluid.of('industrialforegoing:ether_gas', 500)
    );
  };

  cleanup();
  integration();
  cosmetic();
  rockets();
  giselle();
});

onEvent('item.tags', event => {
  event.removeAllTagsFrom(
    'beyond_earth:iron_plate',
    'beyond_earth:iron_stick',
    'beyond_earth:compressed_steel'
  );
});

onEvent('fluid.tags', event => {
  event.removeAllTagsFrom(
    Fluid.of('beyond_earth:fuel_flowing'),
    Fluid.of('beyond_earth:fuel'),
    Fluid.of('beyond_earth:oil_flowing'),
    Fluid.of('beyond_earth:oil')
  );
});
