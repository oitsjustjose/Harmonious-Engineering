onEvent("recipes", (event) => {
  event.remove({ output: "refinedstorage:controller" });
  event.remove({ output: "refinedstorage:quartz_enriched_iron" });
  // use id to prevent removing <any color>+dye = light_blue (base)
  event.remove({ id: "refinedstorage:wireless_transmitter" });
  event.remove({ output: "refinedstorage:wireless_grid" });
  event.remove({ output: "refinedstorageaddons:wireless_crafting_grid" });

  event.shaped("refinedstorage:wireless_transmitter", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "appliedenergistics2:quantum_entangled_singularity",
    C: "refinedstorage:machine_casing",
    P: "refinedstorage:advanced_processor",
  });

  event.shaped("refinedstorage:wireless_grid", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "appliedenergistics2:singularity",
    C: "#refinedstorage:grid",
    P: "refinedstorage:advanced_processor",
  });

  event.shaped("refinedstorageaddons:wireless_crafting_grid", ["QSQ", "QCQ", "QPQ"], {
    Q: "refinedstorage:quartz_enriched_iron",
    S: "appliedenergistics2:singularity",
    C: "#refinedstorage:crafting_grid",
    P: "refinedstorage:advanced_processor",
  });

  event.smithing("refinedstorage:controller", "storagenetwork:master", "refinedstorage:advanced_processor");
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
