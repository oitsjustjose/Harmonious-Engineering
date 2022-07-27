// Gate Thermal behind IE and Brass Age

const redstoneServoRecipes = event => {
  // Hard recipe for these
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:plates/steel'},
    transitionalItem: {item: 'kubejs:incomplete_redstone_servo'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_redstone_servo'}, {item: 'minecraft:piston'}],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_redstone_servo'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_redstone_servo'}, {item: 'create:electron_tube'}],
        results: [{item: 'kubejs:incomplete_redstone_servo'}],
      },
    ],
    results: [
      {item: 'thermal:redstone_servo', chance: 300.0},
      {tag: 'forge:ingots/steel', chance: 8.0},
      {item: 'immersiveengineering:wirecoil_redstone', chance: 40.0},
      {item: 'create:electron_tube', chance: 40.0},
      {item: 'minecraft:piston'},
    ],
    loops: 2,
  });

  // Easier recipe
  event.custom({
    type: 'thermal:press',
    ingredients: [
      {tag: 'forge:plates/steel'},
      {item: 'immersiveengineering:wirecoil_redstone', count: 4},
    ],
    result: [{item: 'kubejs:incomplete_redstone_servo'}],
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:incomplete_redstone_servo'}, {item: 'minecraft:piston', count: 2}],
    result: [{item: 'thermal:redstone_servo'}],
  });
};

const rfCoilRecipes = event => {
  // Hard recipe for these
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:rods/blaze'},
    transitionalItem: {item: 'kubejs:incomplete_rf_coil'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_rf_coil'}, {tag: 'forge:plates/gold'}],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
      {
        type: 'create:deploying',
        ingredients: [
          {item: 'kubejs:incomplete_rf_coil'},
          {item: 'immersiveengineering:wirecoil_redstone'},
        ],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:incomplete_rf_coil'}, {item: 'create:electron_tube'}],
        results: [{item: 'kubejs:incomplete_rf_coil'}],
      },
    ],
    results: [
      {item: 'thermal:rf_coil', chance: 300.0},
      {tag: 'forge:ingots/gold', chance: 2.0},
      {item: 'immersiveengineering:wirecoil_redstone', chance: 20.0},
      {item: 'create:electron_tube', chance: 20.0},
      {tag: 'forge:plates/gold'},
    ],
    loops: 2,
  });

  // Easier recipe
  event.custom({
    type: 'thermal:press',
    ingredients: [
      {tag: 'forge:rods/blaze'},
      {item: 'immersiveengineering:wirecoil_redstone', count: 4},
    ],
    result: [{item: 'kubejs:incomplete_rf_coil'}],
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'kubejs:incomplete_rf_coil'}, {tag: 'forge:plates/gold'}],
    result: [{item: 'thermal:rf_coil'}],
  });
};

/**
 *
 * @param {Internal.RecipeEventJS} event
 */
const machineRecipes = event => {
  const CustomRecipeHandler = global.recipes(event);

  /* Rubber */
  event.remove({output: 'thermal:rubber'});
  // Latex -> Rubber recipe using IF
  event.recipes.thermal.chiller('thermal:rubber', [Fluid.of('industrialforegoing:latex', 100)]);
  event.recipes.thermal.press('pneumaticcraft:plastic', ['3x thermal:rubber']);

  event.remove({output: 'thermal:drill_head'});
  event.remove({output: 'thermal:saw_blade'});
  event.replaceInput(
    {output: 'thermal:enderium_dust'},
    '#forge:ender_pearls',
    '#forge:dusts/ender_pearl'
  );

  const Items = {
    furnace: {item: 'minecraft:furnace'},
    furnaceHeater: {item: 'immersiveengineering:furnace_heater'},
    hopper: {item: 'minecraft:hopper'},
    lightEngineering: {item: 'immersiveengineering:light_engineering'},
    heavyEngineering: {item: 'immersiveengineering:heavy_engineering'},
    machineFrame: {item: 'thermal:machine_frame'},
    rsEngineering: {item: 'immersiveengineering:rs_engineering'},
    steelFence: {item: 'immersiveengineering:steel_fence'},
    steelScaffold: {tag: 'immersiveengineering:scaffoldings/steel'},
    kilnBrick: {item: 'immersiveengineering:alloybrick'},
    blastFurnace: {item: 'minecraft:blast_furnace'},
    ironSheetmetal: {item: 'immersiveengineering:sheetmetal_iron'},
    conveyor: {item: 'immersiveengineering:conveyor_basic'},
    piston: {item: 'minecraft:piston'},
  };

  // Pulverizer
  event.remove({output: 'thermal:machine_pulverizer'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_pulverizer'),
    ['SHHHS', 'RFCFL', 'SFFFL', 'SSLSL'],
    {
      C: Items.machineFrame,
      F: Items.steelFence,
      H: Items.hopper,
      L: Items.lightEngineering,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Redstone Furnace
  event.remove({output: 'thermal:machine_furnace'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_furnace'),
    ['ISBFI', 'IHCHI', 'IRHLI', 'IMMMI'],
    {
      B: Items.blastFurnace,
      C: Items.machineFrame,
      F: Items.furnace,
      H: Items.furnaceHeater,
      I: Items.steelScaffold,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: {item: 'minecraft:smoker'},
    }
  );

  // Induction Smelter
  event.remove({output: 'thermal:machine_smelter'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_smelter'),
    ['SLRLS', 'SKFKS', 'SKKKS', 'SBBBS'],
    {
      B: Items.blastFurnace,
      F: Items.machineFrame,
      K: Items.kilnBrick,
      L: Items.lightEngineering,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Sawmill
  event.remove({output: 'thermal:machine_sawmill'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_sawmill'),
    ['SBBBS', 'SRFLS', 'SCCCS', 'SMMMS'],
    {
      B: {item: 'create:mechanical_saw'},
      C: Items.conveyor,
      F: Items.machineFrame,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Phytogenic Insolator
  event.remove({output: 'thermal:machine_insolator'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_insolator'),
    ['SUUUS', 'SRFLS', 'SMCMS', 'SIIIS'],
    {
      C: {item: 'immersiveengineering:cloche'},
      F: Items.machineFrame,
      I: {item: 'farmersdelight:rich_soil'},
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
      U: {tag: 'forge:ingots/lumium'},
    }
  );

  // Multiservo Press
  event.remove({output: 'thermal:machine_press'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_press'),
    ['SPOPS', 'SRFLS', 'SDDDS', 'SMMMS'],
    {
      D: {item: 'create:depot'},
      F: Items.machineFrame,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      O: {item: 'create:mechanical_press'},
      P: Items.piston,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Fluid Encapsulator
  event.remove({output: 'thermal:machine_bottler'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_bottler'),
    ['SPPPS', 'SRFLS', 'SDDDS', 'SMMMS'],
    {
      D: {item: 'create:item_drain'},
      F: Items.machineFrame,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      P: {item: 'create:spout'},
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Centrifuge
  event.remove({output: 'thermal:machine_centrifuge'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_centrifuge'),
    ['STOTS', 'SRFLS', 'SGGGS', 'SMMMS'],
    {
      F: Items.machineFrame,
      G: {item: 'pneumaticcraft:pressure_gauge'},
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      O: {item: 'create:rotation_speed_controller'},
      R: Items.rsEngineering,
      S: Items.steelScaffold,
      T: {item: 'pneumaticcraft:vacuum_pump'},
    }
  );

  // Blast Chiller
  event.remove({output: 'thermal:machine_chiller'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_chiller'),
    ['SIIIS', 'SRFLS', 'SEEES', 'SMMMS'],
    {
      E: {item: 'create:encased_fan'},
      F: Items.machineFrame,
      I: {item: 'minecraft:packed_ice'},
      L: Items.lightEngineering,
      M: {item: 'architects_palette:moonstone'},
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Magma Crucible
  event.remove({output: 'thermal:machine_crucible'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_crucible'),
    ['SIIIS', 'SRFLS', 'SEEES', 'SMMMS'],
    {
      E: {item: 'create:encased_fan'},
      F: Items.machineFrame,
      I: {item: 'minecraft:lava_bucket'},
      L: Items.lightEngineering,
      M: {item: 'architects_palette:sunstone'},
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Fractionating Still
  event.remove({output: 'thermal:machine_refinery'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_refinery'),
    ['SBABS', 'SRFLS', 'SHHHS', 'SMMMS'],
    {
      A: {item: 'pneumaticcraft:refinery'},
      B: {item: 'pneumaticcraft:refinery_output'},
      F: Items.machineFrame,
      H: Items.heavyEngineering,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Pyrolizer
  event.remove({output: 'thermal:machine_pyrolyzer'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_pyrolyzer'),
    ['SCCCS', 'SRFLS', 'SCCCS', 'SMMMS'],
    {
      C: {item: 'immersiveengineering:cokebrick'},
      F: Items.machineFrame,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );

  // Imbuer
  event.remove({output: 'thermal:machine_brewer'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_brewer'),
    ['SXXXS', 'SRFLS', 'SBWBS', 'SMMMS'],
    {
      B: {item: 'create:basin'},
      F: Items.machineFrame,
      L: Items.lightEngineering,
      M: Items.ironSheetmetal,
      R: Items.rsEngineering,
      S: Items.steelScaffold,
      W: {item: 'minecraft:brewing_stand'},
      X: {item: 'create:mechanical_mixer'},
    }
  );

  // Crafter
  event.remove({output: 'thermal:machine_crafter'});
  CustomRecipeHandler.giant(
    Item.of('thermal:machine_crafter'),
    ['SMMMS', 'SRFLS', 'SMMMS', 'SHHHS'],
    {
      F: Items.machineFrame,
      H: Items.heavyEngineering,
      L: Items.lightEngineering,
      M: {item: 'create:mechanical_crafter'},
      R: Items.rsEngineering,
      S: Items.steelScaffold,
    }
  );
};

const itemRecipes = event => {
  // Remove cheeky recipes for alloys
  event.remove({input: 'minecraft:fire_charge', mod: 'thermal'});
  event.replaceInput({}, 'thermal:saw_blade', 'immersiveengineering:sawblade');
  event.replaceInput({}, 'thermal:drill_head', 'immersiveengineering:drillhead_steel');

  event.remove({output: 'thermal:redstone_servo'});
  event.remove({output: 'thermal:rf_coil'});
  event.remove({input: 'thermal:earth_charge'});

  redstoneServoRecipes(event);
  rfCoilRecipes(event);
};

onEvent('recipes', event => {
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_diamond_armor'});
  event.recipes.thermal.pulverizer('minecraft:diamond', '#forge:armor/diamond');
  machineRecipes(event);
  itemRecipes(event);
});
