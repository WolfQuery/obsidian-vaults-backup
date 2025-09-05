---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Meloon Wardragon
---
# [Meloon Wardragon](3-Mechanics\CLI\Compendium\bestiary\npc/meloon-wardragon-wdh.md)
*Source: Waterdeep: Dragon Heist p. 210*  

*Famous human adventurer*

> [!quote]  
> 
> Heroes, am I right? Maybe one day you'll join Force Grey. Can I buy you an ale?

Meloon is a handsome, formidable warrior in his prime, who serves the goddess Tymora and loves a good fight. His friends-among them Renaer Neverember and Vajra Safahr-describe him as honest, optimistic, and extraordinarily lucky. Until recently, he was a member of Force Grey and reported directly to the Blackstaff. In recent months, Meloon has spent much of his time at the Yawning Portal.

Three months ago, out of boredom, Meloon accompanied a fledgling band of adventurers on an expedition to Undermountain. There, his luck ran out. While resting in the dungeon, the adventuring party was attacked by monsters unleashed by Xanathar-including a number of intellect devourers. One of the creatures succeeded in magically devouring and replacing Meloon's brain, turning the champion of Tymora into a puppet. After finishing off his unsuspecting companions, Meloon returned to Waterdeep as a Xanathar Guild spy.

The intellect devourer that inhabits Meloon's skull was bred by Nihiloor, a mind flayer in Xanathar's employ. It knows everything Meloon knew, and Meloon behaves much as he did before his descent into Undermountain. He hangs out at the Yawning Portal, tries to bond with adventurers, and offers a helping hand whenever doing so feels appropriate. The intellect devourer's primary goals are to steer adventurers away from Undermountain and get them to undertake quests that further the aims of Xanathar. Such quests usually involve the eradication of Xanathar's enemies, and Meloon is all too eager to fight alongside those who fall for his ruse.

## Adjusted Game Statistics

If Meloon is killed and raised from the dead, his true self is restored and his statistics change as follows:

- Meloon is neutral good.  
- He loses his telepathy, and his ability to speak and understand Deep Speech.  
- He can attune to Azuredge (see appendix A).  

```statblock
"name": "Meloon Wardragon (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/Compendium/items/plate-armor.md)"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Deep Speech, telepathy 60 ft."
"cr": "9"
"traits":
  - "desc": "Meloon wields [Azuredge](/3-Mechanics/CLI/Compendium/items/azuredge-wdh.md)\
      \ but can't attune to it, and thus gains none of its benefits."
    "name": "Special Equipment"
  - "desc": "Meloon can reroll a saving throw that he fails. He must use the new roll."
    "name": "Indomitable (2/Day)"
  - "desc": "As a bonus action, Meloon can regain 20 hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "Meloon makes four attacks with Azuredge."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9 to hit, reach 5 ft., one target. Hit: 11 (1d12\
      \ + 5) slashing damage."
    "name": "Azuredge"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/meloon-wardragon-wdh.webp"
```
^statblock