onEvent('recipes', event => {
  event.remove({output: 'corail_woodcutter:acacia_woodcutter'});
  event.remove({output: 'corail_woodcutter:birch_woodcutter'});
  event.remove({output: 'corail_woodcutter:black_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:blue_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:brown_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:crimson_woodcutter'});
  event.remove({output: 'corail_woodcutter:cyan_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:dark_oak_woodcutter'});
  event.remove({output: 'corail_woodcutter:gray_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:green_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:jungle_woodcutter'});
  event.remove({output: 'corail_woodcutter:light_blue_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:light_gray_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:lime_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:magenta_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:oak_woodcutter'});
  event.remove({output: 'corail_woodcutter:orange_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:pink_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:purple_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:red_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:spruce_woodcutter'});
  event.remove({output: 'corail_woodcutter:warped_woodcutter'});
  event.remove({output: 'corail_woodcutter:white_stained_woodcutter'});
  event.remove({output: 'corail_woodcutter:yellow_stained_woodcutter'});

  event.shaped('1x corail_woodcutter:oak_woodcutter', [' B ', 'PPP'], {
    B: '#harmeng:saw_blade',
    P: '#minecraft:planks',
  });

  event.custom({
    type: 'portable_stonecutter:anvil_flattening',
    ingredients: [
      {
        tag: 'minecraft:wooden_pressure_plates',
      },
      {
        item: 'minecraft:redstone',
      },
      {
        item: 'minecraft:redstone',
      },
      {
        item: 'corail_woodcutter:oak_woodcutter',
      },
    ],
    output: {
      item: 'corail_woodcutter:acacia_woodcutter',
    },
  });
});
