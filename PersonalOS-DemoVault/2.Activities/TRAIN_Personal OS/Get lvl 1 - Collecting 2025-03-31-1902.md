---
tags: "#Course"
Context: "[[Collecting]]"
Access at level: 0
From template: "[[Get lvl 1 - Collecting]]"
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
>  This course helps your understand the importance of collecting ideas that live in your mind. It also contains the baseline knowledge to work inside Obsidian. By the end of it you'll have practiced the most basic requirements to use the tool and start relying on your system. 

> [!info] You'll learn
> - **Why collecting is a key practice ** 
> - **How to create and delete files**
> - **How to move files **
# Content

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Understanding the collection habit

Exercise has been generated.
- [x] Complete exercise to obtain new knowledge, finish this action when you completed it. ✅ 2025-03-31
## Creating and deleting files

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Moving files

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-03-31 ✅ 2025-03-31

## Course completed ! 👍

# Rewards

- Unlock [[Collecting]] [level::1] ✔️
- Unlock [[Managing files in Obsidian]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

