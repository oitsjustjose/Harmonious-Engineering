onEvent('recipes', event => {
  // IE Treated Planks from Fluid
  event.custom({
    type: 'thermal:bottler',
    ingredient: [{tag: 'minecraft:planks'}, {fluid: 'immersiveengineering:creosote', amount: 125}],
    result: [{item: 'immersiveengineering:treated_wood_horizontal'}],
  });

  // Aluminum Wire in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/aluminum'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'immersiveengineering:wire_aluminum', count: 2}],
  });

  // Copper Wire in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/copper'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'immersiveengineering:wire_copper', count: 2}],
  });

  // Electrum Wire in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/electrum'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'immersiveengineering:wire_electrum', count: 2}],
  });

  // Lead Wire in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/lead'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'immersiveengineering:wire_lead', count: 2}],
  });

  // Steel Wire in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/steel'}, {item: 'immersiveengineering:mold_wire'}],
    result: [{item: 'immersiveengineering:wire_steel', count: 2}],
  });

  // Bullet Casing in Thermal Multiservo Press
  event.custom({
    type: 'thermal:press',
    ingredients: [{tag: 'forge:ingots/copper'}, {item: 'immersiveengineering:mold_bullet_casing'}],
    result: [{item: 'immersiveengineering:empty_casing', count: 2}],
  });

  // Urananite Block from Uranium Block
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: {ingredient: {tag: 'forge:storage_blocks/uranium'}},
    infusionInput: {amount: 90, tag: 'mekanism:redstone'},
    output: {item: 'powah:uraninite_block'},
  });

  // Urananite from Uranium Ingot
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: {ingredient: {tag: 'forge:ingots/uranium'}},
    infusionInput: {amount: 10, tag: 'mekanism:redstone'},
    output: {item: 'powah:uraninite'},
  });

  // A Use for Glowstone Stalactites
  event.remove({output: 'create:cinder_flour'});
  // A Use for Netherrack Stalactites
  global.genUniversalCrushingRecipe(
    event,
    Ingredient.of('minecraft:netherrack'),
    Item.of('2x create:cinder_flour'),
    null
  );

  // Crushing compatibility for Create Wheat Flour
  event.custom({
    type: 'immersiveengineering:crusher',
    result: {count: 1, base_ingredient: {item: 'create:wheat_flour'}},
    secondaries: [],
    input: {item: 'minecraft:wheat'},
    energy: 6020000,
  });

  event.custom({
    type: 'mekanism:enriching',
    input: {ingredient: {item: 'minecraft:wheat'}},
    output: {item: 'create:wheat_flour'},
  });

  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: 'minecraft:wheat'},
    result: [{item: 'create:wheat_flour'}],
  });
});
