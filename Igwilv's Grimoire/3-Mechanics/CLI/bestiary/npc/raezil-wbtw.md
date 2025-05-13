---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Raezil"]
---
# [Raezil](3-Mechanics\CLI\bestiary\npc/raezil-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 193*  

The statue is a petrified high elf named Raezil Uthemar (neutral). Raezil served as Zybilna's spy in other fey courts. She returned from a mission to find nearly everyone in the palace trapped in temporal stasis. When she confronted Kelek and accused him of conspiring to overthrow Zybilna, his cockatrices petrified her.

The name "Iggwilv "means nothing to Raezil, who started working for Zybilna shortly after the archfey carved out her domain in the Feywild. Raezil spends most of her time abroad, in the courts of other archfey, and hasn't kept up on the politics of Prismeer.

Once she is no longer petrified, Raezil is bound by the rule of reciprocity (see "Rules of Conduct "in chapter 2) to help the characters complete any outstanding quests they might have. Raezil comes from a highborn elf family with influence in the Summer Court, making her a useful retainer if the characters choose to remain in the Feywild after their adventures in Prismeer have ended.

```statblock
"name": "Raezil (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Elvish"
"cr": "1"
"traits":
- "desc": "On each of her turns, Raezil can use a bonus action to take the Dash, Disengage,\
    \ or Hide action."
  "name": "Cunning Action"
- "desc": "Raezil has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- "desc": "Raezil deals an extra dice:2d6|noform|noparens|avg|text(7) (2d6) damage\
    \ when she hits a target with a weapon attack and has advantage on the attack\
    \ roll, or when the target is within 5 feet of an ally of hers that isn't incapacitated\
    \ and Raezil doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Raezil makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/raezil-wbtw.webp"
```
^statblock