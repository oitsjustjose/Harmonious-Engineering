onEvent("recipes", (event) => {
  event.remove({ output: "storagedrawers:controller" });
  event.smithing(
    "storagedrawers:controller",
    "storagedrawers:controller_slave",
    "mekanism:ultimate_control_circuit"
  );
});
