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
  {tag: 'forge:dusts/saltpeter', item: 'immersiveengineering:dust_saltpeter'},
  {tag: 'forge:dusts/silver', item: 'immersiveengineering:dust_silver'},
  {tag: 'forge:dusts/sulfur', item: 'immersiveengineering:dust_sulfur'},
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
  {tag: 'forge:raw_materials/uranium', item: 'immersiveengineering:raw_uranium'},
  {tag: 'forge:slag', item: 'immersiveengineering:slag'},
  {tag: 'forge:storage_blocks', item: 'immersiveengineering:coke'},
  {tag: 'forge:storage_blocks/coal_coke', item: 'immersiveengineering:coke'},
  {tag: 'forge:storage_blocks/constantan', item: 'immersiveengineering:storage_constantan'},
  {tag: 'forge:storage_blocks/electrum', item: 'immersiveengineering:storage_electrum'},
  {tag: 'forge:storage_blocks/lead', item: 'immersiveengineering:storage_lead'},
  {tag: 'forge:storage_blocks/nickel', item: 'immersiveengineering:storage_nickel'},
  {tag: 'forge:storage_blocks/silver', item: 'immersiveengineering:storage_silver'},
  {tag: 'forge:storage_blocks/steel', item: 'beyond_earth:steel_block'},
  {tag: 'forge:storage_blocks/steel', item: 'davebuildingmod:steel_block'},
];

global.ores = [
  {
    resourceName: 'iron',
    dropsRaw: true,
    variants: {
      stone: 'minecraft:iron_ore',
      deepslate: 'minecraft:deepslate_iron_ore',
      others: [
        'beyond_earth:glacio_iron_ore',
        'beyond_earth:mercury_iron_ore',
        'beyond_earth:mars_iron_ore',
        'beyond_earth:moon_iron_ore',
      ],
    },
  },
  {
    resourceName: 'copper',
    dropsRaw: true,
    variants: {
      stone: 'beyond_earth:glacio_copper_ore',
      deepslate: 'minecraft:deepslate_copper_ore',
      others: ['minecraft:copper_ore'],
    },
  },
  {
    resourceName: 'gold',
    dropsRaw: true,
    variants: {
      stone: 'minecraft:gold_ore',
      deepslate: 'minecraft:deepslate_gold_ore',
      others: ['beyond_earth:venus_gold_ore', 'minecraft:nether_gold_ore'],
    },
  },
  {
    resourceName: 'tin',
    dropsRaw: true,
    variants: {
      stone: 'thermal:tin_ore',
      deepslate: 'thermal:deepslate_tin_ore',
      others: [],
    },
  },
  {
    resourceName: 'silver',
    dropsRaw: true,
    variants: {
      stone: 'thermal:silver_ore',
      deepslate: 'thermal:deepslate_silver_ore',
      others: [],
    },
  },
  {
    resourceName: 'lead',
    dropsRaw: true,
    variants: {
      stone: 'thermal:lead_ore',
      deepslate: 'thermal:deepslate_lead_ore',
      others: [],
    },
  },
  {
    resourceName: 'nickel',
    dropsRaw: true,
    variants: {
      stone: 'thermal:nickel_ore',
      deepslate: 'thermal:deepslate_nickel_ore',
      others: [],
    },
  },
  {
    resourceName: 'aluminum',
    dropsRaw: true,
    variants: {
      stone: 'immersiveengineering:ore_aluminum',
      deepslate: 'immersiveengineering:deepslate_ore_aluminum',
      others: [],
    },
  },
  {
    resourceName: 'zinc',
    dropsRaw: true,
    variants: {
      stone: 'create:zinc_ore',
      deepslate: 'create:deepslate_zinc_ore',
      others: [],
    },
  },
  {
    resourceName: 'desh',
    dropsRaw: true,
    variants: {
      stone: null,
      deepslate: null,
      others: ['beyond_earth:moon_desh_ore'],
    },
  },
  {
    resourceName: 'ostrum',
    dropsRaw: true,
    variants: {
      stone: null,
      deepslate: null,
      others: ['beyond_earth:mars_ostrum_ore'],
    },
  },
  {
    resourceName: 'calorite',
    dropsRaw: true,
    variants: {
      stone: null,
      deepslate: null,
      others: ['beyond_earth:venus_calorite_ore'],
    },
  },
  {
    resourceName: 'coal',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:coal_ore',
      deepslate: 'minecraft:deepslate_coal_ore',
      others: ['beyond_earth:venus_coal_ore', 'beyond_earth:glacio_coal_ore'],
    },
  },
  {
    resourceName: 'redstone',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:redstone_ore',
      deepslate: 'minecraft:deepslate_redstone_ore',
      others: [],
    },
  },
  {
    resourceName: 'lapis',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:lapis_ore',
      deepslate: 'minecraft:deepslate_lapis_ore',
      others: ['beyond_earth:glacio_lapis_ore'],
    },
  },
  {
    resourceName: 'diamond',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:diamond_ore',
      deepslate: 'minecraft:deepslate_diamond_ore',
      others: ['beyond_earth:venus_diamond_ore', 'beyond_earth:mars_diamond_ore'],
    },
  },
  {
    resourceName: 'diamond',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:diamond_ore',
      deepslate: 'minecraft:deepslate_diamond_ore',
      others: ['beyond_earth:venus_diamond_ore', 'beyond_earth:mars_diamond_ore'],
    },
  },
  {
    resourceName: 'emerald',
    dropsRaw: false,
    variants: {
      stone: 'minecraft:emerald_ore',
      deepslate: 'minecraft:deepslate_emerald_ore',
      others: [],
    },
  },
  {
    resourceName: 'quartz',
    dropsRaw: false,
    variants: {
      stone: null,
      deepslate: null,
      others: ['minecraft:nether_quartz_ore'],
    },
  },
  {
    resourceName: 'cinnabar',
    dropsRaw: false,
    variants: {
      stone: 'thermal:cinnabar_ore',
      deepslate: 'thermal:deepslate_cinnabar_ore',
      others: [],
    },
  },
  {
    resourceName: 'sulfur',
    dropsRaw: false,
    variants: {
      stone: 'thermal:sulfur_ore',
      deepslate: 'thermal:deepslate_sulfur_ore',
      others: [],
    },
  },
  {
    resourceName: 'niter',
    dropsRaw: false,
    variants: {
      stone: 'thermal:niter_ore',
      deepslate: 'thermal:deepslate_niter_ore',
      others: [],
    },
  },
  {
    resourceName: 'dimensional_shard',
    dropsRaw: false,
    variants: {
      stone: 'rftoolsbase:dimensionalshard_overworld',
      deepslate: null,
      others: ['rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'],
    },
  },
  {
    resourceName: 'ice_shard',
    dropsRaw: false,
    variants: {
      stone: null,
      deepslate: null,
      others: [
        'beyond_earth:moon_ice_shard_ore',
        'beyond_earth:mars_ice_shard_ore',
        'beyond_earth:glacio_ice_shard_ore',
      ],
    },
  },
  {
    resourceName: 'moon_cheese',
    dropsRaw: false,
    variants: {
      stone: null,
      deepslate: null,
      others: ['beyond_earth:moon_cheese_ore'],
    },
  },
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
