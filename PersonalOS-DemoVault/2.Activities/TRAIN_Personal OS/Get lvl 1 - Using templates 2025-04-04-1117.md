---
tags: "#Course"
Context: "[[Using templates]]"
Access at level: 0
From template: "[[Get lvl 1 - Using templates]]"
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
> This course helps you accelerate processing and make your workflows more reliable by using templates. 

> [!info] You'll learn
> - **How to apply a template to a file you are processing**
> - **How to use Personal OS core activity templates**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

## Applying a template

Exercise has been generated.
- [x] Complete exercise to acquire knowledge, finish this action when you completed it. ✅ 2025-04-04
## Using activity templates

course has been generated.
- [x] Complete the course to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Using templates]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

