onEvent('recipes', event => {
  event.remove({output: 'rangedpumps:pump'});
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {
        item: 'immersiveengineering:hammer',
      },
      {
        tag: 'forge:shears',
      },
      {
        item: 'chickenchunks:spot_loader',
      },
      {
        item: 'thermal:hazmat_fabric',
      },
      {
        item: 'thermal:hazmat_fabric',
      },
      {
        item: 'thermal:hazmat_fabric',
      },
      {
        item: 'create:mechanical_pump',
      },
      {
        item: 'create:fluid_pipe',
      },
      {
        item: 'create:fluid_pipe',
      },
    ],
    result: {
      item: 'rangedpumps:pump',
    },
  });
});
