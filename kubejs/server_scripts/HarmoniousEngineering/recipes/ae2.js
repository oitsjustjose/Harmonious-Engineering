const sequencedAssembly = (material, output) => {
  const press = `${output}_press`;
  const incomplete = `kubejs:incomplete_${output.replace('appliedenergistics2:', '')}`;
  return {
    type: 'create:sequenced_assembly',
    ingredient: {item: 'kubejs:silicon_die'},
    transitionalItem: {item: incomplete},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'kubejs:silicon_die'}, {item: material}],
        results: [{item: incomplete}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: incomplete}, {item: press}],
        results: [{item: incomplete}],
        keepHeldItem: true,
      },
    ],
    results: [{item: output, chance: 1.0}],
    loops: 1,
  };
};

onEvent('recipes', event => {
  event.remove({output: 'appliedenergistics2:grindstone'});
  event.remove({output: 'appliedenergistics2:controller'});
  event.remove({output: 'appliedenergistics2:inscriber'});
  event.remove({output: 'appliedenergistics2:wireless_receiver'});
  event.remove({output: 'appliedenergistics2:wireless_booster'});
  event.remove({output: 'ae2wtlib:infinity_booster_card'});
  event.remove({output: 'aeinfinitybooster:infinity_card'});
  event.remove({output: 'aeinfinitybooster:dimension_card'});
  event.remove({output: 'appliedenergistics2:energy_acceptor'});

  event.shaped('1x aeinfinitybooster:infinity_card', ['SWS', 'WNW', 'III'], {
    W: 'appliedenergistics2:wireless_booster',
    I: '#forge:ingots/netherite',
    N: 'minecraft:nether_star',
    S: 'kubejs:fluxed_singularity',
  });

  event.shaped('1x aeinfinitybooster:dimension_card', ['WNW', 'NSN', 'WNW'], {
    W: 'aeinfinitybooster:infinity_card',
    N: 'minecraft:nether_star',
    S: 'kubejs:fluxed_singularity',
  });

  global.genCombinedRecipe(
    event,
    Ingredient.of('storagenetwork:master'),
    Ingredient.of('#forge:gems/fluix'),
    Item.of('appliedenergistics2:energy_acceptor')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('appliedenergistics2:energy_acceptor'),
    Ingredient.of('appliedenergistics2:engineering_processor'),
    Item.of('appliedenergistics2:controller')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('create:mechanical_press'),
    Ingredient.of('appliedenergistics2:purified_fluix_crystal'),
    Item.of('appliedenergistics2:inscriber')
  );

  event.shaped('1x appliedenergistics2:wireless_receiver', [' S ', 'IFI', ' I '], {
    S: 'kubejs:fluxed_singularity',
    I: '#forge:ingots/iron',
    F: 'appliedenergistics2:quartz_fiber',
  });
  event.shaped('1x appliedenergistics2:wireless_booster', ['FSE', 'III'], {
    S: 'kubejs:fluxed_singularity',
    I: '#forge:ingots/iron',
    F: '#forge:dusts/fluix',
    E: '#forge:dusts/ender',
  });

  // AE2 crushing in IE Crusher
  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {
      item: 'appliedenergistics2:certus_quartz_dust',
    },
    input: {
      tag: 'forge:gems/certus_quartz',
    },
    energy: 1600,
  });

  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {
      item: 'appliedenergistics2:fluix_dust',
    },
    input: {
      tag: 'forge:gems/fluix',
    },
    energy: 1600,
  });

  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {
      item: 'emendatusenigmatica:quartz_dust',
    },
    input: {
      tag: 'forge:gems/quartz',
    },
    energy: 1600,
  });

  event.shapeless('appliedenergistics2:cable_anchor', [
    'appliedenergistics2:facade',
    'appliedenergistics2:facade',
  ]);

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {tag: 'forge:silicon'},
    transitionalItem: {item: 'appliedenergistics2:printed_silicon'},
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{tag: 'forge:silicon'}, {item: 'appliedenergistics2:silicon_press'}],
        results: [{item: 'appliedenergistics2:printed_silicon'}],
        keepHeldItem: true,
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'appliedenergistics2:printed_silicon'}, {item: 'minecraft:redstone'}],
        results: [{item: 'kubejs:silicon_die'}],
      },
    ],
    results: [{item: 'kubejs:silicon_die', chance: 1.0}],
    loops: 1,
  });
  event.custom(sequencedAssembly('minecraft:gold_ingot', 'appliedenergistics2:logic_processor'));
  event.custom(sequencedAssembly('minecraft:diamond', 'appliedenergistics2:engineering_processor'));
  event.custom(
    sequencedAssembly(
      'appliedenergistics2:purified_certus_quartz_crystal',
      'appliedenergistics2:calculation_processor'
    )
  );
});

/* Replaces all thrown certus with AE2 Certus */
onEvent('entity.spawned', event => {
  if (event.getEntity().getType() === 'minecraft:item') {
    const itemEntity = event.getEntity();
    if (!itemEntity || !itemEntity.getItem()) {
      return;
    }

    if (itemEntity.getItem().getId() === 'emendatusenigmatica:charged_certus_quartz_gem') {
      itemEntity.setItem(
        Item.of(
          `${itemEntity.getItem().getCount()}x appliedenergistics2:charged_certus_quartz_crystal`
        )
      );
    }
    if (itemEntity.getItem().getId() === 'emendatusenigmatica:certus_quartz_gem') {
      itemEntity.setItem(
        Item.of(`${itemEntity.getItem().getCount()}x appliedenergistics2:certus_quartz_crystal`)
      );
    }
  }
});
