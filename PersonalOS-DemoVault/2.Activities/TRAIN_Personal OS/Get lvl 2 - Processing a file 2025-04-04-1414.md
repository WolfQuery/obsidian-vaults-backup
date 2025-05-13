---
tags: "#Course"
Context: "[[Processing a file]]"
Access at level: 1
From template: "[[Get lvl 2 - Processing a file]]"
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
> This course will help you master complex processing actions, improving your system ability to present you relevant files in a timely manner. 

> [!info] You'll learn
> - **How to use contexts to create Activity trees**
> - **How to improve processing efficiency with the 2mn rule**
> - **How to shelve files in the correct location to improve retrieval**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

## Using the context property

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using the 2mn Rule

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Shelving

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-04-04
## Reviewing the advanced processing flow chart

Exercise has been generated.
- [x] Complete exercise to acquire knowledge, finish this action when you completed it. ✅ 2025-04-04
# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Processing a file]] [level::2] ✔️

![[Pasted image 20241022050958.png|400]]

