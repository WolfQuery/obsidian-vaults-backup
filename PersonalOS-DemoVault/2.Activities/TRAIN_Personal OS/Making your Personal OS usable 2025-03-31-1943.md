---
tags: "#Mission"
From template: "[[Making your Personal OS usable]]"
Completed on: 2025-03-31
Archived: true
---


```dataviewjs
let doneTasksCount = dv.current().file.tasks
		.where(t=> t.header.subpath != "Wrap-up")
	.where(t=> t.completed).length 
let totalTasksCount = dv.current().file.tasks
	.where(t=> t.header.subpath != "Wrap-up")
	.length

let percentTask = Math.round((doneTasksCount  / totalTasksCount ) * 100)  
let pb = dv.el("progress-bar", "", { attr: {value: percentTask, style:"width=50%;"}})

dv.paragraph(  
pb
) 
```
# Goal 

> [!important] Goal
>  This course ties the first knot of your personal system. By the end of it you will have access to the basic necessary tools to make it work and start using it.

> [!info] You'll learn
> - **How to improve engagement by using workspaces**
> - **How to access already acquired knowledge on the system through the competence documentation**
> - **How to customize your vault to really make it yours**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Engaging with ease

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-03-31
## Managing competences

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-03-31
## Customizing your vault

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
# Wrap-up

- [x] Once you have completed all exercises, finish this action and complete this mission ⏬ ⏳ 2025-04-1 ✅ 2025-03-31

## Mission completed ! 👍 

# Rewards

- Unlock [[Using PersOS Dashboards]] [level::2] ✔️
- Obtain [[Routine collector]] achievement ✔️

### Your system is online ! You can now practice using it daily, collect what's on your mind, process all those inputs at least once a day, and engage with your activities regularly. Note that even if the system is online, it's currently only partially usable. It'll only be complete when you can trust it, and you will only be able to trust it when it contains everything that is on your mind. Finish the 5 mission ARC to get there ! 

![[Achievement obtained.png|400]]

