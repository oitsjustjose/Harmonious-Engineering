onEvent("recipes", (event) => {
  event.remove({ output: "scannable:module_blank" });
  event.remove({ output: "scannable:scanner" });

  event.shaped("1x scannable:module_blank", ["ggg", "scs", "sns"], {
    g: "immersiveengineering:insulating_glass",
    c: "projectred-integration:bus_transceiver_gate",
    s: "#forge:silicon",
    n: "#forge:nuggets/gold",
  });

  event.shaped("1x scannable:scanner", ["n n", "bcb", "ntn"], {
    n: "#forge:ingots/netherite",
    c: "powah:ender_core",
    b: "minecraft:iron_bars",
    t: "mekanism:portable_teleporter",
  });
});
