onEvent('recipes', event => {
  event.remove({input: 'minecraft:elytra'});
  event.remove({id: 'alexsmobs:tarantula_hawk_elytra'});

  event.remove({input: 'customizableelytra:elytra_wing'});
  event.remove({id: 'customizableelytra:elytra_wing'});
  event.remove({id: 'customizableelytra:elytra_wing_vanilla'});

  // Mekanism HDPE Elytra
  event.custom({
    type: 'mekanism:mek_data',
    result: {item: 'mekanism:hdpe_elytra'},
    pattern: ['AHA', 'HPH', 'H H'],
    key: {
      A: {tag: 'mekanism:alloys/atomic'},
      H: {item: 'mekanism:hdpe_sheet'},
      P: {tag: 'forge:elytra'},
    },
  });

  // Quark Elytra duplication via Dragon Scale
  const inputWithTooltip = Item.of('customizableelytra:customizable_elytra', {
    display: {
      Lore: ['[{"text":"(Is not consumed in this process)","italic":false, "color":"dark_aqua"}]'],
    },
  });
  event
    .shapeless('customizableelytra:customizable_elytra', [inputWithTooltip, 'quark:dragon_scale'])
    .keepIngredient(inputWithTooltip);

  // Tarantula Hawk Elytra
  event.shaped('alexsmobs:tarantula_hawk_elytra', ['WEW'], {
    W: 'alexsmobs:tarantula_hawk_wing',
    E: '#forge:elytra',
  });

  // Tconstruct Slimelytra
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      tag: 'forge:elytra',
    },
    cast_consumed: true,
    fluid: {
      tag: 'tconstruct:ender_slime',
      amount: 8000,
    },
    result: 'tconstruct:slime_chestplate',
    cooling_time: 237,
  });
});

/* Replaces all thrown elytra with CE Elytra */
onEvent('entity.spawned', event => {
  if (event.getEntity().getType() === 'minecraft:item') {
    const itemEntity = event.getEntity();
    if (!itemEntity || !itemEntity.getItem()) {
      return;
    }

    if (itemEntity.getItem().getId() === 'minecraft:elytra') {
      const newItem = Item.of('customizableelytra:customizable_elytra');
      if (itemEntity.getItem().getNbt()) {
        newItem.setNbt(itemEntity.getItem().getNbt());
      }
      itemEntity.setItem(newItem);
    }
  }
});
