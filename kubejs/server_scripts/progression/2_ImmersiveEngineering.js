// Gate IE behind Create Contraptions

onEvent('recipes', event => {
  const preheater = Item.of('immersiveengineering:blastfurnace_preheater');
  // Uncraft preheaters
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of('immersiveengineering:furnace_heater').withChance(0.75),
        Item.of('immersiveengineering:sheetmetal_iron').withChance(0.2),
        Item.of('#forge:plates/iron').withChance(0.05),
      ],
      preheater,
      [
        event.recipes.create.pressing(preheater, preheater).processingTime(75),
        event.recipes.create.cutting(preheater, preheater).processingTime(100),
      ]
    )
    .transitionalItem(preheater)
    .loops(3);

  // Make electron tubes tolerable
  event.remove({id: 'immersiveengineering:blueprint/graphite_electrode'});
  event.remove({id: 'immersiveengineering:metalpress/electrode'});
  event.recipes.immersiveengineeringMetalPress(
    Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0, Unbreakable:1}'),
    `4x #forge:ingots/hop_graphite`,
    'immersiveengineering:mold_rod'
  );
  event.custom({
    type: 'immersiveengineering:blueprint',
    inputs: [{count: 4, base_ingredient: {tag: 'forge:ingots/hop_graphite'}}],
    category: 'electrode',
    result: {item: 'immersiveengineering:graphite_electrode', nbt: '{graphDmg:0, Unbreakable:1}'},
  });

  event.remove({output: 'immersiveengineering:hammer'});
  event.shaped('kubejs:crude_hammer', [' AC', ' SA', 'S  '], {
    A: 'create:andesite_alloy',
    C: '#forge:ingots/compressed_iron',
    S: 'minecraft:stick',
  });

  event.recipes.create
    .sequenced_assembly(Item.of('immersiveengineering:hammer'), 'kubejs:crude_hammer', [
      event.recipes.create.pressing('kubejs:incomplete_hammer', 'kubejs:incomplete_hammer'),
      event.recipes.create.pressing('kubejs:incomplete_hammer', 'kubejs:incomplete_hammer'),
      event.recipes.create.cutting('kubejs:incomplete_hammer', 'kubejs:incomplete_hammer'),
    ])
    .transitionalItem('kubejs:incomplete_hammer')
    .loops(2);

  event.remove({id: 'immersiveengineering:crafting/redstone_acid'});
  event.custom({
    type: 'pneumaticcraft:thermo_plant',
    item_input: {tag: 'forge:dusts/redstone'},
    fluid_input: {
      type: 'pneumaticcraft:fluid',
      tag: 'pneumaticcraft:etching_acid',
      amount: 1000,
    },
    fluid_output: {
      fluid: 'immersiveengineering:redstone_acid',
      amount: 1000,
    },
    temperature: {min_temp: 373},
    exothermic: false,
  });

  event.remove({id: 'immersiveengineering:mixer/redstone_acid'});
  event.custom({
    type: 'immersiveengineering:mixer',
    inputs: [{tag: 'forge:dusts/redstone'}],
    result: {fluid: 'immersiveengineering:redstone_acid', amount: 250},
    fluid: {tag: 'pneumaticcraft:etching_acid', amount: 250},
    energy: 1600,
  });

  event.remove({output: 'immersiveengineering:sawblade'});
  event.shaped('immersiveengineering:sawblade', ['PIP', 'I I', 'PIP'], {
    P: '#forge:plates/iron',
    I: '#forge:ingots/compressed_iron',
  });

  event.replaceInput(
    {output: 'immersiveengineering:drillhead_iron'},
    'minecraft:iron_block',
    '#forge:storage_blocks/compressed_iron'
  );

  event.remove({id: '/immersiveengineering:arcfurnace/ore_*/'});
  event.remove({id: '/immersiveengineering:arcfurnace/raw_ore_*/'});
  event.remove({id: 'immersiveengineering:arcfurnace/dust_uranium'});
  event.remove({id: 'immersiveengineering:alloysmelter/invar'});
  event.remove({id: 'immersiveengineering:alloysmelter/electrum'});
  event.remove({output: 'immersiveengineering:windmill'});
  event.remove({output: 'immersiveengineering:windmill_sail'});
  event.remove({output: 'immersiveengineering:windmill_blade'});
  event.remove({output: 'immersiveengineering:watermill'});
  event.remove({output: 'immersiveengineering:waterwheel_segment'});

  /* Coke Dust Recipes for other machines */
  event.recipes.createCrushing('immersiveengineering:dust_coke', ['#forge:coal_coke']);
  event.recipes.createCrushing(`9x ${'immersiveengineering:dust_coke'}`, [
    '#forge:storage_blocks/coal_coke',
  ]);
  event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke');
  event.recipes.thermal.pulverizer(
    `9x ${'immersiveengineering:dust_coke'}`,
    '#forge:storage_blocks/coal_coke'
  );

  // Restore Plant Oil recipe that somehow went missing....
  event.custom({
    type: 'immersiveengineering:squeezer',
    fluid: {fluid: 'immersiveengineering:plantoil', amount: 20},
    input: {tag: 'forge:seeds'},
    energy: 6400,
  });

  [
    {id: 'minecraft:silk_touch', lvl: 1, cost: 16},
    {id: 'minecraft:fortune', lvl: 1, cost: 6},
    {id: 'minecraft:fortune', lvl: 2, cost: 12},
    {id: 'minecraft:fortune', lvl: 3, cost: 18},
  ].forEach(enchantment =>
    [
      {item: 'immersiveengineering:drill'},
      // {item: 'immersiveengineering:drill', nbt: {}},
      // {item: 'immersiveengineering:drill', nbt: {singleBlockMode: 0}},
      // {item: 'immersiveengineering:drill', nbt: {singleBlockMode: 1}},
    ].forEach(drill => {
      event.custom({
        type: 'vtweaks:anvil',
        left: drill,
        right: {
          item: 'minecraft:enchanted_book',
          nbt: {StoredEnchantments: [{id: enchantment.id, lvl: enchantment.lvl}]},
        },
        cost: enchantment.cost,
        result: {
          item: 'immersiveengineering:drill',
          nbt: {Enchantments: [{id: enchantment.id, lvl: enchantment.lvl}]},
        },
      });
    })
  );
});
