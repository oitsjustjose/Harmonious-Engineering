onEvent('recipes', event => {
  const mod = x => `davebuildingmod:${x}`;
  const soundCards = [
    // The below "cart" is not a typo
    'sound_cart_nuke_alarm',
    'sound_card_red_alert',
    'sound_card_intruder_alert',
    'sound_card_torpedo',
    'sound_card_phaser',
    'sound_card_computer_bleep',
    'sound_card_explosion',
  ];

  const particleCards = [
    'particle_card_tnt',
    'particle_card_fire',
    'particle_card_campfire',
    'particle_card_smoke',
    'particle_card_steam',
    'particle_card_water',
  ];

  event.replaceInput(
    {mod: 'davebuildingmod'},
    'davebuildingmod:steel_ingot',
    '#forge:ingots/steel'
  );

  event.replaceInput(
    {mod: 'davebuildingmod'},
    'davebuildingmod:basic_circuit',
    '#forge:circuits/basic'
  );

  event.replaceInput(
    {mod: 'davebuildingmod'},
    'davebuildingmod:advanced_circuit',
    '#forge:circuits/advanced'
  );

  soundCards.forEach(x => {
    event.remove({output: mod(x)});
    event.stonecutting(mod(x), '#forge:circuits/basic');
  });

  particleCards.forEach(x => {
    event.remove({output: mod(x)});
    event.stonecutting(mod(x), '#forge:circuits/advanced');
  });

  event.remove({output: 'davebuildingmod:basic_circuit'});
  event.remove({output: 'davebuildingmod:advanced_circuit'});
  event.remove({output: 'davebuildingmod:steel_ingot'});
  event.remove({output: 'davebuildingmod:not_so_copper'});
  event.remove({output: 'davebuildingmod:soft_air'});
  event.remove({output: 'davebuildingmod:hard_air'});
  event.remove({output: 'davebuildingmod:reinforced_glass'});
  event.remove({output: 'davebuildingmod:amethyst_glass'});
  event.remove({id: 'davebuildingmod:rec_2_copper_coil'});
  event.remove({id: 'davebuildingmod:rec_steel_ingot'});
});
