---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Griffon Cavalry Rider
---
# [Griffon Cavalry Rider](3-Mechanics\CLI\Compendium\bestiary\humanoid/griffon-cavalry-rider-wdh.md)
*Source: Waterdeep: Dragon Heist p. 197*  

The City Guard is Waterdeep's army, charged with protecting the city's walls and gates, government buildings, harbor, and officials. The City Guard also patrols the roads to Amphail, Goldenfields, and Daggerford.

## Ranks in the City Guard

Members of the City Guard have ranks. From lowest to highest, they are:

PrivateSergeant (armar)Lieutenant (civilar)Captain (senior civilar)Multiple command positions, some perennial (Seneschal of Castle Waterdeep, Defender of the Harbor, Master of the North Towers, Master of the South Towers, Master Armorer), others bestowed as needed in wartime (the Lords' Hand and the Lords' Champion)Warden of Waterdeep

The current Warden of Waterdeep is Elminster, who answers to the Open Lord, Laeral Silverhand.

The Griffon Cavalry is a special branch of the City Guard whose members are veteran soldiers trained to fly griffon mounts.

```statblock
"name": "Griffon Cavalry Rider (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[half plate armor](/3-Mechanics/CLI/Compendium/items/half-plate-armor.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "12"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Animal Handling](/3-Mechanics/CLI/Rules/skills.md#Animal%20Handling)"
    "desc": "+3"
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit (with disadvantage against a target\
      \ within 5 ft.), reach 10 ft., one target. Hit: 8 (1d12 + 2) piercing damage,\
      \ or 11 (1d12 + 5) piercing damage while mounted."
    "name": "Lance"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) piercing damage. Or Ranged Weapon Attack: +4 to hit, range 20/60 ft.,\
      \ one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "The rider wears a magic ring with which it can cast the [feather fall](/3-Mechanics/CLI/Compendium/spells/feather-fall.md)\
      \ spell on itself once as a reaction to falling. After the spell is cast, the\
      \ ring becomes nonmagical."
    "name": "Feather Fall"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/griffon-cavalry-rider-wdh.webp"
```
^statblock