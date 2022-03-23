const harmoniousEngineeringTags = event => {
  // Diamond Tier Saws
  ['natural-progression:diamond_saw', 'natural-progression:netherite_saw'].forEach(x =>
    event.add('harmeng:diamond_tier_saws', x)
  );

  // Basic Tank
  [
    'create:fluid_tank',
    'mekanism:basic_fluid_tank',
    'industrialforegoing:pity_black_hole_tank',
    'industrialforegoing:simple_black_hole_tank',
    'thermal:fluid_cell',
  ].forEach(x => event.add('harmeng:basic_tank', x));

  // Add TiCon logs to the chestless bunch
  ['greenheart', 'skyroot', 'bloodshroom'].forEach(x =>
    event.add('harmeng:chestless_logs', `#tconstruct:${x}_logs`)
  );

  // Chestless planks
  [
    'quark:white_stained_planks',
    'quark:orange_stained_planks',
    'quark:magenta_stained_planks',
    'quark:light_blue_stained_planks',
    'quark:yellow_stained_planks',
    'quark:lime_stained_planks',
    'quark:pink_stained_planks',
    'quark:gray_stained_planks',
    'quark:light_gray_stained_planks',
    'quark:cyan_stained_planks',
    'quark:purple_stained_planks',
    'quark:blue_stained_planks',
    'quark:brown_stained_planks',
    'quark:green_stained_planks',
    'quark:red_stained_planks',
    'quark:black_stained_planks',
    'tconstruct:greenheart_planks',
    'tconstruct:skyroot_planks',
    'tconstruct:bloodshroom_planks',
  ].forEach(x => event.add('harmeng:chestless_planks', x));

  // Saw
  ['thermal:saw_blade', '#forge:sawblades'].forEach(x => event.add('harmeng:saw_blade', x));

  // Drawer-like
  [
    '#storagedrawers:drawers',
    'storage_overhaul:oak_storage_barrel',
    'storage_overhaul:spruce_storage_barrel',
    'storage_overhaul:birch_storage_barrel',
    'storage_overhaul:acacia_storage_barrel',
    'storage_overhaul:jungle_storage_barrel',
    'storage_overhaul:dark_oak_storage_barrel',
    'storage_overhaul:crimson_storage_barrel',
    'storage_overhaul:warped_storage_barrel',
  ].forEach(x => event.add('harmeng:drawer_like', x));

  event.add('harmeng:zinc_or_iron_chunk', 'emendatusenigmatica:zinc_chunk');
  event.add('harmeng:zinc_or_iron_chunk', 'emendatusenigmatica:iron_chunk');

  [1, 2, 3].forEach(tier =>
    ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak', 'crimson', 'warped'].forEach(type =>
      event.removeAllTagsFrom(`storage_overhaul:${type}_chest_tier_${tier}`)
    )
  );

  [
    'betterendforge:dragon_tree_barrel',
    'betterendforge:end_lotus_barrel',
    'betterendforge:helix_tree_barrel',
    'betterendforge:jellyshroom_barrel',
    'betterendforge:lacugrove_barrel',
    'betterendforge:lucernia_barrel',
    'betterendforge:mossy_glowshroom_barrel',
    'betterendforge:pythadendron_barrel',
    'betterendforge:tenanea_barrel',
    'betterendforge:umbrella_tree_barrel',
    'betternether:barrel_anchor_tree',
    'betternether:barrel_crimson',
    'betternether:barrel_mushroom_fir',
    'betternether:barrel_mushroom',
    'betternether:barrel_nether_sakura',
    'betternether:barrel_reed',
    'betternether:barrel_rubeus',
    'betternether:barrel_stalagnate',
    'betternether:barrel_warped',
    'betternether:barrel_wart',
    'betternether:barrel_willow',
    'minecraft:barrel',
    'storage_overhaul:acacia_barrel',
    'storage_overhaul:birch_barrel',
    'storage_overhaul:crimson_barrel',
    'storage_overhaul:dark_oak_barrel',
    'storage_overhaul:jungle_barrel',
    'storage_overhaul:oak_barrel',
    'storage_overhaul:spruce_barrel',
    'storage_overhaul:warped_barrel',
  ].forEach(x => event.add('forge:barrels/wooden', x));
};

const naturalProgressionTags = event => {
  [
    'appliedenergistics2:certus_quartz_axe',
    'appliedenergistics2:nether_quartz_axe',
    'betterendforge:aeternium_axe',
    'betterendforge:terminite_axe',
    'betterendforge:thallasium_axe',
    'betternether:cincinnasite_axe',
    'betternether:nether_ruby_axe',
    'immersiveengineering:axe_steel',
    'mekanismtools:bronze_axe',
    'mekanismtools:bronze_paxel',
    'mekanismtools:diamond_paxel',
    'mekanismtools:gold_paxel',
    'mekanismtools:iron_paxel',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:netherite_paxel',
    'mekanismtools:osmium_axe',
    'mekanismtools:osmium_paxel',
    'mekanismtools:refined_glowstone_axe',
    'mekanismtools:refined_glowstone_paxel',
    'mekanismtools:refined_obsidian_axe',
    'mekanismtools:refined_obsidian_paxel',
    'mekanismtools:steel_axe',
    'mekanismtools:steel_paxel',
    'mekanismtools:stone_paxel',
    'tconstruct:hand_axe',
  ].forEach(x => event.add('natural-progression:axes', x));

  [
    'industrialforegoing:infinity_drill',
    'industrialforegoing:infinity_saw',
    'tconstruct:mattock',
  ].forEach(x => event.add('natural-progression:override_axes', x));
};

const thermalTags = event => {
  [
    'immersiveengineering:mold_plate',
    'immersiveengineering:mold_gear',
    'immersiveengineering:mold_rod',
    'immersiveengineering:mold_bullet_casing',
    'immersiveengineering:mold_wire',
  ].forEach(x => event.add('thermal:crafting/dies', x));
};

const curioTags = event => {
  [
    'alexsmobs:tarantula_hawk_elytra',
    'mekanism:hdpe_elytra',
    'tconstruct:slime_chestplate',
    'redstone_arsenal:flux_elytra',
  ].forEach(x => event.add('curios:back', x));
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
  ].forEach(x => {
    event.remove(`forge:plates/${x}`, `thermal:${x}_plate`);
    event.remove(`forge:plates`, `thermal:${x}_plate`);
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
  ].forEach(x => {
    event.remove(`forge:plates/${x}`, `immersiveengineering:plate_${x}`);
    event.remove(`forge:plates`, `immersiveengineering:plate_${x}`);
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
  ].forEach(x => {
    event.remove(`forge:gears/${x}`, `thermal:${x}_gear`);
    event.remove(`forge:gears`, `thermal:${x}_gear`);
  });
};

const miscTags = event => {
  event.add('forge:stone', 'quark:deepslate');
  event.add('valhelsia_structures:axe_crafting_blacklisted', '#natural-progression:saw');
  event.add('forge:dusts/ender', 'betterendforge:ender_dust');
  event.add('forge:dusts/ender', 'appliedenergistics2:ender_dust');
  event.add('create:crushed_ores', 'emendatusenigmatica:cobalt_crushed');
  event.add('forge:wither_bones', 'architects_palette:withered_bone');

  [
    'tools_complement:iron_knife',
    'tools_complement:gold_knife',
    'tools_complement:diamond_knife',
    'tools_complement:netherite_knife',
    'tools_complement:copper_knife',
    'tools_complement:tin_knife',
    'tools_complement:silver_knife',
    'tools_complement:lead_knife',
    'tools_complement:nickel_knife',
    'tools_complement:bronze_knife',
    'tools_complement:electrum_knife',
    'tools_complement:invar_knife',
    'tools_complement:constantan_knife',
    '#appliedenergistics2:knife',
  ].forEach(x => event.add('forge:tools/knives', x));
};

const saplingGroups = event => {
  [
    'architects_palette:twisted_sapling',
    'atmospheric:aspen_sapling',
    'atmospheric:grimwood_sapling',
    'atmospheric:kousa_sapling',
    'atmospheric:morado_sapling',
    'atmospheric:rosewood_sapling',
    'atmospheric:yucca_sapling',
    'autumnity:maple_sapling',
    'autumnity:orange_maple_sapling',
    'autumnity:red_maple_sapling',
    'autumnity:yellow_maple_sapling',
    'minecraft:acacia_sapling',
    'minecraft:birch_sapling',
    'minecraft:dark_oak_sapling',
    'minecraft:jungle_sapling',
    'minecraft:oak_sapling',
    'minecraft:spruce_sapling',
    'upgrade_aquatic:river_sapling',
  ].forEach(x => event.add('harmeng:overworld_saplings', x));

  [
    'betternether:anchor_tree_sapling',
    'betternether:giant_mold_sapling',
    'betternether:jellyfish_mushroom_sapling',
    'betternether:mushroom_fir_sapling',
    'betternether:nether_sakura_sapling',
    'betternether:rubeus_sapling',
    'betternether:soul_lily_sapling',
    'betternether:willow_sapling',
  ].forEach(x => event.add('harmeng:nether_saplings', x));

  [
    'betterendforge:dragon_tree_sapling',
    'betterendforge:helix_tree_sapling',
    'betterendforge:hydralux_sapling',
    'betterendforge:lacugrove_sapling',
    'betterendforge:lucernia_sapling',
    'betterendforge:mossy_glowshroom_sapling',
    'betterendforge:pythadendron_sapling',
    'betterendforge:tenanea_sapling',
    'betterendforge:umbrella_tree_sapling',
  ].forEach(x => event.add('harmeng:end_saplings', x));

  [
    'quark:blue_blossom_sapling',
    'quark:lavender_blossom_sapling',
    'quark:orange_blossom_sapling',
    'quark:pink_blossom_sapling',
    'quark:red_blossom_sapling',
    'quark:yellow_blossom_sapling',
  ].forEach(x => event.add('harmeng:blossom_saplings', x));

  [
    'tconstruct:earth_slime_sapling',
    'tconstruct:ender_slime_sapling',
    'tconstruct:sky_slime_sapling',
  ].forEach(x => event.add('harmeng:slime_saplings', x));
};

onEvent('tags.blocks', event => {
  event.add('forge:stone', 'quark:deepslate');
  [
    '#storagedrawers:drawers',
    '#framedcompactdrawers:frame_double',
    '#framedcompactdrawers:frame_triple',
    'storage_overhaul:oak_storage_barrel',
    'storage_overhaul:spruce_storage_barrel',
    'storage_overhaul:birch_storage_barrel',
    'storage_overhaul:acacia_storage_barrel',
    'storage_overhaul:jungle_storage_barrel',
    'storage_overhaul:dark_oak_storage_barrel',
    'storage_overhaul:crimson_storage_barrel',
    'storage_overhaul:warped_storage_barrel',
  ].forEach(x => event.add('natural-progression:ignored_wood_blocks', x));

  [
    '#storagedrawers:drawers',
    '#framedcompactdrawers:frame_double',
    '#framedcompactdrawers:frame_triple',
    '#framedcompactdrawers:compacting',
  ].forEach(x => event.add('natural-progression:ignored_stone_blocks', x));
});

onEvent('tags.items', event => {
  curioTags(event);
  harmoniousEngineeringTags(event);
  miscTags(event);
  naturalProgressionTags(event);
  removeGears(event);
  removePlates(event);
  saplingGroups(event);
  thermalTags(event);
});
