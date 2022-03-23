onEvent('recipes', event => {
  const tiers = ['basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];

  event.remove({id: 'powah:crafting/cable_basic'});
  event.remove({id: 'powah:crafting/cable_basic_2'});
  event.remove({id: 'powah:crafting/cable_blazing'});
  event.remove({id: 'powah:crafting/cable_blazing_2'});
  event.remove({id: 'powah:crafting/cable_hardened'});
  event.remove({id: 'powah:crafting/cable_hardened_2'});
  event.remove({id: 'powah:crafting/cable_niotic'});
  event.remove({id: 'powah:crafting/cable_niotic_2'});
  event.remove({id: 'powah:crafting/cable_nitro'});
  event.remove({id: 'powah:crafting/cable_nitro_2'});
  event.remove({id: 'powah:crafting/cable_spirited'});
  event.remove({id: 'powah:crafting/cable_spirited_2'});
  event.remove({id: 'powah:crafting/cable_starter'});
  event.remove({id: 'powah:crafting/dielectric_paste_2'});
  event.remove({id: 'powah:crafting/dielectric_rod_h'});
  event.remove({id: 'powah:crafting/ender_cell_starter'});
  event.remove({id: 'powah:crafting/ender_gate_basic'});
  event.remove({id: 'powah:crafting/ender_gate_blazing'});
  event.remove({id: 'powah:crafting/ender_gate_hardened'});
  event.remove({id: 'powah:crafting/ender_gate_niotic'});
  event.remove({id: 'powah:crafting/ender_gate_nitro'});
  event.remove({id: 'powah:crafting/ender_gate_spirited'});
  event.remove({id: 'powah:crafting/ender_gate_starter'});
  event.remove({id: 'powah:crafting/ender_cell_basic'});
  event.remove({id: 'powah:crafting/ender_cell_blazing'});
  event.remove({id: 'powah:crafting/ender_cell_hardened'});
  event.remove({id: 'powah:crafting/ender_cell_niotic'});
  event.remove({id: 'powah:crafting/ender_cell_nitro'});
  event.remove({id: 'powah:crafting/ender_cell_spirited'});
  event.remove({id: 'powah:crafting/ender_cell_starter'});
  event.remove({id: 'powah:crafting/magmator_basic'});
  event.remove({id: 'powah:crafting/magmator_blazing'});
  event.remove({id: 'powah:crafting/magmator_hardened'});
  event.remove({id: 'powah:crafting/magmator_niotic'});
  event.remove({id: 'powah:crafting/magmator_nitro'});
  event.remove({id: 'powah:crafting/magmator_spirited'});
  event.remove({id: 'powah:crafting/magmator_starter'});
  event.remove({id: 'powah:crafting/reactor_starter'});
  event.remove({id: 'powah:crafting/solar_panel_basic'});
  event.remove({id: 'powah:crafting/solar_panel_blazing'});
  event.remove({id: 'powah:crafting/solar_panel_hardened'});
  event.remove({id: 'powah:crafting/solar_panel_niotic'});
  event.remove({id: 'powah:crafting/solar_panel_nitro'});
  event.remove({id: 'powah:crafting/solar_panel_spirited'});
  event.remove({id: 'powah:crafting/solar_panel_starter'});
  event.remove({id: 'powah:crafting/thermo_generator_basic'});
  event.remove({id: 'powah:crafting/thermo_generator_blazing'});
  event.remove({id: 'powah:crafting/thermo_generator_hardened'});
  event.remove({id: 'powah:crafting/thermo_generator_niotic'});
  event.remove({id: 'powah:crafting/thermo_generator_nitro'});
  event.remove({id: 'powah:crafting/thermo_generator_spirited'});
  event.remove({id: 'powah:crafting/thermo_generator_starter'});
  event.remove({id: 'powah:crafting/dielectric_paste'});
  event.remove({id: 'powah:crafting/dielectric_rod'});
  event.remove({id: 'powah:crafting/dielectric_casing'});
  event.remove({id: 'powah:energizing/energized_steel'});
  event.remove({output: 'powah:ender_core'});

  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [
      {tag: 'forge:silicon'},
      {tag: 'forge:dusts/coal'},
      {tag: 'forge:dusts/coal'},
      {tag: 'forge:dusts/coal'},
      {item: 'create:super_glue'},
      {tag: 'forge:tools/knives'},
    ],
    result: {item: 'powah:dielectric_paste', count: 8},
  });
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {tag: 'forge:silicon'},
      {tag: 'forge:dusts/coal'},
      {tag: 'forge:dusts/coal'},
      {tag: 'forge:dusts/coal'},
      {tag: 'forge:slimeballs'},
    ],
    results: [{item: 'powah:dielectric_paste', count: 8}],
  });

  event.custom({
    type: 'thermal:press',
    ingredients: [{item: 'thermal:rf_coil'}, {item: 'powah:dielectric_paste', count: 6}],
    result: [{item: 'powah:dielectric_rod', count: 24}],
  });

  global.genCombinedRecipe(
    event,
    Ingredient.of('thermal:machine_frame'),
    Ingredient.of('powah:dielectric_paste'),
    Item.of('powah:dielectric_casing')
  );

  event.custom({
    type: 'powah:energizing',
    ingredients: [{tag: 'forge:ingots/steel'}],
    energy: 10000,
    result: {item: 'powah:steel_energized'},
  });

  tiers.forEach((tier, idx) => {
    const nextTier = idx === tiers.length - 1 ? null : tiers[idx + 1];
    if (nextTier) {
      const nextCapacitor = `powah:capacitor_${nextTier}`;

      const currReactor = `powah:reactor_${tier}`;
      const nextReactor = `powah:reactor_${nextTier}`;
      global.genCombinedRecipe(
        event,
        Ingredient.of(currReactor),
        Ingredient.of(nextCapacitor),
        Item.of(nextReactor)
      );

      const currRod = `powah:energizing_rod_${tier}`;
      const nextRod = `powah:energizing_rod_${nextTier}`;
      global.genCombinedRecipe(
        event,
        Ingredient.of(currRod),
        Ingredient.of(nextCapacitor),
        Item.of(nextRod)
      );
    }
  });

  global.genCombinedRecipe(
    event,
    Ingredient.of('powah:energizing_rod_starter'),
    Ingredient.of('powah:capacitor_basic_large'),
    Item.of('powah:energizing_rod_basic')
  );
});
