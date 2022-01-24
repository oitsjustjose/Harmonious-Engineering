onEvent("recipes", (event) => {
  ["stone", "sedimentstone", "lavastone"].forEach((x) => {
    event.remove({ output: `extcaves:pebble_${x}` });
  });
});
