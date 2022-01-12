onEvent("recipes", (event) => {
  event.remove({ output: "enderstorage:ender_chest" });
  event.remove({ output: "enderstorage:ender_tank" });
  event.remove({ output: "enderstorage:ender_pouch" });

  event.smithing(
    "enderstorage:ender_chest",
    "minecraft:ender_chest",
    "#forge:storage_blocks/enderium"
  );

  event.smithing(
    "enderstorage:ender_tank",
    "#harmeng:basic_tank",
    "#forge:storage_blocks/enderium"
  );

  event.smithing(
    "enderstorage:ender_pouch",
    "improvedbackpacks:large_pocket",
    "#forge:storage_blocks/enderium"
  );
});
