onEvent("recipes", (event) => {
  event.remove({ output: "thermal:rf_coil" });
  event.remove({ output: "thermal:machine_frame" });
  event.remove({ output: "thermal:saw_blade" });
  event.remove({ id: "thermal:machine/chiller/chiller_ender_to_ender_pearl" });

  event.shaped("1x thermal:rf_coil", [" RG", "RSR", "GR "], {
    R: "immersiveengineering:wirecoil_redstone",
    S: "#forge:ingots/steel",
    G: "#forge:nuggets/gold",
  });

  event.shaped("1x thermal:machine_frame", ["SGS", "GTG", "SGS"], {
    G: "mekanism:structural_glass",
    S: "#forge:ingots/steel",
    T: "#forge:gears/tin",
  });

  event.shaped("1x thermal:saw_blade", ["SS ", "SCS", " SS"], {
    S: "#forge:ingots/steel",
    C: "#forge:ingots/copper",
  });
});
