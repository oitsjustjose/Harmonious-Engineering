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

  global.genCombinedRecipe = (evt, left, right, output) => {
    const leftInput = left.includes("#") ? { tag: left.replace(/#/g, "") } : { item: left };
    const rightInput = right.includes("#") ? { tag: right.replace(/#/g, "") } : { item: right };

    evt.smithing(output, left, right);
    evt.custom({
      type: "mekanism:combining",
      mainInput: { ingredient: leftInput },
      extraInput: { amount: 1, ingredient: rightInput },
      output: { item: output },
    });
  };

  global.genCombinedRecipeSewing = (evt, left, right, output, spoolCt) => {
    const main = JSON.parse(left.toJson());
    const extra = JSON.parse(right.toJson());

    evt.custom({
      type: "improvedbackpacks:sewing",
      first: main.ingredient || main,
      first_count: left.getCount(),
      second: extra.ingredient || extra,
      second_count: right.getCount(),
      spools_count: parseInt(spoolCt),
      result: output.getId(),
    });

    evt.custom({
      type: "mekanism:combining",
      mainInput: main,
      extraInput: extra,
      output: output.toResultJson(),
    });
  };
});
