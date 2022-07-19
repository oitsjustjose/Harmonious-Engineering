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
});
