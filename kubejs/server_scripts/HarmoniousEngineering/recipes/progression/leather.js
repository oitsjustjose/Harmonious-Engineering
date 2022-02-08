onEvent('recipes', event => {
  //   event.replaceInput({}, '#forge:dusts/wood', 'emendatusenigmatica:wood_dust');
  [
    'alexsmobs:falconry_glove',
    'alexsmobs:falconry_hood',
    'create:brown_toolbox',
    'supplementaries:bellows',
    'tconstruct:travelers_boots',
    'tconstruct:travelers_chestplate',
    'tconstruct:travelers_helmet',
    'tconstruct:travelers_leggings',
    'thermal:diving_boots',
    'thermal:hazmat_boots',
    'thermal:satchel',
    'toolbelt:belt',
    'toolbelt:pouch',
    'immersiveengineering:conveyor_basic',
    'immersiveengineering:powerpack',
    'immersiveengineering:toolupgrade_shield_magnet',
  ].forEach(x =>
    event.replaceInput({output: x}, 'minecraft:leather', 'improvedbackpacks:tanned_leather')
  );
});
