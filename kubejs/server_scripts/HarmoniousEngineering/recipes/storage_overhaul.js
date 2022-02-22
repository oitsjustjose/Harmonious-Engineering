onEvent('recipes', event => {
  const tiers = ['_tier_1', '_tier_2', '_tier_3'];
  const tierItems = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond'];
  const storageTypes = ['chest', 'barrel'];
  const woodTypes = ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak', 'crimson', 'warped'];

  event.remove({output: 'minecraft:barrel'});
  event.remove({output: 'betternether:barrel_crimson'});
  event.remove({output: 'betternether:barrel_warped'});
  event.shapeless('minecraft:barrel', ['#forge:barrels/wooden']);

  // Makes SO's barrels use a more vanilla-like recipe
  woodTypes.forEach(wood => {
    event.remove({output: `storage_overhaul:${wood}_barrel`});
    event.shaped(`storage_overhaul:${wood}_barrel`, ['PSP', 'P P', 'PSP'], {
      P: `#chipped:${wood}_planks`,
      S: `minecraft:${wood}_slab`
    });
  });

  woodTypes.forEach(wood => {
    tiers.forEach((tier, idx) => {
      if (idx < tiers.length - 1) {
        storageTypes.forEach(store => {
          const left = Ingredient.of(`storage_overhaul:${wood}_${store}${tier}`);
          const right = Ingredient.of(tierItems[idx + 1]);
          const out = Item.of(`storage_overhaul:${wood}_${store}${tiers[idx + 1]}`);
          global.genCombinedRecipe(event, left, right, out);
        });
      }
    });
  });

  global.minecraftColors.forEach(color => {
    global.genCombinedRecipe(
      event,
      Ingredient.of(`minecraft:${color}_shulker_box`),
      Ingredient.of('#forge:ingots/iron'),
      Item.of(`storage_overhaul:${color}_shulker_box`)
    );
  });

  global.genCombinedRecipe(
    event,
    Ingredient.of('#forge:chests/wooden'),
    Ingredient.of('#forge:ingots/iron'),
    Item.of('storage_overhaul:oak_chest_tier_1')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('#forge:barrels/wooden'),
    Ingredient.of('#forge:ingots/iron'),
    Item.of('storage_overhaul:oak_barrel_tier_1')
  );
});
