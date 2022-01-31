onEvent('recipes', event => {
  const betterNetherWoods = [
    {
      log: 'betternether:mushroom_fir_log',
      strippedLog: 'betternether:striped_log_mushroom_fir',
      wood: 'betternether:mushroom_fir_wood',
      strippedWood: 'betternether:striped_wood_mushroom_fir',
      plank: 'betternether:mushroom_fir_planks',
    },
    {
      log: 'betternether:stalagnate_log',
      strippedLog: 'betternether:striped_log_stalagnate',
      wood: 'betternether:stalagnate_bark',
      strippedWood: 'betternether:striped_bark_stalagnate',
      plank: 'betternether:stalagnate_planks',
    },
    {
      log: 'betternether:willow_log',
      strippedLog: 'betternether:striped_log_willow',
      wood: 'betternether:willow_bark',
      strippedWood: 'betternether:striped_bark_willow',
      plank: 'betternether:willow_planks',
    },
    {
      log: 'betternether:nether_sakura_log',
      strippedLog: 'betternether:striped_log_nether_sakura',
      wood: 'betternether:nether_sakura_bark',
      strippedWood: 'betternether:striped_bark_nether_sakura',
      plank: 'betternether:nether_sakura_planks',
    },
    {
      log: 'betternether:anchor_tree_log',
      strippedLog: 'betternether:striped_log_anchor_tree',
      wood: 'betternether:anchor_tree_bark',
      strippedWood: 'betternether:striped_bark_anchor_tree',
      plank: 'betternether:anchor_tree_planks',
    },
    {
      log: 'betternether:rubeus_log',
      strippedLog: 'betternether:striped_log_rubeus',
      wood: 'betternether:rubeus_bark',
      strippedWood: 'betternether:striped_bark_rubeus',
      plank: 'betternether:rubeus_planks',
    },
    {
      log: 'betternether:wart_log',
      strippedLog: 'betternether:striped_log_wart',
      wood: 'betternether:wart_bark',
      strippedWood: 'betternether:striped_bark_wart',
      plank: 'betternether:wart_planks',
    },
  ];

  betterNetherWoods.forEach(woodType => {
    event.remove({output: woodType.plank});
    global
      .genNatProgRecipes(woodType.log, woodType.strippedLog, woodType.plank)
      .forEach(x => event.custom(x));
    global
      .genNatProgRecipes(woodType.wood, woodType.strippedWood, woodType.plank)
      .forEach(x => event.custom(x));
  });
});
