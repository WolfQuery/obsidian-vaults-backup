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
- Mirt
---
# [Mirt](3-Mechanics\CLI\Compendium\bestiary\npc/mirt-wdh.md)
*Source: Waterdeep: Dragon Heist p. 211*  

Once known as Mirt the Merciless and the Old Wolf, Mirt made a fortune and carved out a reputation as an adventurer and philanderer. Today, an older and wiser Mirt serves as one of the Masked Lords, a Harper, and a close advisor to Laeral Silverhand. The years have not worn him down, and though he has grown soft in the flesh, he remains deceptively strong, vigorous, and clear of mind. Mirt has survived the passing of centuries by means of magic, and of all the Masked Lords, he is the least concerned with concealing his identity.

Despite his prodigious girth, Mirt can move with good speed when he must, and he hasn't let his adventuring skills wither. His wife, Asper, passed away several years ago, and his rambling mansion has seen better days. Mirt spends his days embroiled in politics and whiles away his nights in drink and debauchery.

## Treasure

Mirt has access to magic items of all kinds, but keeps only a few on his person. He can equip himself with other magic items as the need arises.

In addition to his other magical gear, Mirt owns a Lord's ensemble (see appendix A). He dons the ensemble only when meeting with other Masked Lords in an official capacity.

```statblock
"name": "Mirt (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "[bracers of defense](/3-Mechanics/CLI/Compendium/items/bracers-of-defense.md)"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "15"
  - !!int "12"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/Rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](/3-Mechanics/CLI/Rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+8"
"senses": "passive Perception 15"
"languages": "Common, Dwarvish"
"cr": "9"
"traits":
  - "desc": "Mirt wears [bracers of defense](/3-Mechanics/CLI/Compendium/items/bracers-of-defense.md)\
      \ and a [ring of regeneration](/3-Mechanics/CLI/Compendium/items/ring-of-regeneration.md).\
      \ He wields a [+1 longsword](/3-Mechanics/CLI/Compendium/items/1-weapon.md)\
      \ and a [+1 dagger](/3-Mechanics/CLI/Compendium/items/1-weapon.md)."
    "name": "Special Equipment"
  - "desc": "A melee weapon deals one extra die of its damage when Mirt hits with\
      \ it (included in the attacks below)."
    "name": "Brute"
  - "desc": "If he is subjected to an effect that allows him to make a Dexterity saving\
      \ throw to take only half damage, Mirt instead takes no damage if he succeeds\
      \ on the saving throw, and only half damage if he fails. He can't use this trait\
      \ if he's [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)."
    "name": "Evasion"
  - "desc": "Mirt deals an extra 14 (4d6) damage when he hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Mirt's that isn't [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ and Mirt doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Mirt makes three attacks: two with his +1 longsword and one with his\
      \ +1 dagger."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) slashing damage, or 16 (2d10 + 5) slashing damage when used with\
      \ two hands."
    "name": "+1 Longsword"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d4 + 5) piercing damage. Or Ranged Weapon Attack: +9 to hit, range 20/60\
      \ ft., one target. Hit: 7 (1d4 + 5) piercing damage."
    "name": "+1 Dagger"
"reactions":
  - "desc": "Mirt adds 2 to his AC against one melee attack that would hit him. To\
      \ do so, Mirt must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/mirt-wdh.webp"
```
^statblock