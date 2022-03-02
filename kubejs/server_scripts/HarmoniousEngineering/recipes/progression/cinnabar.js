onEvent('recipes', event => {
  const COUNTS = {
    mill: 1,
    crusher: 2,
    machine: 3,
    purify: 4,
  };

  /********************************
   *          IE Crusher          *
   *******************************/
  event.custom({
    type: 'immersiveengineering:crusher',
    input: {tag: 'forge:ores/cinnabar'},
    result: {count: COUNTS.crusher, base_ingredient: {item: 'emendatusenigmatica:cinnabar_gem'}},
    secondaries: [],
    energy: 12000,
  });
  event.custom({
    type: 'immersiveengineering:crusher',
    input: {tag: 'forge:gems/cinnabar'},
    result: {count: COUNTS.machine, base_ingredient: {item: 'minecraft:redstone'}},
    secondaries: [],
    energy: 9000,
  });

  /**********************************
   *             Create             *
   **********************************/
  // Milling Gem (No Ore Permitted)
  event.custom({
    type: 'create:milling',
    ingredients: [{tag: 'forge:gems/cinnabar'}],
    results: [{item: 'minecraft:redstone', count: COUNTS.mill}],
    processingTime: 750,
  });

  event.custom({
    type: 'create:crushing',
    ingredients: [{tag: 'forge:gems/cinnabar'}],
    results: [{item: 'minecraft:redstone', count: COUNTS.crusher}],
    processingTime: 600,
  });

  /**********************************
   *            Mekanism            *
   **********************************/
  event.custom({
    type: 'mekanism:enriching',
    input: {ingredient: {tag: 'forge:gems/cinnabar'}},
    output: {item: 'minecraft:redstone', count: COUNTS.machine},
  });
  event.custom({
    type: 'mekanism:purifying',
    itemInput: {ingredient: {tag: 'forge:gems/cinnabar'}},
    gasInput: {amount: 1, gas: 'mekanism:oxygen'},
    output: {item: 'minecraft:redstone', count: COUNTS.purify},
  });

  /***********************************
   *             Thermal             *
   **********************************/
  // Remove the cinnabar dust recipe.
  event.remove({id: 'thermal:machine/pulverizer/pulverizer_cinnabar'});
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {tag: 'forge:gems/cinnabar'},
    result: [{item: 'minecraft:redstone', count: COUNTS.machine}],
    experience: 0.0,
  });
});
