onEvent('recipes', event => {
  event.custom({
    type: 'natural-progression:damage_tools',
    ingredients: [{item: 'infernalexp:basalt_slab'}, {tag: 'betterendforge:hammers'}],
    result: {item: 'quark:blank_rune', count: 3},
  });
});
