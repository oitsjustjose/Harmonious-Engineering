//   #    #     #  #####  ######
//  # #   #     # #     # #     #
// #   #  #     # #       #     #
//#     # #     #  #####  ######
//#######  #   #        # #
//#     #   # #   #     # #
//#     #    #     #####  #
//
//THERMAL RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
  //Emendatus Enigmatica cinnabar as a catalyst.
  event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen');
  event.replaceInput({}, '#forge:bitumen', '#forge:gems/bitumen');
  event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
  event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
  event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
  event.replaceInput({}, 'thermal:niter', '#forge:gems/niter');
  event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');
  event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke');
  //
  //fin
  //
});
