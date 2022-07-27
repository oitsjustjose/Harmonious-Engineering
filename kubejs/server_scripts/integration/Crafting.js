onEvent('recipes', event => {
  // Remove sawdust flooring -- not progression but :shrug:
  event.remove({output: global.ie('sawdust')});
  event.remove({id: 'infernalexp:crafting/crafting_shaped/paper_from_mushrooms'});

  event.shapeless('1x minecraft:experience_bottle', [
    '4x create:experience_nugget',
    'minecraft:glass_bottle',
  ]);

  event.replaceInput({}, 'minecraft:rabbit_hide', '#forge:hides');
  event.remove({id: 'minecraft:leather'});
  event.shaped('minecraft:leather', ['XX', 'XX'], {X: 'minecraft:rabbit_hide'});

  event.smelting('1x minecraft:slime_ball', 'naturalist:glow_goop');
  event.recipes.thermal.centrifuge(
    ['minecraft:slime_ball', 'minecraft:glowstone_dust'],
    'naturalist:glow_goop'
  );

  event.remove({output: 'decorative_blocks:rocky_dirt'});
  event.shapeless('2x decorative_blocks:rocky_dirt', ['verdure:pebbles', 'minecraft:dirt']);
  event.shapeless('4x decorative_blocks:rocky_dirt', [
    'verdure:rock',
    'minecraft:dirt',
    'minecraft:dirt',
  ]);
});
