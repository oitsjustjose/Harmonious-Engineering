// Gate IE behind Create Contraptions

onEvent('recipes', event => {
  event.remove({output: global.ie('hammer')});
  event.shaped('kubejs:crude_hammer', [' A ', 'ASA', 'SA '], {
    A: 'create:andesite_alloy',
    S: 'minecraft:stick',
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {item: 'kubejs:crude_hammer'},
    transitionalItem: {item: 'kubejs:incomplete_hammer'},
    sequence: [
      {
        type: 'create:pressing',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
      {
        type: 'create:pressing',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
      {
        type: 'create:cutting',
        ingredients: [{item: 'kubejs:incomplete_hammer'}],
        results: [{item: 'kubejs:incomplete_hammer'}],
        processingTime: 50,
      },
    ],
    results: [{item: global.ie('hammer')}],
    loops: 2,
  });
});
