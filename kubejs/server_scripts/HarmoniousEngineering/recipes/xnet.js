onEvent("recipes", (event) => {
  const cableVariants = ["red", "green", "blue", "yellow", "routing"];
  // Cables
  cableVariants.forEach((x) => event.remove({ id: `xnet:netcable_${x}` }));
  cableVariants.forEach((x) => event.smithing(`32x xnet:netcable_${x}`, "pipez:universal_pipe", `#forge:dyes/${x === "routing" ? "black" : x}`));
  // Connectors
  cableVariants.forEach((x) => event.remove({ id: `xnet:connector_${x}` }));
  cableVariants.forEach((x) => event.smithing(`1x xnet:connector_${x}`, `xnet:netcable_${x}`, "#forge:ingots/gold"));
  // Advanced Connectors
  cableVariants.forEach((x) => event.remove({ id: `xnet:advanced_connector_${x}` }));
  cableVariants.forEach((x) => event.smithing(`1x xnet:advanced_connector_${x}`, `xnet:connector_${x}`, "#forge:ingots/cobalt"));

  event.remove({ id: "xnet:connector_upgrade" });

  event.remove({ id: "xnet:wireless_router" });
  event.shaped("1x xnet:wireless_router", ["SES", "RFR", "SRS"], {
    S: "appliedenergistics2:singularity",
    E: "minecraft:repeater",
    R: "#forge:dusts/redstone",
    F: "rftoolsbase:machine_frame",
  });
});
