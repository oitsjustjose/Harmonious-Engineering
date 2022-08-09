schedule function kubejs:tick 1t


# Make all entities that require oxygen in anoxic environments drop NOTHING when killed.
execute in beyond_earth:glacio_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:mars_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:moon_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:mercury_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:earth_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:glacio as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:venus as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:venus_orbit as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:mars as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:moon as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}
execute in beyond_earth:mercury as @e[type=#beyond_earth:entities/oxygen] run data merge entity @s {DeathLootTable: "minecraft:empty"}

# Move entities off-screen to prevent death particles / poof animation
execute in beyond_earth:glacio_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:mars_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:moon_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:mercury_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:earth_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:glacio run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:venus run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:venus_orbit run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:mars run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:moon run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0
execute in beyond_earth:mercury run tp @e[type=#beyond_earth:entities/oxygen] 0 -128 0

# Kill all entities
execute in beyond_earth:glacio_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:mars_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:moon_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:mercury_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:earth_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:glacio run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:venus run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:venus_orbit run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:mars run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:moon run kill @e[type=#beyond_earth:entities/oxygen]
execute in beyond_earth:mercury run kill @e[type=#beyond_earth:entities/oxygen]