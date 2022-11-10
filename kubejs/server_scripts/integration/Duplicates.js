onEvent('recipes', event => {
  const DeDuplicateItems = () => {
    global.duplicateItemResources.forEach(x => {
      event.remove({output: x.item});
    });

    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastic');
    event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic');

    event.replaceInput({}, 'immersiveengineering:dust_saltpeter', 'thermal:niter_dust');
    event.replaceOutput({}, 'immersiveengineering:dust_saltpeter', 'thermal:niter_dust');

    event.remove({input: '#forge:nuggets/copper', output: '#forge:ingots/copper'});
    event.shaped('minecraft:copper_ingot', ['XXX', 'XXX', 'XXX'], {X: '#forge:nuggets/copper'});

    event.remove({output: 'thermal:carrot_block'});
    event.remove({output: 'thermal:potato_block'});
    event.remove({output: 'thermal:beetroot_block'});

    /* Syngas recipes that are broken */
    event.remove({id: 'advgenerators:carbon/coal_dust'});
    event.remove({id: 'advgenerators:carbon/carbon_dust'});
    event.remove({id: 'advgenerators:carbon/charcoal_dust'});
  };

  const DeDuplicateFluids = () => {
    /* Pyrolize Creosote from Logs */
    event.remove({id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'});
    event.recipes.thermal.pyrolyzer(
      [Item.of('minecraft:charcoal'), Fluid.of('immersiveengineering:creosote', 250)],
      '#minecraft:logs_that_burn'
    );

    /* Pyrolize Creosote from Coal */
    event.remove({id: 'thermal:machines/pyrolyzer/pyrolyzer_coal'});
    event.recipes.thermal.pyrolyzer(
      [
        Item.of('thermal:coal_coke'),
        Item.of('thermal:tar'),
        Fluid.of('immersiveengineering:creosote', 500),
      ],
      Item.of('minecraft:coal')
    );

    /* Crude Oil from Bituminous Sands */
    event.remove({id: 'thermal:machines/centrifuge/centrifuge_oil_sand'});
    event.remove({id: 'thermal:machines/centrifuge/centrifuge_oil_red_sand'});
    event.recipes.thermal.centrifuge(
      [
        Item.of('minecraft:red_sand'),
        Item.of('thermal:bitumen'),
        Item.of('thermal:tar'),
        Fluid.of('pneumaticcraft:oil', 100),
      ],
      Item.of('thermal:oil_red_sand')
    );
    event.recipes.thermal.centrifuge(
      [
        Item.of('minecraft:sand'),
        Item.of('thermal:bitumen'),
        Item.of('thermal:tar'),
        Fluid.of('pneumaticcraft:oil', 100),
      ],
      Item.of('thermal:oil_sand')
    );

    /* PnC's Biodiesel -- cya! */
    event.remove({id: 'pneumaticcraft:fluid_mixer/biodiesel'});
    event.custom({
      type: 'pneumaticcraft:fluid_mixer',
      input1: {type: 'pneumaticcraft:fluid', tag: 'forge:plantoil', amount: 25},
      input2: {type: 'pneumaticcraft:fluid', tag: 'forge:ethanol', amount: 25},
      fluid_output: {fluid: 'immersiveengineering:biodiesel', amount: 50},
      item_output: {item: 'pneumaticcraft:glycerol'},
      pressure: 2.0,
      time: 300,
    });

    /* PnC's Ethanol */
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'});
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_melon'});
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'});
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_apple'});
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sugar'});
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_potato'});
    [
      {item: 'minecraft:sugar', amt: 50},
      {item: 'minecraft:poisonous_potato', amt: 50},
      {item: 'minecraft:potato', amt: 25},
      {item: 'minecraft:sweet_berries', amt: 20},
      {item: 'minecraft:apple', amt: 50},
      {item: 'minecraft:melon_slice', amt: 10},
    ].forEach(x =>
      event.custom({
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: x.item},
        fluid_input: {
          type: 'pneumaticcraft:fluid',
          tag: 'pneumaticcraft:yeast_culture',
          amount: 100,
        },
        fluid_output: {fluid: 'immersiveengineering:ethanol', amount: x.amt},
        temperature: {min_temp: 303, max_temp: 333},
        speed: 0.4,
        exothermic: true,
      })
    );

    /* CCnA Bioethanol */
    event.remove({id: 'createaddition:mixing/bioethanol'});
    event.recipes.create.mixing(Fluid.of('immersiveengineering:ethanol', 100), [
      Item.of('minecraft:sugar'),
      Item.of('createaddition:biomass'),
    ]);

    /* CCnA Seed Oil */
    event.remove({id: 'createaddition:compacting/seed_oil'});
    event.recipes.create.compacting(Fluid.of('immersiveengineering:plantoil', 100), [
      '#forge:seeds',
    ]);

    /* PnC Vegetable Oil */
    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'});
    event.custom({
      type: 'pneumaticcraft:thermo_plant',
      item_input: {tag: 'forge:crops'},
      fluid_output: {fluid: 'immersiveengineering:plantoil', amount: 20},
      pressure: 2.0,
      speed: 0.5,
      exothermic: false,
    });

    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'});
    event.custom({
      type: 'pneumaticcraft:thermo_plant',
      item_input: {tag: 'forge:seeds'},
      fluid_output: {fluid: 'immersiveengineering:plantoil', amount: 50},
      pressure: 2.0,
      speed: 0.5,
      exothermic: false,
    });
  };

  DeDuplicateItems();
  DeDuplicateFluids();
});
