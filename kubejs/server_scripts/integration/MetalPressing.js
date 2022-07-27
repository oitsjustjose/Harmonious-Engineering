const ieHammerRecipes = event => {
  [
    'hammercrushing_aluminum',
    'hammercrushing_ardite',
    'hammercrushing_cobalt',
    'hammercrushing_copper',
    'hammercrushing_gold',
    'hammercrushing_iron',
    'hammercrushing_lead',
    'hammercrushing_nickel',
    'hammercrushing_osmium',
    'hammercrushing_platinum',
    'hammercrushing_silver',
    'hammercrushing_tin',
    'hammercrushing_tungsten',
    'hammercrushing_uranium',
    'hammercrushing_zinc',
    'plate_aluminum_hammering',
    'plate_constantan_hammering',
    'plate_copper_hammering',
    'plate_electrum_hammering',
    'plate_gold_hammering',
    'plate_iron_hammering',
    'plate_lead_hammering',
    'plate_nickel_hammering',
    'plate_silver_hammering',
    'plate_steel_hammering',
    'plate_uranium_hammering',
    'raw_hammercrushing_aluminum',
    'raw_hammercrushing_ardite',
    'raw_hammercrushing_cobalt',
    'raw_hammercrushing_copper',
    'raw_hammercrushing_gold',
    'raw_hammercrushing_iron',
    'raw_hammercrushing_lead',
    'raw_hammercrushing_nickel',
    'raw_hammercrushing_osmium',
    'raw_hammercrushing_platinum',
    'raw_hammercrushing_silver',
    'raw_hammercrushing_tin',
    'raw_hammercrushing_tungsten',
    'raw_hammercrushing_uranium',
    'raw_hammercrushing_zinc',
  ].forEach(recipe => {
    event.remove({id: `immersiveengineering:crafting/${recipe}`});
  });
};

const plates = event => {
  // Make plates universally craftable
  [
    'thermal:iron_plate',
    'thermal:gold_plate',
    'thermal:copper_plate',
    'thermal:netherite_plate',
    'thermal:tin_plate',
    'thermal:lead_plate',
    'thermal:silver_plate',
    'thermal:nickel_plate',
    'thermal:bronze_plate',
    'thermal:electrum_plate',
    'thermal:invar_plate',
    'thermal:constantan_plate',
    'thermal:signalum_plate',
    'thermal:lumium_plate',
    'thermal:enderium_plate',
    'create:brass_sheet',
    global.ie('plate_steel'),
    global.ie('plate_aluminum'),
  ].forEach(x => {
    const ingot = x.split(':')[1].replace(/plate/g, '').replace(/sheet/g, '').replace(/_/g, '');
    event.remove({output: x});

    event.recipes.thermal.press(x, `#forge:ingots/${ingot}`);
    event.recipes.createPressing(x, `#forge:ingots/${ingot}`);
    event.recipes.immersiveengineeringMetalPress(
      x,
      `#forge:ingots/${ingot}`,
      global.ie('mold_plate')
    );
  });
};

const gears = event => {
  [
    'thermal:iron_gear',
    'thermal:gold_gear',
    'thermal:copper_gear',
    'thermal:netherite_gear',
    'thermal:tin_gear',
    'thermal:lead_gear',
    'thermal:silver_gear',
    'thermal:nickel_gear',
    'thermal:bronze_gear',
    'thermal:electrum_gear',
    'thermal:invar_gear',
    'thermal:constantan_gear',
    'thermal:signalum_gear',
    'thermal:lumium_gear',
    'thermal:enderium_gear',
    'pneumaticcraft:compressed_iron_gear',
  ].forEach(x => {
    const ingot = x.split(':')[1].replace(/_gear/g, '');
    event.remove({output: x});

    event.recipes.thermal.press(x, [`4x #forge:ingots/${ingot}`, 'thermal:press_gear_die']);
    event.recipes.immersiveengineeringMetalPress(
      x,
      `4x #forge:ingots/${ingot}`,
      global.ie('mold_gear')
    );
  });

  [
    'thermal:diamond_gear',
    'thermal:lapis_gear',
    'thermal:emerald_gear',
    'thermal:quartz_gear',
  ].forEach(x => event.remove({output: x}));

  event.recipes.thermal.press('thermal:diamond_gear', [
    `4x minecraft:diamond`,
    'thermal:press_gear_die',
  ]);

  event.recipes.immersiveengineeringMetalPress(
    'thermal:diamond_gear',
    `4x minecraft:diamond`,
    global.ie('mold_gear')
  );
};

const wires = event => {
  // Aluminum Wire in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:wire_aluminum', [
    '#forge:ingots/aluminum',
    global.ie('mold_wire'),
  ]);

  // Copper Wire in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:wire_copper', [
    '#forge:ingots/copper',
    global.ie('mold_wire'),
  ]);

  // Electrum Wire in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:wire_electrum', [
    '#forge:ingots/electrum',
    global.ie('mold_wire'),
  ]);

  // Lead Wire in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:wire_lead', [
    '#forge:ingots/lead',
    global.ie('mold_wire'),
  ]);

  // Steel Wire in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:wire_steel', [
    '#forge:ingots/steel',
    global.ie('mold_wire'),
  ]);

  // Bullet Casing in Thermal Multiservo Press
  event.recipes.thermal.press('2x immersiveengineering:empty_casing', [
    '#forge:ingots/copper',
    global.ie('mold_bullet_casing'),
  ]);
};

onEvent('recipes', event => {
  ieHammerRecipes(event);
  plates(event);
  gears(event);
  wires(event);

  // Bottler compatibility to make Treated Planks easier
  event.custom({
    type: 'thermal:bottler',
    ingredient: [{tag: 'minecraft:planks'}, {fluid: 'immersiveengineering:creosote', amount: 125}],
    result: [{item: 'immersiveengineering:treated_wood_horizontal'}],
  });
});
