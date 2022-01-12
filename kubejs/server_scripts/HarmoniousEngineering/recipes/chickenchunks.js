onEvent("recipes", (event) => {
  event.remove({ output: "chickenchunks:chunk_loader" });
  event.remove({ output: "chickenchunks:spot_loader" });

  event.smithing(
    "chickenchunks:chunk_loader",
    "minecraft:enchanting_table",
    "rftoolsbase:infused_enderpearl"
  );

  event.shaped("1x chickenchunks:chunk_loader", ["xxx", "xxx", "xxx"], {
    x: "chickenchunks:spot_loader",
  });
  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        item: "chickenchunks:chunk_loader",
      },
      {
        tag: "harmeng:diamond_tier_saws",
      },
    ],
    result: {
      item: "chickenchunks:spot_loader",
      count: 9,
    },
  });
});
