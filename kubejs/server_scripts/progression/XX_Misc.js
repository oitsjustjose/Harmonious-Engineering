onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  const archPalette = () => {
    event.remove({id: 'architects_palette:warping/unobtanium_from_netherite_ingot_warping'});
    event.remove({id: 'architects_palette:unobtanium'});
    CustomRecipeHandler.warping(
      Item.of('thermal:enderium_ingot'),
      Item.of('architects_palette:unobtanium')
    );
    event.recipes.immersiveengineering.arc_furnace(
      '5x architects_palette:unobtanium',
      'architects_palette:unobtanium_block'
    );
  };

  const buildingGadgets = () => {
    event.remove({mod: 'buildinggadgets'});

    event.shaped('buildinggadgets:gadget_building', ['BHB', 'BWB', 'BEB'], {
      B: '#forge:ingots/brass',
      E: 'immersiveengineering:toolupgrade_revolver_electro',
      H: 'create:brass_hand',
      W: 'immersiveengineering:wirecoil_electrum',
    });

    event.shaped('buildinggadgets:gadget_exchanging', ['BGB', 'BWB', 'BEB'], {
      B: '#forge:ingots/brass',
      E: 'immersiveengineering:toolupgrade_revolver_electro',
      G: 'thermal:ender_grenade',
      W: 'immersiveengineering:wirecoil_electrum',
    });

    event.shaped('buildinggadgets:gadget_copy_paste', ['BCB', 'BWB', 'BEB'], {
      B: '#forge:ingots/brass',
      C: 'create:schematicannon',
      E: 'immersiveengineering:toolupgrade_revolver_electro',
      W: 'immersiveengineering:wirecoil_electrum',
    });

    event.shaped('buildinggadgets:gadget_destruction', ['BDB', 'BWB', 'BEB'], {
      B: '#forge:ingots/brass',
      D: 'pneumaticcraft:drill_bit_netherite',
      E: 'immersiveengineering:toolupgrade_revolver_electro',
      W: 'immersiveengineering:wirecoil_electrum',
    });

    CustomRecipeHandler.automatableSmithing(
      Item.of('buildinggadgets:template_manager'),
      Item.of('create:schematic_table'),
      Item.of('#forge:plastic')
    );
  };

  const compactMachines = () => {
    event.remove({mod: 'compactmachines'});

    CustomRecipeHandler.giant(Item.of('compactmachines:machine_tiny'), ['WWW', 'WPW', 'WWW'], {
      W: {item: 'compactmachines:wall'},
      P: {item: 'pneumaticcraft:vacuum_pump'},
    });

    CustomRecipeHandler.giant(
      Item.of('compactmachines:machine_small'),
      ['WWWW', 'WPIW', 'WIPW', 'WWWW'],
      {
        W: {item: 'compactmachines:wall'},
        I: {tag: 'forge:storage_blocks/iron'},
        P: {item: 'pneumaticcraft:vacuum_pump'},
      }
    );

    CustomRecipeHandler.giant(
      Item.of('compactmachines:machine_normal'),
      ['WWWWW', 'WIPIW', 'WIPIW', 'WIPIW', 'WWWWW'],
      {
        W: {item: 'compactmachines:wall'},
        I: {tag: 'forge:storage_blocks/gold'},
        P: {item: 'pneumaticcraft:vacuum_pump'},
      }
    );

    CustomRecipeHandler.giant(
      Item.of('compactmachines:machine_large'),
      ['WWWWWW', 'WOOOOW', 'WOPPOW', 'WOPPOW', 'WOOOOW', 'WWWWWW'],
      {
        W: {item: 'compactmachines:wall'},
        O: {item: 'minecraft:crying_obsidian'},
        P: {item: 'pneumaticcraft:vacuum_pump'},
      }
    );

    CustomRecipeHandler.giant(
      Item.of('compactmachines:machine_giant'),
      ['WWWWWWW', 'WDDDDDW', 'WDPPPDW', 'WDFFFDW', 'WDPPPDW', 'WDDDDDW', 'WWWWWWW'],
      {
        W: {item: 'compactmachines:wall'},
        D: {item: 'minecraft:diamond'},
        F: {item: 'fluxnetworks:flux_dust'},
        P: {item: 'pneumaticcraft:vacuum_pump'},
      }
    );

    CustomRecipeHandler.giant(
      Item.of('compactmachines:machine_maximum'),
      [
        'WWWWWWWW',
        'WUUUUUUW',
        'WUPPPPUW',
        'WUPNNPUW',
        'WUPNNPUW',
        'WUPPPPUW',
        'WUUUUUUW',
        'WWWWWWWW',
      ],
      {
        W: {item: 'compactmachines:wall'},
        U: {item: 'architects_palette:unobtanium'},
        N: {tag: 'forge:ingots/netherite'},
        P: {item: 'pneumaticcraft:vacuum_pump'},
      }
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('compactmachines:wall'),
      Item.of('immersiveengineering:sheetmetal_lead'),
      Item.of('minecraft:ender_pearl')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
      Item.of('refinedpipes:basic_item_pipe'),
      Item.of('entangled:block')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}'),
      Item.of('refinedpipes:basic_fluid_pipe'),
      Item.of('entangled:block')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}'),
      Item.of('refinedpipes:basic_energy_pipe'),
      Item.of('entangled:block')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('compactmachines:personal_shrinking_device'),
      Item.of('compactmachines:wall'),
      Item.of('tempad:tempad')
    );
  };

  const dave = () => {
    [
      'davebuildingmod:amethyst_glass',
      'davebuildingmod:black_chair',
      'davebuildingmod:blue_chair',
      'davebuildingmod:book_1',
      'davebuildingmod:book_2',
      'davebuildingmod:brown_chair',
      'davebuildingmod:copper_coil',
      'davebuildingmod:cyan_chair',
      'davebuildingmod:gray_chair',
      'davebuildingmod:green_chair',
      'davebuildingmod:hard_air',
      'davebuildingmod:light_blue_chair',
      'davebuildingmod:light_gray_chair',
      'davebuildingmod:lime_chair',
      'davebuildingmod:magenta_chair',
      'davebuildingmod:orange_chair',
      'davebuildingmod:pink_chair',
      'davebuildingmod:purple_chair',
      'davebuildingmod:red_chair',
      'davebuildingmod:reinforced_glass',
      'davebuildingmod:rocky_dirt',
      'davebuildingmod:rubber_duck',
      'davebuildingmod:soft_air',
      'davebuildingmod:small_thomas_face',
      'davebuildingmod:steel_ingot',
      'davebuildingmod:thomas_face',
      'davebuildingmod:track_end',
      'davebuildingmod:tungsten_carbite',
      'davebuildingmod:white_chair',
      'davebuildingmod:yellow_chair',
    ].forEach(x => event.remove({output: x}));
    event.remove({input: '#minecraft:ingots/steel'});
    event.replaceInput({}, 'davebuildingmod:steel_ingot', '#forge:ingots/steel');

    CustomRecipeHandler.automatableSmithing(
      Item.of('davebuildingmod:computer_terminal_steel'),
      Item.of('davebuildingmod:computer_terminal'),
      Item.of('#forge:ingots/steel')
    );

    CustomRecipeHandler.automatableSmithing(
      Item.of('2x davebuildingmod:track_end'),
      Item.of('create:track'),
      Item.of('#forge:rods/all_metal')
    );
  };

  const dimStorage = () => {
    event.remove({mod: 'dimstorage'});
    CustomRecipeHandler.automatableSmithing(
      Item.of('dimstorage:dimensional_chest'),
      Item.of('thermal:machine_frame'),
      Item.of('#forge:ingots/enderium')
    );
    CustomRecipeHandler.automatableSmithing(
      Item.of('dimstorage:dimensional_tank'),
      Item.of('thermal:fluid_cell_frame'),
      Item.of('#forge:ingots/enderium')
    );
    CustomRecipeHandler.automatableSmithing(
      Item.of('dimstorage:dimensional_tablet'),
      Item.of('tempad:tempad'),
      Item.of('#forge:ingots/enderium')
    );
  };

  const engineersDecor = () => {
    /* Old industrial wood intg */
    event.remove({id: 'engineersdecor:dependent/old_industrial_planks_recipe'});
    event.remove({id: 'engineersdecor:dependent/old_industrial_planks_recipe_vmirrored'});
    event.recipes.create.splashing(
      [Item.of('engineersdecor:old_industrial_wood_planks')],
      Item.of('#forge:treated_wood')
    );

    /* Outright remove things */
    event.remove({output: 'engineersdecor:metal_bar'});
    event.replaceInput({}, 'engineersdecor:metal_bar', '#forge:rods/all_metal');

    event.remove({output: 'engineersdecor:factory_hopper'});
    event.remove({output: 'engineersdecor:factory_placer'});
    event.remove({output: 'engineersdecor:fluid_barrel'});
    event.remove({output: 'engineersdecor:small_block_breaker'});
    event.remove({output: 'engineersdecor:small_electrical_furnace'});
    event.remove({output: 'engineersdecor:small_fluid_funnel'});
    event.remove({output: 'engineersdecor:small_freezer'});
    event.remove({output: 'engineersdecor:small_milking_machine'});
    event.remove({output: 'engineersdecor:small_mineral_smelter'});
    event.remove({output: 'engineersdecor:small_solar_panel'});
    event.remove({output: 'engineersdecor:small_tree_cutter'});
    event.remove({output: 'engineersdecor:small_waste_incinerator'});
    event.remove({output: 'engineersdecor:straight_pipe_valve_redstone_analog'});
    event.remove({output: 'engineersdecor:straight_pipe_valve_redstone'});
    event.remove({output: 'engineersdecor:straight_pipe_valve'});
  };

  const expandedstorage = () => {
    event.remove({id: 'expandedstorage:wood_chest'});
    event.replaceInput({}, '#forge:chests/wooden', 'expandedstorage:wood_chest');
    event.replaceInput({}, 'minecraft:chest', 'expandedstorage:wood_chest');
    event.replaceOutput({}, 'minecraft:chest', 'expandedstorage:wood_chest');

    [
      'expandedstorage:candy_cane_mini_present_with_sparrow',
      'expandedstorage:candy_cane_mini_present',
      'expandedstorage:green_mini_present_with_sparrow',
      'expandedstorage:green_mini_present',
      'expandedstorage:lavender_mini_present_with_sparrow',
      'expandedstorage:lavender_mini_present',
      'expandedstorage:old_diamond_chest',
      'expandedstorage:old_gold_chest',
      'expandedstorage:old_iron_chest',
      'expandedstorage:old_netherite_chest',
      'expandedstorage:old_obsidian_chest',
      'expandedstorage:old_wood_chest',
      'expandedstorage:pink_amethyst_mini_present_with_sparrow',
      'expandedstorage:pink_amethyst_mini_present',
      'expandedstorage:pumpkin_chest',
      'expandedstorage:pumpkin_mini_chest_with_sparrow',
      'expandedstorage:pumpkin_mini_chest',
      'expandedstorage:red_mini_present_with_sparrow',
      'expandedstorage:red_mini_present',
      'expandedstorage:vanilla_wood_mini_chest_with_sparrow',
      'expandedstorage:vanilla_wood_mini_chest',
      'expandedstorage:white_mini_present_with_sparrow',
      'expandedstorage:white_mini_present',
      'expandedstorage:wood_mini_chest_with_sparrow',
    ].forEach(x => {
      event.remove({output: x});
      event.remove({input: x});
    });
  };

  const fluxNetworks = () => {
    event.replaceInput(
      {output: 'fluxnetworks:flux_core'},
      'minecraft:obsidian',
      '#forge:plates/enderium'
    );
  };

  const heAddons = () => {
    CustomRecipeHandler.giant(Item.of('headdons:portable_stonecutter'), [' I ', 'SSS'], {
      I: {tag: 'forge:plates/iron'},
      S: {item: 'minecraft:stone_slab'},
    });
  };

  const mcjty = () => {
    event.replaceInput({mod: 'xnet'}, 'minecraft:gold_nugget', [
      'refinedpipes:advanced_energy_pipe',
      'refinedpipes:advanced_fluid_pipe',
      'refinedpipes:advanced_item_pipe',
      'refinedpipes:basic_energy_pipe',
      'refinedpipes:basic_fluid_pipe',
      'refinedpipes:basic_item_pipe',
      'refinedpipes:elite_energy_pipe',
      'refinedpipes:elite_fluid_pipe',
      'refinedpipes:improved_energy_pipe',
      'refinedpipes:improved_fluid_pipe',
      'refinedpipes:improved_item_pipe',
      'refinedpipes:ultimate_energy_pipe',
      'refinedpipes:ultimate_fluid_pipe',
    ]);
    event.replaceInput(
      {output: '#xnet:connectors'},
      'minecraft:gold_ingot',
      'refinedpipes:advanced_extractor_attachment'
    );
    event.remove({output: 'rftoolsbase:crafting_card'});
    event.remove({output: 'rftoolsbase:dimensionalshard'});
    event.remove({output: 'rftoolsbase:filter_module'});
    event.remove({output: 'rftoolsbase:infused_enderpearl'});
    event.remove({output: 'rftoolsbase:tablet_filled'});
    event.remove({output: 'rftoolsbase:tablet'});

    CustomRecipeHandler.warping(
      Item.of('minecraft:amethyst_shard'),
      Item.of('rftoolsbase:dimensionalshard')
    );
  };

  const moreMinecarts = () => {
    event.remove({output: 'moreminecarts:silica_steel'});
    event.remove({output: 'moreminecarts:silica_steel_mix'});

    event.recipes.thermal.smelter(Item.of('4x moreminecarts:silica_steel'), [
      Item.of('3x #forge:ingots/steel'),
      Item.of('#forge:dusts/quartz'),
    ]);
    event.recipes.immersiveengineeringArcFurnace(
      ['4x moreminecarts:silica_steel'],
      '3x #forge:ingots/steel',
      ['1x #forge:dusts/quartz']
    );

    event.remove({id: 'moreminecarts:phantom_levitation_powder'});
    event.remove({id: 'moreminecarts:chorus_levitation_powder'});
    event.remove({id: 'moreminecarts:shulker_levitation_powder'});

    event.recipes.thermal.pulverizer(Item.of('4x moreminecarts:levitation_powder'), [
      'minecraft:phantom_membrane',
    ]);
    event.recipes.thermal.pulverizer(Item.of('2x moreminecarts:levitation_powder'), [
      'minecraft:popped_chorus_fruit',
    ]);
    event.recipes.thermal.pulverizer(Item.of('32x moreminecarts:levitation_powder'), [
      'minecraft:shulker_shell',
    ]);

    /* Earlier game recipe */
    event.recipes.create.milling(
      ['1x moreminecarts:levitation_powder'],
      'minecraft:phantom_membrane'
    );

    /* TPPP recipes */
    event.custom({
      type: 'pneumaticcraft:thermo_plant',
      item_input: {item: 'minecraft:phantom_membrane'},
      fluid_input: {type: 'pneumaticcraft:fluid', tag: 'forge:lubricant', amount: 100},
      item_output: {item: 'moreminecarts:levitation_powder', count: 16},
      temperature: {min_temp: 773},
      pressure: 7.5,
      speed: 0.1,
      air_use_multiplier: 10.0,
      exothermic: false,
    });

    event.custom({
      type: 'pneumaticcraft:thermo_plant',
      item_input: {item: 'minecraft:popped_chorus_fruit'},
      fluid_input: {type: 'pneumaticcraft:fluid', tag: 'forge:lubricant', amount: 100},
      item_output: {item: 'moreminecarts:levitation_powder', count: 4},
      temperature: {min_temp: 773},
      pressure: 7.5,
      speed: 0.1,
      air_use_multiplier: 10.0,
      exothermic: false,
    });

    event.custom({
      type: 'pneumaticcraft:thermo_plant',
      item_input: {item: 'minecraft:shulker_shell'},
      fluid_input: {type: 'pneumaticcraft:fluid', tag: 'forge:lubricant', amount: 100},
      item_output: {item: 'moreminecarts:levitation_powder', count: 64},
      temperature: {min_temp: 773},
      pressure: 7.5,
      speed: 0.1,
      air_use_multiplier: 10.0,
      exothermic: false,
    });

    event.recipes.thermal
      .insolator(
        [
          Item.of('moreminecarts:glass_cactus').withChance(1.0),
          Item.of('moreminecarts:glass_spines').withChance(0.125),
        ],
        Item.of('moreminecarts:glass_cactus')
      )
      .water(10);
  };

  const recycling = () => {
    const items = [
      'beyond_earth:netherite_oxygen_mask',
      'beyond_earth:netherite_space_boots',
      'beyond_earth:netherite_space_pants',
      'beyond_earth:netherite_space_suit',
      'farmersdelight:netherite_knife',
      'minecraft:netherite_axe',
      'minecraft:netherite_boots',
      'minecraft:netherite_chestplate',
      'minecraft:netherite_helmet',
      'minecraft:netherite_hoe',
      'minecraft:netherite_leggings',
      'minecraft:netherite_pickaxe',
      'minecraft:netherite_shovel',
      'minecraft:netherite_sword',
      'pneumaticcraft:drill_bit_netherite',
      'pneumaticcraft:unassembled_netherite_drill_bit',
      'tools_complement:netherite_excavator',
      'tools_complement:netherite_hammer',
      'tools_complement:netherite_knife',
      'tools_complement:netherite_sickle',
    ].map(x => Item.of(x));

    event.recipes.thermal.smelter(Item.of('6x thermal:netherite_nugget'), [items]);
  };

  const refinedStorage = () => {
    event.remove({output: '#forge:silicon'});
    event.recipes.thermal.smelter(Item.of('refinedstorage:silicon'), [
      Item.of('2x #forge:dusts/quartz'),
    ]);
    event.recipes.immersiveengineeringArcFurnace(
      ['refinedstorage:silicon'],
      '2x #forge:dusts/quartz'
    );

    event.remove({id: 'refinedstorage:quartz_enriched_iron'});
    event.recipes.thermal.smelter(Item.of('4x refinedstorage:quartz_enriched_iron'), [
      Item.of('3x #forge:ingots/iron'),
      Item.of('#forge:dusts/quartz'),
    ]);
  };

  const routers = () => {
    event.replaceInput(
      {output: 'modularrouters:blank_module'},
      'minecraft:paper',
      '#forge:plastic'
    );
    event.replaceInput(
      {output: 'modularrouters:blank_upgrade'},
      'minecraft:paper',
      '#forge:plastic'
    );

    event.remove({output: 'modularrouters:modular_router'});
    event.shaped('1x modularrouters:modular_router', ['RSR', 'SMS', 'RSR'], {
      R: 'thermal:cured_rubber',
      S: '#forge:plates/steel',
      M: 'modularrouters:blank_module',
    });
  };

  const ieSheetmetal = () => {
    [
      'white',
      'orange',
      'magenta',
      'light_blue',
      'yellow',
      'lime',
      'pink',
      'gray',
      'light_gray',
      'cyan',
      'purple',
      'blue',
      'brown',
      'green',
      'red',
      'black',
    ].forEach(color => {
      event.shaped(
        Item.of(`8x immersiveengineering:sheetmetal_colored_${color}`),
        ['SSS', 'SDS', 'SSS'],
        {
          S: '#forge:sheetmetals',
          D: `#forge:dyes/${color}`,
        }
      );
    });
  };

  const itemFilters = () => event.remove({mod: 'itemfilters'});

  const supermartijn = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', ['LDL', 'ESE', 'LDL'], {
      D: 'rftoolsbase:dimensionalshard',
      E: 'minecraft:ender_pearl',
      L: '#forge:ingots/lead',
      S: '#immersiveengineering:scaffoldings/steel',
    });
    event.shapeless('entangled:block', ['entangled:block']);
  };

  const tempad = () => {
    event.remove({output: 'tempad:tempad'});
    event.shaped('tempad:tempad', ['BBB', 'RSE', 'BBB'], {
      B: 'architects_palette:nether_brass_ingot',
      S: 'rftoolsbase:information_screen',
      R: 'minecraft:redstone_lamp',
      E: '#forge:dusts/ender_pearl',
    });
  };

  const torchmaster = () => {
    event.remove({mod: 'torchmaster'});
    CustomRecipeHandler.automatableSmithing(
      Item.of('torchmaster:megatorch'),
      Item.of('minecraft:torch'),
      Item.of('rftoolsbase:infused_diamond')
    );
    CustomRecipeHandler.automatableSmithing(
      Item.of('torchmaster:dreadlamp'),
      Item.of('minecraft:obsidian'),
      Item.of('rftoolsbase:infused_diamond')
    );
  };

  archPalette();
  buildingGadgets();
  compactMachines();
  dave();
  dimStorage();
  engineersDecor();
  expandedstorage();
  fluxNetworks();
  heAddons();
  ieSheetmetal();
  itemFilters();
  mcjty();
  moreMinecarts();
  recycling();
  refinedStorage();
  routers();
  supermartijn();
  tempad();
  torchmaster();
});
