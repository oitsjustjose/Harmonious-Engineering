onEvent("recipes", (event) => {
  event.remove({ output: "refinedstorage:controller" });
  event.remove({ output: "refinedstorage:quartz_enriched_iron" });
  // use id to prevent removing <any color>+dye = light_blue (base)
  event.remove({ id: "refinedstorage:wireless_transmitter" });
  event.remove({ output: "refinedstorage:wireless_grid" });
  event.remove({ output: "refinedstorageaddons:wireless_crafting_grid" });

  event.shaped("refinedstorage:wireless_transmitter", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "kubejs:ender_singularity",
    C: "refinedstorage:machine_casing",
    P: "refinedstorage:advanced_processor",
  });

  event.shaped("refinedstorage:wireless_grid", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "kubejs:ender_singularity",
    C: "#refinedstorage:grid",
    P: "refinedstorage:advanced_processor",
  });

  event.shaped("refinedstorageaddons:wireless_crafting_grid", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "kubejs:ender_singularity",
    C: "#refinedstorage:crafting_grid",
    P: "refinedstorage:advanced_processor",
  });

  global.genCombinedRecipe(event, Ingredient.of("storagenetwork:master"), Ingredient.of("refinedstorage:advanced_processor"), Item.of("refinedstorage:controller"));
  global.genAlloyingRecipe(event, { item: "minecraft:iron_ingot" }, { tag: "forge:dusts/quartz" }, "refinedstorage:quartz_enriched_iron", 2);

  /* Cable Tiers */
  event.replaceInput({ mod: "cabletiers" }, "minecraft:dragon_head", "industrialforegoing:pink_slime_ingot");
});
