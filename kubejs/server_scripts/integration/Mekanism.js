onEvent('recipes', event => {
  // const CustomRecipeHandler = global.recipes(event);
  const CustomRecipeHandler = global.recipes(event);

  const MekanismModuleRecipes = () => {
    [
      {
        items: [Item.of('pneumaticcraft:jumping_upgrade_4')],
        output: Item.of('mekanism:module_hydraulic_propulsion_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:magnet_upgrade')],
        output: Item.of('mekanism:module_magnetic_attraction_unit'),
      },
      {
        items: [
          Item.of('blue_ice'),
          Item.of('thermal:ice_grenade'),
          Item.of('thermal:ice_charge'),
          Item.of('blue_ice'),
        ],
        output: Item.of('mekanism:module_frost_walker_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:night_vision_upgrade')],
        output: Item.of('mekanism:module_vision_enhancement_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:speed_upgrade')],
        output: Item.of('mekanism:module_excavation_escalation_unit'),
      },
      {
        items: [Item.of('minecraft:diamond_sword'), Item.of('minecraft:diamond_sword')],
        output: Item.of('mekanism:module_attack_amplification_unit'),
      },
      {
        items: [Item.of('minecraft:diamond_hoe'), Item.of('minecraft:diamond_hoe')],
        output: Item.of('mekanism:module_farming_unit'),
      },
      {
        items: [Item.of('minecraft:shears')],
        output: Item.of('mekanism:module_shearing_unit'),
      },
      {
        items: [
          Item.of('infernalexp:glowsilk'),
          Item.of('refinedstorage:silk_touch_upgrade'),
          Item.of('infernalexp:glowsilk'),
        ],
        output: Item.of('mekanism:module_silk_touch_unit'),
      },
      {
        items: [
          Item.of('minecraft:lapis_block'),
          Item.of('refinedstorage:fortune_3_upgrade'),
          Item.of('minecraft:lapis_block'),
        ],
        output: Item.of('mekanism:module_fortune_unit'),
      },
      {
        items: [
          Item.of('minecraft:tnt'),
          Item.of('minecraft:tnt'),
          Item.of('minecraft:tnt'),
          Item.of('thermal:ender_tnt'),
          Item.of('thermal:ender_tnt'),
          Item.of('thermal:ender_tnt'),
          Item.of('thermal:ender_tnt'),
        ],
        output: Item.of('mekanism:module_blasting_unit'),
      },
      {
        items: [Item.of('tempad:tempad')],
        output: Item.of('mekanism:module_teleportation_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:scuba_upgrade')],
        output: Item.of('mekanism:module_electrolytic_breathing_unit'),
      },
      {
        items: [Item.of('thermal:energy_cell')],
        output: Item.of('mekanism:module_energy_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:stomp_upgrade')],
        output: Item.of('mekanism:module_gyroscopic_stabilization_unit'),
      },
      {
        items: [
          Item.of('pneumaticcraft:speed_upgrade'),
          Item.of('pneumaticcraft:speed_upgrade'),
          Item.of('pneumaticcraft:speed_upgrade'),
        ],
        output: Item.of('mekanism:module_locomotive_boosting_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:flippers_upgrade')],
        output: Item.of('mekanism:module_hydrostatic_repulsor_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:jet_boots_upgrade_3')],
        output: Item.of('mekanism:module_jetpack_unit'),
      },
      {
        items: [Item.of('pneumaticcraft:elytra_upgrade')],
        output: Item.of('mekanism:module_elytra_unit'),
      },
    ].forEach(x => {
      CustomRecipeHandler.dissolution(
        x.output,
        x.items.concat([Item.of('mekanism:module_base')]),
        Fluid.of('industrialforegoing:pink_slime', 500)
      );
    });
  };

  const InductionCellRecipes = () => {
    event.shaped('8x mekanism:induction_casing', ['PPP', 'PCP', 'PPP'], {
      P: '#forge:plastic',
      C: 'thermal:upgrade_augment_3',
    });

    CustomRecipeHandler.automatableSmithing(
      Item.of('mekanism:induction_port'),
      Item.of('mekanism:induction_casing'),
      Item.of('refinedpipes:advanced_extractor_attachment')
    );

    /* Induction Cells */
    event.shaped('mekanism:basic_induction_cell', ['CAC', 'HIH', 'CAC'], {
      C: '#forge:storage_blocks/copper',
      A: 'thermal:energy_cell',
      I: 'thermal:upgrade_augment_1',
      H: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:advanced_induction_cell', ['CAC', 'HIH', 'CAC'], {
      C: '#forge:storage_blocks/enderium',
      A: 'mekanism:basic_induction_cell',
      I: 'thermal:upgrade_augment_3',
      H: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:elite_induction_cell', ['CAC', 'HIH', 'CAC'], {
      C: '#forge:storage_blocks/ostrum',
      A: 'mekanism:advanced_induction_cell',
      I: 'headdons:ostrum_integral_components',
      H: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:ultimate_induction_cell', ['CAC', 'HIH', 'CAC'], {
      C: '#forge:storage_blocks/calorite',
      A: 'mekanism:elite_induction_cell',
      I: 'headdons:calorite_integral_components',
      H: 'mekanism:induction_casing',
    });

    /* Induction Providers */
    event.shaped('mekanism:basic_induction_provider', ['CPC', 'AIA', 'CPC'], {
      C: '#forge:storage_blocks/copper',
      P: '#thermal:glass/hardened',
      I: 'pneumaticcraft:printed_circuit_board',
      A: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:advanced_induction_provider', ['CPC', 'AIA', 'CPC'], {
      C: '#forge:storage_blocks/enderium',
      P: 'mekanism:basic_induction_provider',
      I: 'pneumaticcraft:printed_circuit_board',
      A: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:elite_induction_provider', ['CPC', 'AIA', 'CPC'], {
      C: '#forge:storage_blocks/ostrum',
      P: 'mekanism:advanced_induction_provider',
      I: 'pneumaticcraft:printed_circuit_board',
      A: 'mekanism:induction_casing',
    });

    event.shaped('mekanism:ultimate_induction_provider', ['CPC', 'AIA', 'CPC'], {
      C: '#forge:storage_blocks/calorite',
      P: 'mekanism:elite_induction_provider',
      I: 'pneumaticcraft:printed_circuit_board',
      A: 'mekanism:induction_casing',
    });
  };

  /* Remove recipes for Mekanism */
  event.remove({mod: 'mekanism'});
  event.remove({id: 'createaddition:compat/mekanism/rose_quartz_enriching'});

  /* Re-add a specific few one-by-one */

  /** MEKASUIT HELMET **/
  CustomRecipeHandler.dissolution(
    Item.of('mekanism:mekasuit_helmet'),
    [
      Item.of('thermal:hazmat_fabric'),
      Item.of('pneumaticcraft:pneumatic_helmet'),
      Item.of('thermal:hazmat_fabric'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:diving_fabric'),
      Item.of('thermal:rf_coil'),
      Item.of('thermal:diving_fabric'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000)
  );

  /** MEKASUIT CHEST **/
  CustomRecipeHandler.dissolution(
    Item.of('mekanism:mekasuit_bodyarmor'),
    [
      Item.of('create:sturdy_sheet'),
      Item.of('pneumaticcraft:pneumatic_chestplate'),
      Item.of('create:sturdy_sheet'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('#forge:plates/netherite'),
      Item.of('thermal:rf_coil'),
      Item.of('#forge:plates/netherite'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000)
  );

  /** MEKASUIT LEGGINGS **/
  CustomRecipeHandler.dissolution(
    Item.of('mekanism:mekasuit_pants'),
    [
      Item.of('pneumaticcraft:pneumatic_cylinder'),
      Item.of('pneumaticcraft:pneumatic_leggings'),
      Item.of('pneumaticcraft:pneumatic_cylinder'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:redstone_servo'),
      Item.of('thermal:rf_coil'),
      Item.of('thermal:redstone_servo'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000)
  );

  /** MEKASUIT BOOTS **/
  CustomRecipeHandler.dissolution(
    Item.of('mekanism:mekasuit_boots'),
    [
      Item.of('architects_palette:unobtanium'),
      Item.of('pneumaticcraft:pneumatic_boots'),
      Item.of('architects_palette:unobtanium'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('compressedcreativity:air_blower'),
      Item.of('thermal:rf_coil'),
      Item.of('compressedcreativity:air_blower'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000)
  );

  /** MEKATOOL **/
  CustomRecipeHandler.dissolution(
    Item.of('mekanism:meka_tool'),
    [
      Item.of('thermal:redstone_servo'),
      Item.of('pneumaticcraft:jackhammer'),
      Item.of('thermal:redstone_servo'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('thermal:upgrade_augment_3'),
      Item.of('industrialforegoing:pink_slime_ingot'),
      Item.of('thermal:rf_coil'),
      Item.of('industrialforegoing:pink_slime_ingot'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000)
  );

  /** BASE MODULE **/
  CustomRecipeHandler.dissolution(
    Item.of('3x mekanism:module_base'),
    [
      Item.of('#forge:plastic'),
      Item.of('pneumaticcraft:printed_circuit_board'),
      Item.of('#forge:plastic'),
    ],
    Fluid.of('industrialforegoing:ether_gas', 200)
  );

  InductionCellRecipes();
  MekanismModuleRecipes();

  CustomRecipeHandler.warping(
    Item.of('fluxnetworks:flux_configurator'),
    Item.of('mekanism:configurator'),
    'minecraft:the_end'
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('mekanism:basic_bin'),
    Item.of('minecraft:barrel'),
    Item.of('pneumaticcraft:ingot_iron_compressed')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('mekanism:advanced_bin'),
    Item.of('minecraft:barrel'),
    Item.of('create:andesite_alloy')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('mekanism:elite_bin'),
    Item.of('minecraft:barrel'),
    Item.of('create:brass_ingot')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('mekanism:ultimate_bin'),
    Item.of('minecraft:barrel'),
    Item.of('thermal:signalum_ingot')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('mekanism:modification_station'),
    Item.of('thermal:machine_frame'),
    Item.of('immersiveengineering:workbench')
  );
});

/**
 * Removes all Item Tags from all Mek Items
 * @param {Internal.TagEventJS} event
 */
onEvent('item.tags', event => {
  [
    'mekanism:advanced_bin',
    'mekanism:advanced_chemical_tank',
    'mekanism:advanced_combining_factory',
    'mekanism:advanced_compressing_factory',
    'mekanism:advanced_control_circuit',
    'mekanism:advanced_crushing_factory',
    'mekanism:advanced_energy_cube',
    'mekanism:advanced_enriching_factory',
    'mekanism:advanced_fluid_tank',
    'mekanism:advanced_induction_cell',
    'mekanism:advanced_induction_provider',
    'mekanism:advanced_infusing_factory',
    'mekanism:advanced_injecting_factory',
    'mekanism:advanced_logistical_transporter',
    'mekanism:advanced_mechanical_pipe',
    'mekanism:advanced_pressurized_tube',
    'mekanism:advanced_purifying_factory',
    'mekanism:advanced_sawing_factory',
    'mekanism:advanced_smelting_factory',
    'mekanism:advanced_thermodynamic_conductor',
    'mekanism:advanced_tier_installer',
    'mekanism:advanced_universal_cable',
    'mekanism:alloy_atomic',
    'mekanism:alloy_infused',
    'mekanism:alloy_reinforced',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:atomic_disassembler',
    'mekanism:basic_bin',
    'mekanism:basic_chemical_tank',
    'mekanism:basic_combining_factory',
    'mekanism:basic_compressing_factory',
    'mekanism:basic_control_circuit',
    'mekanism:basic_crushing_factory',
    'mekanism:basic_energy_cube',
    'mekanism:basic_enriching_factory',
    'mekanism:basic_fluid_tank',
    'mekanism:basic_induction_cell',
    'mekanism:basic_induction_provider',
    'mekanism:basic_infusing_factory',
    'mekanism:basic_injecting_factory',
    'mekanism:basic_logistical_transporter',
    'mekanism:basic_mechanical_pipe',
    'mekanism:basic_pressurized_tube',
    'mekanism:basic_purifying_factory',
    'mekanism:basic_sawing_factory',
    'mekanism:basic_smelting_factory',
    'mekanism:basic_thermodynamic_conductor',
    'mekanism:basic_tier_installer',
    'mekanism:basic_universal_cable',
    'mekanism:bio_fuel',
    'mekanism:block_bronze',
    'mekanism:block_charcoal',
    'mekanism:block_fluorite',
    'mekanism:block_lead',
    'mekanism:block_osmium',
    'mekanism:block_raw_lead',
    'mekanism:block_raw_osmium',
    'mekanism:block_raw_tin',
    'mekanism:block_raw_uranium',
    'mekanism:block_refined_glowstone',
    'mekanism:block_refined_obsidian',
    'mekanism:block_salt',
    'mekanism:block_steel',
    'mekanism:block_tin',
    'mekanism:block_uranium',
    'mekanism:boiler_casing',
    'mekanism:boiler_valve',
    'mekanism:bounding_block',
    'mekanism:brine_bucket',
    'mekanism:canteen',
    'mekanism:cardboard_box',
    'mekanism:chargepad',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:chemical_infuser',
    'mekanism:chemical_injection_chamber',
    'mekanism:chemical_oxidizer',
    'mekanism:chemical_washer',
    'mekanism:chlorine_bucket',
    'mekanism:clump_copper',
    'mekanism:clump_gold',
    'mekanism:clump_iron',
    'mekanism:clump_lead',
    'mekanism:clump_osmium',
    'mekanism:clump_tin',
    'mekanism:clump_uranium',
    'mekanism:combiner',
    'mekanism:configuration_card',
    'mekanism:configurator',
    'mekanism:crafting_formula',
    'mekanism:creative_bin',
    'mekanism:creative_chemical_tank',
    'mekanism:creative_energy_cube',
    'mekanism:creative_fluid_tank',
    'mekanism:crusher',
    'mekanism:crystal_copper',
    'mekanism:crystal_gold',
    'mekanism:crystal_iron',
    'mekanism:crystal_lead',
    'mekanism:crystal_osmium',
    'mekanism:crystal_tin',
    'mekanism:crystal_uranium',
    'mekanism:deepslate_fluorite_ore',
    'mekanism:deepslate_lead_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:deepslate_tin_ore',
    'mekanism:deepslate_uranium_ore',
    'mekanism:dictionary',
    'mekanism:digital_miner',
    'mekanism:dimensional_stabilizer',
    'mekanism:dirty_dust_copper',
    'mekanism:dirty_dust_gold',
    'mekanism:dirty_dust_iron',
    'mekanism:dirty_dust_lead',
    'mekanism:dirty_dust_osmium',
    'mekanism:dirty_dust_tin',
    'mekanism:dirty_dust_uranium',
    'mekanism:dirty_netherite_scrap',
    'mekanism:diversion_transporter',
    'mekanism:dosimeter',
    'mekanism:dust_bronze',
    'mekanism:dust_charcoal',
    'mekanism:dust_coal',
    'mekanism:dust_copper',
    'mekanism:dust_diamond',
    'mekanism:dust_emerald',
    'mekanism:dust_fluorite',
    'mekanism:dust_gold',
    'mekanism:dust_iron',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lead',
    'mekanism:dust_lithium',
    'mekanism:dust_netherite',
    'mekanism:dust_obsidian',
    'mekanism:dust_osmium',
    'mekanism:dust_quartz',
    'mekanism:dust_refined_obsidian',
    'mekanism:dust_steel',
    'mekanism:dust_sulfur',
    'mekanism:dust_tin',
    'mekanism:dust_uranium',
    'mekanism:dye_base',
    'mekanism:dynamic_tank',
    'mekanism:dynamic_valve',
    'mekanism:electric_bow',
    'mekanism:electric_pump',
    'mekanism:electrolytic_core',
    'mekanism:electrolytic_separator',
    'mekanism:elite_bin',
    'mekanism:elite_chemical_tank',
    'mekanism:elite_combining_factory',
    'mekanism:elite_compressing_factory',
    'mekanism:elite_control_circuit',
    'mekanism:elite_crushing_factory',
    'mekanism:elite_energy_cube',
    'mekanism:elite_enriching_factory',
    'mekanism:elite_fluid_tank',
    'mekanism:elite_induction_cell',
    'mekanism:elite_induction_provider',
    'mekanism:elite_infusing_factory',
    'mekanism:elite_injecting_factory',
    'mekanism:elite_logistical_transporter',
    'mekanism:elite_mechanical_pipe',
    'mekanism:elite_pressurized_tube',
    'mekanism:elite_purifying_factory',
    'mekanism:elite_sawing_factory',
    'mekanism:elite_smelting_factory',
    'mekanism:elite_thermodynamic_conductor',
    'mekanism:elite_tier_installer',
    'mekanism:elite_universal_cable',
    'mekanism:energized_smelter',
    'mekanism:energy_tablet',
    'mekanism:enriched_carbon',
    'mekanism:enriched_diamond',
    'mekanism:enriched_gold',
    'mekanism:enriched_iron',
    'mekanism:enriched_redstone',
    'mekanism:enriched_refined_obsidian',
    'mekanism:enriched_tin',
    'mekanism:enrichment_chamber',
    'mekanism:ethene_bucket',
    'mekanism:flamethrower',
    'mekanism:fluidic_plenisher',
    'mekanism:fluorite_gem',
    'mekanism:fluorite_ore',
    'mekanism:formulaic_assemblicator',
    'mekanism:free_runners',
    'mekanism:free_runners_armored',
    'mekanism:fuelwood_heater',
    'mekanism:gauge_dropper',
    'mekanism:geiger_counter',
    'mekanism:hazmat_boots',
    'mekanism:hazmat_gown',
    'mekanism:hazmat_mask',
    'mekanism:hazmat_pants',
    'mekanism:hdpe_elytra',
    'mekanism:hdpe_pellet',
    'mekanism:hdpe_rod',
    'mekanism:hdpe_sheet',
    'mekanism:hdpe_stick',
    'mekanism:heavy_water_bucket',
    'mekanism:hydrofluoric_acid_bucket',
    'mekanism:hydrogen_bucket',
    'mekanism:hydrogen_chloride_bucket',
    'mekanism:induction_casing',
    'mekanism:induction_port',
    'mekanism:industrial_alarm',
    'mekanism:ingot_bronze',
    'mekanism:ingot_lead',
    'mekanism:ingot_osmium',
    'mekanism:ingot_refined_glowstone',
    'mekanism:ingot_refined_obsidian',
    'mekanism:ingot_steel',
    'mekanism:ingot_tin',
    'mekanism:ingot_uranium',
    'mekanism:isotopic_centrifuge',
    'mekanism:jetpack',
    'mekanism:jetpack_armored',
    'mekanism:laser',
    'mekanism:laser_amplifier',
    'mekanism:laser_tractor_beam',
    'mekanism:lead_ore',
    'mekanism:lithium_bucket',
    'mekanism:logistical_sorter',
    'mekanism:meka_tool',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_boots',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_pants',
    'mekanism:metallurgic_infuser',
    'mekanism:modification_station',
    'mekanism:module_attack_amplification_unit',
    'mekanism:module_base',
    'mekanism:module_blasting_unit',
    'mekanism:module_charge_distribution_unit',
    'mekanism:module_dosimeter_unit',
    'mekanism:module_electrolytic_breathing_unit',
    'mekanism:module_elytra_unit',
    'mekanism:module_energy_unit',
    'mekanism:module_excavation_escalation_unit',
    'mekanism:module_farming_unit',
    'mekanism:module_fortune_unit',
    'mekanism:module_frost_walker_unit',
    'mekanism:module_geiger_unit',
    'mekanism:module_gravitational_modulating_unit',
    'mekanism:module_gyroscopic_stabilization_unit',
    'mekanism:module_hydraulic_propulsion_unit',
    'mekanism:module_hydrostatic_repulsor_unit',
    'mekanism:module_inhalation_purification_unit',
    'mekanism:module_jetpack_unit',
    'mekanism:module_laser_dissipation_unit',
    'mekanism:module_locomotive_boosting_unit',
    'mekanism:module_magnetic_attraction_unit',
    'mekanism:module_nutritional_injection_unit',
    'mekanism:module_radiation_shielding_unit',
    'mekanism:module_shearing_unit',
    'mekanism:module_silk_touch_unit',
    'mekanism:module_teleportation_unit',
    'mekanism:module_vein_mining_unit',
    'mekanism:module_vision_enhancement_unit',
    'mekanism:network_reader',
    'mekanism:nugget_bronze',
    'mekanism:nugget_lead',
    'mekanism:nugget_osmium',
    'mekanism:nugget_refined_glowstone',
    'mekanism:nugget_refined_obsidian',
    'mekanism:nugget_steel',
    'mekanism:nugget_tin',
    'mekanism:nugget_uranium',
    'mekanism:nutritional_liquifier',
    'mekanism:nutritional_paste_bucket',
    'mekanism:oredictionificator',
    'mekanism:osmium_compressor',
    'mekanism:osmium_ore',
    'mekanism:oxygen_bucket',
    'mekanism:painting_machine',
    'mekanism:pellet_antimatter',
    'mekanism:pellet_plutonium',
    'mekanism:pellet_polonium',
    'mekanism:personal_barrel',
    'mekanism:personal_chest',
    'mekanism:pigment_extractor',
    'mekanism:pigment_mixer',
    'mekanism:portable_qio_dashboard',
    'mekanism:portable_teleporter',
    'mekanism:precision_sawmill',
    'mekanism:pressure_disperser',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:purification_chamber',
    'mekanism:qio_dashboard',
    'mekanism:qio_drive_array',
    'mekanism:qio_drive_base',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_supermassive',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_exporter',
    'mekanism:qio_importer',
    'mekanism:qio_redstone_adapter',
    'mekanism:quantum_entangloporter',
    'mekanism:radioactive_waste_barrel',
    'mekanism:raw_lead',
    'mekanism:raw_osmium',
    'mekanism:raw_tin',
    'mekanism:raw_uranium',
    'mekanism:reprocessed_fissile_fragment',
    'mekanism:resistive_heater',
    'mekanism:restrictive_transporter',
    'mekanism:robit',
    'mekanism:rotary_condensentrator',
    'mekanism:salt',
    'mekanism:sawdust',
    'mekanism:scuba_mask',
    'mekanism:scuba_tank',
    'mekanism:security_desk',
    'mekanism:seismic_reader',
    'mekanism:seismic_vibrator',
    'mekanism:shard_copper',
    'mekanism:shard_gold',
    'mekanism:shard_iron',
    'mekanism:shard_lead',
    'mekanism:shard_osmium',
    'mekanism:shard_tin',
    'mekanism:shard_uranium',
    'mekanism:sodium_bucket',
    'mekanism:solar_neutron_activator',
    'mekanism:sps_casing',
    'mekanism:sps_port',
    'mekanism:steam_bucket',
    'mekanism:steel_casing',
    'mekanism:structural_glass',
    'mekanism:substrate',
    'mekanism:sulfur_dioxide_bucket',
    'mekanism:sulfur_trioxide_bucket',
    'mekanism:sulfuric_acid_bucket',
    'mekanism:supercharged_coil',
    'mekanism:superheated_sodium_bucket',
    'mekanism:superheating_element',
    'mekanism:teleportation_core',
    'mekanism:teleporter',
    'mekanism:teleporter_frame',
    'mekanism:thermal_evaporation_block',
    'mekanism:thermal_evaporation_controller',
    'mekanism:thermal_evaporation_valve',
    'mekanism:tin_ore',
    'mekanism:ultimate_bin',
    'mekanism:ultimate_chemical_tank',
    'mekanism:ultimate_combining_factory',
    'mekanism:ultimate_compressing_factory',
    'mekanism:ultimate_control_circuit',
    'mekanism:ultimate_crushing_factory',
    'mekanism:ultimate_energy_cube',
    'mekanism:ultimate_enriching_factory',
    'mekanism:ultimate_fluid_tank',
    'mekanism:ultimate_induction_cell',
    'mekanism:ultimate_induction_provider',
    'mekanism:ultimate_infusing_factory',
    'mekanism:ultimate_injecting_factory',
    'mekanism:ultimate_logistical_transporter',
    'mekanism:ultimate_mechanical_pipe',
    'mekanism:ultimate_pressurized_tube',
    'mekanism:ultimate_purifying_factory',
    'mekanism:ultimate_sawing_factory',
    'mekanism:ultimate_smelting_factory',
    'mekanism:ultimate_thermodynamic_conductor',
    'mekanism:ultimate_tier_installer',
    'mekanism:ultimate_universal_cable',
    'mekanism:upgrade_anchor',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_stone_generator',
    'mekanism:uranium_hexafluoride_bucket',
    'mekanism:uranium_ore',
    'mekanism:uranium_oxide_bucket',
    'mekanism:yellow_cake_uranium',
  ].forEach(x => {
    event.removeAllTagsFrom(x);
    event.removeAllTagsFrom(`/${x}/`);
  });
});
