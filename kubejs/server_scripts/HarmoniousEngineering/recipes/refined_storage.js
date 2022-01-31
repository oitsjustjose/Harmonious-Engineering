onEvent('recipes', event => {
  event.remove({mod: 'refinedstorage'});
  event.remove({mod: 'cabletiers'});
  event.remove({mod: 'rsinfinitybooster'});
  event.remove({mod: 'rsrequestify'});
  const mappings = [
    {key: '#refinedstorage:controller', value: 'appliedenergistics2:controller'},
    {key: '#refinedstorage:security_manager', value: 'appliedenergistics2:security_station'},
    {key: '#refinedstorage:disk_manipulator', value: 'appliedenergistics2:cell_workbench'},
    {key: '#refinedstorage:crafter', value: 'appliedenergistics2:molecular_assembler'},
    {
      key: '#refinedstorage:wireless_transmitter',
      value: 'appliedenergistics2:wireless_access_point',
    },
    {key: '#refinedstorage:detector', value: 'appliedenergistics2:level_emitter'},
    {key: '#refinedstorage:crafter_manager', value: 'appliedenergistics2:interface_terminal'},
    {key: '#refinedstorage:fluid_grid', value: 'appliedenergistics2:fluid_terminal'},
    {key: '#refinedstorage:crafting_grid', value: 'appliedenergistics2:crafting_terminal'},
    {key: '#refinedstorage:grid', value: 'appliedenergistics2:terminal'},
    {key: '#refinedstorage:pattern_grid', value: 'appliedenergistics2:pattern_terminal'},
    {key: '#refinedstorage:network_receiver', value: '8x appliedenergistics2:quantum_ring'},
    {key: '#refinedstorage:network_transmitter', value: '8x appliedenergistics2:quantum_ring'},
    {key: 'refinedstorage:disk_drive', value: 'appliedenergistics2:drive'},
    {key: 'refinedstorage:cable', value: 'appliedenergistics2:fluix_glass_cable'},
    {key: 'refinedstorage:portable_grid', value: 'appliedenergistics2:wireless_terminal'},
    {key: 'rsinfinitybooster:infinity_card', value: 'aeinfinitybooster:infinity_card'},
    {key: 'rsinfinitybooster:dimension_card', value: 'aeinfinitybooster:dimension_card'},
    {
      key: 'refinedstorageaddons:wireless_crafting_grid',
      value: 'ae2wtlib:wireless_crafting_terminal',
    },
    {key: 'refinedstorage:destructor', value: 'appliedenergistics2:annihilation_plane'},
    {key: 'refinedstorage:constructor', value: 'appliedenergistics2:formation_plane'},
    {key: 'refinedstorage:importer', value: 'appliedenergistics2:import_bus'},
    {key: 'refinedstorage:exporter', value: 'appliedenergistics2:export_bus'},
    {key: 'refinedstorage:external_storage', value: 'appliedenergistics2:storage_bus'},
    {key: 'refinedstorage:storage_housing', value: 'appliedenergistics2:empty_storage_cell'},
    {key: 'refinedstorage:pattern', value: 'appliedenergistics2:blank_pattern'},
    {key: 'refinedstorage:1k_storage_part', value: 'appliedenergistics2:1k_cell_component'},
    {key: 'refinedstorage:4k_storage_part', value: 'appliedenergistics2:4k_cell_component'},
    {key: 'refinedstorage:16k_storage_part', value: 'appliedenergistics2:16k_cell_component'},
    {key: 'refinedstorage:64k_storage_part', value: 'appliedenergistics2:64k_cell_component'},
    {key: 'refinedstorage:1k_storage_block', value: 'appliedenergistics2:1k_cell_component'},
    {key: 'refinedstorage:4k_storage_block', value: 'appliedenergistics2:4k_cell_component'},
    {key: 'refinedstorage:16k_storage_block', value: 'appliedenergistics2:16k_cell_component'},
    {key: 'refinedstorage:64k_storage_block', value: 'appliedenergistics2:64k_cell_component'},
    {
      key: 'refinedstorage:64k_fluid_storage_part',
      value: 'appliedenergistics2:1k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:256k_fluid_storage_part',
      value: 'appliedenergistics2:4k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:1024k_fluid_storage_part',
      value: 'appliedenergistics2:16k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:4096k_fluid_storage_part',
      value: 'appliedenergistics2:64k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:64k_fluid_storage_block',
      value: 'appliedenergistics2:1k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:256k_fluid_storage_block',
      value: 'appliedenergistics2:4k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:1024k_fluid_storage_block',
      value: 'appliedenergistics2:16k_fluid_cell_component',
    },
    {
      key: 'refinedstorage:4096k_fluid_storage_block',
      value: 'appliedenergistics2:64k_fluid_cell_component',
    },
    {key: 'refinedstorage:speed_upgrade', value: 'appliedenergistics2:speed_card'},
    {key: 'refinedstorage:stack_upgrade', value: '4x appliedenergistics2:speed_card'},

    {key: 'cabletiers:elite_importer', value: '2x appliedenergistics2:import_bus'},
    {key: 'cabletiers:ultra_importer', value: '4x appliedenergistics2:import_bus'},
    {key: 'cabletiers:creative_importer', value: '8x appliedenergistics2:import_bus'},
    {key: 'cabletiers:elite_exporter', value: '2x appliedenergistics2:export_bus'},
    {key: 'cabletiers:ultra_exporter', value: '4x appliedenergistics2:export_bus'},
    {key: 'cabletiers:creative_exporter', value: '8x appliedenergistics2:export_bus'},
    {key: 'cabletiers:elite_destructor', value: '2x appliedenergistics2:annihilation_plane'},
    {key: 'cabletiers:ultra_destructor', value: '4x appliedenergistics2:annihilation_plane'},
    {key: 'cabletiers:creative_destructor', value: '8x appliedenergistics2:annihilation_plane'},
    {key: 'cabletiers:elite_constructor', value: '2x appliedenergistics2:formation_plane'},
    {key: 'cabletiers:ultra_constructor', value: '4x appliedenergistics2:formation_plane'},
    {key: 'cabletiers:creative_constructor', value: '8x appliedenergistics2:formation_plane'},

    {key: 'cabletiers:elite_disk_manipulator', value: '2x appliedenergistics2:cell_workbench'},
    {key: 'cabletiers:ultra_disk_manipulator', value: '4x appliedenergistics2:cell_workbench'},
    {key: 'cabletiers:creative_disk_manipulator', value: '8x appliedenergistics2:cell_workbench'},
  ];

  mappings.forEach(mapping => {
    event.shapeless(mapping.value, [mapping.key]);
  });
});

// onEvent("recipes", (event) => {
//   event.remove({ output: "refinedstorage:controller" });
//   event.remove({ output: "refinedstorage:quartz_enriched_iron" });
//   // use id to prevent removing <any color>+dye = light_blue (base)
//   event.remove({ id: "refinedstorage:wireless_transmitter" });
//   event.remove({ output: "refinedstorage:wireless_grid" });
//   event.remove({ output: "refinedstorageaddons:wireless_crafting_grid" });

//   event.shaped("refinedstorage:wireless_transmitter", ["QSQ", "QCQ", "QPQ"], {
//     Q: "refinedstorage:quartz_enriched_iron",
//     S: "kubejs:ender_singularity",
//     C: "refinedstorage:machine_casing",
//     P: "refinedstorage:advanced_processor",
//   });

//   event.shaped("refinedstorage:wireless_grid", ["QSQ", "QCQ", "QPQ"], {
//     Q: "refinedstorage:quartz_enriched_iron",
//     S: "kubejs:ender_singularity",
//     C: "#refinedstorage:grid",
//     P: "refinedstorage:advanced_processor",
//   });

//   event.shaped("refinedstorageaddons:wireless_crafting_grid", ["QSQ", "QCQ", "QPQ"], {
//     Q: "refinedstorage:quartz_enriched_iron",
//     S: "kubejs:ender_singularity",
//     C: "#refinedstorage:crafting_grid",
//     P: "refinedstorage:advanced_processor",
//   });

//   global.genCombinedRecipe(event, Ingredient.of("storagenetwork:master"), Ingredient.of("refinedstorage:advanced_processor"), Item.of("refinedstorage:controller"));
//   global.genAlloyingRecipe(event, { item: "minecraft:iron_ingot" }, { tag: "forge:dusts/quartz" }, "refinedstorage:quartz_enriched_iron", 2);

//   /* Cable Tiers */
//   event.replaceInput({ mod: "cabletiers" }, "minecraft:dragon_head", "industrialforegoing:pink_slime_ingot");
// });
