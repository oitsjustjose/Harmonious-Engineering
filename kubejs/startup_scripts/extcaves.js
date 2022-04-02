onEvent('block.missing_mappings', event => {
  ['brokenstone', 'sedimentstone', 'oldstone', 'lavastone', 'marlstone', 'dirtstone'].forEach(x =>
    event.remap(`extcaves:${x}`, 'minecraft:stone')
  );
});
