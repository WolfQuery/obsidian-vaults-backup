---
tags: "#Course"
Context: "[[Managing actions]]"
Access at level: 1
From template: "[[Get lvl 2 - Managing actions]]"
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
> This course helps you master advanced techniques to manage actions in obsidian files. By the end of it you will be able to handle actions much faster, use recurring actions and use automations to smooth your workflow. 

> [!info] You'll learn
> - **How to use recurring actions**
> - **How to delay actions in an efficient manner**
> - **How to automate the handling of failed actions**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using the 3 types of date

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Creating recurring actions

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Hiding completed actions

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Delaying actions

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Failing actions

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Practicing managing actions

Exercise has been generated.
- [x] Complete exercise to practice your newly acquired skills, finish this action when you completed it. ✅ 2025-04-04

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Managing actions]] [level::2] ✔️

![[Pasted image 20241022050958.png|400]]

