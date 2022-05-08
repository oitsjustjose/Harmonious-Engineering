onEvent('recipes', event => {
  const cableVariants = ['red', 'green', 'blue', 'yellow', 'routing'];
  // Cables
  cableVariants.forEach(x => event.remove({id: `xnet:netcable_${x}`}));
  cableVariants.forEach(x =>
    global.genSmithingRecipe(
      event,
      Ingredient.of('pipez:universal_pipe'),
      Ingredient.of(`#forge:dyes/${x === 'routing' ? 'black' : x}`),
      Item.of(`32x xnet:netcable_${x}`)
    )
  );
  // Connectors
  cableVariants.forEach(x => event.remove({id: `xnet:connector_${x}`}));
  cableVariants.forEach(x =>
    global.genSmithingRecipe(
      event,
      Ingredient.of(`xnet:netcable_${x}`),
      Ingredient.of('#forge:ingots/gold'),
      Item.of(`1x xnet:connector_${x}`)
    )
  );
  // Advanced Connectors
  cableVariants.forEach(x => event.remove({id: `xnet:advanced_connector_${x}`}));
  cableVariants.forEach(x =>
    global.genSmithingRecipe(
      event,
      Ingredient.of(`xnet:connector_${x}`),
      Ingredient.of('#forge:ingots/cobalt'),
      Item.of(`1x xnet:advanced_connector_${x}`)
    )
  );

  event.remove({id: 'xnet:connector_upgrade'});

  event.remove({id: 'xnet:wireless_router'});
  event.shaped('1x xnet:wireless_router', ['CSC', 'RFR', 'CRC'], {
    R: '#forge:dusts/redstone',
    C: '#xnet:advanced_connectors',
    F: 'rftoolsbase:machine_frame',
    S: 'kubejs:ender_singularity',
  });
});
