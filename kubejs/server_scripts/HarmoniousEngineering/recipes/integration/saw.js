onEvent('recipes', event => {
  const modid = 'cb_microblock';
  event.remove({mod: modid});
  [
    {mat: '#forge:ingots/iron', type: 'iron'},
    {mat: 'minecraft:diamond', type: 'diamond'},
    {mat: 'minecraft:flint', type: 'stone'},
  ].forEach(x => {
    event.shaped(`${modid}:${x.type}_saw`, ['  S', ' SM', 'GM '], {
      M: x.mat,
      S: 'minecraft:stick',
      G: 'immersiveengineering:wooden_grip',
    });
  });

  event.remove({output: 'immersiveengineering:wooden_grip'});
  event.shaped('immersiveengineering:wooden_grip', ['GS', 'SG'], {
    S: 'minecraft:stick',
    G: '#harmeng:bindings',
  });
});
