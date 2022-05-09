const convenienceCrafting = event => {
  // Clay Block Uncrafting
  event.shapeless('4x minecraft:clay_ball', ['minecraft:clay']);
  // Rainbow Rune
  event.shaped('1x quark:rainbow_rune', ['CCC', 'CBC', 'CCC'], {
    C: 'betterendforge:crystal_shards',
    B: 'quark:blank_rune',
  });
  // Wool to 3x String
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [{item: 'minecraft:shears'}, {tag: 'minecraft:wool'}],
    result: {item: 'minecraft:string', count: 3},
  });
  // Supplementaries' Cog Blocks
  event.shaped('32x supplementaries:cog_block', ['ccc', 'cgc', 'ccc'], {
    g: '#forge:gears/copper',
    c: '#forge:ingots/copper',
  });
  // Skystone Crafting, since meteors are disabled
  event.shapeless('4x appliedenergistics2:sky_stone_block', ['3x #forge:stone', '#forge:silicon']);
};

const chestRecipes = event => {
  event.remove({id: 'quark:building/crafting/chests/chest_revert'});
  event.shapeless('1x minecraft:chest', ['#forge:chests/wooden']);
  event.shapeless('1x minecraft:trapped_chest', ['#forge:chests/trapped']);
  // chipped planks for quark chest crafting
  ['acacia', 'birch', 'crimson', 'dark_oak', 'jungle', 'oak', 'spruce', 'warped'].forEach(plank => {
    event.shaped(`1x quark:${plank}_chest`, ['ppp', 'p p', 'ppp'], {
      p: `#chipped:${plank}_planks`,
    });
  });
  // Craft chests out of chestless planks
  event.shaped('4x minecraft:chest', ['lll', 'l l', 'lll'], {l: '#harmeng:chestless_logs'});
  event.shaped('minecraft:chest', ['ppp', 'p p', 'ppp'], {p: '#harmeng:chestless_planks'});
  event.shaped('storage_overhaul:oak_barrel', ['psp', 'p p', 'psp'], {
    p: '#harmeng:chestless_planks',
    s: '#minecraft:wooden_slabs',
  });
};

onEvent('recipes', event => {
  convenienceCrafting(event);
  chestRecipes(event);
});
