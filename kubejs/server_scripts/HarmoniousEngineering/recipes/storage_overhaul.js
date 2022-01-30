onEvent("recipes", (event) => {
  const tiers = ["", "_tier_1", "_tier_2", "_tier_3"];
  const tierItems = ["", "minecraft:iron_ingot", "minecraft:gold_ingot", "minecraft:diamond"];
  const storageTypes = ["chest", "barrel"];
  const woodTypes = ["oak", "spruce", "birch", "acacia", "jungle", "dark_oak", "crimson", "warped"];

  woodTypes.forEach((wood) => {
    tiers.forEach((tier, idx) => {
      if (idx < tiers.length - 1) {
        storageTypes.forEach((store) => {
          console.log(`storage_overhaul:${wood}_${store}${tier} + ${tierItems[idx + 1]} = storage_overhaul:${wood}_${store}${tiers[idx + 1]}`);

          const left = Ingredient.of(`storage_overhaul:${wood}_${store}${tier}`);
          const right = Ingredient.of(tierItems[idx + 1]);
          const out = Item.of(`storage_overhaul:${wood}_${store}${tiers[idx + 1]}`);
          global.genCombinedRecipe(event, left, right, out);
        });

        global.genCombinedRecipe(event, Ingredient.of("#forge:chests/wooden"), Ingredient.of("#forge:ingots/iron"), Item.of("storage_overhaul:oak_chest_tier_1"));
      }
    });
  });

  global.minecraftColors.forEach((color) => {
    global.genCombinedRecipe(event, Ingredient.of(`minecraft:${color}_shulker_box`), Ingredient.of("#forge:ingots/iron"), Item.of(`storage_overhaul:${color}_shulker_box`));
  });
});
