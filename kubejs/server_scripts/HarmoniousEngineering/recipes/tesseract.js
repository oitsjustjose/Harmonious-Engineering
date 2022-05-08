onEvent('recipes', event => {
  global.genSmithingRecipe(
    event,
    Ingredient.of('thermal:machine_frame'),
    Ingredient.of('#forge:ingots/enderium'),
    Item.of('kubejs:tesseract_frame')
  );

  const tesseract = Item.of('tesseract:tesseract');
  event.remove({output: tesseract});
  event.shaped(tesseract, ['OSO', 'IFL', 'OEO'], {
    O: '#forge:obsidian',
    S: 'kubejs:ender_singularity',
    F: 'kubejs:tesseract_frame',
    I: 'pipez:item_pipe',
    L: 'pipez:fluid_pipe',
    E: 'pipez:energy_pipe',
  });
});
