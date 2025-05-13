---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Jalynvyr Nir'Thinn"]
---
# [Jalynvyr Nir'Thinn](3-Mechanics\CLI\bestiary\npc/jalynvyr-nirthinn-kftgv.md)
*Source: Keys from the Golden Vault p. 155*  

```statblock
"name": "Jalynvyr Nir'Thinn (KftGV)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "6"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Elvish"
"cr": "1/4"
"traits":
- "desc": "Jalynvyr Nir'Thinn can innately cast [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md),\
    \ requiring no material components. Its innate spellcasting ability is Charisma.\n\
    \nAt will: [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md)"
  "name": "Innate Spellcasting (1/Day)"
- "desc": "When Jalynvyr Nir'Thinn dies, it leaves behind a cloud of smoke that fills\
    \ a 5-foot-radius sphere centered on its space. The sphere is heavily obscured.\
    \ Wind disperses the cloud, which otherwise lasts for 1 minute."
  "name": "Death Burst"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 +\
    \ 2) slashing damage."
  "name": "Claws"
- "desc": "Jalynvyr Nir'Thinn exhales a 15-foot cone of smoldering ash. Each creature\
    \ in that area must succeed on a DC 10 Dexterity saving throw or be [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ until the end of Jalynvyr Nir'Thinn's next turn."
  "name": "Cinder Breath (Recharge 6)"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/jalynvyr-nirthinn-kftgv.webp"
```
^statblock