onEvent('fluid.registry', event => {
  event
    .create('draconic_essence')
    .textureStill('kubejs:block/draconic_essence_still')
    .textureFlowing('kubejs:block/draconic_essence_flow')
    .bucketColor(0xc54883);
});
