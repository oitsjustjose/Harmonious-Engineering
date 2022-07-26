// priority: 0

onEvent('item.registry', event => {
  event.create('ender_singularity').texture('kubejs:item/ender_singularity');
  event.create('fluxed_singularity').texture('kubejs:item/fluxed_singularity');
  event.create('silicon_die').texture('kubejs:item/silicon_die');
  event.create('andesite_dust').texture('kubejs:item/andesite_dust');
  event.create('andesite_zinc_blend').texture('kubejs:item/andesite_zinc_blend');
  event.create('andesite_iron_blend').texture('kubejs:item/andesite_iron_blend');
  event.create('zinc_dust_pile').texture('kubejs:item/zinc_dust_pile');
  event.create('iron_dust_pile').texture('kubejs:item/iron_dust_pile');
  event.create('ender_core').texture('kubejs:item/ender_core');

  event
    .create('incomplete_redstone_servo')
    .texture('kubejs:item/incomplete_redstone_servo')
    .type('create:sequenced_assembly');
  event
    .create('incomplete_rf_coil')
    .texture('kubejs:item/incomplete_rf_coil')
    .type('create:sequenced_assembly');

  ['logic', 'engineering', 'calculation'].forEach(x =>
    event
      .create(`incomplete_${x}_processor`)
      .texture(`kubejs:item/incomplete_${x}_processor`)
      .type('create:sequenced_assembly')
  );
});

onEvent('item.modification', event => {
  event.modify('corail_woodcutter:acacia_woodcutter', item => {
    item.maxStackSize = 1;
  });
});
