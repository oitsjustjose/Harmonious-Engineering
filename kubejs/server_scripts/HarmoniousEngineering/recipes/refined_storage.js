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
  event.custom({
    type: "mekanism:combining",
    mainInput: {
      ingredient: {
        item: "minecraft:iron_ingot",
      },
    },
    extraInput: {
      ingredient: {
        tag: "forge:dusts/quartz",
      },
    },
    output: {
      item: "refinedstorage:quartz_enriched_iron",
      count: 2,
    },
  });
});
