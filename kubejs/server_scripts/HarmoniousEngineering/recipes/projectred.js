onEvent("recipes", (event) => {
  const core = "projectred-core";

  event.remove({ output: `${core}:boule` });
  event.remove({ output: `${core}:copper_coil` });
  event.remove({ output: `${core}:draw_plate` });
  event.remove({ output: `${core}:electrotine_ingot` });
  event.remove({ output: `${core}:electrotine_iron_comp` });
  event.remove({ output: `${core}:electrotine_silicon_comp` });
  event.remove({ output: `${core}:electrotine_silicon` });
  event.remove({ output: `${core}:energized_silicon` });
  event.remove({ output: `${core}:glow_silicon_comp` });
  event.remove({ output: `${core}:gold_coil` });
  event.remove({ output: `${core}:infused_silicon` });
  event.remove({ output: `${core}:iron_coil` });
  event.remove({ output: `${core}:motor` });
  event.remove({ output: `${core}:null_routing_chip` });
  event.remove({ output: `${core}:peridot` });
  event.remove({ output: `${core}:red_ingot` });
  event.remove({ output: `${core}:red_iron_comp` });
  event.remove({ output: `${core}:red_silicon_comp` });
  event.remove({ output: `${core}:ruby` });
  event.remove({ output: `${core}:sail` });
  event.remove({ output: `${core}:sand_coal_comp` });
  event.remove({ output: `${core}:sapphire` });
  event.remove({ output: `${core}:silicon` });
  event.remove({ output: `${core}:woven_cloth` });

  global.genAlloyingRecipe(event, { item: "minecraft:iron_ingot" }, { item: "minecraft:redstone" }, `${core}:red_ingot`, 1);
  global.genAlloyingRecipe(event, { tag: "forge:silicon" }, { item: "minecraft:redstone" }, `${core}:infused_silicon`, 1);
  global.genAlloyingRecipe(event, { tag: "forge:silicon" }, { item: "minecraft:glowstone_dust" }, `${core}:energized_silicon`, 1);
});
