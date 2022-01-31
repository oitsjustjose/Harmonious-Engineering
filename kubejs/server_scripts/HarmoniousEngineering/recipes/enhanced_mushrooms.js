onEvent('recipes', event => {
  event.remove({
    id: 'enhanced_mushrooms:crafting/red_mushroom/red_mushroom_planks',
  });
  event.remove({
    id: 'enhanced_mushrooms:crafting/brown_mushroom/brown_mushroom_planks',
  });
  event.remove({
    id: 'enhanced_mushrooms:crafting/glowshroom/glowshroom_planks',
  });

  // Red Mushroom
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:red_mushroom_stem',
      'enhanced_mushrooms:stripped_red_mushroom_stem',
      'enhanced_mushrooms:red_mushroom_planks'
    )
    .forEach(x => event.custom(x));
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:red_mushroom_hyphae',
      'enhanced_mushrooms:stripped_red_mushroom_hyphae',
      'enhanced_mushrooms:red_mushroom_planks'
    )
    .forEach(x => event.custom(x));
  // Brown Mushroom
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:brown_mushroom_stem',
      'enhanced_mushrooms:stripped_brown_mushroom_stem',
      'enhanced_mushrooms:brown_mushroom_planks'
    )
    .forEach(x => event.custom(x));
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:brown_mushroom_hyphae',
      'enhanced_mushrooms:stripped_brown_mushroom_hyphae',
      'enhanced_mushrooms:brown_mushroom_planks'
    )
    .forEach(x => event.custom(x));
  // Glowshroom
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:glowshroom_stem',
      'enhanced_mushrooms:stripped_glowshroom_stem',
      'enhanced_mushrooms:glowshroom_planks'
    )
    .forEach(x => event.custom(x));
  global
    .genNatProgRecipes(
      'enhanced_mushrooms:glowshroom_hyphae',
      'enhanced_mushrooms:stripped_glowshroom_hyphae',
      'enhanced_mushrooms:glowshroom_planks'
    )
    .forEach(x => event.custom(x));
});
