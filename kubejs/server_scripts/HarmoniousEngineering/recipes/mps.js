const base = event => {
  event.remove({output: 'powersuits:powerarmor_head'});
  event.remove({output: 'powersuits:powerarmor_torso'});
  event.remove({output: 'powersuits:powerarmor_legs'});
  event.remove({output: 'powersuits:powerarmor_feet'});
  event.remove({output: 'powersuits:powerfist'});
  event.remove({output: 'powersuits:tinkertable'});

  event.shaped('powersuits:powerarmor_head', ['PPP', 'CHC'], {
    C: 'powah:capacitor_niotic',
    H: 'redstone_arsenal:flux_helmet',
    P: 'mekanism:hdpe_sheet',
  });
  event.shaped('powersuits:powerarmor_torso', ['P P', 'CHC', 'PPP'], {
    C: 'powah:capacitor_niotic',
    H: 'redstone_arsenal:flux_chestplate',
    P: 'mekanism:hdpe_sheet',
  });
  event.shaped('powersuits:powerarmor_legs', ['PHP', 'C C', 'P P'], {
    C: 'powah:capacitor_niotic',
    H: 'redstone_arsenal:flux_leggings',
    P: 'mekanism:hdpe_sheet',
  });
  event.shaped('powersuits:powerarmor_feet', ['CHC', 'P P'], {
    C: 'powah:capacitor_niotic',
    H: 'redstone_arsenal:flux_boots',
    P: 'mekanism:hdpe_sheet',
  });
  event.shaped('powersuits:powerfist', ['DHS'], {
    D: 'thermal:flux_drill',
    H: 'create:brass_hand',
    S: 'thermal:flux_saw',
  });
  event.shaped('powersuits:tinkertable', ['LLL', 'HTH', 'H H'], {
    L: 'numina:component_laser_emitter',
    T: 'thermal:tinker_bench',
    H: 'mekanism:hdpe_rod',
  });
};

const shields = event => {
  event.remove({output: 'powersuits:plating_iron'});
  global.genSmithingRecipe(
    event,
    Ingredient.of('#forge:plates/iron'),
    Ingredient.of('thermal:upgrade_augment_1'),
    Item.of('powersuits:plating_iron')
  );

  event.remove({output: 'powersuits:plating_diamond'});
  global.genSmithingRecipe(
    event,
    Ingredient.of('#forge:plates/diamond'),
    Ingredient.of('thermal:upgrade_augment_2'),
    Item.of('powersuits:plating_diamond')
  );

  event.remove({output: 'powersuits:energy_shield'});
  event.shaped('powersuits:energy_shield', ['PTP', 'HDH', 'PTP'], {
    D: 'powersuits:plating_diamond',
    P: '#forge:plates/enderium',
    T: 'mekanism:teleportation_core',
    H: 'mekanism:hdpe_sheet',
  });
};

const numina = event => {
  // Replace wiring recipe with signalum
  event.remove({output: 'numina:component_wiring'});
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/signalum'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'numina:component_wiring', count: 8}],
  });
  event.custom({
    type: 'immersiveengineering:metal_press',
    mold: {item: 'immersiveengineering:mold_wire'},
    input: {base_ingredient: {tag: 'forge:ingots/signalum'}},
    result: {item: 'numina:component_wiring', count: 6},
    energy: 4800,
  });

  event.remove({output: 'numina:component_solenoid'});
  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'numina:component_wiring', count: 2}, {tag: 'forge:rods/iron'}],
    result: [{item: 'numina:component_solenoid'}],
  });

  event.remove({output: 'numina:component_control_circuit'});
  global.genSmithingRecipe(
    event,
    Ingredient.of('#forge:circuits/basic'),
    Ingredient.of('thermal:upgrade_augment_1'),
    item.of('numina:component_control_circuit')
  );

  event.remove({output: 'numina:component_field_emitter'});
  event.shaped('numina:component_field_emitter', ['HEH', 'SMS', 'HEH'], {
    E: 'kubejs:ender_singularity',
    H: 'mekanism:hdpe_sheet',
    M: 'thermal:flux_magnet',
    S: 'numina:component_solenoid',
  });

  event.remove({output: 'numina:component_glider_wing'});
  event.shaped('numina:component_glider_wing', [' PP', 'PPH', 'P  '], {
    H: 'mekanism:hdpe_sheet',
    P: '#forge:plates/steel',
  });

  event.remove({output: 'numina:component_carbon_myofiber'});
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: {ingredient: {item: 'minecraft:string'}},
    infusionInput: {amount: 10, tag: 'mekanism:carbon'},
    output: {item: 'numina:component_carbon_myofiber'},
  });

  event.remove({output: 'numina:component_magnet'});
  event.shaped('numina:component_magnet', [' M ', ' S ', 'PPP'], {
    M: 'thermal:flux_magnet',
    P: '#forge:plates/steel',
    S: 'numina:component_solenoid',
  });

  event.replaceInput(
    {output: 'numina:component_computer_chip'},
    'minecraft:daylight_detector',
    'appliedenergistics2:logic_processor'
  );

  event.replaceInput(
    {output: 'numina:component_computer_chip'},
    'minecraft:daylight_detector',
    'appliedenergistics2:logic_processor'
  );

  event.remove({output: 'numina:component_parachute'});
  event.remove({output: 'numina:component_myofiber_gel'});
};

onEvent('recipes', event => {
  base(event);
  shields(event);
  numina(event);

  event.replaceInput(
    {output: 'powersuits:parachute'},
    'numina:component_parachute',
    'immersiveengineering:windmill_sail'
  );

  event.replaceInput(
    {mod: 'powersuits'},
    'numina:component_rubber_hose',
    'numina:component_carbon_myofiber'
  );
  event.replaceInput(
    {mod: 'numina'},
    'numina:component_rubber_hose',
    'numina:component_carbon_myofiber'
  );

  event.remove({output: 'powersuits:fluid_tank'});
  global.genSmithingRecipe(
    event,
    Ingredient.of('#harmeng:basic_tank'),
    Ingredient.of('numina:component_control_circuit'),
    Item.of('powersuits:fluid_tank')
  );

  // Disable Solar Generation / Power -- maybe? If not use Mek Solar Panel Item
  event.remove({output: 'numina:component_artificial_muscle'});
  event.remove({output: 'numina:component_solar_panel'});
  event.remove({output: 'powersuits:generator_solar'});
  event.remove({output: 'powersuits:generator_solar_adv'});
});
