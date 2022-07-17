onEvent('recipes', event => {
  [
    'davebuildingmod:amethyst_glass',
    'davebuildingmod:black_chair',
    'davebuildingmod:blue_chair',
    'davebuildingmod:book_1',
    'davebuildingmod:book_2',
    'davebuildingmod:brown_chair',
    'davebuildingmod:copper_coil',
    'davebuildingmod:cyan_chair',
    'davebuildingmod:gray_chair',
    'davebuildingmod:green_chair',
    'davebuildingmod:hard_air',
    'davebuildingmod:light_blue_chair',
    'davebuildingmod:light_gray_chair',
    'davebuildingmod:lime_chair',
    'davebuildingmod:magenta_chair',
    'davebuildingmod:orange_chair',
    'davebuildingmod:pink_chair',
    'davebuildingmod:purple_chair',
    'davebuildingmod:red_chair',
    'davebuildingmod:reinforced_glass',
    'davebuildingmod:rocky_dirt',
    'davebuildingmod:rubber_duck',
    'davebuildingmod:soft_air',
    'davebuildingmod:steel_ingot',
    'davebuildingmod:track_end',
    'davebuildingmod:tungsten_carbite',
    'davebuildingmod:white_chair',
    'davebuildingmod:yellow_chair',
  ].forEach(x => event.remove({output: x}));

  event.replaceInput({}, 'davebuildingmod:steel_ingot', '#forge:ingots/steel');
  event.smithing('2x davebuildingmod:track_end', 'create:track', '#forge:rods/all_metal');
});
