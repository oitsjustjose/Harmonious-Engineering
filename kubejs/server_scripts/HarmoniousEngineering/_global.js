// priority: 1024

onEvent("server.datapack.first", (_) => {
  global.minecraftColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];

  /* Creates */
  global.genNatProgRecipes = (base, stripped, planks) => {
    const stripLogWithSaw = {
      type: "natural-progression:damage_tools",
      ingredients: [
        {
          tag: "natural-progression:saw",
        },
        {
          item: base,
        },
      ],
      result: {
        item: stripped,
      },
    };

    const planksFromStrippedAxe = {
      type: "natural-progression:damage_tools",
      ingredients: [
        {
          item: stripped,
        },
        {
          tag: "natural-progression:axe",
        },
      ],
      result: {
        item: planks,
        count: 1,
      },
    };

    const planksFromStrippedSaw = {
      type: "natural-progression:damage_tools",
      ingredients: [
        {
          item: stripped,
        },
        {
          tag: "natural-progression:saw",
        },
      ],
      result: {
        item: planks,
        count: 4,
      },
    };

    return [stripLogWithSaw, planksFromStrippedAxe, planksFromStrippedSaw];
  };
});
