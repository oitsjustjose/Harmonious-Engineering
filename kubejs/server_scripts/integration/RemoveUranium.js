onEvent('recipes', event => {
  [
    'create:crushed_uranium_ore',
    global.ie('sheetmetal_uranium'),
    global.ie('slab_sheetmetal_uranium'),
    global.ie('ore_uranium'),
    global.ie('deepslate_ore_uranium'),
    global.ie('raw_block_uranium'),
    global.ie('slab_storage_uranium'),
    global.ie('raw_uranium'),
    global.ie('plate_uranium'),
    global.ie('dust_uranium'),
    global.ie('ingot_uranium'),
    global.ie('nugget_uranium'),
    global.ie('storage_uranium'),
  ].forEach(x => {
    event.remove({input: x});
    event.remove({output: x});
  });
});

onEvent('item.tags', event => {
  event.remove('forge:dusts', global.ie('dust_uranium'));
  event.remove('forge:dusts/uranium', global.ie('dust_uranium'));
  event.remove('forge:ingots', global.ie('ingot_uranium'));
  event.remove('forge:ingots/uranium', global.ie('ingot_uranium'));
  event.remove('forge:nuggets', global.ie('nugget_uranium'));
  event.remove('forge:nuggets/uranium', global.ie('nugget_uranium'));
  event.remove('forge:storage_blocks', global.ie('storage_uranium'));
  event.remove('forge:storage_blocks/uranium', global.ie('storage_uranium'));
});
