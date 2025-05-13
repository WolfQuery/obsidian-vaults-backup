---
tags:
  - Description
Supports:
  - "[[Failing actions]]"
---
## Introduction

While using your system, you will probably encounter some setbacks, sometimes you won't finish what you scheduled, sometimes you won't complete all your routines. 
In order to make getting back on track easier, the Personal OS plugin contains some automation to fail actions. Those automation helps in keeping your system clean and up to date. 
A failed action is an action with a 📅 due  date in the past. A ⏳ scheduled date in the past is not considered failed, it's only considered late so it will not be taken into account in the automation. 
There are 2 different automation : 
- **Auto fail work in progress files** : fail all failed actions in files that are in a "work in progress" folder (by default the 2.Activities folder). 
- **Auto fail current file** : fail the currently opened file. Note that this automation WILL fail current day actions to help you manually fail some recurring actions you know you won't do today. 

The failing action automation works the following way : 

![[Failing action description 2024-11-23 08.42.10.excalidraw]]