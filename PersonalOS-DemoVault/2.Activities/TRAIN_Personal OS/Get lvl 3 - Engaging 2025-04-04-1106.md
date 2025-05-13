---
tags: "#Course"
Context: "[[Engaging]]"
Access at level: 2
From template: "[[Get lvl 3 - Engaging]]"
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
> This course encourage focus and prevent bloated actions review. By the end of it you will know how to use backlogs to only access files and actions in the context of a specific activities.
> 

> [!info] You'll learn
> - **Why using backlogs is important**
> - **How to use file backlogs**
> - **How to use action backlogs**
> - How to engage with backlogs, manually or automatically using the "Engage current file" feature
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

![[File backlog description#Introduction]]

## Using file backlog

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using action backlogs

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
## Using the engage current file feature

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04
# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-04-04 ✅ 2025-04-04

## Course completed ! 👍

# Rewards

- Unlock [[Engaging]] [level::3] ✔️

![[Pasted image 20241022050958.png|400]]


