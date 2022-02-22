onEvent('jei.hide.items', event => {
  [
    '/appliedenergistics2:facade/',
    '/atmospheric:.*_vertical_slab/',
    '/autumnity:.*_vertical_slab/',
    '/buzzier_bees:.*_vertical_slab/',
    '/createdeco:.*_slab_vert/',
    '/createplus:*/',
    '/emendatusenigmatica:.*_cluster/',
    '/emendatusenigmatica:.*_crushed/',
    '/emendatusenigmatica:.*_fragment/',
    '/emendatusenigmatica:.*_gravel/',
    '/emendatusenigmatica:arcane*/',
    '/emendatusenigmatica:dimensional_*/',
    '/emendatusenigmatica:iridium*/',
    '/emendatusenigmatica:peridot*/',
    '/emendatusenigmatica:ruby*/',
    '/emendatusenigmatica:sapphire*/',
    '/emendatusenigmatica:source*/',
    '/enhanced_mushrooms:.*_vertical_slab/',
    '/extcaves:*/',
    '/extendedcrafting:recipe_maker/',
    '/extendedcrafting:singularity/',
    '/ftblibrary:fluid_container/',
    '/infernalexp:.*_vertical_slab/',
    '/mekanism:creative_chemical_tank/',
    '/mekanism:creative_fluid_tank/',
    '/quark:.*_vertical_slab/',
    '/supplementaries:.*_vertical_slab/',
    '/supplementaries:bamboo_spikes_tipped/',
    '/upgrade_aquatic:.*_vertical_slab/',
    '/wormhole:coal_generator/',
    '/wormhole:creative_energy_cell/',
    'ae2wtlib:infinity_booster_card',
    'ae2wtlib:wireless_fluid_terminal',
    'appliedenergistics2:ender_dust',
    'appliedenergistics2:gold_dust',
    'appliedenergistics2:grindstone',
    'appliedenergistics2:iron_dust',
    'appliedenergistics2:nether_quartz_dust',
    'appliedenergistics2:silicon',
    'betterendforge:ender_dust',
    'betternether:barrel_crimson',
    'betternether:barrel_warped',
    'corail_woodcutter:birch_woodcutter',
    'corail_woodcutter:black_stained_woodcutter',
    'corail_woodcutter:blue_stained_woodcutter',
    'corail_woodcutter:brown_stained_woodcutter',
    'corail_woodcutter:crimson_woodcutter',
    'corail_woodcutter:cyan_stained_woodcutter',
    'corail_woodcutter:dark_oak_woodcutter',
    'corail_woodcutter:gray_stained_woodcutter',
    'corail_woodcutter:green_stained_woodcutter',
    'corail_woodcutter:jungle_woodcutter',
    'corail_woodcutter:light_blue_stained_woodcutter',
    'corail_woodcutter:light_gray_stained_woodcutter',
    'corail_woodcutter:lime_stained_woodcutter',
    'corail_woodcutter:magenta_stained_woodcutter',
    'corail_woodcutter:orange_stained_woodcutter',
    'corail_woodcutter:pink_stained_woodcutter',
    'corail_woodcutter:purple_stained_woodcutter',
    'corail_woodcutter:red_stained_woodcutter',
    'corail_woodcutter:spruce_woodcutter',
    'corail_woodcutter:warped_woodcutter',
    'corail_woodcutter:white_stained_woodcutter',
    'corail_woodcutter:yellow_stained_woodcutter',
    'create:brass_block',
    'create:brass_ingot',
    'create:brass_nugget',
    'create:brass_sheet',
    'create:copper_block',
    'create:copper_ingot',
    'create:copper_nugget',
    'create:copper_ore',
    'create:copper_sheet',
    'create:golden_sheet',
    'create:iron_sheet',
    'create:lapis_sheet',
    'create:zinc_block',
    'create:zinc_ingot',
    'create:zinc_nugget',
    'create:zinc_ore',
    'createaddition:accumulator',
    'createaddition:alternator',
    'createaddition:brass_rod',
    'createaddition:copper_rod',
    'createaddition:copper_spool',
    'createaddition:diamond_grit',
    'createaddition:furnace_burner',
    'createaddition:gold_rod',
    'createaddition:gold_spool',
    'createaddition:gold_wire',
    'createaddition:iron_rod',
    'createaddition:overcharged_casing',
    'createaddition:redstone_relay',
    'createaddition:spool',
    'createaddition:zinc_sheet',
    'createdeco:zinc_sheet',
    'customizableelytra:elytra_wing',
    'dankstorage:1_to_2',
    'dankstorage:2_to_3',
    'dankstorage:3_to_4',
    'dankstorage:4_to_5',
    'dankstorage:5_to_6',
    'dankstorage:6_to_7',
    'dankstorage:dank_1',
    'dankstorage:dank_2',
    'dankstorage:dank_5',
    'dankstorage:dank_6',
    'draconicevolution:awakened_draconium_dust',
    'draconicevolution:draconium_dust',
    'draconicevolution:end_draconium_ore',
    'draconicevolution:nether_draconium_ore',
    'draconicevolution:overworld_draconium_ore',
    'emendatusenigmatica:certus_quartz_dust',
    'emendatusenigmatica:enigmatic_hammer',
    'emendatusenigmatica:fluix_block',
    'emendatusenigmatica:fluix_dust',
    'emendatusenigmatica:fluix_gem',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:quartz_gear',
    'extendedcrafting:advanced_auto_table',
    'extendedcrafting:advanced_catalyst',
    'extendedcrafting:advanced_component',
    'extendedcrafting:advanced_table',
    'extendedcrafting:basic_auto_table',
    'extendedcrafting:basic_catalyst',
    'extendedcrafting:basic_component',
    'extendedcrafting:basic_table',
    'extendedcrafting:black_iron_block_uncraft',
    'extendedcrafting:black_iron_block',
    'extendedcrafting:black_iron_ingot_recraft',
    'extendedcrafting:black_iron_ingot_uncraft',
    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:black_iron_nugget',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:compressor',
    'extendedcrafting:crafting_core',
    'extendedcrafting:crystaltine_block_uncraft',
    'extendedcrafting:crystaltine_block',
    'extendedcrafting:crystaltine_catalyst',
    'extendedcrafting:crystaltine_component',
    'extendedcrafting:crystaltine_ingot_recraft',
    'extendedcrafting:crystaltine_ingot_uncraft',
    'extendedcrafting:crystaltine_ingot',
    'extendedcrafting:crystaltine_nugget',
    'extendedcrafting:elite_auto_table',
    'extendedcrafting:elite_catalyst',
    'extendedcrafting:elite_component',
    'extendedcrafting:elite_table',
    'extendedcrafting:ender_alternator',
    'extendedcrafting:ender_catalyst',
    'extendedcrafting:ender_component',
    'extendedcrafting:ender_crafter',
    'extendedcrafting:ender_ingot_block_uncraft',
    'extendedcrafting:ender_ingot_block',
    'extendedcrafting:ender_ingot_recraft',
    'extendedcrafting:ender_ingot_uncraft',
    'extendedcrafting:ender_ingot',
    'extendedcrafting:ender_nugget',
    'extendedcrafting:ender_star_block_uncraft',
    'extendedcrafting:ender_star_block',
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_catalyst',
    'extendedcrafting:enhanced_ender_component',
    'extendedcrafting:enhanced_ender_ingot_block_uncraft',
    'extendedcrafting:enhanced_ender_ingot_block',
    'extendedcrafting:enhanced_ender_ingot_recraft',
    'extendedcrafting:enhanced_ender_ingot_uncraft',
    'extendedcrafting:enhanced_ender_ingot',
    'extendedcrafting:enhanced_ender_nugget',
    'extendedcrafting:frame',
    'extendedcrafting:guide_book',
    'extendedcrafting:guide',
    'extendedcrafting:luminessence_block_uncraft',
    'extendedcrafting:luminessence_block',
    'extendedcrafting:luminessence',
    'extendedcrafting:nether_star_block_uncraft',
    'extendedcrafting:nether_star_block',
    'extendedcrafting:pedestal',
    'extendedcrafting:redstone_catalyst',
    'extendedcrafting:redstone_component',
    'extendedcrafting:redstone_ingot_block_uncraft',
    'extendedcrafting:redstone_ingot_block',
    'extendedcrafting:redstone_ingot_recraft',
    'extendedcrafting:redstone_ingot_uncraft',
    'extendedcrafting:redstone_ingot',
    'extendedcrafting:redstone_nugget',
    'extendedcrafting:shaped_ender_crafter',
    'extendedcrafting:shaped_table',
    'extendedcrafting:the_ultimate_block_uncraft',
    'extendedcrafting:the_ultimate_block',
    'extendedcrafting:the_ultimate_catalyst',
    'extendedcrafting:the_ultimate_component',
    'extendedcrafting:the_ultimate_ingot_recraft',
    'extendedcrafting:the_ultimate_ingot_uncraft',
    'extendedcrafting:the_ultimate_ingot',
    'extendedcrafting:the_ultimate_nugget',
    'extendedcrafting:ultimate_catalyst',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_singularity',
    'extendedcrafting:ultimate_table',
    'ftbquests:barrier',
    'ftbquests:custom_icon',
    'ftbquests:detector',
    'ftbquests:missing_item',
    'ftbquests:stage_barrier',
    'immersiveengineering:coal_coke',
    'immersiveengineering:coke',
    'immersiveengineering:dust_aluminium',
    'immersiveengineering:dust_aluminum',
    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_constantan',
    'immersiveengineering:dust_copper',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:dust_gold',
    'immersiveengineering:dust_iron',
    'immersiveengineering:dust_lead',
    'immersiveengineering:dust_nickel',
    'immersiveengineering:dust_silver',
    'immersiveengineering:dust_steel',
    'immersiveengineering:dust_sulfur',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_aluminium',
    'immersiveengineering:ingot_aluminum',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:ingot_copper',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_aluminium',
    'immersiveengineering:nugget_constantan',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:nugget_electrum',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:nugget_nickel',
    'immersiveengineering:nugget_silver',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:ore_aluminum',
    'immersiveengineering:ore_copper',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_nickel',
    'immersiveengineering:ore_silver',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:plate_aluminium',
    'immersiveengineering:plate_aluminum',
    'immersiveengineering:plate_constantan',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'immersiveengineering:plate_lead',
    'immersiveengineering:plate_nickel',
    'immersiveengineering:plate_silver',
    'immersiveengineering:plate_steel',
    'immersiveengineering:plate_uranium',
    'immersiveengineering:stick_aluminium',
    'immersiveengineering:stick_aluminum',
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',
    'immersiveengineering:storage_aluminium',
    'immersiveengineering:storage_constantan',
    'immersiveengineering:storage_copper',
    'immersiveengineering:storage_electrum',
    'immersiveengineering:storage_lead',
    'immersiveengineering:storage_nickel',
    'immersiveengineering:storage_silver',
    'immersiveengineering:storage_steel',
    'immersiveengineering:storage_uranium',
    'immersivepetroleum:bitumen',
    'immersiveposts:stick_constantan',
    'immersiveposts:stick_copper',
    'immersiveposts:stick_electrum',
    'immersiveposts:stick_gold',
    'immersiveposts:stick_lead',
    'immersiveposts:stick_nickel',
    'immersiveposts:stick_silver',
    'immersiveposts:stick_uranium',
    'industrialforegoing:dryrubber',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:tinydryrubber',
    'itemfilters:always_false',
    'itemfilters:always_true',
    'itemfilters:and',
    'itemfilters:block',
    'itemfilters:custom',
    'itemfilters:damage',
    'itemfilters:id_regex',
    'itemfilters:item_group',
    'itemfilters:max_count',
    'itemfilters:mod',
    'itemfilters:not',
    'itemfilters:or',
    'itemfilters:strong_nbt',
    'itemfilters:tag',
    'itemfilters:weak_nbt',
    'itemfilters:xor',
    'kubejs:dummy_fluid_item',
    'mekanism:block_bronze',
    'mekanism:block_copper',
    'mekanism:block_lead',
    'mekanism:block_osmium',
    'mekanism:block_steel',
    'mekanism:block_tin',
    'mekanism:block_uranium',
    'mekanism:cardboard_box',
    'mekanism:copper_ore',
    'mekanism:dust_bronze',
    'mekanism:dust_charcoal',
    'mekanism:dust_coal',
    'mekanism:dust_copper',
    'mekanism:dust_diamond',
    'mekanism:dust_emerald',
    'mekanism:dust_fuorite',
    'mekanism:dust_gold',
    'mekanism:dust_iron',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lead',
    'mekanism:dust_osmium',
    'mekanism:dust_quartz',
    'mekanism:dust_steel',
    'mekanism:dust_sulfur',
    'mekanism:dust_tin',
    'mekanism:dust_uranium',
    'mekanism:fluorite_gem',
    'mekanism:fluorite_ore',
    'mekanism:ingot_bronze',
    'mekanism:ingot_copper',
    'mekanism:ingot_lead',
    'mekanism:ingot_osmium',
    'mekanism:ingot_steel',
    'mekanism:ingot_tin',
    'mekanism:ingot_uranium',
    'mekanism:lead_ore',
    'mekanism:nugget_bronze',
    'mekanism:nugget_copper',
    'mekanism:nugget_lead',
    'mekanism:nugget_osmium',
    'mekanism:nugget_steel',
    'mekanism:nugget_tin',
    'mekanism:nugget_uranium',
    'mekanism:osmium_ore',
    'mekanism:tin_ore',
    'mekanism:uranium_ore',
    'minecraft:coal_ore',
    'minecraft:diamond_ore',
    'minecraft:elytra',
    'minecraft:emerald_ore',
    'minecraft:gold_ore',
    'minecraft:iron_ore',
    'minecraft:lapis_ore',
    'minecraft:nether_gold_ore',
    'minecraft:nether_quartz_ore',
    'minecraft:redstone_ore',
    'moreminecarts:silica_steel_mix',
    'powah:ender_cell_starter',
    'powah:ender_gate_basic',
    'powah:ender_gate_blazing',
    'powah:ender_gate_hardened',
    'powah:ender_gate_niotic',
    'powah:ender_gate_nitro',
    'powah:ender_gate_spirited',
    'powah:ender_gate_starter',
    'powah:energy_cable_basic',
    'powah:energy_cable_blazing',
    'powah:energy_cable_hardened',
    'powah:energy_cable_niotic',
    'powah:energy_cable_nitro',
    'powah:energy_cable_spirited',
    'powah:energy_cable_starter',
    'powah:magmator_basic',
    'powah:magmator_blazing',
    'powah:magmator_hardened',
    'powah:magmator_niotic',
    'powah:magmator_nitro',
    'powah:magmator_spirited',
    'powah:magmator_starter',
    'powah:reactor_starter',
    'powah:solar_panel_basic',
    'powah:solar_panel_blazing',
    'powah:solar_panel_hardened',
    'powah:solar_panel_niotic',
    'powah:solar_panel_nitro',
    'powah:solar_panel_spirited',
    'powah:solar_panel_starter',
    'powah:thermo_generator_basic',
    'powah:thermo_generator_blazing',
    'powah:thermo_generator_hardened',
    'powah:thermo_generator_niotic',
    'powah:thermo_generator_nitro',
    'powah:thermo_generator_spirited',
    'powah:thermo_generator_starter',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore_poor',
    'powah:uraninite_ore',
    'powah:uraninite_raw_dense',
    'powah:uraninite_raw_poor',
    'powah:uraninite_raw',
    'projectred-core:boule',
    'projectred-core:copper_coil',
    'projectred-core:copper_ingot',
    'projectred-core:draw_platef',
    'projectred-core:electrotine_dust',
    'projectred-core:electrotine_ingot',
    'projectred-core:electrotine_iron_comp',
    'projectred-core:electrotine_silicon_comp',
    'projectred-core:electrotine_silicon',
    'projectred-core:glow_silicon_comp',
    'projectred-core:gold_coil',
    'projectred-core:iron_coil',
    'projectred-core:motor',
    'projectred-core:null_routing_chip',
    'projectred-core:peridot',
    'projectred-core:red_iron_comp',
    'projectred-core:red_silicon_comp',
    'projectred-core:ruby',
    'projectred-core:sail',
    'projectred-core:sand_coal_comp',
    'projectred-core:sapphire',
    'projectred-core:silicon',
    'projectred-core:silver_ingot',
    'projectred-core:tin_ingot',
    'projectred-core:woven_cloth',
    'projectred-exploration:copper_ore',
    'projectred-exploration:silver_ore',
    'projectred-exploration:tin_ore',
    'quantumquarryplus:creative_cell',
    'quantumquarryplus:ender_obsidian',
    'quantumquarryplus:endercell',
    'quantumquarryplus:quarry_framw',
    'quantumquarryplus:upgrade_base',
    'rftoolsbase:dimensionalshard_end',
    'rftoolsbase:dimensionalshard_nether',
    'rftoolsbase:dimensionalshard_overworld',
    'rftoolsbase:dimensionalshard',
    'rftoolsbase:infused_diamond',
    'rftoolsbase:infused_enderpearl',
    'rftoolsbase:machine_infuser',
    'routerreborn:copper_ingot',
    'routerreborn:copper_ore',
    'silentgear:iron_rod',
    'steampowered:alternator',
    'storagenetwork:crafting_remote',
    'storagenetwork:inventory_remote',
    'tconstruct:cobalt_block',
    'tconstruct:cobalt_ingot',
    'tconstruct:cobalt_nugget',
    'tconstruct:cobalt_ore',
    'tconstruct:copper_block',
    'tconstruct:copper_ingot',
    'tconstruct:copper_nugget',
    'tconstruct:copper_ore',
    'terraqueous:coal_dust',
    'terraqueous:diamond_dust',
    'terraqueous:emerald_dust',
    'terraqueous:gold_dust',
    'terraqueous:iron_dust',
    'thermal:apatite_block',
    'thermal:apatite_dust',
    'thermal:apatite_ore',
    'thermal:apatite',
    'thermal:bitumen_block',
    'thermal:bitumen',
    'thermal:bronze_block',
    'thermal:bronze_gear',
    'thermal:bronze_ingot',
    'thermal:bronze_nugget',
    'thermal:bronze_plate',
    'thermal:cinnabar_block',
    'thermal:cinnabar_dust',
    'thermal:cinnabar_ore',
    'thermal:cinnabar',
    'thermal:coal_coke_block',
    'thermal:coal_coke',
    'thermal:constantan_block',
    'thermal:constantan_gear',
    'thermal:constantan_ingot',
    'thermal:constantan_nugget',
    'thermal:constantan_plate',
    'thermal:copper_block',
    'thermal:copper_dust',
    'thermal:copper_gear',
    'thermal:copper_ingot',
    'thermal:copper_nugget',
    'thermal:copper_ore',
    'thermal:copper_plate',
    'thermal:diamond_dust',
    'thermal:diamond_gear',
    'thermal:dynamo_magmatic',
    'thermal:electrum_block',
    'thermal:electrum_gear',
    'thermal:electrum_ingot',
    'thermal:electrum_nugget',
    'thermal:electrum_plate',
    'thermal:emerald_dust',
    'thermal:emerald_gear',
    'thermal:ender_pearl_dust',
    'thermal:enderium_block',
    'thermal:enderium_gear',
    'thermal:enderium_ingot',
    'thermal:enderium_nugget',
    'thermal:enderium_plate',
    'thermal:gold_dust',
    'thermal:gold_gear',
    'thermal:gold_plate',
    'thermal:invar_block',
    'thermal:invar_gear',
    'thermal:invar_ingot',
    'thermal:invar_nugget',
    'thermal:invar_plate',
    'thermal:iron_dust',
    'thermal:iron_gear',
    'thermal:iron_plate',
    'thermal:lapis_dust',
    'thermal:lapis_gear',
    'thermal:lapis_lazuli_gear',
    'thermal:latex_bucket',
    'thermal:latex',
    'thermal:lead_block',
    'thermal:lead_dust',
    'thermal:lead_gear',
    'thermal:lead_ingot',
    'thermal:lead_nugget',
    'thermal:lead_ore',
    'thermal:lead_plate',
    'thermal:lumium_block',
    'thermal:lumium_gear',
    'thermal:lumium_ingot',
    'thermal:lumium_nugget',
    'thermal:lumium_plate',
    'thermal:nickel_block',
    'thermal:nickel_dust',
    'thermal:nickel_gear',
    'thermal:nickel_ingot',
    'thermal:nickel_nugget',
    'thermal:nickel_ore',
    'thermal:nickel_plate',
    'thermal:niter_block',
    'thermal:niter_dust',
    'thermal:niter',
    'thermal:quartz_dust',
    'thermal:quartz_gear',
    'thermal:signalum_block',
    'thermal:signalum_gear',
    'thermal:signalum_ingot',
    'thermal:signalum_nugget',
    'thermal:signalum_plate',
    'thermal:silver_block',
    'thermal:silver_dust',
    'thermal:silver_gear',
    'thermal:silver_ingot',
    'thermal:silver_nugget',
    'thermal:silver_ore',
    'thermal:silver_plate',
    'thermal:sulfur_block',
    'thermal:sulfur_dust',
    'thermal:sulfur_ore',
    'thermal:sulfur',
    'thermal:tin_block',
    'thermal:tin_dust',
    'thermal:tin_gear',
    'thermal:tin_ingot',
    'thermal:tin_nugget',
    'thermal:tin_ore',
    'thermal:tin_plate',
    'tinyredstone:silicon',
    'titanium:diamond_gear',
    'titanium:gold_gear',
    'titanium:iron_gear',
    'xnet:connector_upgrade',
  ].forEach(x => event.hide(x));

  [
    'helmet',
    'chestplate',
    'leggings',
    'boots',
    'sword',
    'pickaxe',
    'shovel',
    'axe',
    'hoe',
    'paxel',
  ].forEach(gear => {
    event.hide(`mekanismtools:lapis_lazuli_${gear}`);
    event.hide(`mekanismtools:osmium_${gear}`);
  });

  [
    'block',
    'gem',
    'cluster',
    'clump',
    'crystal',
    'dirty_dust',
    'shard',
    'crushed',
    'fragment',
    'gravel',
  ].forEach(itemType => {
    event.hide(`emendatusenigmatica:certus_quartz_${itemType}`);
    event.hide(`emendatusenigmatica:charged_certus_quartz_${itemType}`);
  });

  [
    'andesite',
    'basalt',
    'blackstone',
    'blue_netherrack',
    'brimstone',
    'c_limestone',
    'cryptic_stone',
    'deepslate',
    'diorite',
    'end_stone',
    'ether_stone',
    'flavolite',
    'gabbro',
    'granite',
    'gravel',
    'jasper',
    'marble',
    'mossy_stone',
    'netherrack',
    'nylium_soul_soil',
    'raw_marble',
    'sand',
    'scoria',
    'slate',
    'soul_soil',
    'subzero_ash',
    'sulphuric_rock',
    'violecite',
    'weathered_limestone',
  ].forEach(x => event.hide(`/emendatusenigmatica:.*_${x}_ore/`))

  // Hides the extended crafting book.
  event.hide(Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}'));
});

onEvent('jei.information', event => {
  event.add('powah:ender_core', [
    'Only dropped by §5Challenger §kEndermen§r, §0but some say the §4Piglins§r may have studied these cores.',
  ]);
  event.add('powah:ender_core', [
    "Challenger Mobs have fancy §cc§4o§6l§eo§2r§3e§bd§r particles and prefixes like §3'Agile'§r or §1'Mighty'§r",
  ]);
});

onEvent('jei.add.items', event => {
  event.add(Item.of('customizableelytra:customizable_elytra'));
  event.add(Item.of('steampowered:pressurized_gas_container'));

  [
    'framedcompactdrawers:framed_full_one',
    'framedcompactdrawers:framed_full_two',
    'framedcompactdrawers:framed_full_four',
    'framedcompactdrawers:framed_half_one',
    'framedcompactdrawers:framed_half_two',
    'framedcompactdrawers:framed_half_four',
    'framedcompactdrawers:framed_trim',
  ].forEach(drawerType => {
    global._planks.forEach(plank => {
      const output = Item.of(drawerType, {
        MatT: {id: 'minecraft:air', Count: 1},
        MatF: {id: 'minecraft:air', Count: 1},
        MatS: {id: plank, Count: 1},
        display: {
          Name: `{"text": "${global.generateDrawerName(plank, drawerType)}", "italic": "false"}`,
        },
      });

      event.add(output);
    });
  });
});
