---
tags: "#Course"
Context: "[[Using activity templates]]"
Access at level: 0
From template: "[[Get lvl 1 - Using activity templates]]"
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
> This course helps you understand and apply the core activity templates. It also encourages you to process some files using them.

> [!info] You'll learn
> - **How to use the 4 core activity templates**
# The 4 core activity templates

![[Activity in Personal OS description#^16rywo]]

Personal OS starts with 4 core templates : 
- Responsibility
- Project
- Routine
- Backlog 

# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using the responsibility template

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using the project template

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using the routine template

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using the backlog template

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
# Wrap-up

- [x] Once everything else is done, finish this action and complete this course ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Using activity templates]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]


