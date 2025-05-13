---
tags: "#Course"
Context: "[[Managing competences]]"
Access at level: 0
From template: "[[Get lvl 1 - Managing competences]]"
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
>  This course will help you navigate in the large amount of competences you already acquired, all in order to easy your access to relevant information.  

> [!info] You'll learn
> - **How to use the competence dashboard**
> - **How to navigate through the competences trees**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using Competence Dashboard

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Accessing competence and skill resources

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-03-31 ✅ 2025-03-31

## Course completed ! 👍

# Rewards

- Unlock [[Managing competences]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

