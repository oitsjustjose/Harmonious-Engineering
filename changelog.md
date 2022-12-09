# Harmonious Engineering 3 Changelog

## [Credits](https://github.com/oitsjustjose/Harmonious-Engineering/blob/v3.0/CREDITS.md)

# 3.2.3

## Added:

- Portable Stonecutter!
- Recipes in the Phytogenic Insolator for:
    - `Farmer's Delight` Onions
    - `Farmer's Delight` Tomatoes
    - `Farmer's Delight` Rice
    - `Farmer's Delight` Cabbage
    - `Immersive Engineering` Hemp
    - `Supplementaries` Flax
    - `Ecologics` Azalea Tree
    - `Ecologics` Coconut Tree
    - `Ecologics` Walnut Tree
    - `Ecologics/Minecraft` Azalea Bush/Tree
    - `Ecologics/Minecraft` Flowering Azalea Bush/Tree
    - `Architects Palette` Twisted Tree

## Fixed:

- Mekanism Teleporter Core recipe returning 9 (it should've been 1)

## Changed:

- Flux Points / Plugs have been renamed to Flux Consumer (Plug) and Flux Provider (Point)

# 3.2.2

## Added:

### Mods

- Connected Textures Mod
    - Makes many textures connect in a nice way!
- Diagonal Fences
- **Harmonious Engineering Addons**
- OK Zoomer

### Harmonious Engineering Addons

Some things I haven't been able to get done with *just* KubeJS, so the addition of HEA will allow you to take your Desh/Ostrum/Calorite integral components and **🎉 use them in Thermal Devices 🎉**!!

In addition, I've fixed the bug where Dave's Building Extended blocks *don't drop when broken* - this is an MCreator/DBe bug, but I was able to write an event that intercepted the drops and I've confirmed it works when using a Drill/Fluxbore/Jackhammer, which is exactly when they weren't dropping themselves before.

If you have more integration you'd like to see from the KubeJS items (or other), please drop me a note - now that I have full Java class access I'm glad to add more robust features to make the pack feel more thoroughly integrated.

### Other

- Added in Mekanism Teleporters, because late-game has no non-time-locked way to teleport around
- Added compatibility for the new liquid blaze burner :)
    - It's exactly what it sounds like - ponder the Straw by holding <kbd>W</kbd> and see exactly how it's used. 
    - You can see all compatible fuels by browsing the uses for a blaze burner in JEI
- Added recipe to reproduce Glass Spines using the Phytogenic Insolator

## Removed:

### Mods:

- All things related to Rubidium. Feel free to add them yourself! It just causes *enough* issues in this pack that I can't with sound mind include it anymore.

# 3.2.0

## ⚠️ Major Updates Incoming! Make a backup of your world!! ⚠️

## Removed:

- Better Villages
- Library Ferret
- Pipez
- Pehkui

## Added:

- ChoiceTheorem's Overhauled Villages (replaces Better Villages and is MUCH nicer 🙂)

## Changes:

- Re-textured AdvGen's Cells
- Otters will no longer spawn - apparently Critters & Companions doesn't allow you to configure their frequency, and they just *keep on spawning*, so they've been culled using V-Tweaks. If you already had otters around, they'll continue to be around, but no new otters will spawn

### Recipes:

- Unobtanium is no longer used in making Modular Routers & Flux Cores - went a little ham with unobtanium but it didn't really make *sense* so they now have new recipes accordingly.
- Basic Induction Cell recipe now uses Thermal's Energy Cells - meant to do fix this myself but it slipped my mind 

## Fixes:

- Typo in tip about flower pots being hung from ceilings
- Thermal's Pyrolizer only accepting dark oak to make charcoal. Now accepts any burnable log.
- Thermal's Latex still showing up in JEI (latex buckets are really persistent 😒)
- Some Titanium items still showing up in JEI

# 3.1.14

## Chunk Loaders May Need To Be Broken And Re-Placed

## Added:

- Mekanism's Induction Cells for massive energy storage

## Removed:

- Magmatic Dynamos - Any of them that you already have will continue to work and can be moved around, but the recipe has been disabled
- All Pipez' Recipes

## Changed:

- Smithing Recipes that are automated in the Create Mechanical Crafter can now be done in reverse meaning the order of items *does not matter* for your convenience :)

## Fixed:

- Refined Pipes' Joints having a mismatched texture
- Compact Machine's Tunnel recipe having the refined pipe in the *right* slot - this will fix shift-clicking your pipe upgrades

## Updated:

- Chunkloaders
- Pretty Pipes
- Supplementaries
- Villagers Sell Animals
- Library Mods


# 3.1.13

## ⚠️ATTENTION⚠️

It has come to my attention that the Pipez mod has some pretty outstanding performance issues (even though it's designed for performance). Since this pack (and many peoples worlds) are pretty old, I won't be doing anything with the mod as far as removing it. That said, I've included Refined Pipes, implemented custom textures & recipes, and even a conversion recipe from Pipez to Refined Pipes.

## Added:
- Refined Pipes
- [RECIPE] use for IE Circuit Boards to make Empty PCBs

## Disabled:
- Pipez (See Above)

## Changed:
- Renamed Desh/Ostrum/Calorite "Integral Components" to "Component Kits" to reduce confusion. I just like the integral comp texture too much to let go of it :\

## Fixed:

- Ore Blocks having two recipes in the IE Crusher
- Mekanism Things showing up that shouldn't be in JEI
- Arc Furnace not being able to smelt Beyond Earth dusts


# 3.1.12

## Updated:

- Dave's Building Extended
- HT's TreeChop
- ModelFix
- Rubidium

## Fixed:

- Advanced Generation quest not being hidden properly

# 3.1.11

## Added:

- Advanced Generators
- `[Library]` BDLib
- `[Library]` ScalableCatsForce

### Advanced Generators

Advanced Generators has been placed as post-Space mod locked behind at least one trip to the Moon and Mars. I've also re-textured the entire mod to fit in with the post-Space theme and you should find it fits your base better. A new quest chapter has been created centered around upping your power generation to meet and exceed the needs of your Mekasuit and Infinity Gear, since AdvGen's wiki is very early-2010s

## Changed

- Reorganized a couple of quests in the Fluxical Evolution chapter
- Organized and consolidated redundant fluids. Please check your setups and make sure that any storage tanks / buffers you have are cleared or will end up adjusting automatically - they should eventually work fine because I did **not** remove any recipes that *take* the now hidden fluids, but you should no longer be producing these fluids going forwards. TL;DR: once your fluid buffers empty with the old fluids (which should happen automatically), new fluids may take their place.

## Updated:

- Configured
- Dave's Building Extended
- Framed Blocks
- KubeJS
- Neko's Enchanted Books
- Stack Refill
- Supplementaries
- Thermal Mods
- Xaero's World Map

## Fixed:

- Fixed boars, elephants, giraffes, hippos, lions, rhinos, vultures and zebras *technically* being able to spawn in space... 🤔
- Doesn't apply to most users, but Andesite Alloy's recipe now accepts any `#forge:ingots/zinc` rather than `create:zinc_ingot`
- Many fluids still showing up in JEI - should be much better now, still haven't been able to get Gasses/Slurries/Pigments/Infuse Types to work due to a bug in KubeJS

# 3.1.10

## Added:

- [`Mod`] Go Prone
- [`Mod`] Stack Refill

## Updated:

- Create
- Dave's Building Extended
- Elytra Physics
- Farmer's Delight
- Model Gap Fix
- Rex's Additional Structures
- Supplementaries
- Terralith
- X-Net

## Fixed:

- Redstone Ore not being processable in machines - this was my bad, I always forget that Redstone
  Dust is considered a `#forge:dust` when removing recipes in bulk..

## Changed

- Refactored the whole dang Ore processing cleanup script to be WAY more flexible. This may mean
  that some form of Ore/Raw Ore -> Dust/Ingot recipe was accidentally removed or left in. If you see
  anything suspicious, please report it
  [here!](https://github.com/oitsjustjose/Harmonious-Engineering/issues). This _also_ means that
  **Whole Deepslate Ore Variants now process into 3 dusts!!**. This was something previously
  difficult to implement but is much easier with my new system. Shame it still involves lots of
  manual entry, but `¯\_(ツ)_/¯` what can I do.

# 3.1.9

## Added:

- [`Mod`] Model Gap Fix
- [`Mod`] TexTrue's Rubidium Options

- [`Quest Chapter`] **Palettes Aplenty**: _All About Building_
- [`Quest Chapter`] **The Dining Hall**: _Keep Yourself Full_

## Fixed:

- [Inordinate amount of Husk spawners](https://www.curseforge.com/minecraft/texture-packs/repurposed-structures-better-dungeons-datapack)

## Changed:

- Andesite Alloy now uses Zinc, because Zinc is overabundant when compared to how frequently it was
  needed
- Some structures from Rex's Additional Structures were culled:
  - End structures didn't generate propertly
  - Spawn Alters included some .. interesting choices in spawners, such as Zombie Villagers and Vex
  - Silverfish clusters were apparently added? Well, that was removed - no need to add that much
    malace 😋

## Updated:

- Compressed Creativity
- Create Crafts & Additions
- Dave's Building Extended
- FTB Teams
- Lootr
- PneumaticCraft
- Xaero's Minimap

## Removed:

- Shut Up Experimental Settings: Apparently Blueprint already does this!
- Personality: Confused players more than it helped

# 3.1.8

## Updated:

- Critters & Companions
- Decorative Blocks
- Framed Blocks
- Immersive Engineering
- Jade
- Simple Backups
- Snow Real Magic
- Supplementaries
- V-Tweaks

## Added:

- Compatibility Recipes for Thermal & IE Sawmill
  - Cocounut, Azalea, Walnut & Twisted Planks can be crafted via Sawmill.
  - Flowering Azalea can only be crafted via Thermal's Sawmill due to it not having a Stripped
    variant which is flowering (which makes sense -- once the log is stripped, the flowers come off
    too..)

## Changed:

- Recipes for the Advanced & Supreme Machine Frames are now cheaper
- Quest structures - most quests have been improved a bit :)
- Backpacked Backpack is now 5x11 rather than 9x4 - enjoy 19 more slots!

## Fixed:

- Exploit where you could Arc Furnace Recycle Metal Tools to get 3 ingots, when upgrading to that
  Metal Tier only took 1 ingot.
  - Unfortunately, IE does not properly support recipe handling for Recycling recipes, so I had to
    resort to disabling Arc Furnace recycling entirely. I'm really annoyed by this but for the
    foreseeable future there's not a better fitting fix.
- Issue where the wrong Steel Block showed up in JEI

# 3.1.7

## Changed:

- IE Drill Cores can be enchanted! This is done via Anvil, and regardless of what JEI says if your
  book has other enchantments _other_ than Fortune (I-III) or Silk Touch, it'll still work!

# 3.1.6

## Added:

- Villagers Sell Animals
- Magnesium / Rubidium Extras
- Simple Backups

## Removed:

- Oculus (and Flywheel Compat) - caused lots of visual issues with the Pressure Chamber. Do let me
  know if you disagree with this change, but even with shaders off I noticed several new artifacts
  not previously present.
- OK Zoomer - Redundant with Rubidium Extras
- Borderless Window - Redundant with Rubidium Extras

## Fixed:

- Bad Omen _should_ have been disabled unless obtained by burning an Ominous Banner. This wasn't the
  case, but should be fixed now
- Uraninite deposits shouldn't exist, so that's been resolved (thanks Elder Sign 🙂)

## Changed:

- All Deepslate Ores now have a chance of dropping a bonus raw ore (even without Fortune). This is
  to incentivise mining down at Deepslate as well as to give the impression that Deepslate Ores are
  "Dense". This incentive does not get passed on to those who silk touch ores -- silk touched ores
  cannot be processed to have this bonus as the tagging system in KubeJS isn't capable of
  subtractive tagging (i.e. "Every `forge:ores/iron` except `minecraft:deepslate_iron_ore`). If they
  offered this that'd be great but that's not the case 😔

# 3.1.5

## Added

- Configured & Catalogue
- Functional Storage (Yes I _finally_ gave in - I've received lots of feedback on this!)
- Oculus for Shaderpacks if desired (Included Oculus compatibility for Create / Flywheel 🙂)

## Updated

- Compressed Creativity
- Create + Flywheel
- Create Crafts & Additions
- Critters & Companions
- Dave's Building Extended
- Decorative Blocks
- Flux Networks
- Immersive Engineering
- Little Logistics + Contraptions
- Naturalist
- Supplementaries
- Tips
- V-Tweaks
- X-Net

## Changed / Fixed

- All Minecarts now stack to 16
- Chest Minecarts (or anything that happens to drop a `minecraft:chest`) will now correctly drop
  Expanded Storage's chests
- Chest Minecarts not having the right Chest texture
- Creeper Confetti Tip - this has been replaced with an updated tip for Ungriefed Creepers
- Ender Dust can be dropped by Urns, though _very_ rarely
- Immersive Engineering's Plant Oil recipe being missing

# 3.1.4

## Added

- Borderless Window
- Ok Zoomer

## Removed

- Magnesium/Rubidium Extras Repo & Dev are inactive and current buld is breaking newer releases of
  JEI (thus holding back lots of important mod updates from other mods such as Refined Storage)

## Changed

- Creeper Confetti is now replaced by V-Tweak's Ungriefed Creepers feature -- creepers still
  explode, but blocks destroyed will plop right back into place (including tile entities!)

## Fixed

- Entities going missing in overworld and high TPS usage
- Beyond Earth's Oil Wells generating unnecessarily
- Non-water buckets showing up as water buckets in recipes in JEI

# 3.1.3 WAS REMOVED -- The custom MCFunction caused TPS issues and entities to go missing from the overworld somehow

## Added

- Multiservo Press recipes for Rods & Graphite Electrodes
- Neat new recipes for Levitation Lubricant!

## Fixed

- Fixed Apatite appearing - Thermal itself has not yet reimplemented Apatite Ore generation so I
  removed and culled all Apatite-based items and recipes
- Graphite Electrodes in the Induction Smelter recipe not working
- Graphite Electrodes via the Engineer's Workbench not crafting as unbreakable
- Some ores being tagged that shouldn't be - this should have no apparent change unless you were
  using the Laser Ore Miner, in which case you'll notice that Ruby & Sapphire are no longer
  generated
- Wrote custom MCFunction to disable misfitting mobs / entities on anoxic planets. Since it's a
  tick-based Function, you _may_ still see these mobs for 1-2 frames, but then they'll be warped
  away :)

# 3.1.2

## Added

- Induction Smelter recipes to recycle Netherite gear back into Netherite
- Recipes for IE Colored Sheetmetal variants
- Savage & Ravage compatibility pack for Repurposed Structures
- Smithing table recipes to upgrade bins - bins will keep their settings and contents when upgraded

## Changed

- Modification Station recipe has been flipped to make Shift-Click behavior work as expected
- Recipes for Thermal Machines now use a template so that it's easier to automate, making only four
  slots dynamic

## Fixed

- Infinity Backpack not showing its recipe when clicked in JEI

## Updated

- Dave's Building Extended
- Ecologics
- Framed Blocks
- KubeJS
- Pneumaticcraft
- RFTools (Base)
- Tempad
- Xaero's World Map
- Library Mods

# 3.1.1a

## Fixed

- Redstone Coils not being craftable in the Multiservo Press
- Redstone Servos having two recipes (related to above - got them switched up)

# 3.1.1

## Note:

If you're having issues with scrolling items into your Refined Storage grid and items going into the
Filter slot, go to `Options` -> `Controls` -> `Key Binds` and remove the keybind for
`Wheel item from cursor` and `Wheel item to cursor`.

## Added

- [Critters & Companions](https://www.curseforge.com/minecraft/mc-mods/critters-and-companions)
- Easier recipes for Silicon & Silica Steel via Induction Smelter
  - This should help with FPS for those players whose bases are overcrowded with multiblocks.
- Integration between IE's Nitrate Dust & Thermal's Niter
- Jade Addons - will assist Jade in showing you things correctly, such as Create's Curved Tracks,
  Lootr chest contents, etc.
- JEI and More Overlays

## Updated

- Compact Machines (if you had issues with the Tunnels, try again now 😊)
- Dave's Building Extended (yay, new train building blocks!)
- Misc Libraries including McJty Lib & GeckoLib.

## Changed

- Meteorite loot table no longer includes steel
- Some Engineer's Decor machines being left in that weren't meant to be
- Added Silicon recipe for the Induction Smelter

## Fixed

- Lootr chests dropping Vanilla chests instead of Expanded Storage's
- Minimap quest existing still -- this has been placed with a reminder that Little Logistics exists
  :)
- Some quest chapters not appearing even though they look to be unlocked in the main
  `Research Progress` quest
- Some quests not having rewards
- Ultimate Chunk Loader only loading a 7x7x7 -- this was completely an accident.

## Removed

- Roughly Enough Items, for many reasons:
  - Fluid and Flux amounts not being shown in recipes
  - Hiding items being inconsistent and buggy
  - Recipes (such as for the infinity tools) outright not working unless viewed by looking at uses
    for the Dissolution Chamber
  - Occasional crashes and oddities
  - Quest book wanting to bookmark itself constantly, even though no one really ever did that
- Chunk Pregenerator:
  - Dev keeps removing old versions of their mod on their page, breaking many of my updates to this
    pack

# 3.1.0 - The Space Update!

## Added

- Beyond Earth: See the galaxy and beyond using spacecrafts! Quests have also been created for these
- Engineer's Decor: Not much has been modified via recipes, but a few things have been disabled and
  hidden as they mess with the balance of the pack
- Xaero's Maps: Map Atlases were being very annoying to use since they only work in the overworld,
  so I decided to go this route.

## Updated

- Dave's Building Extended
- Extreme Sound Muffler
- Flux Networks
- Immersive Engineering
- Lootr
- REI
- Yung's Better Desert Temples

## Removed

- Map Atlases, since they don't work across dimensions and planets

# 3.0.8

## Added

- Arboreal Extractor can now extract Latex from **Jungle** trees
- New textures for Bins, now resembling Item Vaults and actually looking good in a wall/grid :)

### Team Abnormals Mods:

- Personality
- Savage & Ravage

## Changed

- Recipe for Pity Machine Casing from Industrial Foregoing - this was supposed to be a part of 3.0.8
  but was forgotten D:
- Thermal's Latex is basically unobtainable now, as was intended.
- Unobtainium recycling recipe not working because of the tooltip

## Removed

- RubIE: a compat layer for IE and Rubidium. Rubidium has updated to include this by default!

# 3.0.7

## Added

### Mods

- Mekanism

  - Most content here is permantenly disabled - I really wanted a powersuit that didn't use Air
    Pressure, so here we are. You also get to keep the Bins, but they've been renamed & retextured.
  - Custom Recipes & Quests for the Meka-Suit, Meka-Tool & Modules

- Tips mod

  - I wanted to disable Vanilla Tips, but I couldn't without breaking everything - so you'll also
    get tips on the Vanilla game
  - Tips on this modpack have been added to include some of the more obscure facts and things that
    I've integrated

- Dave's Building Extended

  - Heavily modified to remove some of the... less polished items

### Other

- Dimensional Shards can now be crafted via Warping
- Compatibility for Tools Complement Knives & Farmer's Delight Knives - they should now work as one

## Changed

- Windmill Sails / Sailcloth have been removed & hidden - good catch by
  [Elder Sign](https://www.youtube.com/channel/UCOEUUMU8Q9Gt7umqQL4wsgQ)
- Thermal's Rubber can now be crafted through Blast Chilling Latex
- Plastic can be made slightly easier once you get into Thermal, via Multiservo-Pressing 3 Rubber
- Unobtanium is now made with Enderium Ingots, can only be cyclically crafted via Arc Furnace

## Fixed

- REI Search not working / stopping working
- Fixed Supplementaries bug with Placeable tooltip showing up but not actually being placeable

# 3.0.6

- Downgraded Chunk Loaders version

# 3.0.5

## Updated:

- Compressed Creativity
- Create
- Create Crafts & Additions
- Ecologics
- Every Compat
- Roughly Enough Items
- Supplementaries

## Changed:

- Hid Lootr's items from [J|R]EI as they're not survivally-acquirable
- Coke Dust can be created in other crushing machines
- Ores processed in Thermal's Pulverizer may now be boosted as they should've been
- Pneumaticcraft Gasoline & Diesel can be used as fuels for IE's Tools
- Rotational Compressors are now considered Tier 2, produce up to 20bar instead of 5bar
- Vanilla Lush Cave Items now have a 2D Inventory Model (Courtesy of
  [`u/thepotatoking55/`](https://reddit.com/u/thepotatoking55/))

## Removed:

- Chest Texture overrides
- Some duplicate ore processing recipes that were meant to be caught by another script
- Imperishable Enchantment (See "Affection" enchant from `Hex`)

# 3.0.4

## Fixed:

- Create devices not rendering outlines, special features correctly
- Many items not being hidden in REI that should have been
- Morphing Tool not activating the Create Wrench for Create Additions, Compressed Creativity mod
- Quest ordering not making sense, some quests needing to be changed due to new/removed items
- Thermal Drill Head & Saw Blade still being _craftable_, albeit hidden and unusable.

## Changed:

- Disabled Infernal Expansion's Shroomloin mob
- Made Graphite Electrodes tolerable, preventing new ones from taking durability damage

## Removed:

- _Some_ custom textures for Create's copper blocks
- Paper from mushrooms recipe

## Updated:

- Create
- CreateAddition
  - This update removes the External Heater substitute, so you will find that these blocks have been
    reverted to their Immersive Engineering counterparts for your convenience.
- Flywheel

# 3.0.3

## Added:

- Hex (New enchantments)
- Infernal Expansion

## Changed:

- Increased Bauxite drops slightly
- Increased **Deepslate** Iron drops slightly
- Crushed Zinc Ore has been retextured to look like dust

## Fixed:

- Two types of carrot/beetroot/potato crates
- LV/MV/HV quests gating progression, requiring accumulators
- LV quest requiring wrong items
- Wrong pipe required in Create Fluid Management quest

# 3.0.2

## Added:

- Building Gadgets w/ Custom Recipes and Textures (credits to
  [Lavundel](https://www.curseforge.com/minecraft/texture-packs/building-gadgets-create-like/)!)
- [RECIPE] Smelting Recipe for Glow Goop -> Slime
- [RECIPE] Centrifuging Recipe for Glow Goop -> Slime + Glowstone

## Updated:

- PneumaticCraft
- PrettyPipes

## Removed:

- Effortless Building - conflicts with Rubidium rendering 😭

## Changed:

- Redstone Acid from IE now requires etching acid, can be made in a Thermo-Pneumatic Processing
  Plant
- Map Atlases can be put in the Akashic Tome
- [QUEST] Quest for Simply Maps has been swapped for Map Atlases
- [QUEST] Quest for Supplementaries
- [QUEST] Fixed duplicate Engineer's Goggle quest reward

# 3.0.1

## Added:

- Radium: Performs improvements to Worldgen, AI, PoI logic and more
- Maps & Atlases: Replaces SimpleMaps
- [RECIPE]: Experience Bottle recipe from 4x Experience Nugget + Bottle
- [RECIPE]: Diamond Hammer/Excavator/Knife/Scythe recipe from Iron Hammer/Excavator/Knife/Scythe

## Removed:

- SimpleBackups
- SimpleMaps (Ended up not working well on servers)

## Updated:

- [LIBRARY] Architectury
- [LIBRARY] Geckolib
- Builder's Delight
- Chunk Pregenerator
- Connected Glass
- Controlling
- Supplementaries
- Yung's Better Witch Huts

## Fixed:

- [QUEST] Entangled Block quest being available out the gate
- [RECIPE] Andesite Alloy being Uncraftable (and requiring LOTS of pressure)
- [REI] Ocassional failure with loading in REI Hidden Items
- [REI] Default key for looking up usage being `F` instead of `U`

# 3.0.0

- Initial Release!
