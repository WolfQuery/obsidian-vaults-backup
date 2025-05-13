---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/harengon
statblock: inline
aliases: ["Agdon Longscarf"]
---
# [Agdon Longscarf](3-Mechanics\CLI\bestiary\npc/agdon-longscarf-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 73*  

In days gone by, Agdon Longscarf made a name for himself as he and his band of miscreants menaced travelers throughout various Feywild domains. It was in Prismeer, however, that Agdon's antics came to an end by Zybilna's hand. As punishment for his offenses, the archfey demanded that Agdon give up his beloved scarf. When he refused, Zybilna cursed him so that he would never be able to remove it. She then pinned the scarf to a young sapling with a magic nail made of gold and iron, and she bade the tree grow until its branches raked the clouds. Agdon was thus carried into the sky, where he was stranded for a long time.

The arrival of the Hourglass Coven signaled a reversal of Agdon Longscarf's fortunes. With Zybilna trapped in temporal stasis, Agdon's loyal gang was able to chop down his tree prison. But his scarf remained pinned to the felled trunk, and him with it, until Bavlorna struck a deal with him—she agreed to remove the nail and free the scarf in exchange for the best prize from each of his raids thereafter.

Agdon's scarf is a bright blue length of cloth that he claims was woven from lightning bolts he stole right out from under a dark cloud. The scarf can't be removed, even if Agdon dies. His branding iron functions for him alone, and it ceases to be hot when it leaves his hand. The brand it makes is shaped like three bounding rabbits connected nose to tail, forming a triangle.

```statblock
"name": "Agdon Longscarf (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "harengon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "[studded leather](3-Mechanics/CLI/items/studded-leather-armor.md), [shield](3-Mechanics/CLI/items/shield.md)"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "20"
- !!int "11"
- !!int "11"
- !!int "14"
- !!int "16"
"speed": "35 ft., 70 ft. while wearing his scarf"
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Sleight of Hand": !!int "7"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "passive Perception 16"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- "desc": "If Agdon is subjected to an effect that allows him to make a Dexterity\
    \ saving throw to take only half damage, he instead takes no damage if he succeeds\
    \ on the saving throw and only half damage if he fails, provided he isn't [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Evasion"
- "desc": "Agdon's long jump is up to 20 feet and his high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Agdon makes two Branding Iron or Dagger attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one target. Hit: dice:3d6|noform|noparens|avg|text(10) (3d6) fire\
    \ damage, and the target is magically branded. Agdon is [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible)\
    \ to creatures branded in this way. The brand disappears after 24 hours, or it\
    \ can be removed from a creature or object by any spell that ends a curse."
  "name": "Branding Iron"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+7|noform|noparens|text(+7)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+5|noform|noparens|avg|text(7)\
    \ (1d4 + 5) piercing damage."
  "name": "Dagger"
"bonus_actions":
- "desc": "Agdon targets one creature within 5 feet of him that he can see and makes\
    \ a Dexterity ([Sleight of Hand](3-Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand))\
    \ check, with a DC equal to 1 + the target's passive Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ score. On a successful check, Agdon pilfers one object weighing 1 pound or less\
    \ that the target has in its possession but not in its grasp, without the target\
    \ noticing the theft."
  "name": "Quick Fingers"
"reactions":
- "desc": "Agdon halves the damage that he takes from an attack that hits him. He\
    \ must be able to see the attacker."
  "name": "Uncanny Dodge"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/agdon-longscarf-wbtw.webp"
```
^statblock