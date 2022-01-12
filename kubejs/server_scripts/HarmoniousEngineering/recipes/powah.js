onEvent("recipes", (event) => {
  event.remove({ id: "powah:crafting/cable_basic" });
  event.remove({ id: "powah:crafting/cable_basic_2" });
  event.remove({ id: "powah:crafting/cable_blazing" });
  event.remove({ id: "powah:crafting/cable_blazing_2" });
  event.remove({ id: "powah:crafting/cable_hardened" });
  event.remove({ id: "powah:crafting/cable_hardened_2" });
  event.remove({ id: "powah:crafting/cable_niotic" });
  event.remove({ id: "powah:crafting/cable_niotic_2" });
  event.remove({ id: "powah:crafting/cable_nitro" });
  event.remove({ id: "powah:crafting/cable_nitro_2" });
  event.remove({ id: "powah:crafting/cable_spirited" });
  event.remove({ id: "powah:crafting/cable_spirited_2" });
  event.remove({ id: "powah:crafting/cable_starter" });
  event.remove({ id: "powah:crafting/dielectric_paste_2" });
  event.remove({ id: "powah:crafting/dielectric_rod_h" });
  event.remove({ id: "powah:crafting/ender_cell_starter" });
  event.remove({ id: "powah:crafting/ender_gate_basic" });
  event.remove({ id: "powah:crafting/ender_gate_blazing" });
  event.remove({ id: "powah:crafting/ender_gate_hardened" });
  event.remove({ id: "powah:crafting/ender_gate_niotic" });
  event.remove({ id: "powah:crafting/ender_gate_nitro" });
  event.remove({ id: "powah:crafting/ender_gate_spirited" });
  event.remove({ id: "powah:crafting/ender_gate_starter" });
  event.remove({ id: "powah:crafting/magmator_basic" });
  event.remove({ id: "powah:crafting/magmator_blazing" });
  event.remove({ id: "powah:crafting/magmator_hardened" });
  event.remove({ id: "powah:crafting/magmator_niotic" });
  event.remove({ id: "powah:crafting/magmator_nitro" });
  event.remove({ id: "powah:crafting/magmator_spirited" });
  event.remove({ id: "powah:crafting/magmator_starter" });
  event.remove({ id: "powah:crafting/reactor_starter" });
  event.remove({ id: "powah:crafting/solar_panel_basic" });
  event.remove({ id: "powah:crafting/solar_panel_blazing" });
  event.remove({ id: "powah:crafting/solar_panel_hardened" });
  event.remove({ id: "powah:crafting/solar_panel_niotic" });
  event.remove({ id: "powah:crafting/solar_panel_nitro" });
  event.remove({ id: "powah:crafting/solar_panel_spirited" });
  event.remove({ id: "powah:crafting/solar_panel_starter" });
  event.remove({ id: "powah:crafting/thermo_generator_basic" });
  event.remove({ id: "powah:crafting/thermo_generator_blazing" });
  event.remove({ id: "powah:crafting/thermo_generator_hardened" });
  event.remove({ id: "powah:crafting/thermo_generator_niotic" });
  event.remove({ id: "powah:crafting/thermo_generator_nitro" });
  event.remove({ id: "powah:crafting/thermo_generator_spirited" });
  event.remove({ id: "powah:crafting/thermo_generator_starter" });

  event.remove({ id: "powah:crafting/dielectric_paste" });
  event.remove({ id: "powah:crafting/dielectric_rod" });

  event.custom({
    type: "natural-progression:damage_tools",
    ingredients: [
      {
        tag: "forge:silicon",
      },
      {
        tag: "forge:dusts/coal",
      },
      {
        tag: "forge:dusts/coal",
      },
      {
        tag: "forge:dusts/coal",
      },
      {
        item: "create:super_glue",
      },
      {
        tag: "appliedenergistics2:knife",
      },
    ],
    result: {
      item: "powah:dielectric_paste",
      count: 8,
    },
  });

  event.shaped("64x powah:dielectric_rod", ["PSP", "PSP", "PSP"], {
    P: "powah:dielectric_paste",
    S: "#forge:ingots/steel",
  });
});
