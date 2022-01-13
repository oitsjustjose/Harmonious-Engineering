onEvent("recipes", (event) => {
  const modid = "immersiveengineering";
  event.remove({ id: `${modid}:crafting/hammercrushing_aluminum` });
  event.remove({ id: `${modid}:crafting/hammercrushing_ardite` });
  event.remove({ id: `${modid}:crafting/hammercrushing_cobalt` });
  event.remove({ id: `${modid}:crafting/hammercrushing_copper` });
  event.remove({ id: `${modid}:crafting/hammercrushing_gold` });
  event.remove({ id: `${modid}:crafting/hammercrushing_iron` });
  event.remove({ id: `${modid}:crafting/hammercrushing_lead` });
  event.remove({ id: `${modid}:crafting/hammercrushing_nickel` });
  event.remove({ id: `${modid}:crafting/hammercrushing_osmium` });
  event.remove({ id: `${modid}:crafting/hammercrushing_platinum` });
  event.remove({ id: `${modid}:crafting/hammercrushing_silver` });
  event.remove({ id: `${modid}:crafting/hammercrushing_tin` });
  event.remove({ id: `${modid}:crafting/hammercrushing_tungsten` });
  event.remove({ id: `${modid}:crafting/hammercrushing_uranium` });
  event.remove({ id: `${modid}:crafting/hammercrushing_zinc` });

  event.remove({ id: `${modid}:crafting/plate_aluminum_hammering` });
  event.remove({ id: `${modid}:crafting/plate_constantan_hammering` });
  event.remove({ id: `${modid}:crafting/plate_copper_hammering` });
  event.remove({ id: `${modid}:crafting/plate_electrum_hammering` });
  event.remove({ id: `${modid}:crafting/plate_gold_hammering` });
  event.remove({ id: `${modid}:crafting/plate_iron_hammering` });
  event.remove({ id: `${modid}:crafting/plate_lead_hammering` });
  event.remove({ id: `${modid}:crafting/plate_nickel_hammering` });
  event.remove({ id: `${modid}:crafting/plate_silver_hammering` });
  event.remove({ id: `${modid}:crafting/plate_steel_hammering` });
  event.remove({ id: `${modid}:crafting/plate_uranium_hammering` });

  event.remove({ output: `${modid}:alloybrick` });
  event.remove({ output: `${modid}:blastbrick` });
  event.remove({ output: `${modid}:cokebrick` });
  event.remove({ output: `${modid}:hammer` });
  event.remove({ output: `${modid}:watermill` });
  event.remove({ output: `${modid}:windmill` });

  event.remove({ output: `${modid}:hemp_fabric` });
  event.remove({ output: `${modid}:windmill_sail` });

  event.smithing(
    "immersiveengineering:alloybrick",
    "createdeco:dean_bricks",
    "minecraft:sandstone"
  );

  event.shaped("27x immersiveengineering:blastbrick", ["CHC", "BSB", "CBC"], {
    C: "minecraft:clay",
    B: "createdeco:dusk_bricks",
    S: "create:blaze_burner",
    H: "create:chute",
  });

  event.shaped("27x immersiveengineering:cokebrick", ["CHC", "BSB", "CBC"], {
    C: "minecraft:clay",
    B: "createdeco:blue_bricks",
    H: "create:chute",
    S: "createaddition:crude_burner",
  });

  event.shaped("1x immersiveengineering:hammer", [" IR", " SI", "S  "], {
    S: "#forge:rods/wooden",
    I: "#forge:plates/iron",
    R: "immersiveengineering:hemp_fiber",
  });

  event.smithing(
    "immersiveengineering:watermill",
    "create:large_cogwheel",
    "immersiveengineering:waterwheel_segment"
  );

  event.smithing(
    "immersiveengineering:windmill",
    "create:large_cogwheel",
    "immersiveengineering:windmill_sail"
  );

  event.custom({
    type: "improvedbackpacks:sewing",
    spools_count: 1,
    first: {
      item: `${modid}:stick_treated`,
    },
    first_count: 1,
    second: {
      item: `${modid}:hemp_fiber`,
    },
    second_count: 8,
    result: `${modid}:hemp_fabric`,
  });

  event.custom({
    type: "improvedbackpacks:sewing",
    spools_count: 1,
    first: {
      item: `${modid}:hemp_fabric`,
    },
    first_count: 6,
    second: {
      item: `${modid}:stick_treated`,
    },
    second_count: 1,
    result: `${modid}:windmill_sail`,
  });
});
