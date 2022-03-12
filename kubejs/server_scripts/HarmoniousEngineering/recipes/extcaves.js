onEvent('recipes', event => {
  ['stone', 'sedimentstone', 'lavastone'].forEach(x => {
    event.remove({output: `extcaves:pebble_${x}`});
  });
  event.remove({output: 'extcaves:picker_stone'});
  event.remove({output: 'extcaves:picker_flint'});
});
