onEvent('item.tooltip', event => {
  event.add('moreminecarts:chunkrodite', [
    '§7Created by destroying a §5Chunk Loader§7 that still has time remaining.§r',
  ]);
  event.add('kubejs:fluxed_singularity', ['§7Concerningly Unstable...§r']);
  event.addAdvanced('minecraft:enchanted_book', (item, advanced, text) => {
    if (item.toString().includes(".enchant('vtweaks:lumbering', 1)")) {
      text.add(Text.of('§cCannot be applied to Tetra Tools§r'));
    }
    if (item.toString().includes(".enchant('minecraft:feather_falling', 4)")) {
      text.add(Text.of('§5All fall damage is negated and applied to boots instead§r'));
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

  event.add('minecraft:elytra', ['§7Throw in world to convert to a Customizable Elytra.§r']);
  event.add('mekanism:cardboard_box', [
    '§7Bigger on the inside?§r',
    '§7Capable of moving Spawners§r',
  ]);
});
