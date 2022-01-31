onEvent('recipes', event => {
  const modid = 'draconicevolution';

  event.replaceInput({mod: modid}, 'minecraft:ender_eye', 'kubejs:ender_singularity');

  // Draconium dust/ingot removal because there is no GOD
  event.remove({output: `${modid}:draconium_dust`});
  event.remove({id: `${modid}:components/draconium_ingot`});
  event.custom({
    type: 'mekanism:nucleosynthesizing',
    itemInput: {ingredient: {item: 'industrialforegoing:pink_slime_ingot'}},
    gasInput: {amount: 20, gas: 'mekanism:antimatter'},
    output: {item: `${modid}:draconium_ingot`},
    duration: 10000,
  });

  // Other recripes
  event.remove({output: `${modid}:infused_obsidian`});
  global.genAlloyingRecipe(
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
  global.genCombinedRecipe(
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
