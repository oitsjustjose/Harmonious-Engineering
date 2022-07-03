onEvent('recipes', event => {
  // Remove sawdust flooring -- not progression but :shrug:
  event.remove({output: global.ie('sawdust')});

  event.shapeless('1x minecraft:experience_bottle', [
    '4x create:experience_nugget',
    'minecraft:bottle',
  ]);

  event.replaceInput({}, 'minecraft:rabbit_hide', '#forge:hides');
  event.remove({id: 'minecraft:leather'});
  event.shaped('minecraft:leather', ['XX', 'XX'], {X: 'minecraft:rabbit_hide'});
});
