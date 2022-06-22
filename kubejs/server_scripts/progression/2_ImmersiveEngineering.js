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

  event.remove({output: global.ie('sawblade')});
  event.shaped(global.ie('sawblade'), ['PIP', 'I I', 'PIP'], {
    P: '#forge:plates/iron',
    I: '#forge:ingots/compressed_iron',
  });
  event.replaceInput(
    {output: global.ie('drillhead_iron')},
    'minecraft:iron_block',
    '#forge:storage_blocks/compressed_iron'
  );
});
