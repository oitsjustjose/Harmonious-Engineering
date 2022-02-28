const harmoniousEngineeringTags = event => {
  event.add('harmeng:diamond_tier_saws', 'natural-progression:diamond_saw');
  event.add('harmeng:diamond_tier_saws', 'natural-progression:netherite_saw');

  event.add('harmeng:presses', 'thermal:machine_press');
  event.add('harmeng:presses', 'create:mechanical_press');

  event.add('harmeng:basic_tank', 'create:fluid_tank');
  event.add('harmeng:basic_tank', 'mekanism:basic_fluid_tank');
  event.add('harmeng:basic_tank', 'industrialforegoing:pity_black_hole_tank');
  event.add('harmeng:basic_tank', 'industrialforegoing:simple_black_hole_tank');
  event.add('harmeng:basic_tank', 'thermal:fluid_cell');

  event.add('harmeng:chestless_logs', '#tconstruct:greenheart_logs');
  event.add('harmeng:chestless_logs', '#tconstruct:skyroot_logs');
  event.add('harmeng:chestless_logs', '#tconstruct:bloodshroom_logs');

  event.add('harmeng:chestless_planks', 'quark:white_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:orange_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:magenta_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:light_blue_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:yellow_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:lime_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:pink_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:gray_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:light_gray_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:cyan_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:purple_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:blue_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:brown_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:green_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:red_stained_planks');
  event.add('harmeng:chestless_planks', 'quark:black_stained_planks');
  event.add('harmeng:chestless_planks', 'tconstruct:greenheart_planks');
  event.add('harmeng:chestless_planks', 'tconstruct:skyroot_planks');
  event.add('harmeng:chestless_planks', 'tconstruct:bloodshroom_planks');

  event.add('harmeng:saw_blade', 'thermal:saw_blade');
  event.add('harmeng:saw_blade', '#forge:sawblades');

  event.add('harmeng:meka/mid_tier_mat', 'powah:crystal_blazing');
  event.add('harmeng:meka/mid_tier_mat', 'industrialforegoing:pink_slime_ingot');
  event.add('harmeng:meka/mid_tier_mat', '#forge:ingots/enderium');
  event.add('harmeng:meka/mid_tier_mat', '#forge:ingots/refined_obsidian');

  event.add('harmeng:drawer_like', '#storagedrawers:drawers');
  event.add('harmeng:drawer_like', 'storage_overhaul:oak_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:spruce_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:birch_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:acacia_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:jungle_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:dark_oak_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:crimson_storage_barrel');
  event.add('harmeng:drawer_like', 'storage_overhaul:warped_storage_barrel');

  event.add('harmeng:zinc_or_iron_chunk', 'emendatusenigmatica:zinc_chunk');
  event.add('harmeng:zinc_or_iron_chunk', 'emendatusenigmatica:iron_chunk');

  [1, 2, 3].forEach(tier =>
    ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak', 'crimson', 'warped'].forEach(type =>
      event.removeAllTagsFrom(`storage_overhaul:${type}_chest_tier_${tier}`)
    )
  );

  [
    'minecraft:barrel',
    'betternether:barrel_anchor_tree',
    'betternether:barrel_nether_sakura',
    'betternether:barrel_crimson',
    'betternether:barrel_warped',
    'betternether:barrel_stalagnate',
    'betternether:barrel_reed',
    'betternether:barrel_willow',
    'betternether:barrel_wart',
    'betternether:barrel_rubeus',
    'betternether:barrel_mushroom',
    'betternether:barrel_mushroom_fir',
    'betterendforge:mossy_glowshroom_barrel',
    'betterendforge:lacugrove_barrel',
    'betterendforge:end_lotus_barrel',
    'betterendforge:pythadendron_barrel',
    'betterendforge:dragon_tree_barrel',
    'betterendforge:tenanea_barrel',
    'betterendforge:helix_tree_barrel',
    'betterendforge:umbrella_tree_barrel',
    'betterendforge:jellyshroom_barrel',
    'betterendforge:lucernia_barrel',
    'storage_overhaul:oak_barrel',
    'storage_overhaul:spruce_barrel',
    'storage_overhaul:birch_barrel',
    'storage_overhaul:acacia_barrel',
    'storage_overhaul:jungle_barrel',
    'storage_overhaul:dark_oak_barrel',
    'storage_overhaul:crimson_barrel',
    'storage_overhaul:warped_barrel',
  ].forEach(barrel => event.add('forge:barrels/wooden', barrel));
};

const naturalProgressionTags = event => {
  event.add('natural-progression:axes', 'immersiveengineering:axe_steel');
  event.add('natural-progression:axes', 'mekanismtools:stone_paxel');
  event.add('natural-progression:axes', 'mekanismtools:iron_paxel');
  event.add('natural-progression:axes', 'mekanismtools:gold_paxel');
  event.add('natural-progression:axes', 'mekanismtools:diamond_paxel');
  event.add('natural-progression:axes', 'mekanismtools:netherite_paxel');
  event.add('natural-progression:axes', 'mekanismtools:bronze_axe');
  event.add('natural-progression:axes', 'mekanismtools:bronze_paxel');
  event.add('natural-progression:axes', 'mekanismtools:osmium_axe');
  event.add('natural-progression:axes', 'mekanismtools:osmium_paxel');
  event.add('natural-progression:axes', 'mekanismtools:lapis_lazuli_axe');
  event.add('natural-progression:axes', 'mekanismtools:lapis_lazuli_paxel');
  event.add('natural-progression:axes', 'mekanismtools:refined_glowstone_axe');
  event.add('natural-progression:axes', 'mekanismtools:refined_obsidian_axe');
  event.add('natural-progression:axes', 'mekanismtools:refined_obsidian_paxel');
  event.add('natural-progression:axes', 'mekanismtools:steel_axe');
  event.add('natural-progression:axes', 'mekanismtools:steel_paxel');
  event.add('natural-progression:axes', 'tconstruct:hand_axe');
  event.add('natural-progression:axes', 'betterendforge:aeternium_axe');
  event.add('natural-progression:axes', 'betterendforge:thallasium_axe');
  event.add('natural-progression:axes', 'betterendforge:terminite_axe');
  event.add('natural-progression:axes', 'betternether:cincinnasite_axe');
  event.add('natural-progression:axes', 'betternether:nether_ruby_axe');
  event.add('natural-progression:axes', 'mekanismtools:refined_glowstone_paxel');
  event.add('natural-progression:axes', 'appliedenergistics2:certus_quartz_axe');
  event.add('natural-progression:axes', 'appliedenergistics2:nether_quartz_axe');

  event.add('natural-progression:override_axes', 'industrialforegoing:infinity_drill');
  event.add('natural-progression:override_axes', 'industrialforegoing:infinity_saw');
  event.add('natural-progression:override_axes', 'tconstruct:mattock');
};

const thermalTags = event => {
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_plate');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_gear');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_rod');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_bullet_casing');
  event.add('thermal:crafting/dies', 'immersiveengineering:mold_wire');
};

const curiousElytraTags = event => {
  event.add('curios:back', 'alexsmobs:tarantula_hawk_elytra');
  event.add('curios:back', 'mekanism:hdpe_elytra');
  event.add('curios:back', 'tconstruct:slime_chestplate');
  event.add('curios:back', 'redstone_arsenal:flux_elytra');
};

const removePlates = event => {
  [
    'bronze',
    'constantan',
    'copper',
    'electrum',
    'enderium',
    'gold',
    'invar',
    'iron',
    'lead',
    'lumium',
    'nickel',
    'signalum',
    'silver',
    'tin',
  ].forEach(mat => {
    event.remove(`forge:plates/${mat}`, `thermal:${mat}_plate`);
    event.remove(`forge:plates`, `thermal:${mat}_plate`);
  });

  [
    'copper',
    'aluminum',
    'lead',
    'silver',
    'nickel',
    'uranium',
    'constantan',
    'electrum',
    'steel',
    'iron',
    'gold',
  ].forEach(mat => {
    event.remove(`forge:plates/${mat}`, `immersiveengineering:plate_${mat}`);
    event.remove(`forge:plates`, `immersiveengineering:plate_${mat}`);
  });
};

const removeGears = event => {
  [
    'bronze',
    'constantan',
    'copper',
    'diamond',
    'electrum',
    'emerald',
    'enderium',
    'gold',
    'invar',
    'iron',
    'lapis',
    'lead',
    'lumium',
    'nickel',
    'quartz',
    'signalum',
    'silver',
    'tin',
  ].forEach(mat => {
    event.remove(`forge:gears/${mat}`, `thermal:${mat}_gear`);
    event.remove(`forge:gears`, `thermal:${mat}_gear`);
  });
};

onEvent('tags.blocks', event => {
  event.add('forge:stone', 'quark:deepslate');
});

onEvent('tags.items', event => {
  harmoniousEngineeringTags(event);
  naturalProgressionTags(event);
  removePlates(event);
  removeGears(event);
  thermalTags(event);
  curiousElytraTags(event);
  event.add('forge:stone', 'quark:deepslate');
  event.add('valhelsia_structures:axe_crafting_blacklisted', '#natural-progression:saw');
  event.add('forge:dusts/ender', 'betterendforge:ender_dust');
  event.add('forge:dusts/ender', 'appliedenergistics2:ender_dust');
  event.add('create:crushed_ores', 'emendatusenigmatica:cobalt_crushed');
});
