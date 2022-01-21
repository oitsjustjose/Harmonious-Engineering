// priority: 0

onEvent("item.registry", (event) => {
  event.create("cloth_covered_windmill_blade").texture("kubejs:item/cloth_covered_windmill_blade");
  event.create("ender_singularity").texture("kubejs:item/ender_singularity");
});

onEvent("item.modification", (event) => {
  event.modify("corail_woodcutter:acacia_woodcutter", (item) => {
    item.maxStackSize = 1;
  });
});
