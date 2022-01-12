onEvent("recipes", (event) => {
  event.remove({ output: "thermal:rf_coil" });
  event.remove({ output: "thermal:machine_frame" });

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
});
