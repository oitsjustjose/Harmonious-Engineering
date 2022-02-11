onEvent('recipes', event => {
  event.remove({output: 'thermal:dynamo_magmatic'});
});

/* disables placement of Heat Generators, but can still be used for crafting */
onEvent('block.right_click', event => {
  if (event.getItem() === 'mekanismgenerators:heat_generator') {
    event.cancel();
  }
});
