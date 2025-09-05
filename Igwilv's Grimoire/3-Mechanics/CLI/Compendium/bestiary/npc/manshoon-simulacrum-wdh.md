---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Manshoon Simulacrum
---
# [Manshoon Simulacrum](3-Mechanics\CLI\Compendium\bestiary\npc/manshoon-simulacrum-wdh.md)
*Source: Waterdeep: Dragon Heist p. 208*  

Manshoon uses the [simulacrum](/3-Mechanics/CLI/Compendium/spells/simulacrum.md) spell to create a magical duplicate of himself as needed. He has customized the spell to increase his simulacrum's hit points at the expense of its spellcasting ability.

Manshoon can have only one simulacrum at any given time, and he uses it as a subordinate to command his Zhentarim minions in the field. If his simulacrum is destroyed, Manshoon creates another. Each simulacrum has the statistics of Manshoon, with these changes:

- The simulacrum has no special equipment. Consequently, it has AC 12 and lacks the Magic Resistance trait and the Staff of Power action option.  
- It loses all spell slots of 6th level and higher.  
- It has a challenge rating of 8 (3,900 XP).  

```statblock
"name": "Manshoon Simulacrum (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "126"
"hit_dice": "23d8 + 23"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "23"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "11"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[History](/3-Mechanics/CLI/Rules/skills.md#History)"
    "desc": "+12"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Goblin, Infernal, Orc, Undercommon"
"cr": "8"
"traits":
  - "desc": "Manshoon is an 18th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 19, +11 to hit with spell attacks). He has the following wizard\
      \ spells prepared:\n\nCantrips (at will): [fire bolt](/3-Mechanics/CLI/Compendium/spells/fire-bolt.md),\
      \ [light](/3-Mechanics/CLI/Compendium/spells/light.md), [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md),\
      \ [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md),\
      \ [shocking grasp](/3-Mechanics/CLI/Compendium/spells/shocking-grasp.md)\n\n\
      1st level (4 slots): [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [mage armor](/3-Mechanics/CLI/Compendium/spells/mage-armor.md), [magic missile](/3-Mechanics/CLI/Compendium/spells/magic-missile.md),\
      \ [shield](/3-Mechanics/CLI/Compendium/spells/shield.md)\n\n2nd level (3 slots):\
      \ [detect thoughts](/3-Mechanics/CLI/Compendium/spells/detect-thoughts.md),\
      \ [mirror image](/3-Mechanics/CLI/Compendium/spells/mirror-image.md), [misty\
      \ step](/3-Mechanics/CLI/Compendium/spells/misty-step.md)\n\n3rd level (3\
      \ slots): [counterspell](/3-Mechanics/CLI/Compendium/spells/counterspell.md),\
      \ [lightning bolt](/3-Mechanics/CLI/Compendium/spells/lightning-bolt.md), [sending](/3-Mechanics/CLI/Compendium/spells/sending.md)\n\
      \n4th level (3 slots): [fire shield](/3-Mechanics/CLI/Compendium/spells/fire-shield.md),\
      \ [greater invisibility](/3-Mechanics/CLI/Compendium/spells/greater-invisibility.md),\
      \ [polymorph](/3-Mechanics/CLI/Compendium/spells/polymorph.md)\n\n5th level\
      \ (3 slots): [Bigby's hand](/3-Mechanics/CLI/Compendium/spells/bigbys-hand.md),\
      \ [scrying](/3-Mechanics/CLI/Compendium/spells/scrying.md), [wall of force](/3-Mechanics/CLI/Compendium/spells/wall-of-force.md)"
    "name": "Spellcasting"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) bludgeoning damage."
    "name": "Metal Fist"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/manshoon-simulacrum-wdh.webp"
```
^statblock