onEvent("recipes", (event) => {
  const modid = "extendedcrafting";
  event.remove({ mod: modid });

  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["CEEEC", "CCCCC", " NPN ", " NPN ", " NNN "],
    key: {
      C: { item: "create:mechanical_crafter" },
      E: { tag: "forge:storage_blocks/emerald" },
      N: { tag: "forge:ingots/netherite" },
      P: { item: "powah:capacitor_spirited" },
    },
    result: {
      item: `${modid}:ultimate_auto_table`,
    },
  });

  event.shapeless(`1x ${modid}:handheld_table`, ["#forge:workbenches"]);
});
