onEvent('recipes', event => {
  const CustomRecipeHandler = global.recipes(event);

  /* Refined Pipes */
  event.remove({mod: 'refinedpipes'});
  /* Item Pipes */
  event.shaped('24x refinedpipes:basic_item_pipe', ['CCC', 'GPG', 'CCC'], {
    C: '#forge:ingots/copper',
    P: ['prettypipes:pipe', 'immersiveengineering:conveyor_basic'],
    G: '#forge:glass',
  });

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:improved_item_pipe'),
    Item.of('refinedpipes:basic_item_pipe'),
    Item.of('#forge:nuggets/electrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:advanced_item_pipe'),
    Item.of('refinedpipes:improved_item_pipe'),
    Item.of('#forge:nuggets/enderium')
  );

  /* Fluid Pipes */
  event.shaped('24x refinedpipes:basic_fluid_pipe', ['CCC', 'GPG', 'CCC'], {
    C: '#forge:ingots/copper',
    P: ['create:fluid_pipe', 'immersiveengineering:fluid_pipe'],
    G: '#forge:glass',
  });

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:improved_fluid_pipe'),
    Item.of('refinedpipes:basic_fluid_pipe'),
    Item.of('#forge:nuggets/electrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:advanced_fluid_pipe'),
    Item.of('refinedpipes:improved_fluid_pipe'),
    Item.of('#forge:nuggets/enderium')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:elite_fluid_pipe'),
    Item.of('refinedpipes:advanced_fluid_pipe'),
    Item.of('#forge:nuggets/ostrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:ultimate_fluid_pipe'),
    Item.of('refinedpipes:elite_fluid_pipe'),
    Item.of('#forge:nuggets/calorite')
  );

  /* Energy Pipes */
  event.shaped('24x refinedpipes:basic_energy_pipe', ['CCC', 'PRP', 'CCC'], {
    C: '#forge:ingots/copper',
    R: 'minecraft:redstone',
    P: ['immersiveengineering:wirecoil_copper', 'immersiveengineering:wirecoil_copper_ins'],
  });

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:improved_energy_pipe'),
    Item.of('refinedpipes:basic_energy_pipe'),
    Item.of('#forge:nuggets/electrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:advanced_energy_pipe'),
    Item.of('refinedpipes:improved_energy_pipe'),
    Item.of('#forge:nuggets/enderium')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:elite_energy_pipe'),
    Item.of('refinedpipes:advanced_energy_pipe'),
    Item.of('#forge:nuggets/ostrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:ultimate_energy_pipe'),
    Item.of('refinedpipes:elite_energy_pipe'),
    Item.of('#forge:nuggets/calorite')
  );

  /* Attachments */
  event.shaped('refinedpipes:basic_extractor_attachment', [' C ', 'CEC'], {
    C: '#forge:ingots/copper',
    E: 'prettypipes:low_extraction_module',
  });

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:improved_extractor_attachment'),
    Item.of('refinedpipes:basic_extractor_attachment'),
    Item.of('#forge:ingots/electrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:advanced_extractor_attachment'),
    Item.of('refinedpipes:improved_extractor_attachment'),
    Item.of('#forge:ingots/enderium')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:elite_extractor_attachment'),
    Item.of('refinedpipes:advanced_extractor_attachment'),
    Item.of('#forge:ingots/ostrum')
  );

  CustomRecipeHandler.automatableSmithing(
    Item.of('refinedpipes:ultimate_extractor_attachment'),
    Item.of('refinedpipes:elite_extractor_attachment'),
    Item.of('#forge:ingots/calorite')
  );
});
