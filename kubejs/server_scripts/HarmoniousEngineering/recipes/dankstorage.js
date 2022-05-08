onEvent('recipes', event => {
  // Remove every upgrade tier
  event.remove({mod: 'dankstorage'});

  // event.remove({output: "dankstorage:dock"})
  global.genSmithingRecipe(
    event,
    Ingredient.of('thermal:machine_frame'),
    Ingredient.of('create:portable_storage_interface'),
    Item.of('dankstorage:dock')
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of('create:andesite_casing'),
    Ingredient.of('#harmeng:drawer_like'),
    Item.of('dankstorage:dank_3')
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of('industrialforegoing:pity_black_hole_unit'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('dankstorage:dank_4')
  );

  global.genSmithingRecipe(
    event,
    Ingredient.of('industrialforegoing:supreme_black_hole_unit'),
    Ingredient.of('minecraft:nether_star'),
    Item.of('dankstorage:dank_7')
  );
});
