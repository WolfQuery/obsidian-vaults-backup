---
tags: "#Course"
Context: "[[Shelving]]"
Access at level: 0
From template: "[[Get lvl 1 - Shelving]]"
Completed on: 2025-04-04
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
>  This course will help you in shelving your resources at the right place. Making sure that they are easily retrievable in times of need. 

> [!info] You'll learn
> - **How to shelve an activity resource**
> - **How to shelve a competence resource**
> - **How to shelve a global resource**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

## Shelving activity resources

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Shelving competence resources

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Shelving global resources

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04


# Wrap-up

- [x] Once everything else is done, finish this action and complete this course ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Shelving]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

