onEvent('recipes', event => {
  ['thermal:pulverizer'].forEach(machine => {
    event.replaceOutput(
      {type: machine},
      'create:crushed_zinc_ore',
      'emendatusenigmatica:zinc_dust'
    );
  });
});
