const bottler = (event) => {
  // Treated planks in the bottler
  event.custom({
    type: "thermal:bottler",
    ingredient: [
      {
        tag: "minecraft:planks",
      },
      {
        fluid: "immersiveengineering:creosote",
        amount: 125,
      },
    ],
    result: [
      {
        item: "immersiveengineering:treated_wood_horizontal",
      },
    ],
  });
};

const campfire = (event) => {
  // Cast-Iron from campfire
  event.campfireCooking(
    "1x emendatusenigmatica:cast_iron_ingot",
    "#forge:ingots/iron"
  );
};

const crafting = (event) => {
  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "minecraft:clay",
      },
      {
        tag: "forge:pebbles",
      },
      {
        tag: "forge:pebbles",
      },
      {
        item: "emendatusenigmatica:zinc_chunk",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "create:andesite_alloy",
      count: 1,
      nbt: {
        display: {
          Name: '{"text": "Crude Andesite Alloy", "italic": "false"}',
        },
      },
    },
  });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "minecraft:clay",
      },
      {
        tag: "forge:pebbles",
      },
      {
        tag: "forge:pebbles",
      },
      {
        item: "emendatusenigmatica:iron_chunk",
      },
      {
        tag: "natural-progression:saw",
      },
    ],
    result: {
      item: "create:andesite_alloy",
      count: 1,
      nbt: {
        display: {
          Name: '{"text": "Crude Andesite Alloy", "italic": "false"}',
        },
      },
    },
  });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "minecraft:shears",
      },
      {
        tag: "minecraft:wool",
      },
    ],
    result: {
      item: "minecraft:string",
      count: 3,
    },
  });

  event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);
  event.shaped("16x supplementaries:cog_block", ["ccc", "cgc", "ccc"], {
    g: "#forge:gears/copper",
    c: "#forge:ingots/copper",
  });
  event.shaped("32x supplementaries:cog_block", ["ccc", "cgc", "ccc"], {
    g: "#forge:gears/signalum",
    c: "#forge:ingots/signalum",
  });

  event.remove({ id: "quark:building/crafting/chests/chest_revert" });
  event.shapeless("1x minecraft:chest", ["#forge:chests/wooden"]);
  event.shapeless("1x minecraft:trapped_chest", ["#forge:chests/trapped"]);

  event.shapeless("4x appliedenergistics2:sky_stone_block", [
    "3x #forge:stone",
    "#forge:silicon",
  ]);

  // chipped planks for quark chest crafting
  [
    "acacia",
    "birch",
    "crimson",
    "dark_oak",
    "jungle",
    "oak",
    "spruce",
    "warped",
  ].forEach((plank) => {
    event.shaped(`1x quark:${plank}_chest`, ["ppp", "p p", "ppp"], {
      p: `#chipped:${plank}_planks`,
    });
  });

  // Craft chests out of chestless planks
  event.shaped("4x minecraft:chest", ["lll", "l l", "lll"], {
    l: "#harmeng:chestless_logs",
  });
  event.shaped("minecraft:chest", ["ppp", "p p", "ppp"], {
    p: "#harmeng:chestless_planks",
  });

  event.remove({ output: "chipped:carpenters_table" });
  event.shaped("1x chipped:carpenters_table", ["  I", "LWL", "SPL"], {
    I: "#forge:ingots/iron",
    L: "#minecraft:logs",
    P: "#minecraft:planks",
    S: "#natural-progression:saw",
    W: "corail_woodcutter:oak_woodcutter",
  });
};

const metallurgicInfuser = (event) => {
  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: {
      ingredient: {
        tag: "forge:storage_blocks/uranium",
      },
    },
    infusionInput: {
      amount: 90,
      tag: "mekanism:redstone",
    },
    output: {
      item: "powah:uraninite_block",
    },
  });

  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: {
      ingredient: {
        tag: "forge:ingots/uranium",
      },
    },
    infusionInput: {
      amount: 10,
      tag: "mekanism:redstone",
    },
    output: {
      item: "powah:uraninite",
    },
  });
};

const multiservoPress = (event) => {
  // Recipes for IE wires from multiservo press
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/aluminum",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "immersiveengineering:wire_aluminum",
        count: 2,
      },
    ],
  });

  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/copper",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "immersiveengineering:wire_copper",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/electrum",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "immersiveengineering:wire_electrum",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/gold",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "createaddition:gold_wire",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/iron",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "createaddition:iron_wire",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/lead",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "immersiveengineering:wire_lead",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/steel",
      },
      {
        item: "immersiveengineering:mold_wire",
      },
    ],
    result: [
      {
        item: "immersiveengineering:wire_steel",
        count: 2,
      },
    ],
  });
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:ingots/copper",
      },
      {
        item: "immersiveengineering:mold_bullet_casing",
      },
    ],
    result: [
      {
        item: "immersiveengineering:empty_casing",
        count: 2,
      },
    ],
  });
};

const stonecutter = (event) => {
  event.stonecutting(
    "appliedenergistics2:calculation_processor_press",
    "#forge:plates/steel"
  );
  event.stonecutting(
    "appliedenergistics2:engineering_processor_press",
    "#forge:plates/steel"
  );
  event.stonecutting(
    "appliedenergistics2:logic_processor_press",
    "#forge:plates/steel"
  );
  event.stonecutting(
    "appliedenergistics2:silicon_press",
    "#forge:plates/steel"
  );
  event.stonecutting("appliedenergistics2:name_press", "#forge:plates/steel");

  // Uncraft quartz block via stonecutting
  event.stonecutting("4x minecraft:quartz", "minecraft:quartz_block");
};

const woodcutter = (event) => {
  // Lots of wonky dynamic logic for reducing hundreds of JSON files to a few hundred lines ;)
  [
    "atmospheric:aspen",
    "atmospheric:grimwood",
    "atmospheric:kousa",
    "atmospheric:morado",
    "atmospheric:rosewood",
    "atmospheric:yucca",
    "autumnity:maple",
    "betterendforge:dragon_tree",
    "betterendforge:end_lotus",
    "betterendforge:helix_tree",
    "betterendforge:jellyshroom",
    "betterendforge:lacugrove",
    "betterendforge:lucernia",
    "betterendforge:mossy_glowshroom",
    "betterendforge:pythadendron",
    "betterendforge:tenanea",
    "betterendforge:umbrella_tree",
    "enhanced_mushrooms:brown_mushroom",
    "enhanced_mushrooms:glowshroom",
    "enhanced_mushrooms:red_mushroom",
    "tconstruct:bloodshroom",
    "tconstruct:greenheart",
    "tconstruct:skyroot",
    "upgrade_aquatic:driftwood",
    "upgrade_aquatic:river",
  ].forEach((wood) => {
    [
      { type: "button", qty: 4 },
      { type: "door", qty: 1 },
      { type: "fence_gate", qty: 1 },
      { type: "fence", qty: 1 },
      { type: "gate", qty: 1 },
      { type: "pressure_plate", qty: 3 },
      { type: "sign", qty: 1 },
      { type: "slab", qty: 2 },
      { type: "stairs", qty: 1 },
      { type: "trapdoor", qty: 2 },
    ].forEach((x) => {
      const { type, qty } = x;
      event.custom({
        type: "corail_woodcutter:woodcutting",
        ingredient: {
          item: `${wood}_planks`,
        },
        result: `${wood}_${type}`,
        count: qty,
        conditions: [
          {
            type: "forge:mod_loaded",
            modid: "corail_woodcutter",
          },
          {
            type: "forge:mod_loaded",
            modid: wood.split(":")[0],
          },
          {
            // Check that the generated item actually exists
            type: "forge:item_exists",
            item: `${wood}_${type}`,
          },
        ],
      });
    });
  });

  [
    "atmospheric:aspen_logs",
    "atmospheric:grimwood_logs",
    "atmospheric:morado_logs",
    "atmospheric:rosewood_logs",
    "atmospheric:yucca_logs",
    "autumnity:maple_logs",
    "enhanced_mushrooms:brown_mushroom_stems",
    "enhanced_mushrooms:glowshroom_stems",
    "enhanced_mushrooms:red_mushroom_stems",
    "upgrade_aquatic:driftwood_logs",
    "upgrade_aquatic:river_logs",
  ].forEach((wood) => {
    const [modid, path] = wood.split(":");
    [
      { type: "beam", qty: 1 },
      { type: "palisade", qty: 4 },
    ].forEach((x) => {
      const { type, qty } = x;
      const output = `decorative_blocks_abnormals:${path}_${type}`
        .replace("_logs", "")
        .replace("_stems", "");
      event.custom({
        type: "corail_woodcutter:woodcutting",
        ingredient: { tag: wood },
        result: output,
        count: qty,
        conditions: [
          {
            type: "forge:mod_loaded",
            modid: "corail_woodcutter",
          },
          {
            type: "forge:mod_loaded",
            modid: modid,
          },
          {
            // Check that the generated item actually exists
            type: "forge:item_exists",
            item: output,
          },
        ],
      });
    });
  });

  [
    "atmospheric:aspen_planks",
    "atmospheric:grimwood_planks",
    "atmospheric:morado_planks",
    "atmospheric:rosewood_planks",
    "atmospheric:yucca_planks",
    "autumnity:maple_planks",
    "enhanced_mushrooms:brown_mushroom_planks",
    "enhanced_mushrooms:glowshroom_planks",
    "enhanced_mushrooms:red_mushroom_planks",
    "upgrade_aquatic:driftwood_planks",
    "upgrade_aquatic:river_planks",
  ].forEach((wood) => {
    const [modid, path] = wood.split(":");
    [
      { type: "seat", qty: 1 },
      { type: "support", qty: 1 },
    ].forEach((x) => {
      const { type, qty } = x;
      const output = `decorative_blocks_abnormals:${path}_${type}`.replace(
        "_planks",
        ""
      );
      event.custom({
        type: "corail_woodcutter:woodcutting",
        ingredient: { item: wood },
        result: output,
        count: qty,
        conditions: [
          {
            type: "forge:mod_loaded",
            modid: "corail_woodcutter",
          },
          {
            type: "forge:mod_loaded",
            modid: modid,
          },
          {
            // Check that the generated item actually exists
            type: "forge:item_exists",
            item: output,
          },
        ],
      });
    });
  });
};

// Completely custom, non-replacing recipes
onEvent("recipes", (event) => {
  bottler(event);
  campfire(event);
  crafting(event);
  metallurgicInfuser(event);
  multiservoPress(event);
  stonecutter(event);
  woodcutter(event);
});
