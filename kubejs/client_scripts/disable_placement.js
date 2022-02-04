// Only needed to prevent the player's inventory from looking like this was consumed even though it wasn't.
onEvent('block.right_click', event => {
  if (event.getItem() === 'corail_woodcutter:acacia_woodcutter') {
    event.cancel();
  }

  if (event.getItem() === 'createaddition:connector') {
    event.cancel();
  }
});
