const allMetals = [
  'aluminum',
  'brass',
  'bronze',
  'cast_iron',
  'cobalt',
  'constantan',
  'copper',
  'electrum',
  'enderium',
  'invar',
  'iridium',
  'lead',
  'lumium',
  'nickel',
  'osmium',
  'signalum',
  'silver',
  'steel',
  'tin',
  'uranium',
  'zinc',
];

const ingotCasts = [
  {tag: 'tconstruct:casts/multi_use/ingot'},
  {tag: 'tconstruct:casts/single_use/ingot'},
];

const nuggetCasts = [
  {tag: 'tconstruct:casts/multi_use/nugget'},
  {tag: 'tconstruct:casts/single_use/nugget'},
];

onEvent('recipes', event => {
  allMetals.forEach(metal => {
    const ing = `emendatusenigmatica:${metal}_ingot`;
    const nug = `emendatusenigmatica:${metal}_nugget`;
    const blk = `emendatusenigmatica:${metal}_block`;
    const ingTag = `forge:ingots/${metal}`;
    const nugTag = `forge:nuggets/${metal}`;
    const blkTag = `forge:storage_blocks/${metal}`;
    event.remove({type: 'tconstruct:casting_table', output: `#${ingTag}`});
    event.remove({type: 'tconstruct:casting_table', output: `#${nugTag}`});
    event.remove({type: 'tconstruct:casting_table', output: `#${blkTag}`});
    event.remove({id: `tconstruct:smeltery/casting/metal/${metal}/ingot`});
    event.remove({id: `tconstruct:smeltery/casting/metal/${metal}/nugget`});
    event.remove({id: `tconstruct:smeltery/casting/metal/${metal}/block`});
    event.remove({id: `tconstruct:compat/create/andesite_alloy_iron`});
    event.remove({id: `tconstruct:compat/create/andesite_alloy_zinc`});

    ingotCasts.forEach(cast => {
      event.custom({
        type: 'tconstruct:casting_table',
        cast: cast,
        fluid: {
          tag: `forge:molten_${metal}`,
          amount: 144,
        },
        result: {item: ing},
        cooling_time: 57,
      });
    });

    nuggetCasts.forEach(cast => {
      event.custom({
        type: 'tconstruct:casting_table',
        cast: cast,
        fluid: {
          tag: `forge:molten_${metal}`,
          amount: 16,
        },
        result: {item: nug},
        cooling_time: 7,
      });
    });

    event.custom({
      type: 'tconstruct:casting_basin',
      fluid: {
        tag: `forge:molten_${metal}`,
        amount: 1296,
      },
      result: {item: blk},
      cooling_time: 150,
    });
  });
});
