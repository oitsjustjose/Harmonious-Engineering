onEvent('recipes', event => {
  event.remove({output: 'wormhole:portal_frame'});
  event.remove({output: 'wormhole:portal_stabilizer'});
  event.remove({output: 'wormhole:basic_energy_cell'});
  event.remove({output: 'wormhole:advanced_energy_cell'});
  event.remove({output: 'wormhole:basic_target_cell'});
  event.remove({output: 'wormhole:advanced_target_cell'});
  event.remove({output: 'wormhole:coal_generator'});

  global.genCombinedRecipe(
    event,
    Ingredient.of('#forge:obsidian'),
    Ingredient.of('#forge:ingots/steel'),
    Item.of('2x wormhole:portal_frame')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('wormhole:portal_frame'),
    Ingredient.of('kubejs:ender_singularity'),
    Item.of('wormhole:portal_stabilizer')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('wormhole:portal_frame'),
    Ingredient.of('thermal:energy_cell'),
    Item.of('wormhole:basic_energy_cell')
  );
  global.genCombinedRecipe(
    event,
    Ingredient.of('wormhole:basic_energy_cell'),
    Ingredient.of('thermal:energy_cell'),
    Item.of('wormhole:advanced_energy_cell')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('wormhole:portal_frame'),
    Ingredient.of('minecraft:compass'),
    Item.of('wormhole:basic_target_cell')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('wormhole:basic_target_cell'),
    Ingredient.of('appliedenergistics2:2_cubed_spatial_cell_component'),
    Item.of('wormhole:advanced_target_cell')
  );
});
