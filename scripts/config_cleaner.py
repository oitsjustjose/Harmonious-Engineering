import os

MODIDS = ['abnormals_core', 'abnormals_delight', 'ae2wtlib', 'aeinfinitybooster', 'akashictome', 'alexsmobs', 'alloyed', 'appliedenergistics2', 'architectury', 'atmospheric', 'attributefix', 'autoreglib', 'autumnity', 'betterbiomeblend', 'betterdungeons', 'betterendforge', 'betternether', 'betterstrongholds', 'bigbrain', 'blame', 'botania', 'brandonscore', 'buildinggadgets', 'buzzier_bees', 'cabletiers', 'caelus', 'catalogue', 'cavern', 'cb_microblock', 'cb_multipart', 'cb_multipart_minecraft', 'chickenchunks', 'chipped', 'citadel', 'cloth-config', 'clumps', 'codechickenlib', 'cofh_core', 'collective', 'compactmachines', 'computercraft', 'configured', 'connectedglass', 'controlling', 'corail_woodcutter', 'cosmeticarmorreworked', 'crafttweaker', 'create', 'createaddition', 'createdeco', 'creeperconfetti', 'ctm', 'cucumber', 'curios', 'curiouselytra', 'customizableelytra', 'damagetilt', 'decorative_blocks', 'decorative_blocks_abnormals', 'diagonalfences', 'doomangelring', 'doubleslabs', 'draconicevolution', 'dsurround', 'emendatusenigmatica', 'enderstorage', 'enhanced_mushrooms', 'entangled', 'environs', 'extcaves', 'extendedcrafting', 'extlights', 'farmersdelight', 'fastbench', 'fastleafdecay', 'fluxnetworks', 'flywheel', 'forge', 'framedblocks', 'framedcompactdrawers', 'ftblibrary', 'ftbquests', 'ftbteams', 'gamestages', 'glassential', 'gravestone', 'immersiveengineering', 'immersivepetroleum', 'immersiveposts', 'improvedbackpacks', 'industrialforegoing', 'infernalexp', 'invtweaks', 'itemfilters', 'jade', 'jei', 'jeitweaker', 'kiwi', 'konkrete', 'kotlinforforge', 'kubejs', 'kubejs_create', 'kubejs_immersive_engineering', 'kubejs_mekanism', 'kubejs_thermal', 'lollipop', 'lootr', 'mantle', 'mcjtylib', 'mcwlights', 'mcwpaintings', 'mekanism', 'mekanismgenerators', 'mekanismtools', 'mgui', 'mightyarchitect', 'minecraft', 'mobeffects', 'modularrouters', 'morecreatestuffs', 'moreminecarts', 'moreoverlays', 'morphtool', 'mousetweaks', 'movingelevators', 'natural-progression', 'naturescompass', 'oauth', 'observerlib', 'overloadedarmorbar', 'passablefoliage', 'patchouli', 'pipez', 'placebo', 'portable_stonecutter', 'powah', 'projectred-core', 'projectred-illumination', 'projectred-integration', 'projectred-transmission', 'quantumquarryplus', 'quark', 'rad', 'rangedpumps', 'redstone_arsenal', 'refinedstorage', 'refinedstorageaddons', 'repurposed_structures', 'rftoolsbase', 'rhino', 'rsinfinitybooster', 'rsrequestify', 'savageandravage', 'scannable', 'selene', 'sewingkit', 'shutupexperimentalsettings', 'sndctrl', 'snowrealmagic', 'spark', 'steampowered', 'stoneholm', 'storage_overhaul', 'storagedrawers', 'storagenetwork', 'supermartijn642configlib', 'supermartijn642corelib', 'supplementaries', 'tconstruct', 'terraforged', 'tetra', 'theoneprobe', 'thermal', 'thermal_expansion', 'thermal_foundation', 'thermal_innovation', 'thermal_locomotion', 'titanium', 'toolbelt', 'tools_complement', 'torchmaster', 'torchslabmod', 'totw_additions', 'toughnessbar', 'towers_of_the_wild', 'trashcans', 'trashslot', 'treechop', 'upgrade_aquatic', 'upstream', 'valhelsia_core', 'valhelsia_structures', 'vtweaks', 'waila', 'waystones', 'windowlogging', 'wormhole', 'xaerominimapfair', 'xaeroworldmap', 'xnet', 'xnetgases', 'yungsapi', 'yungsextras']


def main() -> None:
    """ The main runfunc """
    culprits = []

    for fn in os.listdir('./config'):
        matched_to_modid = False
        for modid in MODIDS:
            if modid in fn.lower():
                matched_to_modid = True
                break
        if not matched_to_modid:
            culprits.append(f"\t{fn}\n")

    print("Found the following possible unused config files:")
    print("".join(culprits))

if __name__ == "__main__":
    main()
