onEvent('recipes', event => {
  // Lots of wonky dynamic logic for reducing hundreds of JSON files to a few hundred lines ;)
  [
    'atmospheric:aspen',
    'atmospheric:grimwood',
    'atmospheric:kousa',
    'atmospheric:morado',
    'atmospheric:rosewood',
    'atmospheric:yucca',
    'autumnity:maple',
    'betterendforge:dragon_tree',
    'betterendforge:end_lotus',
    'betterendforge:helix_tree',
    'betterendforge:jellyshroom',
    'betterendforge:lacugrove',
    'betterendforge:lucernia',
    'betterendforge:mossy_glowshroom',
    'betterendforge:pythadendron',
    'betterendforge:tenanea',
    'betterendforge:umbrella_tree',
    'enhanced_mushrooms:brown_mushroom',
    'enhanced_mushrooms:glowshroom',
    'enhanced_mushrooms:red_mushroom',
    'outer_end:azure',
    'tconstruct:bloodshroom',
    'tconstruct:greenheart',
    'tconstruct:skyroot',
    'traverse:fir',
    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river',
  ].forEach(wood => {
    [
      {type: 'button', qty: 4},
      {type: 'door', qty: 1},
      {type: 'fence_gate', qty: 1},
      {type: 'fence', qty: 1},
      {type: 'gate', qty: 1},
      {type: 'pressure_plate', qty: 3},
      {type: 'sign', qty: 1},
      {type: 'slab', qty: 2},
      {type: 'stairs', qty: 1},
      {type: 'trapdoor', qty: 2},
    ].forEach(x => {
      const {type, qty} = x;

      // Checks that the generated item exists
      if (`${Item.of(`${wood}_${type}`)}` !== 'Item.empty') {
        event.custom({
          type: 'corail_woodcutter:woodcutting',
          ingredient: {
            item: `${wood}_planks`,
          },
          result: `${wood}_${type}`,
          count: qty,
        });
      }
    });
  });

  [
    'atmospheric:aspen_logs',
    'atmospheric:grimwood_logs',
    'atmospheric:morado_logs',
    'atmospheric:rosewood_logs',
    'atmospheric:yucca_logs',
    'autumnity:maple_logs',
    'enhanced_mushrooms:brown_mushroom_stems',
    'enhanced_mushrooms:glowshroom_stems',
    'enhanced_mushrooms:red_mushroom_stems',
    'upgrade_aquatic:driftwood_logs',
    'upgrade_aquatic:river_logs',
  ].forEach(wood => {
    const [_, path] = wood.split(':');
    [
      {type: 'beam', qty: 1},
      {type: 'palisade', qty: 4},
    ].forEach(x => {
      const {type, qty} = x;

      const output = `decorative_blocks_abnormals:${path}_${type}`
        .replace('_logs', '')
        .replace('_stems', '');

      if (`${Item.of(output)}` !== 'Item.empty') {
        event.custom({
          type: 'corail_woodcutter:woodcutting',
          ingredient: {tag: wood},
          result: output,
          count: qty,
        });
      }
    });
  });

  [
    'atmospheric:aspen_planks',
    'atmospheric:grimwood_planks',
    'atmospheric:morado_planks',
    'atmospheric:rosewood_planks',
    'atmospheric:yucca_planks',
    'autumnity:maple_planks',
    'enhanced_mushrooms:brown_mushroom_planks',
    'enhanced_mushrooms:glowshroom_planks',
    'enhanced_mushrooms:red_mushroom_planks',
    'upgrade_aquatic:driftwood_planks',
    'upgrade_aquatic:river_planks',
  ].forEach(wood => {
    const [_, path] = wood.split(':');
    [
      {type: 'seat', qty: 1},
      {type: 'support', qty: 1},
    ].forEach(x => {
      const {type, qty} = x;
      const output = `decorative_blocks_abnormals:${path}_${type}`.replace('_planks', '');

      if (`${Item.of(output)}` !== 'Item.empty') {
        event.custom({
          type: 'corail_woodcutter:woodcutting',
          ingredient: {item: wood},
          result: output,
          count: qty,
        });
      }
    });
  });

  /* IE Compat */
  [
    {result: 'immersiveengineering:treated_wood_horizontal', count: 1},
    {result: 'immersiveengineering:slab_treated_wood_horizontal', count: 2},
    {result: 'immersiveengineering:stairs_treated_wood_horizontal', count: 1},
    {result: 'immersiveengineering:treated_wood_vertical', count: 1},
    {result: 'immersiveengineering:slab_treated_wood_vertical', count: 2},
    {result: 'immersiveengineering:stairs_treated_wood_vertical', count: 1},
    {result: 'immersiveengineering:treated_wood_packaged', count: 1},
    {result: 'immersiveengineering:slab_treated_wood_packaged', count: 2},
    {result: 'immersiveengineering:stairs_treated_wood_packaged', count: 1},
    {result: 'immersiveengineering:treated_fence', count: 1},
    {result: 'immersiveengineering:treated_scaffold', count: 1},
    {result: 'immersiveengineering:waterwheel_segment', count: 1},
    {result: 'immersiveengineering:windmill_blade', count: 1},
  ].forEach(recipe => {
    const {result, count} = recipe;
    event.custom({
      type: 'corail_woodcutter:woodcutting',
      ingredient: {tag: 'forge:treated_wood'},
      result: result,
      count: count,
    });
  });
});
