onEvent('block.registry', event => {
  event
    .create('tesseract_frame')
    .material('iron')
    .hardness(2.5)
    .harvestTool('pickaxe', 3)
    .requiresTool(true)
    .renderType('cutout')
    .model('kubejs:block/tesseract_frame');
});
