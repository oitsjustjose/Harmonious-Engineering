onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  event.remove({output: 'industrialforegoing:diamond_gear'});
  event.remove({output: 'industrialforegoing:gold_gear'});
  event.remove({output: 'industrialforegoing:iron_gear'});
  event.remove({output: 'industrialforegoing:plastic'});
  event.remove({output: 'industrialforegoing:dryrubber'});
  event.remove({output: 'industrialforegoing:tinydryrubber'});
  event.remove({output: 'industrialforegoing:latex_processing_unit'});

  event.remove({output: 'industrialforegoing:infinity_drill'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_drill',
      '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('pneumaticcraft:drill_bit_netherite'),

      // Middle Left
      Item.of('immersiveengineering:rockcutter'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('immersiveengineering:rockcutter'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_saw'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_saw',
      '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('immersiveengineering:sawblade'),

      // Middle Left
      Item.of('minecraft:diamond_axe'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('minecraft:diamond_axe'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_hammer'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_hammer',
      '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('immersiveengineering:sword_steel'),

      // Middle Left
      Item.of('tools_complement:invar_hammer'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('tools_complement:invar_hammer'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_backpack'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_backpack',
      '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b,Tanks:{}}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('backpacked:backpack'),

      // Middle Left
      Item.of('thermal:fluid_cell_frame'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('thermal:fluid_cell_frame'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_launcher'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_launcher',
      '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"POOR",Special:0b}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('minecraft:crossbow'),

      // Middle Left
      Item.of('industrialforegoing:mob_imprisonment_tool'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('industrialforegoing:mob_imprisonment_tool'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_trident'});
  CustomRecipeHandler.dissolution(
    Item.of(
      'industrialforegoing:infinity_trident',
      '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'
    ),
    [
      // Top Left
      Item.of('#forge:gears/diamond'),
      // Top Middle
      Item.of('#forge:storage_blocks/steel'),
      // Top Right
      Item.of('minecraft:trident'),

      // Middle Left
      Item.of('/minecraft:firework_rocket/'),
      // Middle Right
      Item.of('#forge:storage_blocks/steel'),

      // Bottom Left
      Item.of('#forge:gears/netherite'),
      // Bottom Middle
      Item.of('/minecraft:firework_rocket/'),
      // Bottom Right
      Item.of('#forge:gears/diamond'),
    ],
    Fluid.of('industrialforegoing:pink_slime', 2000)
  );

  event.remove({output: 'industrialforegoing:infinity_nuke'});

  // Progression
  event.remove({output: 'industrialforegoing:machine_frame_pity'});
  // Automatable recipe using the Mechanical Crafting
  CustomRecipeHandler.giant(Item.of('industrialforegoing:machine_frame_pity'), ['FB'], {
    F: 'compactmachines:machine_normal',
    B: '#forge:storage_blocks/brass',
  });

  event.smithing(
    'industrialforegoing:machine_frame_pity',
    'compactmachines:machine_normal',
    '#forge:storage_blocks/brass'
  );
});
