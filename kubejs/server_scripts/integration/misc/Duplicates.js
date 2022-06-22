onEvent('recipes', event => {
  global.duplicateResources.forEach(x => {
    event.remove({output: x.item});
  });

  event.replaceInput({}, global.ie('slag'), '#forge:slag');
  event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastic');
  event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic');
});
