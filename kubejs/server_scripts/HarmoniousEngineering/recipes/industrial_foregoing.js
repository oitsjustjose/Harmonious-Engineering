onEvent('recipes', event => {
  const modid = 'industrialforegoing';

  event.remove({mod: 'titanium'});
  event.remove({output: `${modid}:latex_processing_unit`});
  event.remove({output: `${modid}:tinydryrubber`});
  event.remove({output: `${modid}:dryrubber`});
  event.remove({output: `${modid}:machine_frame_pity`});
  event.remove({output: `${modid}:plastic`});
  event.remove({output: `${modid}:pink_slime_ingot`});
  event.remove({output: `${modid}:pink_slime`});

  event.shaped(`1x ${modid}:machine_frame_pity`, ['WPW', 'PLP', 'WPW'], {
    W: '#forge:dusts/wood',
    L: '#minecraft:logs',
    P: `${modid}:plastic`,
  });

  event.custom({
    type: 'mekanism:compressing',
    itemInput: {
      ingredient: {
        item: 'mekanism:hdpe_sheet',
      },
    },
    gasInput: {
      amount: 1,
      gas: 'mekanism:oxygen',
    },
    output: {
      item: `${modid}:plastic`,
    },
  });

  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      {
        fluid: `${modid}:pink_slime`,
        amount: 1000,
      },
      {
        item: 'thermal:chiller_ingot_cast',
      },
    ],
    result: [
      {
        item: `${modid}:pink_slime_ingot`,
        count: 1,
      },
    ],
    energy: 10000,
  });

  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      {
        fluid: `${modid}:pink_slime`,
        amount: 300,
      },
      {
        item: 'thermal:chiller_ball_cast',
      },
    ],
    result: [
      {
        item: `${modid}:pink_slime`,
        count: 1,
      },
    ],
    energy: 3333,
  });
});
