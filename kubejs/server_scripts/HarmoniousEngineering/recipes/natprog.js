onEvent('recipes', event => {
  [
    'natural-progression:basic_saw',
    'natural-progression:bone_knife_saw',
    'natural-progression:bronze_saw',
    'natural-progression:copper_saw',
    'natural-progression:diamond_saw',
    'natural-progression:golden_saw',
    'natural-progression:improved_saw',
    'natural-progression:netherite_saw',
    'natural-progression:steel_saw',
  ].forEach(x => event.remove({output: x}));
});
