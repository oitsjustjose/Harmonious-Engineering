onEvent('item.tooltip', event => {
  const optionalRemove = (t, f) => {
    let idx = 0;
    for (const x of t) {
      if (`${x}`.includes(f)) t.remove(idx);
      idx++;
    }
  };

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

  event.addAdvanced('minecraft:stick', (item, advanced, text) => {
    try {
      optionalRemove(text, 'message.supplementaries.placeable');
    } catch (ex) {
      console.log(ex);
    }
  });

  event.addAdvanced('minecraft:blaze_rod', (item, advanced, text) => {
    try {
      optionalRemove(text, 'message.supplementaries.placeable');
    } catch (ex) {
      console.log(ex);
    }
  });

  event.addAdvanced('immersiveengineering:graphite_electrode', (item, advanced, text) => {
    try {
      optionalRemove(text, 'desc.immersiveengineering.info.electrodeIntegrity');
      optionalRemove(text, 'item.unbreakable');
    } catch (ex) {
      console.log(ex);
    }
  });
});
