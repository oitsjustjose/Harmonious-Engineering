// priority: 1024

const framedCompactingDrawers = [
  'framedcompactdrawers:framed_full_one',
  'framedcompactdrawers:framed_full_two',
  'framedcompactdrawers:framed_full_four',
  'framedcompactdrawers:framed_half_one',
  'framedcompactdrawers:framed_half_two',
  'framedcompactdrawers:framed_half_four',
  'framedcompactdrawers:framed_trim',
];

const storageDrawerShapes = [
  '_full_drawers_1',
  '_full_drawers_2',
  '_full_drawers_4',
  '_half_drawers_1',
  '_half_drawers_2',
  '_half_drawers_4',
  '_trim',
];

const createFramedDrawers = (event, plank) => {
  framedCompactingDrawers.forEach(drawerType => {
    const output = Item.of(drawerType, {
      MatT: {id: 'minecraft:air', Count: 1},
      MatF: {id: 'minecraft:air', Count: 1},
      MatS: {id: plank, Count: 1},
      display: {
        Name: `{"text": "${global.generateDrawerName(plank, drawerType)}", "italic": "false"}`,
      },
    });
    event.shaped(output, ['PPP', ' C ', 'PPP'], {
      P: plank,
      C: '#forge:chests/wooden',
    });
  });
};

const makeDrawerRecipesUniveral = event => {};

onEvent('recipes', event => {
  event.remove({output: 'storagedrawers:controller'});
  global.genCombinedRecipe(
    event,
    Ingredient.of('storagedrawers:controller_slave'),
    Ingredient.of('mekanism:ultimate_control_circuit'),
    Item.of('storagedrawers:controller')
  );

  global._planks.forEach(plank => {
    createFramedDrawers(event, plank);
  });
});
