/**
 * Recipes for the liquid burning for a blaze burner
 */

onEvent('recipes', event => {
  event.remove({id: 'createaddition:liquid_burning/lava'});
  event.remove({id: 'createaddition:liquid_burning/crude_oil'});
  event.remove({id: 'createaddition:liquid_burning/creosote'});

  event.custom({
    type: 'createaddition:liquid_burning',
    input: {fluidTag: 'forge:creosote', amount: 1000},
    burnTime: 800,
  });

  event.custom({
    type: 'createaddition:liquid_burning',
    input: {fluid: 'immersiveengineering:biodiesel', amount: 1000},
    burnTime: 3600,
  });

  event.custom({
    type: 'createaddition:liquid_burning',
    input: {fluid: 'thermal:refined_fuel', amount: 1000},
    burnTime: 9800,
  });

  event.remove({output: 'industrialforegoing:straw'});
  event.shaped('createaddition:straw', ['PP', ' P', ' P'], {P: '#forge:plastic'});
});
