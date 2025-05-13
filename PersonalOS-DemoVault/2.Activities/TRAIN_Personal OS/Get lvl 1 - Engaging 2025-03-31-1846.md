---
tags: "#Course"
Context: "[[Engaging]]"
Access at level: 0
From template: "[[Get lvl 1 - Engaging]]"
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
>  This course will allow you to engage with your activities by using the engage feature or by navigating through the engage dashboard. By the end of it you'll know how to access your current priorities with ease.  

> [!info] You'll learn
> - **How to use the engage feature to directly focus on your most important priority**
> - **How to review your current day workload through the engage dashboard**
# Content

![[Engaging description#Simple description]]

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using Engage feature

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Using Engage Dashboard 

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this task when you completed it. ✅ 2025-03-31
## Understanding the Personal OS workflow

Exercise has been generated.
- [x] Complete exercise to acquire knowledge, finish this action when you completed it. ✅ 2025-03-31

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-03-31 ✅ 2025-03-31

## Course completed ! 👍

# Rewards

- Unlock [[Engaging]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

