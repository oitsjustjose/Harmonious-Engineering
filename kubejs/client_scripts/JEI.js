// priority: 0

onEvent('jei.hide.items', event => {
  [
    'create:copper_sheet',
    'create:crushed_uranium_ore',
    'create:golden_sheet',
    'create:iron_sheet',
    'enderchests:ender_pouch',
    'industrialforegoing:diamond_gear',
    'industrialforegoing:dryrubber',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:plastic',
    'industrialforegoing:tinydryrubber',
    'kubejs:incomplete_hammer',
    'pipez:gas_pipe',
    'thermal:emerald_gear',
    'thermal:lapis_gear',
    'thermal:quartz_gear',
    global.ie('coal_coke'),
    global.ie('coke'),
    global.ie('deepslate_ore_uranium'),
    global.ie('dust_constantan'),
    global.ie('dust_copper'),
    global.ie('dust_electrum'),
    global.ie('dust_gold'),
    global.ie('dust_iron'),
    global.ie('dust_lead'),
    global.ie('dust_nickel'),
    global.ie('dust_silver'),
    global.ie('dust_uranium'),
    global.ie('dust_wood'),
    global.ie('ingot_constantan'),
    global.ie('ingot_electrum'),
    global.ie('ingot_lead'),
    global.ie('ingot_nickel'),
    global.ie('ingot_silver'),
    global.ie('ingot_steel'),
    global.ie('ingot_uranium'),
    global.ie('nugget_constantan'),
    global.ie('nugget_electrum'),
    global.ie('nugget_lead'),
    global.ie('nugget_nickel'),
    global.ie('nugget_silver'),
    global.ie('nugget_uranium'),
    global.ie('ore_uranium'),
    global.ie('plate_constantan'),
    global.ie('plate_copper'),
    global.ie('plate_electrum'),
    global.ie('plate_gold'),
    global.ie('plate_iron'),
    global.ie('plate_lead'),
    global.ie('plate_nickel'),
    global.ie('plate_silver'),
    global.ie('plate_uranium'),
    global.ie('raw_block_uranium'),
    global.ie('raw_uranium'),
    global.ie('sheetmetal_uranium'),
    global.ie('slab_sheetmetal_uranium'),
    global.ie('slab_storage_uranium'),
    global.ie('slag'),
    global.ie('storage_constantan'),
    global.ie('storage_electrum'),
    global.ie('storage_lead'),
    global.ie('storage_nickel'),
    global.ie('storage_silver'),
    global.ie('storage_steel'),
    global.ie('storage_uranium'),
  ].map(x => event.hide(x));
});