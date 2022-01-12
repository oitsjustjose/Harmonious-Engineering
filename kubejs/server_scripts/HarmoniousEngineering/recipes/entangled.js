onEvent("recipes", (event) => {
  event.remove({ output: "entangled:block" });
  event.smithing(
    "entangled:block",
    "thermal:machine_frame",
    "appliedenergistics2:quantum_entangled_singularity"
  );
});
