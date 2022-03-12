const limestone = event => {
  event.remove({id: 'architects_palette:temp/limestone_red'});
  event.remove({id: 'architects_palette:temp/limestone_brown'});

  const limestones = ['architects_palette:limestone', 'create:limestone', 'quark:limestone'];
  limestones.forEach(output => {
    limestones.forEach(input => {
      if (input !== output) {
        event.stonecutting(output, input);
      }
    });
  });
};

const witherBones = event => {
  event.replaceInput({}, 'architects_palette:withered_bone', '#forge:wither_bones');
};

onEvent('recipes', event => {
  limestone(event);
  witherBones(event);
});
