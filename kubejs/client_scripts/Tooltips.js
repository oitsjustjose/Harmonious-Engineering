onEvent('item.tooltip', event => {
  event.add(
    [
      'refinedstorage:controller',
      'refinedstorage:crafter',
      'refinedstorage:crafter_manager',
      'refinedstorage:crafting_grid',
      'refinedstorage:crafting_monitor',
      'refinedstorage:detector',
      'refinedstorage:disk_manipulator',
      'refinedstorage:fluid_grid',
      'refinedstorage:grid',
      'refinedstorage:network_receiver',
      'refinedstorage:network_transmitter',
      'refinedstorage:pattern_grid',
      'refinedstorage:relay',
      'refinedstorage:security_manager',
      'refinedstorage:wireless_transmitter',
    ],
    '§7Can be combined with any §4d§2y§9e§7 to re-color!§r'
  );

  event.add(
    [
      'mekanism:brine_bucket',
      'mekanism:brine',
      'mekanism:chlorine_bucket',
      'mekanism:chlorine',
      'mekanism:ethene_bucket',
      'mekanism:ethene',
      'mekanism:heavy_water_bucket',
      'mekanism:heavy_water',
      'mekanism:hydrofluoric_acid_bucket',
      'mekanism:hydrofluoric_acid',
      'mekanism:hydrogen_bucket',
      'mekanism:hydrogen_chloride_bucket',
      'mekanism:hydrogen_chloride',
      'mekanism:hydrogen',
      'mekanism:lithium_bucket',
      'mekanism:lithium',
      'mekanism:nutritional_paste_bucket',
      'mekanism:nutritional_paste',
      'mekanism:oxygen_bucket',
      'mekanism:oxygen',
      'mekanism:sodium_bucket',
      'mekanism:sodium',
      'mekanism:steam_bucket',
      'mekanism:steam',
      'mekanism:sulfur_dioxide_bucket',
      'mekanism:sulfur_dioxide',
      'mekanism:sulfur_trioxide_bucket',
      'mekanism:sulfur_trioxide',
      'mekanism:sulfuric_acid_bucket',
      'mekanism:sulfuric_acid',
      'mekanism:superheated_sodium_bucket',
      'mekanism:superheated_sodium',
      'mekanism:uranium_hexafluoride_bucket',
      'mekanism:uranium_hexafluoride',
      'mekanism:uranium_oxide_bucket',
      'mekanism:uranium_oxide',
    ],
    '§4Disabled§r'
  );

  event.add('#forge:deepslate_ores', '§7Drops more §eRaw Ore§7 than their stone counterparts§r');

  event.add('naturalist:glow_goop', '§7Dropped from §eFireflies§7§r');
  event.add(
    'moreminecarts:chunkrodite',
    '§7Created by destroying a §5Chunk Loader§7 that still has time remaining.§r'
  );

  event.addAdvanced('minecraft:enchanted_book', (item, _advanced, text) => {
    if (item.toString().includes(".enchant('minecraft:feather_falling', 4)")) {
      text.add(Text.of('§5All fall damage is negated and applied to boots instead§r'));
    }
  });

  ['minecraft:stick', 'minecraft:blaze_rod'].forEach(x => {
    event.addAdvanced(x, (item, adv, txt) => {
      txt.add('§8(Not actually placeable)§r');
      if (event.shift) {
        txt.add('§8This feature is disabled but the tooltip is still here.§r');
      }
    });
  });

  event.add(
    [
      'davebuildingmod:black_guilded_boiler',
      'davebuildingmod:black_boiler',
      'davebuildingmod:red_boiler',
      'davebuildingmod:red_guilded_boiler',
      'davebuildingmod:green_gilded_boiler',
      'davebuildingmod:green_boiler',
      'davebuildingmod:purple_gilded_boiler',
      'davebuildingmod:blue_boiler',
      'davebuildingmod:blue_gilded_boiler',
      'davebuildingmod:brown_boiler',
      'davebuildingmod:brown_gilded_boiler',
      'davebuildingmod:purple_boiler',
      'davebuildingmod:cyan_gilded_boiler',
      'davebuildingmod:cyan_boiler',
      'davebuildingmod:light_gray_gilded_boiler',
      'davebuildingmod:light_gray_boiler',
      'davebuildingmod:lime_gilded_boiler',
      'davebuildingmod:pink_boiler',
      'davebuildingmod:pink_gilded_boiler',
      'davebuildingmod:gray_boiler',
      'davebuildingmod:gray_gilded_boiler',
      'davebuildingmod:lime_boiler',
      'davebuildingmod:yellow_gilded_boiler',
      'davebuildingmod:yellow_boiler',
      'davebuildingmod:light_blue_gilded_boiler',
      'davebuildingmod:light_blue_boiler',
      'davebuildingmod:magenta_gilded_boiler',
      'davebuildingmod:magenta_boiler',
      'davebuildingmod:orange_gilded_boiler',
      'davebuildingmod:orange_boiler',
      'davebuildingmod:white_gilded_boiler',
      'davebuildingmod:white_boiler',
      'davebuildingmod:brass_boiler',
      'davebuildingmod:zinc_boiler',
      'davebuildingmod:copper_boiler',
      'davebuildingmod:create_boiler',
    ],
    '§1For Decoration Only§r'
  );
});
