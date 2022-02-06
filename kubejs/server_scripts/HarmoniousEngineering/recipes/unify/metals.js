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
    const ingTag = `forge:ingots/${metal}`;
    const nugTag = `forge:nuggets/${metal}`;
    event.remove({type: 'tconstruct:casting_table', output: `#${ingTag}`});
    event.remove({type: 'tconstruct:casting_table', output: `#${nugTag}`});

    console.log(`Removed Tinkers Recipe for ${ingTag}`);
    console.log(`Removed Tinkers Recipe for ${nugTag}`);

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
  });
});
