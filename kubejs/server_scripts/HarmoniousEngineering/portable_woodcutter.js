/**
 * @Author: Jose Stovall | oitsjustjose
 */

onEvent("item.right_click", (event) => {
  const entity = event.getEntity();
  const heldItem = event.getItem();
  const serverPlayerEntity = entity.minecraftPlayer;

  if (!`${serverPlayerEntity}`.includes("ServerPlayerEntity")) {
    return;
  }

  // Treats the Acacia woodcutter as "portable" by forcing the player to sneak
  if (heldItem === "corail_woodcutter:acacia_woodcutter") {
    serverPlayerEntity.func_226284_e_(true); // setSneaking
  } // Prevents the user from shift-right-clicking the woodcutter as configured.
  else if (heldItem === "corail_woodcutter:oak_woodcutter") {
    if (
      entity.isCrouching() ||
      serverPlayerEntity.func_225608_bj_() /* isSneaking */
    ) {
      event.cancel();
    }
  }
});

onEvent("player.inventory.opened", (event) => {
  const currentlyOpenedContainer = event.getMinecraftPlayer().field_71070_bA;
  if (
    currentlyOpenedContainer
      .toString()
      .includes("ovh.corail.woodcutter.inventory.WoodcutterContainer")
  ) {
    event.getMinecraftPlayer().func_226284_e_(false); // setSneaking
  }
});

// Prevents ever placing the acacia woodcutter. Causes item to desync out of your inv so the next event fixes that
onEvent("block.right_click", (event) => {
  const player = event.getEntity();
  const playerEntity = player.minecraftPlayer;
  if (event.getItem() === "corail_woodcutter:oak_woodcutter") {
    if (playerEntity.func_225608_bj_() || player.isCrouching()) {
      event.cancel();
    }
  } else if (event.getItem() === "corail_woodcutter:acacia_woodcutter") {
    event.cancel();

    playerEntity.func_226284_e_(true); // setSneaking

    const portableWoodcutter = Item.of("corail_woodcutter:acacia_woodcutter");
    portableWoodcutter
      .getItem()
      /* onItemRightClick */
      .func_77659_a(
        event.getBlock().minecraftLevel,
        playerEntity,
        event.getHand()
      );
  }
});
