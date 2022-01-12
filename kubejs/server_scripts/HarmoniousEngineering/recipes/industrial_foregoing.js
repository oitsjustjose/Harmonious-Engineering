onEvent("recipes", (event) => {
  const modid = "industrialforegoing";

  event.remove({ mod: "titanium" });
  event.remove({ output: `${modid}:latex_processing_unit` });
  event.remove({ output: `${modid}:machine_frame_pity` });
  event.remove({ output: `${modid}:plastic` });

  event.shaped(`1x ${modid}:machine_frame_pity`, ["WPW", "PLP", "WPW"], {
    W: "#forge:dusts/wood",
    L: "#minecraft:logs",
    P: `${modid}:plastic`,
  });

  event.custom({
    type: "mekanism:compressing",
    itemInput: {
      ingredient: {
        item: "mekanism:hdpe_sheet",
      },
    },
    gasInput: {
      amount: 1,
      gas: "mekanism:oxygen",
    },
    output: {
      item: `${modid}:plastic`,
    },
  });
});
