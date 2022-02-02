onEvent('recipes', event => {
  event.remove({output: 'torchmaster:feral_flare_lantern'});
  event.shaped('1x torchmaster:feral_flare_lantern', ['PPP', 'GFG', 'PPP'], {
    P: '#forge:plates/lumium',
    G: '#forge:glass',
    F: 'immersiveengineering:floodlight',
  });

  event.remove({output: 'torchmaster:megatorch'});
  event.shaped('1x torchmaster:megatorch', ['FFF', 'HLH', 'HLH'], {
    F: 'torchmaster:feral_flare_lantern',
    H: '#harmeng:meka/mid_tier_mat',
    L: '#minecraft:logs',
  });
});
