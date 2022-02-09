// priority: 1024

const framedCompactingDrawers = [
  {block: 'framedcompactdrawers:framed_full_one', pattern: ['PPP', ' C ', 'PPP']},
  {block: 'framedcompactdrawers:framed_full_two', pattern: ['PCP', 'PPP', 'PCP']},
  {block: 'framedcompactdrawers:framed_full_four', pattern: ['CPC', 'PPP', 'CPC']},
  {block: 'framedcompactdrawers:framed_half_one', pattern: ['SSS', ' C ', 'SSS']},
  {block: 'framedcompactdrawers:framed_half_two', pattern: ['SCS', 'SSS', 'SCS']},
  {block: 'framedcompactdrawers:framed_half_four', pattern: ['CSC', 'SSS', 'CSC']},
  {block: 'framedcompactdrawers:framed_trim', pattern: ['PTP', 'TPT', 'PTP']},
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

const educatedlyGuessSlab = plank => {
  const [modid, wood] = plank.split(':');

  const guesses = [
    `${modid}:slab_${wood}`,
    `${modid}:${wood}_slab`,
    `${modid}:${wood}_vertical_slab`,
    `${modid}:slab_${wood}`.replace(/planks/g, 'slab'),
    `${modid}:${wood}_slab`.replace(/planks/g, 'slab'),
    `${modid}:${wood}_vertical_slab`.replace(/planks/g, 'slab'),
    `${modid}:slab_${wood}`.replace(/planks/g, 'vertical_slab'),
    `${modid}:${wood}_slab`.replace(/planks/g, 'vertical_slab'),
    `${modid}:${wood}_vertical_slab`.replace(/planks/g, 'vertical_slab'),
    plank.replace(/planks/g, 'slab'),
    plank.replace(/planks/g, 'vertical_slab'),
  ];

  const filtered = guesses.filter(x => {
    const tmp = Item.of(x);
    return tmp.toString() !== 'Item.empty' && x !== plank;
  });

  if (!filtered.length) {
    console.warn(
      `${plank} does not have a likely plank variant. Tried:\n\t${guesses.join('\n\t')}`
    );
    return 'minecraft:air';
  }

  return filtered[0];
};

const dynamicKey = (pattern, baseKey) => {
  const ret = {};
  pattern.forEach(row => {
    row.split('').forEach(char => {
      ret[char] = baseKey[char];
    });
  });
  return ret;
};

const createFramedDrawers = (event, plank) => {
  const slab = educatedlyGuessSlab(plank);

  if (slab === 'minecraft:air') {
    return;
  }

  const baseKey = {
    P: plank,
    S: slab,
    C: '#forge:chests/wooden',
    T: '#forge:rods/wooden',
  };

  framedCompactingDrawers.forEach(d => {
    const output = Item.of(d.block, {
      MatT: {id: 'minecraft:air', Count: 1},
      MatF: {id: 'minecraft:air', Count: 1},
      MatS: {id: plank, Count: 1},
      display: {
        Name: `{"text": "${global.generateDrawerName(plank, d.block)}", "italic": "false"}`,
      },
    });
    event.shaped(output, d.pattern, dynamicKey(d.pattern, baseKey));
  });
};

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
