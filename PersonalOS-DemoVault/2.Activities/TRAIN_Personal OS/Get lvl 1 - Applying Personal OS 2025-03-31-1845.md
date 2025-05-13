---
tags: "#Course"
Context: "[[Applying Personal OS]]"
Access at level: 0
From template: "[[Get lvl 1 - Applying Personal OS]]"
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
>  This course marks your first step towards mastering the Personal OS methodology. By the end of it you will be able to start handling your actions in a systemic manner, transforming your approach to organization and productivity.

> [!info] You'll learn
> - **How to engage with your responsibilities by using the Engage feature**
> - **How to create and manage files to collect ideas**
> - **How to stay on top of your activities by processing files**
> - **How to navigate the system using Dashboards**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Engaging with your activities

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-03-31
## Collecting useful ideas

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-03-31
## Processing files

Course has been generated.
- [x] Complete course to improve a competence, finish this action when you completed it. ✅ 2025-03-31

# Wrap-up

- [x] Once everything else is done, finish this action and complete this course ⏬ ⏳ 2025-03-31 ✅ 2025-03-31

### Good job !👍 You have finished the first tutorial for Personal OS ! 
### This vault is yours ! Feel free to explore and use it as you go ! 

# Rewards

- Unlock [[Applying Personal OS]] [level::1] ✔️
- Unlock [[Using PersOS Dashboards]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]


