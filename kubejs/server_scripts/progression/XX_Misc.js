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

const fluxNetworks = event => {
  event.replaceInput(
    {output: 'fluxnetworks:flux_core'},
    'minecraft:obsidian',
    'architects_palette:unobtanium'
  );
};

const xnet = event => {
  event.replaceInput({mod: 'xnet'}, 'minecraft:gold_nugget', 'pipez:universal_pipe');
  event.replaceInput({output: '#xnet:connectors'}, 'minecraft:gold_ingot', 'pipez:universal_pipe');
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

const refinedStorage = event => {
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

const enderChests = event => {
  event.remove({mod: 'enderchests'});
  event.shaped('enderchests:ender_chest', ['BWB', 'OCO', 'BEB'], {
    B: 'minecraft:blaze_rod',
    O: 'minecraft:obsidian',
    E: '#forge:dusts/ender_pearl',
    W: '#minecraft:wool',
    C: 'expandedstorage:diamond_chest',
  });

  event.shaped('enderchests:ender_bag', ['BWB', 'OLO', 'BEB'], {
    B: 'minecraft:blaze_powder',
    O: 'create:powdered_obsidian',
    E: '#forge:dusts/ender_pearl',
    W: '#minecraft:wool',
    L: '#forge:hides',
  });

  event.remove({mod: 'endertanks'});
  event.shaped('endertanks:ender_tank', ['BWB', 'OTO', 'BEB'], {
    B: 'minecraft:blaze_rod',
    O: 'minecraft:obsidian',
    E: '#forge:dusts/ender_pearl',
    W: '#minecraft:wool',
    T: 'moreminecarts:transport_tank',
  });

  event.shaped('endertanks:ender_bucket', ['BWB', 'OUO', 'BEB'], {
    B: 'minecraft:blaze_powder',
    O: 'create:powdered_obsidian',
    E: '#forge:dusts/ender_pearl',
    W: '#minecraft:wool',
    U: 'minecraft:bucket',
  });
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

const supermartijn = event => {
  event.remove({output: 'entangled:block'});
  event.remove({output: 'tesseract:tesseract'});

  event.shaped('entangled:block', ['LDL', 'ESE', 'LDL'], {
    D: 'rftoolsbase:dimensionalshard',
    E: 'minecraft:ender_pearl',
    L: '#forge:ingots/lead',
    S: '#immersiveengineering:scaffoldings/steel',
  });

  event.shaped('tesseract:tesseract', ['RUR', 'UEU', 'RUR'], {
    E: 'entangled:block',
    R: '#forge:ingots/enderium',
    U: 'pipez:universal_pipe',
  });
};

onEvent('recipes', event => {
  compactMachines(event);
  enderChests(event);
  fluxNetworks(event);
  pipez(event);
  refinedStorage(event);
  routers(event);
  supermartijn(event);
  tempad(event);
  xnet(event);
});