/**
 *
 * @param {Internal.RecipeEventJS} event
 */
const archPalette = event => {
  const CustomRecipeHandler = global.recipes(event);
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

const buildingGadgets = event => {
  event.remove({mod: 'buildinggadgets'});

  event.shaped('buildinggadgets:gadget_building', ['BHB', 'BWB', 'BEB'], {
    B: '#forge:ingots/brass',
    E: global.ie('toolupgrade_revolver_electro'),
    H: 'create:brass_hand',
    W: global.ie('wirecoil_electrum'),
  });

  event.shaped('buildinggadgets:gadget_exchanging', ['BGB', 'BWB', 'BEB'], {
    B: '#forge:ingots/brass',
    E: global.ie('toolupgrade_revolver_electro'),
    G: 'thermal:ender_grenade',
    W: global.ie('wirecoil_electrum'),
  });

  event.shaped('buildinggadgets:gadget_copy_paste', ['BCB', 'BWB', 'BEB'], {
    B: '#forge:ingots/brass',
    C: 'create:schematicannon',
    E: global.ie('toolupgrade_revolver_electro'),
    W: global.ie('wirecoil_electrum'),
  });

  event.shaped('buildinggadgets:gadget_destruction', ['BDB', 'BWB', 'BEB'], {
    B: '#forge:ingots/brass',
    D: 'pneumaticcraft:drill_bit_netherite',
    E: global.ie('toolupgrade_revolver_electro'),
    W: global.ie('wirecoil_electrum'),
  });

  event.smithing('buildinggadgets:template_manager', 'create:schematic_table', '#forge:plastic');
};

const compactMachines = event => {
  const CustomRecipeHandler = global.recipes(event);
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

  event.smithing('compactmachines:wall', global.ie('sheetmetal_lead'), 'minecraft:ender_pearl');

  event.smithing(
    Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
    'entangled:block',
    'pipez:item_pipe'
  );

  event.smithing(
    Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}'),
    'entangled:block',
    'pipez:fluid_pipe'
  );

  event.smithing(
    Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}'),
    'entangled:block',
    'pipez:energy_pipe'
  );

  event.smithing(
    'compactmachines:personal_shrinking_device',
    'tempad:tempad',
    'compactmachines:wall'
  );
};

const dave = event => {
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
    'davebuildingmod:steel_ingot',
    'davebuildingmod:track_end',
    'davebuildingmod:tungsten_carbite',
    'davebuildingmod:white_chair',
    'davebuildingmod:yellow_chair',
  ].forEach(x => event.remove({output: x}));

  event.replaceInput({}, 'davebuildingmod:steel_ingot', '#forge:ingots/steel');
  event.smithing('2x davebuildingmod:track_end', 'create:track', '#forge:rods/all_metal');
};

const dimStorage = event => {
  event.remove({mod: 'dimstorage'});
  event.smithing('dimstorage:dimensional_chest', 'thermal:machine_frame', '#forge:ingots/enderium');
  event.smithing(
    'dimstorage:dimensional_tank',
    'thermal:fluid_cell_frame',
    '#forge:ingots/enderium'
  );
  event.smithing('dimstorage:dimensional_tablet', 'tempad:tempad', '#forge:ingots/enderium');
};

const expandedstorage = event => {
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

const fluxNetworks = event => {
  event.replaceInput(
    {output: 'fluxnetworks:flux_core'},
    'minecraft:obsidian',
    'architects_palette:unobtanium'
  );
};

const mcjty = event => {
  const CustomRecipeHandler = global.recipes(event);
  event.replaceInput({mod: 'xnet'}, 'minecraft:gold_nugget', 'pipez:universal_pipe');
  event.replaceInput({output: '#xnet:connectors'}, 'minecraft:gold_ingot', 'pipez:universal_pipe');
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

const moreMinecarts = event => {
  event.remove({output: 'moreminecarts:silica_steel'});
  event.remove({output: 'moreminecarts:silica_steel_mix'});
  event.recipes.immersiveengineeringArcFurnace(
    ['4x moreminecarts:silica_steel'],
    '3x #forge:ingots/steel',
    ['3x minecraft:quartz']
  );
};

const pipez = event => {
  event.remove({output: 'pipez:item_pipe'});
  event.remove({output: 'pipez:fluid_pipe'});
  event.remove({output: 'pipez:energy_pipe'});

  event.shaped('24x pipez:item_pipe', ['PPP', 'GUG', 'PPP'], {
    U: 'prettypipes:low_extraction_module',
    P: 'prettypipes:pipe',
    G: '#forge:glass/yellow',
  });

  event.shaped('24x pipez:fluid_pipe', ['PPP', 'GUG', 'PPP'], {
    U: 'create:mechanical_pump',
    P: 'create:fluid_pipe',
    G: '#forge:glass/light_blue',
  });

  event.shaped('24x pipez:energy_pipe', ['PPP', 'GUG', 'PPP'], {
    U: global.ie('connector_lv'),
    P: global.ie('wirecoil_copper'),
    G: '#forge:glass/red',
  });
};

const refinedStorage = event => {
  event.remove({output: '#forge:silicon'});
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

const routers = event => {
  event.replaceInput({output: 'modularrouters:blank_module'}, 'minecraft:paper', '#forge:plastic');
  event.replaceInput({output: 'modularrouters:blank_upgrade'}, 'minecraft:paper', '#forge:plastic');
  event.replaceInput(
    {output: 'modularrouters:modular_router'},
    'minecraft:iron_ingot',
    'architects_palette:unobtanium'
  );
};

const supermartijn = event => {
  event.remove({output: 'entangled:block'});
  event.shaped('entangled:block', ['LDL', 'ESE', 'LDL'], {
    D: 'rftoolsbase:dimensionalshard',
    E: 'minecraft:ender_pearl',
    L: '#forge:ingots/lead',
    S: '#immersiveengineering:scaffoldings/steel',
  });
};

const tempad = event => {
  event.remove({output: 'tempad:tempad'});
  event.shaped('tempad:tempad', ['BBB', 'RSE', 'BBB'], {
    B: 'architects_palette:nether_brass_ingot',
    S: 'rftoolsbase:information_screen',
    R: 'minecraft:redstone_lamp',
    E: '#forge:dusts/ender_pearl',
  });
};

const torchmaster = event => {
  event.remove({mod: 'torchmaster'});
  event.smithing('torchmaster:megatorch', 'minecraft:torch', 'rftoolsbase:infused_diamond');
  event.smithing('torchmaster:dreadlamp', 'minecraft:obsidian', 'rftoolsbase:infused_diamond');
};

onEvent('recipes', event => {
  archPalette(event);
  buildingGadgets(event);
  compactMachines(event);
  dave(event);
  dimStorage(event);
  expandedstorage(event);
  fluxNetworks(event);
  mcjty(event);
  moreMinecarts(event);
  pipez(event);
  refinedStorage(event);
  routers(event);
  supermartijn(event);
  tempad(event);
  torchmaster(event);
});
