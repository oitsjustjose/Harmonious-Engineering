onEvent('recipes', event => {
  const remove = () => {
    /* replace recipe items to reduce duplicate resources */
    event.replaceInput({}, 'advgenerators:controller', 'pneumaticcraft:printed_circuit_board');
    event.replaceInput({}, 'advgenerators:iron_wiring', 'immersiveengineering:wirecoil_redstone');
    event.replaceInput({}, 'advgenerators:iron_frame', 'beyond_earth:moon_stone');
    event.replaceInput(
      {},
      'advgenerators:pressure_valve',
      'pneumaticcraft:reinforced_pressure_tube'
    );
    event.replaceInput(
      {},
      'advgenerators:advanced_pressure_valve',
      'pneumaticcraft:advanced_pressure_tube'
    );

    event.replaceInput(
      {},
      'advgenerators:turbine_rotor_tier1',
      'compressedcreativity:engine_rotor'
    );
    event.replaceInput({}, 'advgenerators:iron_tubing', 'beyond_earth:compressed_ostrum');

    /* Remove in-world "crafting" upgrades */
    [
      'advgenerators:capacitors/upgrade_tier2',
      'advgenerators:capacitors/upgrade_tier3',
      'advgenerators:turbines/upgrade_tier2',
      'advgenerators:turbines/upgrade_tier3',
      'advgenerators:turbines/upgrade_tier4',
      'advgenerators:turbines/upgrade_tier5',
    ].forEach(x => event.remove({id: x}));

    [
      'advgenerators:advanced_pressure_valve',
      'advgenerators:capacitor_kit_tier2',
      'advgenerators:capacitor_kit_tier3',
      'advgenerators:capacitor_kit_tier4',
      'advgenerators:controller',
      'advgenerators:iron_frame',
      'advgenerators:iron_tubing',
      'advgenerators:iron_wiring',
      'advgenerators:power_io',
      'advgenerators:pressure_valve',
      'advgenerators:turbine_blade',
      'advgenerators:turbine_kit_tier2',
      'advgenerators:turbine_kit_tier3',
      'advgenerators:turbine_kit_tier4',
      'advgenerators:turbine_kit_tier5',
      'advgenerators:turbine_rotor_tier1',
      'advgenerators:turbine_rotor_tier2',
      'advgenerators:turbine_rotor_tier3',
      'advgenerators:turbine_rotor_tier4',
      'advgenerators:turbine_rotor_tier5',
      'advgenerators:turbine_tier2',
      'advgenerators:turbine_tier3',
      'advgenerators:turbine_tier4',
      'advgenerators:turbine_tier5',
      'advgenerators:upgrade_kit',
      'advgenerators:power_capacitor_tier1',
      'advgenerators:power_capacitor_tier2',
      'advgenerators:power_capacitor_tier3',
      'advgenerators:sensor',
      'advgenerators:heating_chamber',
      'advgenerators:efficiency_upgrade_tier2',
      'advgenerators:fuel_tank',
      'advgenerators:fe_output',
    ].forEach(x => event.remove({output: x}));

    /* Remove fuel recipes */
    event.remove({id: 'advgenerators:fuel/mekanism_ethene'});
    event.remove({id: 'advgenerators:fuel/mekanism_hydrogen'});
    event.remove({id: 'advgenerators:fuel/syngas'});
    event.custom({
      type: 'advgenerators:liquid_fuel',
      fuel: {fluid: 'advgenerators:syngas'},
      fePerMb: 2500,
    });
  };

  const add = () => {
    const CustomRecipeHandler = global.recipes(event);

    /* Integral Component Recipes */
    event.shaped('1x headdons:desh_integral_components', ['CSC', 'GIG', 'CSC'], {
      I: 'thermal:upgrade_augment_3',
      C: 'beyond_earth:desh_ingot',
      G: 'beyond_earth:compressed_desh',
      S: 'beyond_earth:ice_shard',
    });

    event.shaped('1x headdons:ostrum_integral_components', ['CSC', 'GIG', 'CSC'], {
      I: 'headdons:desh_integral_components',
      C: 'beyond_earth:ostrum_ingot',
      G: 'beyond_earth:compressed_ostrum',
      S: 'beyond_earth:ice_shard',
    });

    event.shaped('1x headdons:calorite_integral_components', ['CSC', 'GIG', 'CSC'], {
      I: 'headdons:ostrum_integral_components',
      C: 'beyond_earth:calorite_ingot',
      G: 'beyond_earth:compressed_calorite',
      S: 'beyond_earth:ice_shard',
    });

    /* Turbine Recipes */
    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:turbine_tier2'),
      Item.of('advgenerators:turbine_tier1'),
      Item.of('thermal:upgrade_augment_2')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:turbine_tier3'),
      Item.of('advgenerators:turbine_tier2'),
      Item.of('headdons:desh_integral_components')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:turbine_tier4'),
      Item.of('advgenerators:turbine_tier3'),
      Item.of('headdons:ostrum_integral_components')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:turbine_tier5'),
      Item.of('advgenerators:turbine_tier4'),
      Item.of('headdons:calorite_integral_components')
    );

    /* Capacitor Recipes */
    event.shaped('advgenerators:power_capacitor_tier1', ['MCM', 'CFC', 'MCM'], {
      M: 'beyond_earth:moon_stone',
      C: 'beyond_earth:calorite_ingot',
      F: 'thermal:energy_cell_frame',
    });

    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:power_capacitor_tier2'),
      Item.of('advgenerators:power_capacitor_tier1'),
      Item.of('thermal:upgrade_augment_2')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('advgenerators:power_capacitor_tier3'),
      Item.of('advgenerators:power_capacitor_tier2'),
      Item.of('headdons:ostrum_integral_components')
    );

    /* Misc */
    event.shaped('advgenerators:sensor', ['MRM', 'ROR', 'MRM'], {
      M: 'beyond_earth:moon_stone',
      R: 'minecraft:redstone',
      O: 'minecraft:observer',
    });

    event.shaped('advgenerators:heating_chamber', ['MTM', 'CHC', 'MCM'], {
      M: 'beyond_earth:moon_stone',
      C: 'beyond_earth:compressed_desh',
      T: 'pneumaticcraft:reinforced_pressure_tube',
      H: 'immersiveengineering:furnace_heater',
    });

    event.shaped('advgenerators:efficiency_upgrade_tier2', ['MPM', 'TET', 'MCM'], {
      M: 'beyond_earth:moon_stone',
      C: 'beyond_earth:compressed_desh',
      T: 'pneumaticcraft:advanced_pressure_tube',
      P: 'create:mechanical_mixer',
      E: 'create:basin',
    });

    event.shaped('advgenerators:fuel_tank', ['MTM', 'GAG', 'MCM'], {
      M: 'beyond_earth:moon_stone',
      C: 'beyond_earth:compressed_desh',
      T: 'pneumaticcraft:reinforced_pressure_tube',
      G: '#forge:glass/colorless',
      A: 'beyond_earth:desh_tank',
    });

    event.shaped('advgenerators:fe_output', ['MPM', 'CFC', 'MPM'], {
      M: 'beyond_earth:moon_stone',
      C: 'beyond_earth:compressed_desh',
      F: 'thermal:energy_cell_frame',
      P: [
        'refinedpipes:basic_energy_pipe',
        'refinedpipes:improved_energy_pipe',
        'refinedpipes:advanced_energy_pipe',
        'refinedpipes:elite_energy_pipe',
        'refinedpipes:ultimate_energy_pipe',
      ],
    });
  };

  remove();
  add();
});
