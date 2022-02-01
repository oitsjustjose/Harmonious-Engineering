onEvent('item.tooltip', event => {
  event.add('powah:ender_core', ['§7Only dropped by §5Challenger Endermen§r.']);
  event.add('moreminecarts:chunkrodite', [
    '§7Created by destroying a §5Chunk Loader§7 that still has time remaining.§r',
  ]);
  event.add('kubejs:ender_singularity', [
    '§7Forcing something so hydrophobic to fuse with water might rip the fabric of space-time...§r',
  ]);
});
