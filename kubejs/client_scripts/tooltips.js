onEvent('item.tooltip', event => {
  event.add('moreminecarts:chunkrodite', [
    '§7Created by destroying a §5Chunk Loader§7 that still has time remaining.§r',
  ]);
  event.add('kubejs:ender_singularity', [
    '§7Forcing something so hydrophobic to fuse with water might rip the fabric of space-time...§r',
  ]);
  event.addAdvanced('minecraft:enchanted_book', (item, advanced, text) => {
    if (item.toString().includes(".enchant('vtweaks:lumbering', 1)")) {
      text.add(Text.of('§cCannot be applied to Tetra Tools§r'));
    }
  });

  event.add('immersiveengineering:furnace_heater', [
    '§7Replaced by the Induction Heater from CC&A§r',
  ]);
  event.add('createaddition:heater', [
    `§7Replaces IE's Furnace Heater to Prevent Abuse w/ the Flywheel§r`,
  ]);

  ['createaddition:connector', 'mekanismgenerators:heat_generator'].forEach(x =>
    event.add(x, ['§cUsed for Crafting Only§r'])
  );
});
