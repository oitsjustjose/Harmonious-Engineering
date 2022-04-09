onEvent('recipes', event => {
  const tiers = ['_tier_1', '_tier_2', '_tier_3'];
  const tierItems = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond'];
  const storageTypes = ['chest', 'barrel'];
  const woodTypes = ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak', 'crimson', 'warped'];

  // SO Chest -> Quark Chest
  woodTypes.forEach(x => {
    event.remove({output: `storage_overhaul:${x}_chest`});
    event.shapeless(`quark:${x}_chest`, [`storage_overhaul:${x}_chest`]);
  });

  event.remove({output: 'minecraft:barrel'});
  event.remove({output: 'betternether:barrel_crimson'});
  event.remove({output: 'betternether:barrel_warped'});
  event.shapeless('minecraft:barrel', ['#forge:barrels/wooden']);

  // Makes SO's barrels use a more vanilla-like recipe
  woodTypes.forEach(wood => {
    event.remove({output: `storage_overhaul:${wood}_barrel`});
    event.shaped(`storage_overhaul:${wood}_barrel`, ['PSP', 'P P', 'PSP'], {
      P: `#chipped:${wood}_planks`,
      S: `minecraft:${wood}_slab`,
    });
  });

  woodTypes.forEach(wood => {
    storageTypes.forEach(store => {
      const l1 = store === 'barrel' && Ingredient.of(`storage_overhaul:${wood}_${store}`);
      const l2 = store === 'chest' && wood !== 'oak' && Ingredient.of(`quark:${wood}_chest`);
      const r = Ingredient.of('minecraft:iron_ingot');
      const o = Item.of(`storage_overhaul:${wood}_${store}_tier_1`);
      l1 && global.genCombinedRecipe(event, l1, r, o);
      l2 && global.genCombinedRecipe(event, l2, r, o);
    });

    tiers.forEach((tier, idx) => {
      if (idx < tiers.length - 1) {
        storageTypes.forEach(store => {
          const l = Ingredient.of(`storage_overhaul:${wood}_${store}${tier}`);
          const r = Ingredient.of(tierItems[idx + 1]);
          const o = Item.of(`storage_overhaul:${wood}_${store}${tiers[idx + 1]}`);
          global.genCombinedRecipe(event, l, r, o);
        });
      }
    });
  });

  // Support for making advanced shulkers with dye
  global.minecraftColors.forEach(color => {
    global.genCombinedRecipe(
      event,
      Ingredient.of(`minecraft:${color}_shulker_box`),
      Ingredient.of('#forge:ingots/iron'),
      Item.of(`storage_overhaul:${color}_shulker_box`)
    );
  });

  // Catch-all for upgrading non-supported chests/barrels to Tier 1.
  global.genCombinedRecipe(
    event,
    Ingredient.of('minecraft:chest'),
    Ingredient.of('#forge:ingots/iron'),
    Item.of('storage_overhaul:oak_chest_tier_1')
  );

  global.genCombinedRecipe(
    event,
    Ingredient.of('minecraft:barrel'),
    Ingredient.of('#forge:ingots/iron'),
    Item.of('storage_overhaul:spruce_barrel_tier_1')
  );
});
