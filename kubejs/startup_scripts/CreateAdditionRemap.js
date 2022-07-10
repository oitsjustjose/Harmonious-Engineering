onEvent('block.missing_mappings', event => {
  remaps.forEach(x => {
    event.remap('createaddition:heater', 'immersiveengineering:furnace_heater');
  });
});

onEvent('item.missing_mappings', event => {
  remaps.forEach(x => {
    event.remap('createaddition:heater', 'immersiveengineering:furnace_heater');
  });
});
