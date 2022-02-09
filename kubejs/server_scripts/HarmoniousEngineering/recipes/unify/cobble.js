onEvent('recipes', event => {
  event.stonecutting('create:andesite_cobblestone', 'natural-progression:cobbled_andesite');
  event.stonecutting('natural-progression:cobbled_andesite', 'create:andesite_cobblestone');

  event.stonecutting('create:diorite_cobblestone', 'natural-progression:cobbled_diorite');
  event.stonecutting('natural-progression:cobbled_diorite', 'create:diorite_cobblestone');

  event.stonecutting('create:granite_cobblestone', 'natural-progression:cobbled_granite');
  event.stonecutting('natural-progression:cobbled_granite', 'create:granite_cobblestone');
});
