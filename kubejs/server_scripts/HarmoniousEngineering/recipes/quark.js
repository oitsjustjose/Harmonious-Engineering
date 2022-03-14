onEvent('recipes', event => {
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [{item: 'betternether:basalt_slab'}, {tag: 'betterendforge:hammers'}],
    result: {item: 'quark:blank_rune', count: 3},
  });
});
