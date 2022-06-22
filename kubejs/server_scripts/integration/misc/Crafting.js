onEvent('recipes', event => {
  // Remove sawdust flooring -- not progression but :shrug:
  event.remove({output: global.ie('sawdust')});

  event.replaceInput({}, 'minecraft:rabbit_hide', '#forge:hides');
  event.remove({id: 'minecraft:leather'});
  event.shaped('minecraft:leather', ['XX', 'XX'], {X: 'minecraft:rabbit_hide'});
});
