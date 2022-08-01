onEvent('recipes', event => {
  global.duplicateResources.forEach(x => {
    event.remove({output: x.item});
  });

  event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
  event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastic');
  event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic');

  event.replaceInput({}, 'immersiveengineering:dust_saltpeter', 'thermal:niter_dust');
  event.replaceOutput({}, 'immersiveengineering:dust_saltpeter', 'thermal:niter_dust');

  event.remove({input: '#forge:nuggets/copper', output: '#forge:ingots/copper'});
  event.shaped('minecraft:copper_ingot', ['XXX', 'XXX', 'XXX'], {X: '#forge:nuggets/copper'});

  event.remove({output: 'thermal:carrot_block'});
  event.remove({output: 'thermal:potato_block'});
  event.remove({output: 'thermal:beetroot_block'});
});
