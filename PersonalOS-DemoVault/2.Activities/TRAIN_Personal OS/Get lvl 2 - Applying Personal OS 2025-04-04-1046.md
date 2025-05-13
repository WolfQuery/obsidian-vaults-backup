---
tags: "#Course"
Context: "[[Applying Personal OS]]"
Access at level: 1
From template: "[[Get lvl 2 - Applying Personal OS]]"
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
>  This course will enhance your ability to use the Personal OS workflow. By the end of it you will master complex processing techniques that will allow you to process with ease any kind of new file in your system, you will use automation to manage your actions, and you will be able to manage complex projects with greater clarity and focus. 
> 

> [!info] You'll learn
> - **How to better action and especially use recurring actions**
> - **How to use backlogs to engage with complex activities**
> - **How to use templates and properties to do complex file processing**

# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Improving actions management

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-04-04
## Engaging with complex activities

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-04-04
## Using templates

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-04-04
## Improving file processing

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-04-04

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course ⏬ ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Applying Personal OS]] [level::2] ✔️

![[Pasted image 20241022050958.png|400]]

