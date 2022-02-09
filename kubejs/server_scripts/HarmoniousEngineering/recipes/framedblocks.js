onEvent('recipes', event => {
  [
    {
      block: 'framedblocks:framed_bars',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_button',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_collapsible_block',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_corner_pillar',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_corner_slope',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_cube',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_double_corner',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_double_prism_corner',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_double_threeway_corner',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_fence',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_floor_board',
      qty: 16,
    },
    {
      block: 'framedblocks:framed_flower_pot',
      qty: 3,
    },
    {
      block: 'framedblocks:framed_gate',
      qty: 2,
    },
    {
      block: 'framedblocks:framed_inner_corner_slope',
      qty: 3,
    },
    {
      block: 'framedblocks:framed_inner_prism_corner',
      qty: 3,
    },
    {
      block: 'framedblocks:framed_inner_threeway_corner',
      qty: 3,
    },
    {
      block: 'framedblocks:framed_ladder',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_lattice_block',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_lever',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_pane',
      qty: 12,
    },
    {
      block: 'framedblocks:framed_panel',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_pillar',
      qty: 10,
    },
    {
      block: 'framedblocks:framed_post',
      qty: 10,
    },
    {
      block: 'framedblocks:framed_prism_corner',
      qty: 4,
    },
    {
      block: 'framedblocks:framed_sign',
      qty: 9,
    },
    {
      block: 'framedblocks:framed_slab',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_slab_corner',
      qty: 16,
    },
    {
      block: 'framedblocks:framed_slab_edge',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_slope',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_stairs',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_threeway_corner',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_trapdoor',
      qty: 8,
    },
    {
      block: 'framedblocks:framed_vertical_stairs',
      qty: 6,
    },
    {
      block: 'framedblocks:framed_wall',
      qty: 8,
    },
  ].forEach(x => {
    event.remove({id: x.block});
    event.custom({
      type: 'corail_woodcutter:woodcutting',
      ingredient: {
        tag: 'minecraft:logs',
      },
      result: x.block,
      count: x.qty,
    });
  });
});
