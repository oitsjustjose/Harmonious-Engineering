onEvent("recipes", (event) => {
  event.remove({ id: "minecraft:gold_ingot" });
  event.remove({ id: "minecraft:iron_ingot" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting" });
  event.remove({ id: "minecraft:iron_ingot_from_blasting" });

  event.remove({ id: "minecraft:wooden_axe" });
  event.remove({ id: "minecraft:wooden_hoe" });
  event.remove({ id: "minecraft:wooden_pickaxe" });
  event.remove({ id: "minecraft:wooden_shovel" });
  event.remove({ id: "minecraft:wooden_sword" });

  event.remove({ id: "minecraft:stonecutter" });
  event.shaped("1x minecraft:stonecutter", [" B ", "SSS"], {
    B: "#harmeng:saw_blade",
    S: "#forge:stone",
  });
});
