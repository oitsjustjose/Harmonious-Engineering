onEvent('recipes', event => {
  const sawdust = Item.of('thermal:sawdust').withChance(1.25);

  const logs = [
    {
      unstripped: ['architects_palette:twisted_log', 'architects_palette:twisted_wood'],
      stripped: 'architects_palette:stripped_twisted_log',
      logTag: '#architects_palette:twisted_logs',
      output: '6x architects_palette:twisted_planks',
    },
    {
      unstripped: ['ecologics:azalea_log', 'ecologics:azalea_wood'],
      stripped: 'ecologics:stripped_azalea_log',
      logTag: '#ecologics:azalea_logs',
      output: '6x ecologics:azalea_planks',
    },
    {
      unstripped: ['ecologics:coconut_log', 'ecologics:coconut_wood'],
      stripped: 'ecologics:stripped_coconut_log',
      logTag: '#ecologics:coconut_logs',
      output: '6x ecologics:coconut_planks',
    },
    {
      unstripped: null,
      stripped: null,
      logTag: '#ecologics:flowering_azalea_logs',
      output: '6x ecologics:flowering_azalea_planks',
    },
    {
      unstripped: ['ecologics:walnut_log', 'ecologics:walnut_wood'],
      stripped: 'ecologics:stripped_walnut_log',
      logTag: '#ecologics:walnut_logs',
      output: '6x ecologics:walnut_planks',
    },
  ];
  logs.forEach(x => {
    event.recipes.thermal.sawmill([x.output, sawdust], x.logTag);
    if (!!x.stripped && !!x.unstripped) {
      event.recipes.immersiveengineering.sawmill(
        x.output,
        x.unstripped,
        [{stripping: true, output: 'thermal:sawdust'}],
        x.stripped
      );
      event.recipes.immersiveengineering.sawmill(x.output, x.stripped, [
        {stripping: false, output: 'thermal:sawdust'},
      ]);
    }
  });
});
