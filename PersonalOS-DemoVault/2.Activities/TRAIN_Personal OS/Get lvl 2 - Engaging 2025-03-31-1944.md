---
tags: "#Course"
Context: "[[Engaging]]"
Access at level: 1
From template: "[[Get lvl 2 - Engaging]]"
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
>  This course helps you improve your how you engage with the system by learning to use two of the most powerful tools, workspaces and routines. 

> [!info] You'll learn
> - **What are workspaces and how to use them**
> - **How to integrate the core routines that keep you system healthy**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Discovering workspaces 

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Personal OS major workspaces

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed ✅ 2025-03-31
## Personal OS core routines 

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed ✅ 2025-03-31
# Wrap-up

- [x] Once you have completed all exercises, finish this action and complete this mission 🔽 ⏳ 2025-03-31 ✅ 2025-03-31

## Mission completed ! 👍 

# Rewards

- Unlock [[Engaging]] [level::2] ✔️

![[Achievement obtained.png|400]]


