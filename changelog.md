# 2.2.1

## Updated

- `[Library]` Curios
- Xaero's Minimap

## Fixed

- Fixed Create Shaft quest having no dependencies
- Fixed (Hopefully) the into fire quest breaking if you visit the nether before the quest is reachable
- Fixed Farmer's Delight hunger bar overlays not being enabled
- Fixed Upgrading to Storage Overhaul Tier 1 chests not keeping their original variant (i.e. `Quark Birch Chest` + `Iron Ingot` **now** outputs `Storage Overhaul Birch Chest Tier 1`)

# 2.2.0

## Updated

- `[Library]` Architectury
- `[Library]` McJtyLib
- Chipped
- Dave's Building Extended
- Framed Blocks
- Improved Backpacks
- Little Logistics
- Lootr
- Moving Elevators
- RFTools Base
- Trash Cans
- Xaero's World Map

## Removed

- AppleSkin (incompatible with Farmer's Delight)
- ExtCaves (7-month old bug has not been fixed). ExtCave stones will be replaced with Minecraft stone.

## Fixed

- Create Crushed Ore outputting from Thermal Pulverizer
- Gravestone Configs not syncing - they should be forcefully synced now
- Not all horse- or cow-like creatures dropping the increased amount of Leather

# 2.1.8

## Removed

- Mindful Eating; refuses to load on servers so it cannot stay. Will return when this bug is fixed but the bug has been around for months...
- Diet: Only kept for Mindful Eating.

# 2.1.7

## Added

- Recipe to upgrade Powah's Player Transmitters in the Smithing Table
- Tooltip to Feather Falling 4 books explaining how fall damage is negated

## Changed

- [Mod] Mekanism's Fluid Tanks now store a logical Base-2 amount of fluid (`[16B, 32B, 64B, 128B]` instead of `[14B, 28B, 56B, 112B]`). Your tanks should automatically update to this size, and since it's a size _increase_ no fluids should be lost.

## Fixed

- Infinity Tools quest requiring the Infinity Nuke - this was meant to be the backpack
- Laser Miner quest requiring only the Laser Ore Miner, when the Fluid one should also be permitted (and makes more sense if aiming for Ether Gas)
- Dave's Building Mod adding a stupidly easy recipe for Steel

## Updated

- [Library] Architectury
- [Mod] Dave's Building Mod
- [Mod] Framed Blocks
- [Mod] Improved Backpacks
- [Mod] Little Logistics
- [Mod] Moving Elevators
- [Mod] Trash Cans

# 2.1.6

## Added

- Recipe for Mekanism's Cardboard Boxes. The recipe changes where they're placed in the progression line but they're still there which is nice :)

## Fixed

- Overlap across mods. The following will no longer have duplicates:
  - Apple Crates
  - Charcoal Blocks
  - Potato Crates
  - Beetroot Crates
  - Carrot Crates
  - Bamboo Blocks
  - Sugar Cane Blocks
- Overlapping sawdusts still showing up in JEI

# 2.1.5b

## Fixed

- [Recipe] Missing recipe for Iron Dust Piles

# 2.1.5

## Fixed

- [Quests] Early-game machines being impossible because Zinc requires Iron-tier tools to mine.
  This was fixed by adding an Iron variant of tiny piles as well as Andesite-Iron alloy. You can use Iron in place until you've gotten Iron tools

# 2.1.4

## Added

- [Mod] ServerConfig Updater - updates server ocnifgs from the `defaultconfigs` folder.
- [Mod] MyServerIsCompatible - makes sure that the server checkmark is green because some client mods won't run on the server.
- [Recipe] Saplings can be interchanged for other variants using Chipped's Botanist Workbench.
- [Recipe] Quark Blank Runes can now be crafted

## Changed

- [Quests] The quest organization and grouping has been greatly revamped! Many new quests and quests rewards, and just overall more polish!!
- [Recipe] Remade the Angel Ring recipe (much to your surprise, it's less difficult!)
- [Recipe] Made the Modular Routers module bases less annoying to craft
- [Recipe] Torchmaster Megatorches now use Lumium Ingots
- [Recipe] Modular Routers upgrades use the Base Module from Mekanism to craft
- [Recipe] Removed Cincinnasite recipes for things made of iron, like Buckets, rails, etc.
- [Recipe] Removed Recipe to make Rails from Osmium
- [Misc] BetterEnd's Amber and Ender Ore have been disabled
- [Misc] Made Arcane Endermen less tough

# 2.1.3

## Added

- [Quests] Dedicated Questline for Powah
- [Mod] MrCrayFish's Furniture Mod + Addons for Wood Variants
- [Mod] Entity Culling
- [Mod] Reroll - Allows you to reroll Enchantment Table enchantments
- [Recipe] Recipe for Cincinnasite Ingots via Alloy

## Removed

- [Mod] Creeper Confetti: replaced with a datapack that does the same, but more reliably
- [Recipe] Recipes for Mekanism Steel, Tools' Complement Bronze tools have been removed and hidden from JEI. The items still exist but will not be craftable going forward, seek other variants of the same tier :)

## Changed

- [Recipe] Recipe for Powah's Dielectric Paste can now be automated, manual recipe accepts all types of knives
- [Recipe] Powah Dielectric Casing recipe has been made more fitting for the pack
- [Recipe] Powah Dielectric Rod recipe has been made more fitting for the pack
- [Recipe] Powah Reactors can now be upgraded via Combining
- [Texture] Crimson/Warped Fungus have been reverted to their Vanilla models - I don't know which mod made the new ones but I didn't like it

# 2.1.2

## Added

- [KubeJS] Recipe for Cincinnasite for those who wish to use it

# 2.1.1

## Added

- [KubeJS] Recipes for interchanging Limestone variants
- [KubeJS] Integration between TConstruct's Wither Bones and Architect Palette's
- [Quests] Overview Quest, showing you where you lie within the pack as a whole. Finishing a chapter automatically progresses this main questline.

## Changed

- [Progression] Andesite Alloy is now made with Andesite-Zinc blend. There's a whole questline change to represent this as well. Overall difficulty hasn't changed much, it just makes more sense. If you have Crude Andesite Alloy around, you can still smelt it into Andesite Alloy, but you won't be able to make more.
- [Quests] Many quest chapters were reorganized, some quests removed.
- [Texture] Red/Brown Mushrooms have been reverted to their Vanilla models - I don't know which mod made the new ones but I didn't like it
- [Texture] Stripped Dark Oak is reverted to its Vanilla texture

## Fixed

- Conflict with Wooden Gear / Timber Frame / Lattice recipes

# 2.1.0

# MAKE A BACKUP BEFORE UPDATING TO THIS VERSION

There has been one potentially breaking change in this pack update, and unless you back up there's no guarantee that I can fix whatever issues may arise without permanently affecting your world. Nothing _should_ happen, but better safe than sorry.

## Added

- [Mod] [Mindful Eating](https://youtu.be/NN8Vgj4wrFw?t=461)
- [Mod] AppleSkin (Required for Mindful Eating)
- [Mod] Diet (Required for Mindful Eating)
- [Mod] Dave's Building Mod
- [Mod] Architect's Palette
- [Quest] Quest for showing off Mindful Eating's mechanics

## Swapped

- [Mod] Overloaded Armor Bar and Armor Toughness Bar have been replaced with ArmorPoints++ due to compatibility issues with AppleSkin + Mindful Eating
- [Mod] BetterEnd Reforged was ported by the same dev as BetterNether, so we have changed back to the much better port which should fix most of the issues in the end. You will not need to reset your End dimension. The fixes I'm referring to are specifically:
  - Obsidian platform generating stupid far way from the island
  - Respawning the dragon causing overlap on the main portal and main pylons

## Fixed

- Exploit to get infinite Elytra durability via a combination of converting your elytra to Minecraft's variant and then throwing it in the world.
- Made Elytra Duplication recipe from Quark more clear as to what is happening.
- Removing items from Storage Drawers / Storage Barrels with an empty hand will no longer damage you

# 2.0.11a

## Fixed

- [KubeJS] Fixed errors thrown when executing scripts

# 2.0.11

## Fixed

- [KubeJS] Occasional script errors with thrown items being null
- [KubeJS] Wheat Flour recipe conflicting with Wheat -> Biofuel recipe in Mekanism Crusher
- [Mod Update] Server issues with V-Tweaks

## Changed

- [Config] Killing Raid/Patrol Captains no longer gives the Bad Omen effect. This can now be obtained by burning the banners dropped by said Captains.
- [KubeJS] Eldritch Endermen no longer give Bad Omen effect

# 2.0.10

## Added

- [Mod] Notes mod, allows you to take notes as you go!
- [Mod] Neko's Enchanted Books, adding beautiful custom textures to most enchanted book types!
- [Quest] A Quest for resetting the Nuclear Decay in your environment under Advanced Mekanism

## Fixed

- Several quests making mention of Refined Storage, which is not part of this pack anymore
- Wormholes quest now tells you how to re-dye them!
- Cinnabar Ore crushing recipes

## Changed

- AE2's inscriber recipe only requires Create's metal press, and no longer allows the Multiservo Press from Thermal
- Baby Zombies now no longer spawn (VTweaks 3.6.0 feature)
- Only two Challenger Mobs can spawn (both Endermen): Arcane and Eldritch

# 2.0.9

## Added

- [Recipes] Added Sequenced Assembly recipes for AE2's Circuits. The Inscriber recipes are still in, but this gives you another option that stinks less
- [Recipes] Recipe to crush Netherrack Stalactite into Create's Netherrack Flour
- [Recipes] Create's Wheat Flour recipe can be created in more machines like the Crusher and Pulverizer

## Changed

- [Recipes] Cinnabar is so common as an ore that the Redstone crushing recipes have been nerfed heavily
- [Quests] Storage quest chapter has been overhauled and reorganized. Mostly to be more inclusive of storage block variants like Dark Oak, etc
- [Quests] AE2 quest chapter has been reorganized to follow a more logical flow that I think most people would take

# 2.0.8

## Added

- [Mod] Little Logistics (and a quest for getting started with it)
- [Mod] AE2 Additional Opportunity
- [Recipes] More woodcutter compatibility recipes! Mostly for smaller things like Supplementaries' shelves, etc.

## Removed

- Towers of the Wild + Addons
  - These were so rare you probably hadn't found one yet.

## Changed

- Removed AE2's channels using AE2AO (added this update)

# 2.0.7

## Added

- Demagnetize, a great set of blocks for preventing item magnets from affecting your setups!
- Easier recipes for Thermal's integral components once you've gotten into Mekanism a good bit
-

## Changed

- Turning Liquid Pink Slime into solid variants (ball or ingot) now use the same liquid amounts as TConstruct

## Fixed

- Many loot chests being empty due to a loot table bug I thought I fully fixed a while ago
- IE's Coal Coke being in IE Crates in villages
- Default config for the DoubleSlabs mod has enabled Vertical Slab placement. This should not be the case - **I suggest deleting your Saves' `serverconfig` folder.**

# 2.0.6

# You should delete your world's `serverconfig` folder for the latest changes!

## Changed

- Added harder recipe for the Thermal RF Coil
  - All of the Thermal Recipe Changes that use the Sequenced Assembly setup now have a more easily-automatable counterpart using the Thermal Press
- Made Compact Machines' recipes more fitting
- Hid more unusable items in JEI such as CreateDeco's coins and many of the Compact Machines components which are unfinished
- Removed Create's recipes for nuggets which could be done infinitely (such as washing Gravel & Red Sand)

## Fixed

- Some Create Deco Recipes being uncraftable due to Create's ingots being disabled

## Removed

- Dynamic Surroundings due to a conflict with Extreme Sound Muffler

# 2.0.5b

## Fixed

- Immersive Engineering's steel blocks not being craftable, preventing the formation of some heavy machines such as the Excavator or Arc Furnace

# 2.0.5

## Added

- Extreme Sound Muffler
- New Custom Item: Fluxed Singularity
  - A better-matching item for AE2's wireless stuff. Recipe isn't too masochistic

## Fixed

- Barrel upgrading not working with a non-tiered barrel or modded barrel

## Changed

- Cleaned up lots of duplicate items / info in JEI such as EE's ores, TConstruct material types, etc.

### Barrels

- Vanilla barrel can only be crafted using some other mod's barrel
- Storage Overhaul's barrels now use a more vanilla-like recipe
- Wooden barrels now have tag `forge:barrels/wooden`

## Removed

- Quark's vertical slabs. If you are using these, it's fine to upgrade as the blocks aren't removed simply hidden and recipes disabled. Going forward use DoubleSlab's vertical slabs :)

# 2.0.3

## Changed

- Improved Backpack's spools are cheaper and have IE hemp support
- Fixed AE2 Quest under Storage Questline saying we have AE2... we don't anymore
- Extcaves' Old and Broken Stone now act and look (via JEI/Inventory/Jade/WAILA) like Vanila Stone
- AE2 quests in the Storage chapter are now ordered to make sense

### Ender Cores

- Ender Cores can be bartered from Piglins at a 2% chance
- Challenger Endermen now have a 50% chance of spawning (was 70%)

### Smithing Table

- Retextured GUI to not have ingot outline in right slot (non-ingots can go in there, even in Vanilla w/ datapack...)
- Re-named block to "Combining Table" due it being a basic version of the Mekanism Combiner
- Changed recipe to reflect the bump in value to this pack

### Lava

Instead of disabling Create's mechanic of "Have 10000 source blocks and we consider it infinite", I just disabled Lava generation

- Mycelial generators still enabled because they're so expensive I couldn't be bothered
- Mekanism's heat generator can be crafted, but placing it has been disabled; used only for crafting other things with it

### Create Mechanical Saw

Since it acts like a Stonecutter too, it requires a Diamond-based Saw to craft. Its textures have been updated accordingly.

# 2.0.1

## Added

- Extra guaranteed ender pearl drop when killing Endermen.
- Custom, more difficult recipe for Thermal's Redstone Servo

## Changed

- Recipes for Create White Sail, IE Cloths and Sails, Farmer's Delight Canvas

## Fixed

- Storage Overhaul Tiered Chests being usable in recipes
- IE Crates (in IE houses in Villages) having IE Nuggets/Ingots
- TConstruct Casting resulting in non Emendatus Enigmatica ingots
- Custom Drawers all crafting Trim instead of their actual drawer

## Removed

- Custom KubeJS Item for Cloth-Covered Windmill Sail
- TConstruct recipe for Andesite Alloy, it was supposed to be removed already

# 2.0.0

## Added

- CreatePlus -- allows Create's google to be put in a dedicated Curio slot
- Default Options
- Recipe to Crush/Pulverize Glowstone Satalactites into Dust
- Early-Game Quest to Help You Get Kelp
- ResourcePacks! Thanks to CurseForge I'm able to add them finaly!
  - Created Storage Network by Maakzzin
  - Storage Overhaul Overhaul by Rorax
- Convenient Woodcutting recipes for most of Framed Blocks' blocks
- All plank recipes now have their own Storage Drawer variant

## Fixed

- Tinkers Construct mattocks not being able to break Wood-Material Blocks
- Mekanism Lapis/Osmium armor not actually being disabled
- Casting Blocks yielding mismatched Blocks

## Updated

### Mods:

- AE2 Wireless Terminals
- Immersive Posts
- Library Mods
- More Overlays
- Project Red

### Quests:

- Quest with Slag reward now gives Thermal Slag
- Quest for Peaceful Surface now lets you choose the Create Seat color

### Recipes:

- Many recipes now use Tanned Leather instead of Leather
- Create Mechanical Drill uses Thermal's Drill Head

### Other:

- Bones no longer randomly drop from entities
- **Challenger Mobs**:
  - Only Zombie Villagers and Endermen can be challenger mobs
  - These two mobs now have a 75% chance of becoming a challenger
  - Tweaked loot table to only include ender pearls or enderium coins

## Removed

- Recipe for Kelp (See Quest Added This Update)

# 1.5.3

## Changed

- Thermal drill head now uses Steel.
- Crude Andesite Alloy uses clay balls instead of blocks
- Horses now drop more leather (3-7 instead of 0-2)
- Oldstone and Brokenstone no longer generate

## Fixed

- Stoneholms being too frequent
- Andesite Alloy's easier original recipes sneaking through int he Mixer & Thermal Induction Smelter
- Natural Scoria dropping Scoria dropping Scoria Cobblestone (in other words, Natural Scoria drops Cobbled Scoria)

# 1.5.2

## Added

- New SideQuest Quest Category

  - Added Extended Create Quest-Line
  - Consolidated many QOL/Bonuys Quests to This Category

- Custom Recipe for Create's Mechanical Saw
- Tooltip to warn users that Lumbering cannot go onto Tetra Tools.

## Fixed

- Create Sequenced Assembly recipes not existing

# 1.5.1

## Fixed

- Some Create Crafts & Additions components being uncraftable.

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
