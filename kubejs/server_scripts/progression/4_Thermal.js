// Gate Thermal behind IE and Brass Age

onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  const redstoneServoRecipes = () => {
    const ins = Item.of('kubejs:incomplete_redstone_servo');
    // Hard recipe for these
    event.recipes.create
      .sequenced_assembly(
        [
          Item.of('thermal:redstone_servo').withChance(3.0),
          Item.of('#forge:ingots/steel').withChance(0.8),
          Item.of('immersiveengineering:wirecoil_redstone').withChance(0.4),
          Item.of('minecraft:piston').withChance(0.1),
          Item.of('create:electron_tube'),
        ],
        '#forge:plates/steel',
        [
          event.recipes.create.deploying(ins, [ins, 'minecraft:piston']),
          event.recipes.create.deploying(ins, [ins, 'immersiveengineering:wirecoil_redstone']),
          event.recipes.create.deploying(ins, [ins, 'create:electron_tube']),
        ]
      )
      .transitionalItem(ins)
      .loops(2);

    // Easier recipe
    event.recipes.thermal.press(ins, [
      '#forge:plates/steel',
      Item.of('4x immersiveengineering:wirecoil_redstone'),
    ]);
    event.recipes.thermal.press('thermal:redstone_servo', [ins, '2x minecraft:piston']);
  };

  const rfCoilRecipes = () => {
    const irc = Item.of('kubejs:incomplete_rf_coil');
    event.recipes.create
      .sequenced_assembly(
        [
          Item.of('thermal:rf_coil').withChance(3.0),
          Item.of('#forge:ingots/gold').withChance(0.2),
          Item.of('immersiveengineering:wirecoil_redstone').withChance(0.2),
          Item.of('#forge:plates/gold').withChance(0.1),
          Item.of('create:electron_tube'),
        ],
        '#forge:rods/blaze',
        [
          event.recipes.create.deploying(irc, [irc, '#forge:plates/gold']),
          event.recipes.create.deploying(irc, [irc, 'immersiveengineering:wirecoil_redstone']),
          event.recipes.create.deploying(irc, [irc, 'create:electron_tube']),
        ]
      )
      .transitionalItem(irc)
      .loops(2);

    // Easier recipe
    event.recipes.thermal.press(irc, [
      '#forge:rods/blaze',
      '4x immersiveengineering:wirecoil_redstone',
    ]);
    event.recipes.thermal.press('thermal:rf_coil', [irc, '2x #forge:plates/gold']);
  };

  const machineRecipes = () => {
    /**
     * @param {Internal.ItemStackJS} output
     * @param {Internal.ItemStackJS[]} inputs
     */
    const fromTemplate = (output, inputs) => {
      if (inputs.length !== 6) {
        console.log(
          `Inputs must contain 6 items from top-left to bottom-right. Contains ${inputs.length} items...`
        );
        return;
      }

      event.remove({output: output});
      CustomRecipeHandler.giant(output, ['SABCS', 'SRFLS', 'SXYZS', 'SIIIS'], {
        S: {tag: 'immersiveengineering:scaffoldings/steel'},
        I: {item: 'immersiveengineering:sheetmetal_iron'},
        R: {item: 'immersiveengineering:rs_engineering'},
        F: {item: 'thermal:machine_frame'},
        L: {item: 'immersiveengineering:light_engineering'},
        A: inputs[0].toJson(),
        B: inputs[1].toJson(),
        C: inputs[2].toJson(),
        X: inputs[3].toJson(),
        Y: inputs[4].toJson(),
        Z: inputs[5].toJson(),
      });
    };

    // Pulverizer
    fromTemplate(Item.of('thermal:machine_pulverizer'), [
      Item.of('minecraft:hopper'),
      Item.of('minecraft:hopper'),
      Item.of('minecraft:hopper'),
      Item.of('create:crushing_wheel'),
      Item.of('immersiveengineering:steel_fence'),
      Item.of('create:crushing_wheel'),
    ]);

    // Redstone Furnace
    fromTemplate(Item.of('thermal:machine_furnace'), [
      Item.of('minecraft:smoker'),
      Item.of('minecraft:furnace'),
      Item.of('minecraft:blast_furnace'),
      Item.of('immersiveengineering:furnace_heater'),
      Item.of('immersiveengineering:furnace_heater'),
      Item.of('immersiveengineering:furnace_heater'),
    ]);

    // Induction Smelter
    fromTemplate(Item.of('thermal:machine_smelter'), [
      Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
      Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
      Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
      Item.of('immersiveengineering:alloybrick'),
      Item.of('immersiveengineering:heavy_engineering'),
      Item.of('immersiveengineering:alloybrick'),
    ]);

    // Sawmill
    fromTemplate(Item.of('thermal:machine_sawmill'), [
      Item.of('create:mechanical_saw'),
      Item.of('create:mechanical_saw'),
      Item.of('create:mechanical_saw'),
      Item.of('create:belt_connector'),
      Item.of('create:belt_connector'),
      Item.of('create:belt_connector'),
    ]);

    // Phytogenic Insolator
    fromTemplate(Item.of('thermal:machine_insolator'), [
      Item.of('#forge:ingots/lumium'),
      Item.of('#forge:ingots/lumium'),
      Item.of('#forge:ingots/lumium'),
      Item.of('farmersdelight:rich_soil'),
      Item.of('immersiveengineering:cloche'),
      Item.of('farmersdelight:rich_soil'),
    ]);

    // Multiservo Press
    fromTemplate(Item.of('thermal:machine_press'), [
      Item.of('minecraft:piston'),
      Item.of('create:mechanical_press'),
      Item.of('minecraft:piston'),
      Item.of('immersiveengineering:heavy_engineering'),
      Item.of('create:depot'),
      Item.of('immersiveengineering:heavy_engineering'),
    ]);

    // Fluid Encapsulator
    fromTemplate(Item.of('thermal:machine_bottler'), [
      Item.of('create:fluid_tank'),
      Item.of('create:spout'),
      Item.of('create:fluid_tank'),
      Item.of('create:depot'),
      Item.of('immersiveengineering:heavy_engineering'),
      Item.of('create:depot'),
    ]);

    // Centrifuge
    fromTemplate(Item.of('thermal:machine_centrifuge'), [
      Item.of('pneumaticcraft:vacuum_pump'),
      Item.of('create:rotation_speed_controller'),
      Item.of('pneumaticcraft:vacuum_pump'),
      Item.of('pneumaticcraft:pressure_gauge'),
      Item.of('pneumaticcraft:pressure_gauge'),
      Item.of('pneumaticcraft:pressure_gauge'),
    ]);

    // Blast Chiller
    fromTemplate(Item.of('thermal:machine_chiller'), [
      Item.of('create:encased_fan'),
      Item.of('create:encased_fan'),
      Item.of('create:encased_fan'),
      Item.of('architects_palette:moonstone'),
      Item.of('architects_palette:moonstone'),
      Item.of('architects_palette:moonstone'),
    ]);

    // Magma Crucible
    fromTemplate(Item.of('thermal:machine_crucible'), [
      Item.of('architects_palette:sunstone'),
      Item.of('architects_palette:sunstone'),
      Item.of('architects_palette:sunstone'),
      Item.of('create:encased_fan'),
      Item.of('create:encased_fan'),
      Item.of('create:encased_fan'),
    ]);

    // Fractionating Still
    fromTemplate(Item.of('thermal:machine_refinery'), [
      Item.of('pneumaticcraft:refinery_output'),
      Item.of('pneumaticcraft:refinery'),
      Item.of('pneumaticcraft:refinery_output'),
      Item.of('immersiveengineering:heavy_engineering'),
      Item.of('immersiveengineering:heavy_engineering'),
      Item.of('immersiveengineering:heavy_engineering'),
    ]);

    // Pyrolizer
    fromTemplate(Item.of('thermal:machine_pyrolyzer'), [
      Item.of('immersiveengineering:cokebrick'),
      Item.of('immersiveengineering:cokebrick'),
      Item.of('immersiveengineering:cokebrick'),
      Item.of('immersiveengineering:cokebrick'),
      Item.of('immersiveengineering:cokebrick'),
      Item.of('immersiveengineering:cokebrick'),
    ]);

    // Imbuer
    fromTemplate(Item.of('thermal:machine_brewer'), [
      Item.of('create:mechanical_mixer'),
      Item.of('create:mechanical_mixer'),
      Item.of('create:mechanical_mixer'),
      Item.of('create:basin'),
      Item.of('minecraft:brewing_stand'),
      Item.of('create:basin'),
    ]);

    // Crafter
    fromTemplate(Item.of('thermal:machine_crafter'), [
      Item.of('create:mechanical_crafter'),
      Item.of('create:mechanical_crafter'),
      Item.of('create:mechanical_crafter'),
      Item.of('create:mechanical_crafter'),
      Item.of('create:mechanical_crafter'),
      Item.of('create:mechanical_crafter'),
    ]);
  };

  event.remove({output: 'thermal:redstone_servo'});
  event.remove({output: 'thermal:rf_coil'});
  // Remove cheeky recipes for alloys
  event.remove({input: 'minecraft:fire_charge', mod: 'thermal'});
  event.remove({input: 'thermal:earth_charge'});

  event.remove({output: 'thermal:drill_head'});
  event.remove({output: 'thermal:saw_blade'});
  event.replaceInput({}, 'thermal:saw_blade', 'immersiveengineering:sawblade');
  event.replaceInput({}, 'thermal:drill_head', 'immersiveengineering:drillhead_steel');

  event.remove({output: 'thermal:rubber'});
  event.recipes.thermal.chiller('thermal:rubber', [Fluid.of('industrialforegoing:latex', 100)]);
  event.recipes.thermal.press('pneumaticcraft:plastic', ['3x thermal:rubber']);

  event.replaceInput(
    {output: 'thermal:enderium_dust'},
    '#forge:ender_pearls',
    '#forge:dusts/ender_pearl'
  );

  event.remove({id: 'thermal:machines/pulverizer/pulverizer_diamond_armor'});
  event.recipes.thermal.pulverizer('minecraft:diamond', '#forge:armor/diamond');

  redstoneServoRecipes();
  rfCoilRecipes();
  machineRecipes();
});
