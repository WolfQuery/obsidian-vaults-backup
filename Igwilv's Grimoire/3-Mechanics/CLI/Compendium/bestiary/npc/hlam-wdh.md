---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hlam
---
# [Hlam](3-Mechanics\CLI\Compendium\bestiary\npc/hlam-wdh.md)
*Source: Waterdeep: Dragon Heist p. 204*  

This venerable human monk lives in a cave halfway up the side of Mount Waterdeep. Hlam is the grand master of the Order of the Even-Handed, a small monastic group devoted to Tyr. Would-be students periodically visit him to learn the Way of the Sacred Fists, which combines cleric magic and monk training. They usually return to the city confused, bruised, and not inclined to visit again.

In times of great peril, Hlam can be called on to help. Sometimes he offers pearls of wisdom, and sometimes he descends from his cave to set things right with fisticuffs. He can show up at any point in the story as a helpful figure, and the characters can visit him in his cave if they need guidance or training. The Order of the Gauntlet considers him a staunch ally.

Hlam is immune to disease and doesn't require food or water. Although he ages, he suffers none of the frailty of old age.

```statblock
"name": "Hlam (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "22"
"ac_class": "Unarmored Defense"
"hp": !!int "137"
"hit_dice": "25d8 + 25"
"modifier": !!int "7"
"stats":
  - !!int "11"
  - !!int "24"
  - !!int "13"
  - !!int "14"
  - !!int "21"
  - !!int "14"
"speed": "60 ft."
"saves":
  - "strength": !!int "5"
  - "dexterity": !!int "12"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Religion](/3-Mechanics/CLI/Rules/skills.md#Religion)"
    "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
  \ disease"
"senses": "passive Perception 15"
"languages": "all spoken languages"
"cr": "16"
"traits":
  - "desc": "Hlam is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell\
      \ save DC 18, +10 to hit with spell attacks) He has the following cleric spells\
      \ prepared:\n\nCantrips (at will): [guidance](/3-Mechanics/CLI/Compendium/spells/guidance.md),\
      \ [light](/3-Mechanics/CLI/Compendium/spells/light.md), [sacred flame](/3-Mechanics/CLI/Compendium/spells/sacred-flame.md),\
      \ [spare the dying](/3-Mechanics/CLI/Compendium/spells/spare-the-dying.md)\n\
      \n1st level (4 slots): [detect evil and good](/3-Mechanics/CLI/Compendium/spells/detect-evil-and-good.md),\
      \ [healing word](/3-Mechanics/CLI/Compendium/spells/healing-word.md), [sanctuary](/3-Mechanics/CLI/Compendium/spells/sanctuary.md),\
      \ [shield of faith](/3-Mechanics/CLI/Compendium/spells/shield-of-faith.md)\n\
      \n2nd level (3 slots): [calm emotions](/3-Mechanics/CLI/Compendium/spells/calm-emotions.md),\
      \ [prayer of healing](/3-Mechanics/CLI/Compendium/spells/prayer-of-healing.md),\
      \ [silence](/3-Mechanics/CLI/Compendium/spells/silence.md)\n\n3rd level (2\
      \ slots): [protection from energy](/3-Mechanics/CLI/Compendium/spells/protection-from-energy.md),\
      \ [remove curse](/3-Mechanics/CLI/Compendium/spells/remove-curse.md), [sending](/3-Mechanics/CLI/Compendium/spells/sending.md)"
    "name": "Spellcasting"
  - "desc": "If Hlam is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, he instead takes no damage if he succeeds\
      \ on the saving throw, and only half damage if he fails. He can't use this trait\
      \ if he's [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)."
    "name": "Evasion"
  - "desc": "Hlam's unarmed strikes are magical."
    "name": "Magic Attacks"
  - "desc": "While Hlam is wearing no armor and wielding no shield, his AC includes\
      \ his Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "Hlam attacks three times using his unarmed strike, darts, or both."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12\
      \ (1d10 + 7) bludgeoning, magic damage. If the target is a creature, Hlam can\
      \ choose one of the following additional effects:\n\nThe target must succeed\
      \ on a DC 18 Strength saving throw or drop one item it is holding (Hlam's choice).\n\
      \nThe target must succeed on a DC 18 Dexterity saving throw or be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone).\n\
      \nThe target must succeed on a DC 18 Constitution saving throw or be [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)\
      \ until the end of Hlam's next turn."
    "name": "Unarmed Strike"
  - "desc": "Ranged Weapon Attack: +12 to hit, range 20/60 ft., one target. Hit:\
      \ 9 (1d4 + 7) piercing damage."
    "name": "Dart"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit:\
      \ The target must make a DC 18 Constitution saving throw. On a failed save,\
      \ the target is reduced to 0 hit points. On a successful save, the target takes\
      \ 55 (10d10) necrotic damage."
    "name": "Quivering Palm (Recharge 6)"
  - "desc": "Hlam regains 60 hit points."
    "name": "Wholeness of Body (Recharges after a Long Rest)"
"reactions":
  - "desc": "In response to being hit by a ranged weapon attack, Hlam deflects the\
      \ missile. The damage he takes from the attack is reduced by 1d10 + 27. If the\
      \ damage is reduced to 0, Hlam catches the missile if it's small enough to hold\
      \ in one hand and he has a hand free."
    "name": "Deflect Missile"
  - "desc": "Hlam reduces the bludgeoning damage he takes from a fall by 100."
    "name": "Slow Fall"
"legendary_actions":
  - "desc": "Hlam moves up to his speed without provoking opportunity attacks."
    "name": "Quick Step"
  - "desc": "Hlam makes one unarmed strike."
    "name": "Unarmed Strike (Costs 2 Actions)"
  - "desc": "Hlam becomes [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ until the end of his next turn. The effect ends if Hlam attacks or casts a\
      \ spell."
    "name": "Invisibility (Costs 3 Actions)"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/hlam-wdh.webp"
```
^statblock