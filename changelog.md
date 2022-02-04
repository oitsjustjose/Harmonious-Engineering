# 1.5.0

# REFINED STORAGE HAS BEEN REMOVED IN THIS UPDATE

This was mentioned in 1.4.0. Do not update from 1.4.0 until you have migrated any Refined Storage system to Appled Energistics or Simple Storage Networks.

## Added

- Dank Storage, Quest Item & Modifications
- The Lost Cities -- Only accessible via its own dimension. New quest has been added under Mekanism to explain the process of getting there.
- Recipe for Kelp from Seagrass & Phytogro

## Updated

- Removed recipes for many different Create Addon items such as Alternators, Generators, etc.. as they were known for infinite energy glitches (and also I feel like Create power shouldn't be capable of generating RF/FE)
- Made Create Crafts & Additions Connector not placeable
- Tweaked the last few recipes for the Wormhole mod, correctly hid items that were not hidden from this mod but should have been (namely the Coal Generator).
- Crude Andesite Alloy Texture
- Angel Ring Texture
- Crude Andesite Alloy is now smelted into Andesite Alloy, rather than Sanded (to correspond to texture change)

## Fixed

- Furnaces not being craftable with most variants of cobblestone
- HT's TreeChop Chopped Log Block not having a localized name
- Angel Ring not being craftable due to the use of the wrong Brass variant

## Removed

- Refined Storage and All Respective Addons
- More Create Stuff; functionality of this mod was duplicate with Emendatus Enigmatica

# 1.4.0

# REFINED STORAGE WILL BE REMOVED IN 1.5.0

This has been a pack architectural design change that I didn't really have the foresight to plan for, but right now it's "deprecated" in this pack. What that means is that if you download this version, **your Refined Storage network will continue to work**. While it's working, get your stuff out and take a look at AE2 - you'll see that all Refined Storage items can be shapelessly crafting into their AE2 Equivalent, so you will be able to migrate freely and at your own leasure.

## Added

### Mods

- Inventory Tweaks
- Starlight

## Updated

### Mods

- Supplementaries
- Mantle / TConstruct
- SteamPowered
- OAuth
- KubeJS
- CreateAddition

### Other

- Custom-made textures for Ender Chests and Ender Tanks
- Custom recipes for Storage Overhaul to upgrade chests to the next tier
- Custom recipes for WormHole mod
- New and Revamped Quest Lines for a few of your favorite mods!

## Fixed

- Quark's Big Dungeons generating in non-overworld biomes
- Ender Dragon dropping Draconium Dust
- Ender Pearl Dust crafting incompatibilities / issues
- Towers of the Wild:
  - Generating with loot that they shouldn't (iron/gold ingots)
  - Generating too frequently

## Changed

- Refined Storage and all addons are now deprecated (see big note above)
- Passive entities will no longer seek cover / higher ground at night

## Removed

- Unused configuration files
- Inventory Sorter - has issues with Refined Storage even if deprecated
- Passable Foliage - in a quest, I recommend building an Ender Ender. I noticed that most people use Leaves, so this felt like an unfair mod to keep.

# 1.2.0

## Added

### Mods

- Blame
- Cable Tiers
- Clumps
- Create: Steam Powered
- Draconic Evolution
- Extended Crafting
- Lootr
- OAuth
- Quantum Quarry Plus
- Spark
- Towers of the Wild (And addons)

### Custom Items

- Crude Alloy is now its own item, used for crafting
- Ender Singularity - by subjecting the core of an Enderman to cold environments, you can force it to exist within water. This isn't a good idea and you know it, but you may have to if you want to harness that sweet sweet Ender technology.

## Updated

### Mods

- RSInfinityBooster
- Curios
- Framed Blocks
- KubeJS for IE

### Pack

#### Quests

- Added quest chapter for XNet
- Added quest chapter for Building Tools
- Added quest chapter for Appled Energistics
- Added quest chapter for Refined Storage
- Added quest chapter for Late-Game Mekanism
- Added quest chapter for Draconic Evolution
- Filled out the Quest Chapter for Industrial Foregoing
- Added quest for Torchmaster
- Added emergency kit
- All Optional quests are Rounded Square shape.
- All Quests (optional or not) are Hexagononally shaped.
- All Quests that start a questline are Diamond shaped.
- All Quests that end a questline are Octagonally shaped.

#### Progression

- Changed early-game progression with Crude Alloy

### Recipes

- Made Torchmaster recipes balanced
- Made all Sewing / Smithing recipes able to be done in the Mekanism Combiner so you can automate most recipes changed by this pack
- Made custom recipes for ProjectRed that make more sense
- Made custom recipes for Quantum Quarry Plus
- Made custom recipes for Draconium, the key item for crafting in Draconic Evolution

## Removed

- Magnesium (Caused rendering issues with Refined Storage)
- Magnesium Dynamic Lights (Caused rendering issues with Refined Storage)
- Better Magnesium Video Settings (Caused rendering issues with Refined Storage)

# 1.1.2

## Added

- Torchmaster
- AE2 Infinity Boosters
- AE2 Wireless Terminals
- Stoneholm (Underground Villages)
- Curious Elytra
- Dynamic Lights

### Performance Mods:

- Magnesium (Major performance improvements with minimal issues so far as i can tell. If you have any visual artifacting or issues, report it on the issue tracker please!
- Magnesium Extras (offers some nice features if you go to Video Settings)
- Better Magnesium Video Settings

## Fixed

- AE2 recipes being uncraftable due to Emendatus Enigmatica Charged Certus not working like normal certus
  - When you throw any type of Certus on the ground it will automatically convert for you 😄
- Some plank recipes not requiring saws / axes (Tinkers', Better Nether)
- Some quests being impossible
- Some loot chests not generating
- Any possible confusion with Customizable Elytra mod.
- Rod Recipes yielding Plates in Multiservo Press

## Changed

- Emendatus Enigmatica Certus Quartz and Charged Certus Quartz now drop the AE variant
- Hid all EE Certus/Fluix sthings
- Powah Ender Cores now only drop from Challenger Endermen
  - Challenger Mobs are now 5% more frequent
- All vanilla stone-like blocks now drop their Cobbled variant unless silk-touched
- All treated wood variants can now be wood-cut
- Changed BetterEnd versions - now on a different port to Forge entirely, might see some chunk borders in End Islands, just FYI

## Removed

- Colytra
- Spark (Incompatible with Magnesium)
- Unified Resources (To make my custom throwing logic work, plus AVSP scripts do what this does)
