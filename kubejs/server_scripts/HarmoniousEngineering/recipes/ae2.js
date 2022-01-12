onEvent("recipes", (event) => {
  event.remove({ output: "appliedenergistics2:grindstone" });
  event.remove({ output: "appliedenergistics2:controller" });
  event.remove({ output: "appliedenergistics2:inscriber" });

  event.smithing(
    "appliedenergistics2:controller",
    "storagenetwork:master",
    "appliedenergistics2:engineering_processor"
  );

  event.smithing(
    "appliedenergistics2:inscriber",
    "#harmeng:presses",
    "appliedenergistics2:purified_fluix_crystal"
  );

  // AE2 crushing in IE Crusher
  event.custom({
    type: "immersiveengineering:crusher",
    secondaries: [],
    result: {
      item: "emendatusenigmatica:certus_quartz_dust",
    },
    input: {
      tag: "forge:gems/certus_quartz",
    },
    energy: 1600,
  });

  event.custom({
    type: "immersiveengineering:crusher",
    secondaries: [],
    result: {
      item: "emendatusenigmatica:fluix_dust",
    },
    input: {
      tag: "forge:gems/fluix",
    },
    energy: 1600,
  });

  event.custom({
    type: "immersiveengineering:crusher",
    secondaries: [],
    result: {
      item: "emendatusenigmatica:quartz_dust",
    },
    input: {
      tag: "forge:gems/quartz",
    },
    energy: 1600,
  });
});
