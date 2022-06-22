schedule function confetti_creepers:tick 1t
execute as @e[type=minecraft:creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:badlands_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:bamboo_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:beach_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:cave_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:dark_oak_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:desert_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:dripstone_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:hills_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:jungle_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:mushroom_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:savannah_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:snowy_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:spruce_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=creeperoverhaul:swamp_creeper,tag=!cftCreep.done] at @s run function confetti_creepers:initiate_creeper
execute as @e[type=minecraft:area_effect_cloud,tag=!cftCreep.done] run function confetti_creepers:check_effect_cloud