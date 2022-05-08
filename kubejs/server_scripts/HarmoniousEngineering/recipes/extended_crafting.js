onEvent('recipes', event => {
  const modid = 'extendedcrafting';
  event.remove({mod: modid});

  global.genLargeRecipe(
    event,
    ['SCCCS', 'SSSSS', ' SHS ', ' SHS ', ' EEE '],
    {
      C: {item: 'create:mechanical_crafter'},
      S: {tag: 'forge:ingots/steel'},
      H: {item: 'mekanism:hdpe_sheet'},
      E: {item: 'minecraft:emerald_block'},
    },
    {item: `${modid}:ultimate_auto_table`}
  );

  event.shapeless(`1x ${modid}:handheld_table`, ['#forge:workbenches']);
});
