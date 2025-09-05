---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gorgon
---
# [Gorgon](3-Mechanics\CLI\Compendium\bestiary\monstrosity/gorgon.md)
*Source: Monster Manual p. 171, Waterdeep: Dungeon of the Mad Mage, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Few creatures that encounter a gorgon live to tell about it. Its body is covered in iron plates, and its nostrils fume with green vapor.

## Horrific Structure

A gorgon's iron plates range from steely black to gleaming silver, but this natural armor in no way hinders its movement or mobility. The oils of its body lubricate the armor. A sick or inactive gorgon gathers rust like fungus or mange. When a rusty gorgon moves, its plates squeal as they rub together.

## Monstrous Predator

When a gorgon spots potential prey, it charges with a hideous clamor of metal on metal. When the gorgon hits, it pulverizes the foe and sends its sprawling, then tramples it to death with its cruel hooves. Faced with multiple foes, the gorgon exhales its deadly vapor to overcome the creatures it touches by turning them to stone. When it grows hungry, it smashes its [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified) prey to rubble and uses its strong teeth to grind the stone into a powder that provides nourishment. The crisscrossing network of trampled trails and splintered trees that surrounds a gorgon lair is strewn with the uneaten fragments of its shattered foes.

```statblock
"name": "Gorgon"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "11"
  - !!int "18"
  - !!int "2"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+4"
"condition_immunities": "[petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "5"
"traits":
  - "desc": "If the gorgon moves at least 20 feet straight toward a creature and then\
      \ hits it with a gore attack on the same turn, that target must succeed on a\
      \ DC 16 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone).\
      \ If the target is [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), the\
      \ gorgon can make one attack with its hooves against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18\
      \ (2d12 + 5) piercing damage."
    "name": "Gore"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16\
      \ (2d10 + 5) bludgeoning damage."
    "name": "Hooves"
  - "desc": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in\
      \ that area must succeed on a DC 13 Constitution saving throw. On a failed save,\
      \ a target begins to turn to stone and is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained).\
      \ The [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained) target must\
      \ repeat the saving throw at the end of its next turn. On a success, the effect\
      \ ends on the target. On a failure, the target is [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified)\
      \ until freed by the  [greater restoration](/3-Mechanics/CLI/Compendium/spells/greater-restoration.md)\
      \ spell or other magic."
    "name": "Petrifying Breath (Recharge 5-6)"
"source":
  - "MM"
  - "WDMM"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/monstrosity/token/gorgon.webp"
```
^statblock

## Environment

grassland, forest, hill