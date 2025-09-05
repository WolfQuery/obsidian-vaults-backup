---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fazrian
---
# [Fazrian](3-Mechanics\CLI\Compendium\bestiary\npc/fazrian-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 275*  

Once an exemplar of courage and good judgment, Fazrian now seeks to destroy any creature it believes is undeserving of continued existence. Fazrian's views are a mockery of what they once were. Every creature is guilty of "deformity" in the planetar's eyes. Unless someone can swiftly prove their innocence, Fazrian sentences that individual to an immediate death.

```statblock
"name": "Fazrian (WDMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"modifier": !!int "5"
"stats":
  - !!int "24"
  - !!int "20"
  - !!int "24"
  - !!int "19"
  - !!int "22"
  - !!int "25"
"speed": "40 ft., fly 120 ft."
"saves":
  - "constitution": !!int "12"
  - "wisdom": !!int "11"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "Fazrian's spellcasting ability is Charisma (spell save DC 20). Fazrian\
      \ can innately cast the following spells, requiring no material components:\n\
      \nAt will: [detect evil and good](/3-Mechanics/CLI/Compendium/spells/detect-evil-and-good.md),\
      \ [invisibility](/3-Mechanics/CLI/Compendium/spells/invisibility.md) (self only)\n\
      \n3/day each: [blade barrier](/3-Mechanics/CLI/Compendium/spells/blade-barrier.md),\
      \ [dispel evil and good](/3-Mechanics/CLI/Compendium/spells/dispel-evil-and-good.md),\
      \ [flame strike](/3-Mechanics/CLI/Compendium/spells/flame-strike.md), [raise\
      \ dead](/3-Mechanics/CLI/Compendium/spells/raise-dead.md)\n\n1/day each:\
      \ [commune](/3-Mechanics/CLI/Compendium/spells/commune.md), [control weather](/3-Mechanics/CLI/Compendium/spells/control-weather.md),\
      \ [insect plague](/3-Mechanics/CLI/Compendium/spells/insect-plague.md)"
    "name": "Innate Spellcasting"
  - "desc": "Fazrian's weapon attacks are magical. When Fazrian hits with any weapon,\
      \ the weapon deals an extra 5d8 radiant damage (included in the attack)."
    "name": "Angelic Weapons"
  - "desc": "Fazrian knows if it hears a lie."
    "name": "Divine Awareness"
  - "desc": "Fazrian has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Fazrian makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21\
      \ (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
    "name": "Greatsword"
"lair_actions":
  - "desc": "Unless he is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated),\
      \ Fazrian can take one of the following lair actions on initiative count 20\
      \ (losing initiative ties) while on the Terminus Level:"
    "name": ""
  - "desc": "- Blood flows from Fazrian's eyes until initiative count 20 on the next\
      \ round. No creature within 120 feet of the planetar can regain hit points until\
      \ the effect ends.  \n- Fazrian's eyes become smoldering black voids until initiative\
      \ count 20 on the next round. All other creatures within 120 feet of the planetar\
      \ have disadvantage on saving throws until the effect ends.  \n- Blinding magical\
      \ light springs from Fazrian's eyes until initiative count 20 on the next round.\
      \ If a creature starts its turn within 120 feet of the planetar and the two\
      \ of them can see each other, Fazrian can force the creature to make a DC 20\
      \ Constitution saving throw. On a failed save, the creature is [blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded).\
      \ The blindness lasts until the creature receives a [lesser restoration](/3-Mechanics/CLI/Compendium/spells/lesser-restoration.md)\
      \ spell or similar magic.  "
    "name": ""
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/fazrian-wdmm.webp"
```
^statblock