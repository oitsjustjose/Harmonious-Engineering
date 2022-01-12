onEvent("recipes", (event) => {
  event.remove({ output: "rftoolsbase:dimensionalshard" });
  event.remove({ output: "rftoolsbase:machine_infuser" });
  event.remove({ output: "rftoolsbase:machine_frame" });
  event.remove({ output: "rftoolsbase:infused_diamond" });
  event.remove({ output: "rftoolsbase:infused_enderpearl" });

  event.shaped("1x rftoolsbase:machine_frame", [" G ", "GFG", " G "], {
    G: "#forge:gears/lapis",
    F: "thermal:machine_frame",
  });
  event.shaped("1x rftoolsbase:infused_diamond", ["DDD", "DID", "DDD"], {
    D: "#forge:gems/dimensional",
    I: "#forge:gems/diamond",
  });
  event.shaped("1x rftoolsbase:infused_enderpearl", ["DDD", "DID", "DDD"], {
    D: "#forge:gems/dimensional",
    I: "minecraft:ender_pearl",
  });
});
