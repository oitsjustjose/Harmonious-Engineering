onEvent('recipes', event => {
  [
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

  event.shapeless('8x minecraft:leather', ['1x cnb:yeti_hide']);
});
