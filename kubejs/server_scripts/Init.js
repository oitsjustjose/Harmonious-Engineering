// priority: 2048
settings.logErroringRecipes = false;
settings.logInvalidRecipeHandlers = false;

global.validateInput = x => (Item.of(x) === Item.empty ? 'minecraft:air' : tmp);

global.duplicateResources = [
  {tag: 'forge:coal_coke', item: 'immersiveengineering:coal_coke'},
  {tag: 'forge:dusts/constantan', item: 'immersiveengineering:dust_constantan'},
  {tag: 'forge:dusts/copper', item: 'immersiveengineering:dust_copper'},
  {tag: 'forge:dusts/electrum', item: 'immersiveengineering:dust_electrum'},
  {tag: 'forge:dusts/gold', item: 'immersiveengineering:dust_gold'},
  {tag: 'forge:dusts/iron', item: 'immersiveengineering:dust_iron'},
  {tag: 'forge:dusts/lead', item: 'immersiveengineering:dust_lead'},
  {tag: 'forge:dusts/nickel', item: 'immersiveengineering:dust_nickel'},
  {tag: 'forge:dusts/silver', item: 'immersiveengineering:dust_silver'},
  {tag: 'forge:dusts/wood', item: 'immersiveengineering:dust_wood'},
  {tag: 'forge:gears/diamond', item: 'industrialforegoing:diamond_gear'},
  {tag: 'forge:gears/gold', item: 'industrialforegoing:gold_gear'},
  {tag: 'forge:gears/iron', item: 'industrialforegoing:iron_gear'},
  {tag: 'forge:ingots/bronze', item: 'mekanism:ingot_bronze'},
  {tag: 'forge:ingots/constantan', item: 'immersiveengineering:ingot_constantan'},
  {tag: 'forge:ingots/electrum', item: 'immersiveengineering:ingot_electrum'},
  {tag: 'forge:ingots/lead', item: 'immersiveengineering:ingot_lead'},
  {tag: 'forge:ingots/lead', item: 'mekanism:ingot_lead'},
  {tag: 'forge:ingots/nickel', item: 'immersiveengineering:ingot_nickel'},
  {tag: 'forge:ingots/silver', item: 'immersiveengineering:ingot_silver'},
  {tag: 'forge:ingots/steel', item: 'beyond_earth:steel_ingot'},
  {tag: 'forge:ingots/steel', item: 'davebuildingmod:steel_ingot'},
  {tag: 'forge:ingots/steel', item: 'mekanism:ingot_steel'},
  {tag: 'forge:ingots/tin', item: 'mekanism:ingot_tin'},
  {tag: 'forge:ingots/uranium', item: 'mekanism:ingot_uranium'},
  {tag: 'forge:nuggets/constantan', item: 'immersiveengineering:nugget_constantan'},
  {tag: 'forge:nuggets/copper', item: 'create:copper_nugget'},
  {tag: 'forge:nuggets/copper', item: 'immersiveengineering:nugget_copper'},
  {tag: 'forge:nuggets/electrum', item: 'immersiveengineering:nugget_electrum'},
  {tag: 'forge:nuggets/lead', item: 'immersiveengineering:nugget_lead'},
  {tag: 'forge:nuggets/nickel', item: 'immersiveengineering:nugget_nickel'},
  {tag: 'forge:nuggets/silver', item: 'immersiveengineering:nugget_silver'},
  {tag: 'forge:nuggets/steel', item: 'beyond_earth:steel_nugget'},
  {tag: 'forge:plastic', item: 'industrialforegoing:plastic'},
  {tag: 'forge:plates/constantan', item: 'immersiveengineering:plate_constantan'},
  {tag: 'forge:plates/copper', item: 'create:copper_sheet'},
  {tag: 'forge:plates/copper', item: 'immersiveengineering:plate_copper'},
  {tag: 'forge:plates/electrum', item: 'immersiveengineering:plate_electrum'},
  {tag: 'forge:plates/gold', item: 'create:golden_sheet'},
  {tag: 'forge:plates/gold', item: 'immersiveengineering:plate_gold'},
  {tag: 'forge:plates/iron', item: 'create:iron_sheet'},
  {tag: 'forge:plates/iron', item: 'immersiveengineering:plate_iron'},
  {tag: 'forge:plates/lead', item: 'immersiveengineering:plate_lead'},
  {tag: 'forge:plates/nickel', item: 'immersiveengineering:plate_nickel'},
  {tag: 'forge:plates/silver', item: 'immersiveengineering:plate_silver'},
  {tag: 'forge:raw_materials/lead', item: 'immersiveengineering:raw_lead'},
  {tag: 'forge:raw_materials/nickel', item: 'immersiveengineering:raw_nickel'},
  {tag: 'forge:raw_materials/silver', item: 'immersiveengineering:raw_silver'},
  {tag: 'forge:slag', item: 'immersiveengineering:slag'},
  {tag: 'forge:storage_blocks', item: 'immersiveengineering:coke'},
  {tag: 'forge:storage_blocks/coal_coke', item: 'immersiveengineering:coke'},
  {tag: 'forge:storage_blocks/constantan', item: 'immersiveengineering:storage_constantan'},
  {tag: 'forge:storage_blocks/electrum', item: 'immersiveengineering:storage_electrum'},
  {tag: 'forge:storage_blocks/lead', item: 'immersiveengineering:storage_lead'},
  {tag: 'forge:storage_blocks/nickel', item: 'immersiveengineering:storage_nickel'},
  {tag: 'forge:storage_blocks/silver', item: 'immersiveengineering:storage_silver'},
  {tag: 'forge:storage_blocks/steel', item: 'beyond_earth:steel_block'},
];

global.metals = [
  'iron',
  'gold',
  'copper',
  'tin',
  'silver',
  'lead',
  'aluminum',
  'zinc',
  'nickel',
  'calorite',
  'desh',
  'ostrum',
];

/**
 * @param {Internal.RecipeEventJS} event
 */
global.recipes = event => ({
  /**
   * @param {ItemStackJS|string} result
   * @param {ItemStackJS[]} items
   * @param {FluidStackJS} fluid
   */
  dissolution: function (result, items, fluid, processingTime) {
    if (items.length > 8) {
      console.log(
        `Received ${items.length} items for a dissolution chamber recipe - max permitted is 8`
      );
      return;
    }
    event.custom({
      type: 'industrialforegoing:dissolution_chamber',
      input: items.map(x => x.toJson()),
      inputFluid: `{FluidName:"${fluid.getId()}",Amount:${fluid.getAmount()}}`,
      processingTime: processingTime || 400,
      output: result.toResultJson(),
    });
  },

  /**
   * @param {Internal.ItemStackJS} result
   * @param {string[]} pattern
   * @param {object[]} ingredients
   */
  giant: function (result, pattern, ingredients) {
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: pattern,
      key: ingredients,
      result: result.toResultJson(),
      acceptMirrored: false,
    });
  },

  /**
   * @param {Internal.ItemStackJS} input
   * @param {Internal.ItemStackJS} output
   * @param {string?} dimension
   */
  warping: function (input, output, dimension) {
    event.custom({
      type: 'architects_palette:warping',
      ingredient: [input.toJson()],
      result: output.toResultJson(),
      dimension: dimension || 'minecraft:the_nether',
    });
  },

  /**
   * @param {Object[]} inputs
   * @param {Object[]} outputs
   * @param {Number} pressure - must be a FLOAT.
   */
  pressurizing: (inputs, results, pressure) => {
    event.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: inputs,
      results: results,
      pressure: pressure,
    });
  },

  /**
   * @param {Internal.ItemStackJS} out
   * @param {Internal.ItemStackJS} left
   * @param {Internal.ItemStackJS} right
   */
  automatableSmithing: (out, left, right) => {
    event.smithing(out, left, right);
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: ['LR'],
      key: {L: left, R: right},
      result: out.toResultJson(),
      acceptMirrored: false,
    });
  },
});
