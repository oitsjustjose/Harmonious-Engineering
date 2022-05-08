const ae2 = 'appliedenergistics2';

const main = event => {
  const modid = 'packagedauto';
  event.remove({mod: modid});

  event.shaped(`${modid}:encoder`, ['FPF', 'TUT', 'ICI'], {
    P: `${ae2}:pattern_terminal`,
    U: `${ae2}:crafting_unit`,
    T: '#forge:workbenches',
    F: 'minecraft:furnace',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden',
  });

  event.shaped(`${modid}:crafter`, ['III', 'EME', 'III'], {
    I: `#${ae2}:interface`,
    M: `${ae2}:molecular_assembler`,
    E: `${ae2}:engineering_processor`,
  });

  global.genSmithingRecipe(
    event,
    Ingredient.of(`${ae2}:blank_pattern`),
    Ingredient.of('mekanism:cardboard_box'),
    Item.of('2x packagedauto:recipe_holder')
  );

  // packager: export bus
  event.shaped(`${modid}:packager`, ['QTQ', 'CUC', 'QIQ'], {
    C: `${ae2}:calculation_processor`,
    I: `${ae2}:export_bus`,
    Q: `${ae2}:quartz_fiber`,
    U: `${ae2}:formation_core`,
    T: '#forge:workbenches',
  });

  // unpackager: import bus
  event.shaped(`${modid}:unpackager`, ['QTQ', 'CUC', 'QIQ'], {
    C: `${ae2}:logic_processor`,
    I: `${ae2}:import_bus`,
    Q: `${ae2}:quartz_fiber`,
    U: `${ae2}:annihilation_core`,
    T: 'minecraft:hopper',
  });
};

const ex = event => {
  const modid = 'packagedexcrafting';
  [
    'basic_crafter',
    'advanced_crafter',
    'elite_crafter',
    'ender_crafter',
    'combination_crafter',
    'marked_pedestal',
    'ultimate_crafter',
  ].forEach(x => event.remove({output: `${modid}:${x}`}));

  global.genSmithingRecipe(
    event,
    Ingredient.of('packagedauto:crafter'),
    Ingredient.of('extendedcrafting:ultimate_auto_table'),
    Item.of(`${modid}:ultimate_crafter`)
  );
};

onEvent('recipes', event => {
  ex(event);
  main(event);
});
