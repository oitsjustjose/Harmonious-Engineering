onEvent('recipes', event => {
  event.remove({output: 'moreminecarts:silica_steel_mix'});
  event.remove({output: 'moreminecarts:silica_steel'});
  global.genAlloyingRecipe(
    event,
    {tag: 'forge:ingots/steel'},
    {tag: 'forge:silicon'},
    'moreminecarts:silica_steel',
    2
  );
});
