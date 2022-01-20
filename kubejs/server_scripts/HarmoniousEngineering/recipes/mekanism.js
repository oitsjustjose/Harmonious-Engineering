onEvent("recipes", (event) => {
  event.remove({ output: "mekanism:mekasuit_bodyarmor" });
  event.remove({ output: "mekanism:mekasuit_boots" });
  event.remove({ output: "mekanism:mekasuit_helmet" });
  event.remove({ output: "mekanism:mekasuit_pants" });
  event.remove({ output: "mekanism:meka_tool" });
  event.remove({ output: "mekanism:metallurgic_infuser" });
  event.remove({ output: "mekanism:modification_station" });
  event.remove({ output: "mekanism:module_attack_amplification_unit" });
  event.remove({ output: "mekanism:module_base" });
  event.remove({ output: "mekanism:module_charge_distribution_unit" });
  event.remove({ output: "mekanism:module_dosimeter_unit" });
  event.remove({ output: "mekanism:module_electrolytic_breathing_unit" });
  event.remove({ output: "mekanism:module_energy_unit" });
  event.remove({ output: "mekanism:module_excavation_escalation_unit" });
  event.remove({ output: "mekanism:module_farming_unit" });
  event.remove({ output: "mekanism:module_hydraulic_propulsion_unit" });
  event.remove({ output: "mekanism:module_inhalation_purification_unit" });
  event.remove({ output: "mekanism:module_jetpack_unit" });
  event.remove({ output: "mekanism:module_locomotive_boosting_unit" });
  event.remove({ output: "mekanism:module_magnetic_attraction_unit" });
  event.remove({ output: "mekanism:module_nutritional_injection_unit" });
  event.remove({ output: "mekanism:module_radiation_shielding_unit" });
  event.remove({ output: "mekanism:module_silk_touch_unit" });
  event.remove({ output: "mekanism:module_teleportation_unit" });
  event.remove({ output: "mekanism:module_vein_mining_unit" });
  event.remove({ output: "mekanism:module_vision_enhancement_unit" });
  event.remove({ output: "mekanism:steel_casing" });
  event.remove({ output: "mekanism:teleportation_core" });

  event.shaped("1x mekanism:teleportation_core", ["LAL", "GSG", "LAL"], {
    L: "#forge:gems/lapis",
    G: "#forge:ingots/gold",
    A: "mekanism:alloy_atomic",
    S: "appliedenergistics2:quantum_entangled_singularity",
  });

  [("copper", "lead", "osmium", "tin", "uranium")].forEach((ingot) => {
    event.remove({
      id: `mekanism:processing/${ingot}/ingot/from_ore_blasting`,
    });
    event.remove({
      id: `mekanism:processing/${ingot}/ingot/from_ore_smelting`,
    });
  });

  ["helmet", "chestplate", "leggings", "boots"].forEach((armor) => {
    event.remove({ id: `mekanismtools:lapis_lazuli/armor/${armor}` });
    event.remove({ id: `mekanismtools:osmium/armor/${armor}` });
  });

  ["sword", "pickaxe", "shovel", "axe", "hoe"].forEach((tool) => {
    event.remove({ id: `mekanismtools:lapis_lazuli/tools/${tool}` });
    event.remove({ id: `mekanismtools:osmium/tools/${tool}` });
  });

  event.shaped("1x mekanism:mekasuit_bodyarmor", ["PCP", "P#P", "EEE"], {
    C: "projectred-integration:bus_transceiver_gate",
    "#": "#harmeng:meka/crafting_chest",
    P: "#harmeng:meka/filler_1",
    E: "#harmeng:meka/filler_2",
  });

  event.shaped("1x mekanism:mekasuit_boots", ["PCP", "P#P", "EEE"], {
    C: "projectred-integration:bus_transceiver_gate",
    "#": "#harmeng:meka/crafting_boots",
    P: "#harmeng:meka/filler_1",
    E: "#harmeng:meka/filler_2",
  });

  event.shaped("1x mekanism:mekasuit_helmet", ["PCP", "P#P", "EEE"], {
    C: "projectred-integration:bus_transceiver_gate",
    "#": "#harmeng:meka/crafting_helm",
    P: "#harmeng:meka/filler_1",
    E: "#harmeng:meka/filler_2",
  });

  event.shaped("1x mekanism:mekasuit_pants", ["PCP", "P#P", "EEE"], {
    C: "projectred-integration:bus_transceiver_gate",
    "#": "#harmeng:meka/crafting_legs",
    P: "#harmeng:meka/filler_1",
    E: "#harmeng:meka/filler_2",
  });

  event.shaped("1x mekanism:meka_tool", [" E#", "PoE", "CP "], {
    C: "projectred-integration:bus_transceiver_gate",
    "#": "#harmeng:meka/crafting_tool_1",
    o: "#harmeng:meka/crafting_tool_2",
    E: "#harmeng:meka/filler_1",
    P: "#harmeng:meka/filler_2",
  });

  event.shaped("1x mekanism:metallurgic_infuser", ["LBR", "LCR", "LLR"], {
    C: "mekanism:steel_casing",
    R: "minecraft:iron_bars",
    B: "minecraft:blast_furnace",
    L: "#forge:sheetmetals/lead",
  });

  event.shaped("1x mekanism:modification_station", ["AWA", "CTC", "PPP"], {
    C: "projectred-integration:bus_transceiver_gate",
    W: "#forge:chests/wooden",
    P: "#harmeng:meka/filler_1",
    A: "#harmeng:meka/filler_2",
    T: "#forge:workbench",
  });

  event.shaped("1x mekanism:module_attack_amplification_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "minecraft:iron_sword",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("2x mekanism:module_base", ["NIN", "I#I", "NIN"], {
    I: "#forge:ingots/tin",
    N: "#forge:nuggets/bronze",
    "#": "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_charge_distribution_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:basic_induction_provider",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_dosimeter_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "mekanism:dosimeter",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_electrolytic_breathing_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "mekanism:electrolytic_core",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_energy_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "mekanism:basic_induction_cell",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_excavation_escalation_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "minecraft:iron_pickaxe",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_farming_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "minecraft:iron_hoe",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_hydraulic_propulsion_unit", ["I#I", "EAE", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:free_runners",
    E: "mekanism:energy_tablet",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_inhalation_purification_unit", ["I#I", "IAI", "PoP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:hazmat_mask",
    P: "powah:capacitor_nitro",
    o: "mekanism:scuba_mask",
  });

  event.shaped("1x mekanism:module_jetpack_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:jetpack",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_locomotive_boosting_unit", ["I#I", "EAE", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "minecraft:diamond_leggings",
    E: "mekanism:energy_tablet",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_magnetic_attraction_unit", ["I#I", "CAC", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "minecraft:iron_bars",
    C: "#forge:circuits/elite",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_nutritional_injection_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:canteen",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_radiation_shielding_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/advanced",
    A: "mekanism:module_base",
    "#": "#forge:storage_blocks/lead",
    P: "mekanism:hdpe_sheet",
  });

  event.shaped("1x mekanism:module_silk_touch_unit", ["I#I", "WAW", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "mekanism:block_refined_glowstone",
    P: "powah:capacitor_nitro",
    W: "minecraft:diamond_pickaxe",
  });

  event.shaped("1x mekanism:module_teleportation_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/ultimate",
    A: "mekanism:module_base",
    "#": "mekanism:teleportation_core",
    P: "#forge:pellets/antimatter",
  });

  event.shaped("1x mekanism:module_vein_mining_unit", ["I#I", "xAs", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "minecraft:diamond_pickaxe",
    x: "minecraft:diamond_axe",
    s: "minecraft:diamond_shovel",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:module_vision_enhancement_unit", ["I#I", "IAI", "PPP"], {
    I: "#forge:alloys/elite",
    A: "mekanism:module_base",
    "#": "minecraft:emerald",
    P: "powah:capacitor_nitro",
  });

  event.shaped("1x mekanism:steel_casing", ["SGS", "GAG", "SGS"], {
    S: "#forge:ingots/steel",
    G: "#forge:glass",
    A: "thermal:upgrade_augment_3",
  });
});
