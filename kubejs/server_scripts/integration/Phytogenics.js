onEvent('recipes', event => {
  const cropRecipes = [
    {
      seed: Item.of('farmersdelight:onion'),
      outputs: [Item.of('farmersdelight:onion').withChance(2.25)],
    },
    {
      seed: Item.of('farmersdelight:tomato_seeds'),
      outputs: [
        Item.of('farmersdelight:tomato_seeds').withChance(1.0),
        Item.of('farmersdelight:tomato').withChance(1.25),
      ],
    },
    {
      seed: Item.of('farmersdelight:rice'),
      outputs: [
        Item.of('farmersdelight:rice').withChance(1.0),
        Item.of('farmersdelight:rice_panicle').withChance(1.25),
      ],
    },
    {
      seed: Item.of('farmersdelight:cabbage_seeds'),
      outputs: [
        Item.of('farmersdelight:cabbage_seeds').withChance(1.0),
        Item.of('farmersdelight:cabbage').withChance(1.25),
      ],
    },
    {
      seed: Item.of('immersiveengineering:seed'),
      outputs: [
        Item.of('immersiveengineering:seed').withChance(1.0),
        Item.of('immersiveengineering:hemp_fiber').withChance(1.25),
      ],
    },
    {
      seed: Item.of('supplementaries:flax_seeds'),
      outputs: [
        Item.of('supplementaries:flax_seeds').withChance(1.0),
        Item.of('supplementaries:flax').withChance(1.25),
      ],
    },
  ];

  const treeRecipes = [
    {
      sapling: Item.of('ecologics:azalea_flower'),
      outputs: [
        Item.of('ecologics:azalea_log').withChance(4.0),
        Item.of('ecologics:flowering_azalea_log').withChance(0.5),
        Item.of('ecologics:azalea_flower').withChance(1.1),
      ],
    },
    {
      sapling: Item.of('minecraft:flowering_azalea'),
      outputs: [
        Item.of('ecologics:azalea_log').withChance(4.0),
        Item.of('ecologics:flowering_azalea_log').withChance(0.5),
        Item.of('minecraft:flowering_azalea').withChance(1.1),
      ],
    },
    {
      sapling: Item.of('minecraft:azalea'),
      outputs: [
        Item.of('ecologics:azalea_log').withChance(4.5),
        Item.of('minecraft:azalea').withChance(1.1),
      ],
    },
    {
      sapling: Item.of('ecologics:walnut_sapling'),
      outputs: [
        Item.of('ecologics:walnut_log').withChance(5.5),
        Item.of('ecologics:walnut_sapling').withChance(1.1),
        Item.of('ecologics:walnut').withChance(0.45),
      ],
    },
    {
      sapling: Item.of('ecologics:coconut_seedling'),
      outputs: [
        Item.of('ecologics:coconut_log').withChance(6.5),
        Item.of('ecologics:coconut_seedling').withChance(1.1),
        Item.of('ecologics:coconut_slice').withChance(0.25),
      ],
    },
    {
      sapling: Item.of('architects_palette:twisted_sapling'),
      outputs: [
        Item.of('architects_palette:twisted_log').withChance(11),
        Item.of('architects_palette:twisted_sapling').withChance(1.1),
      ],
    },
  ];

  event.remove({id: 'thermal:machines/insolator/insolator_azalea_bush'});
  event.remove({id: 'thermal:machines/insolator/insolator_flowering_azalea_bush'});

  cropRecipes.forEach(r => event.recipes.thermal.insolator(r.outputs, r.seed).water(10));
  treeRecipes.forEach(r => event.recipes.thermal.insolator(r.outputs, r.sapling).water(20));
});
