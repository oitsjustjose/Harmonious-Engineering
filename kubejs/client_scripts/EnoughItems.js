// priority: 0
const items = [
  '/expandedstorage:*_present/',
  '/libraryferret:*/',
  'buildinggadgets:construction_block_dense',
  'buildinggadgets:construction_block_powder',
  'buildinggadgets:construction_block',
  'buildinggadgets:construction_chunk_dense',
  'buildinggadgets:construction_paste_container_creative',
  'buildinggadgets:construction_paste_container_t1',
  'buildinggadgets:construction_paste_container_t2',
  'buildinggadgets:construction_paste_container_t3',
  'buildinggadgets:construction_paste',
  'buildinggadgets:template',
  'create:copper_backtank_placeable',
  'create:copper_sheet',
  'create:crushed_aluminum_ore',
  'create:crushed_copper_ore',
  'create:crushed_gold_ore',
  'create:crushed_iron_ore',
  'create:crushed_lead_ore',
  'create:crushed_nickel_ore',
  'create:crushed_silver_ore',
  'create:crushed_tin_ore',
  'create:crushed_uranium_ore',
  'create:golden_sheet',
  'create:incomplete_precision_mechanism',
  'create:incomplete_track',
  'create:iron_sheet',
  'create:unprocessed_obsidian_sheet',
  'createaddition:accumulator',
  'createaddition:brass_rod',
  'createaddition:capacitor',
  'createaddition:connector',
  'createaddition:copper_rod',
  'createaddition:copper_spool',
  'createaddition:copper_wire',
  'createaddition:diamond_grit',
  'createaddition:gold_rod',
  'createaddition:gold_spool',
  'createaddition:gold_wire',
  'createaddition:iron_rod',
  'createaddition:iron_wire',
  'createaddition:redstone_relay',
  'createaddition:rolling_mill',
  'createaddition:spool',
  'createaddition:tesla_coil',
  'createaddition:zinc_sheet',
  'dimstorage:dim_core',
  'dimstorage:dim_wall',
  'dimstorage:solid_dim_core',
  'enderchests:ender_pouch',
  'expandedstorage:candy_cane_mini_present_with_sparrow',
  'expandedstorage:candy_cane_mini_present',
  'expandedstorage:green_mini_present_with_sparrow',
  'expandedstorage:green_mini_present',
  'expandedstorage:lavender_mini_present_with_sparrow',
  'expandedstorage:lavender_mini_present',
  'expandedstorage:old_diamond_chest',
  'expandedstorage:old_gold_chest',
  'expandedstorage:old_iron_chest',
  'expandedstorage:old_netherite_chest',
  'expandedstorage:old_obsidian_chest',
  'expandedstorage:old_wood_chest',
  'expandedstorage:pink_amethyst_mini_present_with_sparrow',
  'expandedstorage:pink_amethyst_mini_present',
  'expandedstorage:pumpkin_chest',
  'expandedstorage:pumpkin_mini_chest_with_sparrow',
  'expandedstorage:pumpkin_mini_chest',
  'expandedstorage:red_mini_present_with_sparrow',
  'expandedstorage:red_mini_present',
  'expandedstorage:vanilla_wood_mini_chest_with_sparrow',
  'expandedstorage:vanilla_wood_mini_chest',
  'expandedstorage:white_mini_present_with_sparrow',
  'expandedstorage:white_mini_present',
  'expandedstorage:wood_mini_chest_with_sparrow',
  'ftbquests:barrier',
  'ftbquests:custom_icon',
  'ftbquests:detector',
  'ftbquests:lootcrate',
  'ftbquests:missing_item',
  'ftbquests:stage_barrier',
  'immersiveengineering:coal_coke',
  'immersiveengineering:coke',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:deepslate_ore_nickel',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:deepslate_ore_uranium',
  'immersiveengineering:dust_constantan',
  'immersiveengineering:dust_copper',
  'immersiveengineering:dust_electrum',
  'immersiveengineering:dust_gold',
  'immersiveengineering:dust_iron',
  'immersiveengineering:dust_lead',
  'immersiveengineering:dust_nickel',
  'immersiveengineering:dust_silver',
  'immersiveengineering:dust_uranium',
  'immersiveengineering:dust_wood',
  'immersiveengineering:fake_icon_birthday',
  'immersiveengineering:fake_icon_coresample',
  'immersiveengineering:fake_icon_drillbreak',
  'immersiveengineering:fake_icon_lucky',
  'immersiveengineering:fake_icon_ravenholm',
  'immersiveengineering:ingot_constantan',
  'immersiveengineering:ingot_electrum',
  'immersiveengineering:ingot_lead',
  'immersiveengineering:ingot_nickel',
  'immersiveengineering:ingot_silver',
  'immersiveengineering:ingot_uranium',
  'immersiveengineering:nugget_constantan',
  'immersiveengineering:nugget_copper',
  'immersiveengineering:nugget_electrum',
  'immersiveengineering:nugget_lead',
  'immersiveengineering:nugget_nickel',
  'immersiveengineering:nugget_silver',
  'immersiveengineering:nugget_uranium',
  'immersiveengineering:ore_lead',
  'immersiveengineering:ore_nickel',
  'immersiveengineering:ore_silver',
  'immersiveengineering:ore_uranium',
  'immersiveengineering:plate_constantan',
  'immersiveengineering:plate_copper',
  'immersiveengineering:plate_electrum',
  'immersiveengineering:plate_gold',
  'immersiveengineering:plate_iron',
  'immersiveengineering:plate_lead',
  'immersiveengineering:plate_nickel',
  'immersiveengineering:plate_silver',
  'immersiveengineering:plate_uranium',
  'immersiveengineering:raw_block_uranium',
  'immersiveengineering:raw_lead',
  'immersiveengineering:raw_nickel',
  'immersiveengineering:raw_silver',
  'immersiveengineering:raw_uranium',
  'immersiveengineering:sawdust',
  'immersiveengineering:shader_bag_common',
  'immersiveengineering:shader_bag_epic',
  'immersiveengineering:shader_bag_ie_masterwork',
  'immersiveengineering:shader_bag_rare',
  'immersiveengineering:shader_bag_uncommon',
  'immersiveengineering:sheetmetal_uranium',
  'immersiveengineering:slab_sheetmetal_uranium',
  'immersiveengineering:slab_storage_uranium',
  'immersiveengineering:slag',
  'immersiveengineering:storage_constantan',
  'immersiveengineering:storage_electrum',
  'immersiveengineering:storage_lead',
  'immersiveengineering:storage_nickel',
  'immersiveengineering:storage_silver',
  'immersiveengineering:storage_steel',
  'immersiveengineering:storage_uranium',
  'immersiveengineering:watermill',
  'immersiveengineering:waterwheel_segment',
  'immersiveengineering:windmill',
  'industrialforegoing:diamond_gear',
  'industrialforegoing:dryrubber',
  'industrialforegoing:gold_gear',
  'industrialforegoing:iron_gear',
  'industrialforegoing:latex_processing_unit',
  'industrialforegoing:plastic',
  'industrialforegoing:tinydryrubber',
  'kubejs:incomplete_hammer',
  'kubejs:incomplete_redstone_servo',
  'kubejs:incomplete_rf_coil',
  'minecraft:barrier',
  'minecraft:chest',
  'minecraft:light',
  'minecraft:sculk_sensor',
  'moreminecarts:silica_steel_mix',
  'pipez:gas_pipe',
  'refinedstorage:black_controller',
  'refinedstorage:black_crafter_manager',
  'refinedstorage:black_crafter',
  'refinedstorage:black_crafting_grid',
  'refinedstorage:black_crafting_monitor',
  'refinedstorage:black_creative_controller',
  'refinedstorage:black_detector',
  'refinedstorage:black_disk_manipulator',
  'refinedstorage:black_fluid_grid',
  'refinedstorage:black_grid',
  'refinedstorage:black_network_receiver',
  'refinedstorage:black_network_transmitter',
  'refinedstorage:black_pattern_grid',
  'refinedstorage:black_relay',
  'refinedstorage:black_security_manager',
  'refinedstorage:black_wireless_transmitter',
  'refinedstorage:blue_controller',
  'refinedstorage:blue_crafter_manager',
  'refinedstorage:blue_crafter',
  'refinedstorage:blue_crafting_grid',
  'refinedstorage:blue_crafting_monitor',
  'refinedstorage:blue_creative_controller',
  'refinedstorage:blue_detector',
  'refinedstorage:blue_disk_manipulator',
  'refinedstorage:blue_fluid_grid',
  'refinedstorage:blue_grid',
  'refinedstorage:blue_network_receiver',
  'refinedstorage:blue_network_transmitter',
  'refinedstorage:blue_pattern_grid',
  'refinedstorage:blue_relay',
  'refinedstorage:blue_security_manager',
  'refinedstorage:blue_wireless_transmitter',
  'refinedstorage:brown_controller',
  'refinedstorage:brown_crafter_manager',
  'refinedstorage:brown_crafter',
  'refinedstorage:brown_crafting_grid',
  'refinedstorage:brown_crafting_monitor',
  'refinedstorage:brown_creative_controller',
  'refinedstorage:brown_detector',
  'refinedstorage:brown_disk_manipulator',
  'refinedstorage:brown_fluid_grid',
  'refinedstorage:brown_grid',
  'refinedstorage:brown_network_receiver',
  'refinedstorage:brown_network_transmitter',
  'refinedstorage:brown_pattern_grid',
  'refinedstorage:brown_relay',
  'refinedstorage:brown_security_manager',
  'refinedstorage:brown_wireless_transmitter',
  'refinedstorage:creative_controller',
  'refinedstorage:creative_fluid_storage_block',
  'refinedstorage:creative_fluid_storage_disk',
  'refinedstorage:creative_portable_grid',
  'refinedstorage:creative_storage_block',
  'refinedstorage:creative_storage_disk',
  'refinedstorage:creative_wireless_crafting_monitor',
  'refinedstorage:creative_wireless_fluid_grid',
  'refinedstorage:creative_wireless_grid',
  'refinedstorage:cyan_controller',
  'refinedstorage:cyan_crafter_manager',
  'refinedstorage:cyan_crafter',
  'refinedstorage:cyan_crafting_grid',
  'refinedstorage:cyan_crafting_monitor',
  'refinedstorage:cyan_creative_controller',
  'refinedstorage:cyan_detector',
  'refinedstorage:cyan_disk_manipulator',
  'refinedstorage:cyan_fluid_grid',
  'refinedstorage:cyan_grid',
  'refinedstorage:cyan_network_receiver',
  'refinedstorage:cyan_network_transmitter',
  'refinedstorage:cyan_pattern_grid',
  'refinedstorage:cyan_relay',
  'refinedstorage:cyan_security_manager',
  'refinedstorage:cyan_wireless_transmitter',
  'refinedstorage:gray_controller',
  'refinedstorage:gray_crafter_manager',
  'refinedstorage:gray_crafter',
  'refinedstorage:gray_crafting_grid',
  'refinedstorage:gray_crafting_monitor',
  'refinedstorage:gray_creative_controller',
  'refinedstorage:gray_detector',
  'refinedstorage:gray_disk_manipulator',
  'refinedstorage:gray_fluid_grid',
  'refinedstorage:gray_grid',
  'refinedstorage:gray_network_receiver',
  'refinedstorage:gray_network_transmitter',
  'refinedstorage:gray_pattern_grid',
  'refinedstorage:gray_relay',
  'refinedstorage:gray_security_manager',
  'refinedstorage:gray_wireless_transmitter',
  'refinedstorage:green_controller',
  'refinedstorage:green_crafter_manager',
  'refinedstorage:green_crafter',
  'refinedstorage:green_crafting_grid',
  'refinedstorage:green_crafting_monitor',
  'refinedstorage:green_creative_controller',
  'refinedstorage:green_detector',
  'refinedstorage:green_disk_manipulator',
  'refinedstorage:green_fluid_grid',
  'refinedstorage:green_grid',
  'refinedstorage:green_network_receiver',
  'refinedstorage:green_network_transmitter',
  'refinedstorage:green_pattern_grid',
  'refinedstorage:green_relay',
  'refinedstorage:green_security_manager',
  'refinedstorage:green_wireless_transmitter',
  'refinedstorage:light_gray_controller',
  'refinedstorage:light_gray_crafter_manager',
  'refinedstorage:light_gray_crafter',
  'refinedstorage:light_gray_crafting_grid',
  'refinedstorage:light_gray_crafting_monitor',
  'refinedstorage:light_gray_creative_controller',
  'refinedstorage:light_gray_detector',
  'refinedstorage:light_gray_disk_manipulator',
  'refinedstorage:light_gray_fluid_grid',
  'refinedstorage:light_gray_grid',
  'refinedstorage:light_gray_network_receiver',
  'refinedstorage:light_gray_network_transmitter',
  'refinedstorage:light_gray_pattern_grid',
  'refinedstorage:light_gray_relay',
  'refinedstorage:light_gray_security_manager',
  'refinedstorage:light_gray_wireless_transmitter',
  'refinedstorage:lime_controller',
  'refinedstorage:lime_crafter_manager',
  'refinedstorage:lime_crafter',
  'refinedstorage:lime_crafting_grid',
  'refinedstorage:lime_crafting_monitor',
  'refinedstorage:lime_creative_controller',
  'refinedstorage:lime_detector',
  'refinedstorage:lime_disk_manipulator',
  'refinedstorage:lime_fluid_grid',
  'refinedstorage:lime_grid',
  'refinedstorage:lime_network_receiver',
  'refinedstorage:lime_network_transmitter',
  'refinedstorage:lime_pattern_grid',
  'refinedstorage:lime_relay',
  'refinedstorage:lime_security_manager',
  'refinedstorage:lime_wireless_transmitter',
  'refinedstorage:magenta_controller',
  'refinedstorage:magenta_crafter_manager',
  'refinedstorage:magenta_crafter',
  'refinedstorage:magenta_crafting_grid',
  'refinedstorage:magenta_crafting_monitor',
  'refinedstorage:magenta_creative_controller',
  'refinedstorage:magenta_detector',
  'refinedstorage:magenta_disk_manipulator',
  'refinedstorage:magenta_fluid_grid',
  'refinedstorage:magenta_grid',
  'refinedstorage:magenta_network_receiver',
  'refinedstorage:magenta_network_transmitter',
  'refinedstorage:magenta_pattern_grid',
  'refinedstorage:magenta_relay',
  'refinedstorage:magenta_security_manager',
  'refinedstorage:magenta_wireless_transmitter',
  'refinedstorage:orange_controller',
  'refinedstorage:orange_crafter_manager',
  'refinedstorage:orange_crafter',
  'refinedstorage:orange_crafting_grid',
  'refinedstorage:orange_crafting_monitor',
  'refinedstorage:orange_creative_controller',
  'refinedstorage:orange_detector',
  'refinedstorage:orange_disk_manipulator',
  'refinedstorage:orange_fluid_grid',
  'refinedstorage:orange_grid',
  'refinedstorage:orange_network_receiver',
  'refinedstorage:orange_network_transmitter',
  'refinedstorage:orange_pattern_grid',
  'refinedstorage:orange_relay',
  'refinedstorage:orange_security_manager',
  'refinedstorage:orange_wireless_transmitter',
  'refinedstorage:pink_controller',
  'refinedstorage:pink_crafter_manager',
  'refinedstorage:pink_crafter',
  'refinedstorage:pink_crafting_grid',
  'refinedstorage:pink_crafting_monitor',
  'refinedstorage:pink_creative_controller',
  'refinedstorage:pink_detector',
  'refinedstorage:pink_disk_manipulator',
  'refinedstorage:pink_fluid_grid',
  'refinedstorage:pink_grid',
  'refinedstorage:pink_network_receiver',
  'refinedstorage:pink_network_transmitter',
  'refinedstorage:pink_pattern_grid',
  'refinedstorage:pink_relay',
  'refinedstorage:pink_security_manager',
  'refinedstorage:pink_wireless_transmitter',
  'refinedstorage:purple_controller',
  'refinedstorage:purple_crafter_manager',
  'refinedstorage:purple_crafter',
  'refinedstorage:purple_crafting_grid',
  'refinedstorage:purple_crafting_monitor',
  'refinedstorage:purple_creative_controller',
  'refinedstorage:purple_detector',
  'refinedstorage:purple_disk_manipulator',
  'refinedstorage:purple_fluid_grid',
  'refinedstorage:purple_grid',
  'refinedstorage:purple_network_receiver',
  'refinedstorage:purple_network_transmitter',
  'refinedstorage:purple_pattern_grid',
  'refinedstorage:purple_relay',
  'refinedstorage:purple_security_manager',
  'refinedstorage:purple_wireless_transmitter',
  'refinedstorage:red_controller',
  'refinedstorage:red_crafter_manager',
  'refinedstorage:red_crafter',
  'refinedstorage:red_crafting_grid',
  'refinedstorage:red_crafting_monitor',
  'refinedstorage:red_creative_controller',
  'refinedstorage:red_detector',
  'refinedstorage:red_disk_manipulator',
  'refinedstorage:red_fluid_grid',
  'refinedstorage:red_grid',
  'refinedstorage:red_network_receiver',
  'refinedstorage:red_network_transmitter',
  'refinedstorage:red_pattern_grid',
  'refinedstorage:red_relay',
  'refinedstorage:red_security_manager',
  'refinedstorage:red_wireless_transmitter',
  'refinedstorage:white_controller',
  'refinedstorage:white_crafter_manager',
  'refinedstorage:white_crafter',
  'refinedstorage:white_crafting_grid',
  'refinedstorage:white_crafting_monitor',
  'refinedstorage:white_creative_controller',
  'refinedstorage:white_detector',
  'refinedstorage:white_disk_manipulator',
  'refinedstorage:white_fluid_grid',
  'refinedstorage:white_grid',
  'refinedstorage:white_network_receiver',
  'refinedstorage:white_network_transmitter',
  'refinedstorage:white_pattern_grid',
  'refinedstorage:white_relay',
  'refinedstorage:white_security_manager',
  'refinedstorage:white_wireless_transmitter',
  'refinedstorage:yellow_controller',
  'refinedstorage:yellow_crafter_manager',
  'refinedstorage:yellow_crafter',
  'refinedstorage:yellow_crafting_grid',
  'refinedstorage:yellow_crafting_monitor',
  'refinedstorage:yellow_creative_controller',
  'refinedstorage:yellow_detector',
  'refinedstorage:yellow_disk_manipulator',
  'refinedstorage:yellow_fluid_grid',
  'refinedstorage:yellow_grid',
  'refinedstorage:yellow_network_receiver',
  'refinedstorage:yellow_network_transmitter',
  'refinedstorage:yellow_pattern_grid',
  'refinedstorage:yellow_relay',
  'refinedstorage:yellow_security_manager',
  'refinedstorage:yellow_wireless_transmitter',
  'rftoolsbase:crafting_card',
  'rftoolsbase:filter_module',
  'rftoolsbase:infused_enderpearl',
  'rftoolsbase:tablet_filled',
  'rftoolsbase:tablet',
  'thermal:beetroot_block',
  'thermal:carrot_block',
  'thermal:drill_head',
  'thermal:emerald_gear',
  'thermal:lapis_gear',
  'thermal:potato_block',
  'thermal:quartz_gear',
  'thermal:saw_blade',
  'titanium:block_asset_test',
  'titanium:block_test',
  'titanium:block_twenty_four_test',
  'titanium:creative_generator',
  'titanium:machine_test',
  'torchmaster:feral_flare_lantern',
  'torchmaster:frozen_pearl',
  Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"ecologics:long_sliding"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"ecologics:sliding"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:infection"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:long_infection"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:long_luminous"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:luminous"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:strong_infection"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"infernalexp:strong_luminous"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:fire_resistance"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:harming"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:healing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:invisibility"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:leaping"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_fire_resistance"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_invisibility"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_leaping"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_night_vision"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_poison"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_regeneration"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_slow_falling"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_slowness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_strength"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_swiftness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_turtle_master"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_water_breathing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_weakness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:luck"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:night_vision"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:poison"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:regeneration"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:slow_falling"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:slowness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strength"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_harming"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_healing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_leaping"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_poison"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_regeneration"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_slowness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_strength"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_swiftness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_turtle_master"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:swiftness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:turtle_master"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:water_breathing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"minecraft:weakness"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"naturalist:forest_dasher"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"naturalist:glowing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"naturalist:long_forest_dasher"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"naturalist:long_glowing"}'),
  Item.of('minecraft:lingering_potion', '{Potion:"naturalist:strong_forest_dasher"}'),
  Item.of('minecraft:splash_potion', '{Potion:"ecologics:long_sliding"}'),
  Item.of('minecraft:splash_potion', '{Potion:"ecologics:sliding"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:infection"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:long_infection"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:long_luminous"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:luminous"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:strong_infection"}'),
  Item.of('minecraft:splash_potion', '{Potion:"infernalexp:strong_luminous"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:awkward"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:fire_resistance"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:harming"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:healing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:invisibility"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:leaping"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_fire_resistance"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_invisibility"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_leaping"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_night_vision"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_poison"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_regeneration"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_slow_falling"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_slowness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_strength"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_swiftness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_turtle_master"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_water_breathing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:long_weakness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:luck"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:night_vision"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:poison"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:regeneration"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:slow_falling"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:slowness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strength"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_harming"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_healing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_leaping"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_poison"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_regeneration"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_slowness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_strength"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_swiftness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_turtle_master"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:swiftness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:turtle_master"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:water_breathing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'),
  Item.of('minecraft:splash_potion', '{Potion:"naturalist:forest_dasher"}'),
  Item.of('minecraft:splash_potion', '{Potion:"naturalist:glowing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"naturalist:long_forest_dasher"}'),
  Item.of('minecraft:splash_potion', '{Potion:"naturalist:long_glowing"}'),
  Item.of('minecraft:splash_potion', '{Potion:"naturalist:strong_forest_dasher"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"ecologics:long_sliding"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"ecologics:sliding"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:infection"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:long_infection"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:long_luminous"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:luminous"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:strong_infection"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"infernalexp:strong_luminous"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:fire_resistance"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:harming"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:healing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:invisibility"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:leaping"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_fire_resistance"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_invisibility"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_leaping"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_night_vision"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_poison"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_regeneration"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_slow_falling"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_slowness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_strength"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_swiftness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_turtle_master"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_water_breathing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_weakness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:luck"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:night_vision"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:poison"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:regeneration"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:slow_falling"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:slowness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strength"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_harming"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_healing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_leaping"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_poison"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_regeneration"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_slowness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_strength"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_swiftness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_turtle_master"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:swiftness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:turtle_master"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:water_breathing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:weakness"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"naturalist:forest_dasher"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"naturalist:glowing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"naturalist:long_forest_dasher"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"naturalist:long_glowing"}'),
  Item.of('minecraft:tipped_arrow', '{Potion:"naturalist:strong_forest_dasher"}'),
];

onEvent('jei.hide.items', event => {
  items.forEach(x => {
    try {
      console.log(x);
      event.hide(x);
    } catch (e) {
      console.error(e);
    }
  });
});

onEvent('rei.hide.items', event => {
  items.forEach(x => {
    try {
      console.log(x);
      event.hide(x);
    } catch (e) {
      console.error(e);
    }
  });
});

onEvent('rei.remove.categories', event => {
  console.log(event.getCategoryIds());
  event.remove('minecraft:plugins/tag');
});
