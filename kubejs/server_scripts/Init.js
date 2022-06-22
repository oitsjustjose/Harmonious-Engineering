// priority: 2048
settings.logErroringRecipes = false;
settings.logInvalidRecipeHandlers = false;

global.ie = x => {
  const tmp = `immersiveengineering:${x}`;
  return Item.of(tmp) === Item.empty ? 'minecraft:air' : tmp;
};

global.duplicateResources = [
  {tag: 'forge:dusts/wood', item: global.ie('dust_wood')},
  {tag: 'forge:plastic', item: 'industrialforegoing:plastic'},
  {tag: 'forge:coal_coke', item: global.ie('coal_coke')},
  {tag: 'forge:dusts/constantan', item: global.ie('dust_constantan')},
  {tag: 'forge:dusts/copper', item: global.ie('dust_copper')},
  {tag: 'forge:dusts/electrum', item: global.ie('dust_electrum')},
  {tag: 'forge:dusts/gold', item: global.ie('dust_gold')},
  {tag: 'forge:dusts/iron', item: global.ie('dust_iron')},
  {tag: 'forge:dusts/lead', item: global.ie('dust_lead')},
  {tag: 'forge:dusts/nickel', item: global.ie('dust_nickel')},
  {tag: 'forge:dusts/silver', item: global.ie('dust_silver')},
  {tag: 'forge:ingots/constantan', item: global.ie('ingot_constantan')},
  {tag: 'forge:ingots/electrum', item: global.ie('ingot_electrum')},
  {tag: 'forge:ingots/lead', item: global.ie('ingot_lead')},
  {tag: 'forge:ingots/nickel', item: global.ie('ingot_nickel')},
  {tag: 'forge:ingots/silver', item: global.ie('ingot_silver')},
  {tag: 'forge:nuggets/constantan', item: global.ie('nugget_constantan')},
  {tag: 'forge:nuggets/electrum', item: global.ie('nugget_electrum')},
  {tag: 'forge:nuggets/lead', item: global.ie('nugget_lead')},
  {tag: 'forge:nuggets/nickel', item: global.ie('nugget_nickel')},
  {tag: 'forge:nuggets/silver', item: global.ie('nugget_silver')},
  {tag: 'forge:plates/constantan', item: global.ie('plate_constantan')},
  {tag: 'forge:plates/copper', item: 'create:copper_sheet'},
  {tag: 'forge:plates/copper', item: global.ie('plate_copper')},
  {tag: 'forge:plates/electrum', item: global.ie('plate_electrum')},
  {tag: 'forge:plates/gold', item: 'create:golden_sheet'},
  {tag: 'forge:plates/gold', item: global.ie('plate_gold')},
  {tag: 'forge:plates/iron', item: 'create:iron_sheet'},
  {tag: 'forge:plates/iron', item: global.ie('plate_iron')},
  {tag: 'forge:plates/lead', item: global.ie('plate_lead')},
  {tag: 'forge:plates/nickel', item: global.ie('plate_nickel')},
  {tag: 'forge:plates/silver', item: global.ie('plate_silver')},
  {tag: 'forge:slag', item: global.ie('slag')},
  {tag: 'forge:raw_materials/lead', item: global.ie('raw_lead')},
  {tag: 'forge:raw_materials/silver', item: global.ie('raw_silver')},
  {tag: 'forge:raw_materials/nickel', item: global.ie('raw_nickel')},
  {tag: 'forge:storage_blocks', item: global.ie('coke')},
  {tag: 'forge:storage_blocks/coal_coke', item: global.ie('coke')},
  {tag: 'forge:storage_blocks/constantan', item: global.ie('storage_constantan')},
  {tag: 'forge:storage_blocks/electrum', item: global.ie('storage_electrum')},
  {tag: 'forge:storage_blocks/lead', item: global.ie('storage_lead')},
  {tag: 'forge:storage_blocks/nickel', item: global.ie('storage_nickel')},
  {tag: 'forge:storage_blocks/silver', item: global.ie('storage_silver')},
];

global.metals = ['iron', 'gold', 'copper', 'tin', 'silver', 'lead', 'aluminum', 'zinc', 'nickel'];

global.recipes = event => {
  return {
    giant: (result, pattern, ingredients) => {
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: pattern,
        key: ingredients,
        result: result.toResultJson(),
        acceptMirrored: false,
      });
    },
    warping: (input, output) => {
      event.custom({
        type: 'architects_palette:warping',
        ingredient: [Item.of(input).toJson()],
        result: output.toResultJson(),
        dimension: 'minecraft:the_nether',
      });
    },
    pressurizing: (inputs, results, pressure) => {
      event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: inputs,
        results: results,
        pressure: pressure,
      });
    },
  };
};