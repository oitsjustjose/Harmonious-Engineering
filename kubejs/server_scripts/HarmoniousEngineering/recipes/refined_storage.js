onEvent("recipes", (event) => {
  event.remove({ output: "refinedstorage:controller" });
  event.remove({ output: "refinedstorage:quartz_enriched_iron" });

  event.smithing(
    "refinedstorage:controller",
    "storagenetwork:master",
    "refinedstorage:advanced_processor"
  );

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
