onEvent('recipes', event => {
  const modid = 'draconicevolution';

  event.replaceInput({mod: modid}, 'minecraft:ender_eye', 'kubejs:ender_singularity');

  // Draconium dust/ingot removal because there is no GOD
  event.remove({output: `${modid}:draconium_dust`});
  event.remove({id: `${modid}:components/draconium_ingot`});

  // Turn Ether Gas + Dragon Breath into Draconic Essence
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {item: 'minecraft:dragon_breath'},
      {fluid: 'industrialforegoing:ether_gas', amount: 1000},
    ],
    results: [{fluid: 'kubejs:draconic_essence', amount: 1000}],
    heatRequirement: 'superheated',
  });

  event.recipes.thermal.brewer(Fluid.of('kubejs:draconic_essence', 1000), [
    Item.of('minecraft:dragon_breath'),
    Fluid.of('industrialforegoing:ether_gas', 1000),
  ]);

  event.recipes.custommachinery
    .custom_machine('harmeng:fluid_injector', 100)
    .requireItem(Item.of('industrialforegoing:pink_slime_ingot'))
    .requireFluid(Fluid.of('kubejs:draconic_essence', 2000))
    .requireEnergyPerTick(5000)
    .produceItem(Item.of(`${modid}:draconium_ingot`));

  // Once you have some Draconic, make it *slightly* easier
  event.custom({
    type: `${modid}:fusion_crafting`,
    result: {item: `${modid}:draconium_ingot`, count: 12},
    catalyst: {
      items: [{item: 'industrialforegoing:pink_slime_ingot'}],
      count: 12,
      type: 'draconicevolution:ingredient_stack',
    },
    total_energy: 5000000,
    tier: 'DRACONIUM',
    ingredients: [
      {item: 'industrialforegoing:ether_gas_bucket'},
      {item: 'minecraft:dragon_breath'},
      {item: 'quark:dragon_scale'},
      {item: 'minecraft:dragon_breath'},
      {item: 'industrialforegoing:ether_gas_bucket'},
      {item: 'minecraft:dragon_breath'},
    ],
  });

  // Other recripes
  event.remove({output: `${modid}:infused_obsidian`});
  global.genUniversalAlloyingRecipe(
    event,
    {item: `${modid}:draconium_ingot`},
    {tag: 'forge:obsidian'},
    `${modid}:infused_obsidian`,
    1
  );

  event.remove({output: `${modid}:potentiometer`});
  event.shaped(`1x ${modid}:potentiometer`, ['CPC', 'RSR', 'CRC'], {
    C: 'projectred-core:plate',
    P: 'projectred-core:pointer',
    S: 'projectred-core:silicon_chip',
    R: 'minecraft:redstone',
  });

  event.remove({output: `${modid}:dislocator`});
  event.shaped(`1x ${modid}:dislocator`, ['DPD', 'PSP', 'DPD'], {
    D: `${modid}:draconium_ingot`,
    P: 'industrialforegoing:pink_slime_ingot',
    S: 'kubejs:ender_singularity',
  });

  event.remove({output: `${modid}:module_core`});
  global.genSmithingRecipe(
    event,
    Ingredient.of('modularrouters:augment_core'),
    Ingredient.of(`${modid}:draconium_ingot`),
    Item.of(`${modid}:module_core`)
  );

  event.remove({output: `${modid}:draconium_core`});
  global.genLargeRecipe(
    event,
    [
      'G   D   G',
      ' G B B G ',
      '  B   B  ',
      ' B C C B ',
      'D   R   D',
      ' B C C B ',
      '  B   B  ',
      ' G B B G ',
      'G   D   G',
    ],
    {
      R: {item: `${modid}:draconium_ingot`},
      D: {item: 'minecraft:diamond'},
      C: {tag: 'forge:ingots/cobalt'},
      G: {tag: 'forge:ingots/gold'},
      B: {item: 'minecraft:dragon_breath'},
    },
    {
      item: `${modid}:draconium_core`,
    }
  );

  event.remove({output: `${modid}:wyvern_core`});
  global.genLargeRecipe(
    event,
    [
      'G   A   G',
      ' G D D G ',
      '  D   D  ',
      ' D C C D ',
      'A   S   A',
      ' D C C D ',
      '  D   D  ',
      ' G D D G ',
      'G   A   G',
    ],
    {
      S: {item: 'minecraft:nether_star'},
      D: {item: 'minecraft:diamond'},
      C: {item: `${modid}:draconium_core`},
      G: {item: `${modid}:draconium_ingot`},
      A: {item: 'betterendforge:aeternium_ingot'},
    },
    {
      item: `${modid}:wyvern_core`,
    }
  );
});
