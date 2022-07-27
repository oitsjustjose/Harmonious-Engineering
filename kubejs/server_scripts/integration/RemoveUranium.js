onEvent('recipes', event => {
  [
    'create:crushed_uranium_ore',
    'immersiveengineering:sheetmetal_uranium',
    'immersiveengineering:slab_sheetmetal_uranium',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:deepslate_ore_uranium',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:slab_storage_uranium',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:plate_uranium',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:storage_uranium',
  ].forEach(x => {
    event.remove({input: x});
    event.remove({output: x});
  });
});

onEvent('item.tags', event => {
  event.remove('forge:dusts', 'immersiveengineering:dust_uranium');
  event.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium');
  event.remove('forge:ingots', 'immersiveengineering:ingot_uranium');
  event.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium');
  event.remove('forge:nuggets', 'immersiveengineering:nugget_uranium');
  event.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium');
  event.remove('forge:storage_blocks', 'immersiveengineering:storage_uranium');
  event.remove('forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium');
});
