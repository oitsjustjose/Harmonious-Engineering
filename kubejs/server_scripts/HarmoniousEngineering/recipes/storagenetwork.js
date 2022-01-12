onEvent("recipes", (event) => {
  event.remove({ output: "storagenetwork:crafting_remote" });
  event.remove({ output: "storagenetwork:inventory_remote" });
});
