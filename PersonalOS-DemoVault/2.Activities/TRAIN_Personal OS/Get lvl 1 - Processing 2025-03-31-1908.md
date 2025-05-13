---
tags: "#Course"
Context: "[[Processing]]"
Access at level: 0
From template: "[[Get lvl 1 - Processing]]"
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
>  This course will allow you to practice what is probably the most important skill in any personal organization method : processing your inputs. Processing is to make sure that any input into your system is "handled" in a systematic way, allowing for timely and intelligent retrieval when actions are required or when knowledge is needed. 
>  
>  By the end you'll be able to make a simple file processing, enabling a regular use of the engage feature. 

> [!info] You'll learn
> - **How to use the process feature to streamline processing**
> - **How to categorize a file by using tags**
> - **How to make a file actionable by defining actions**
> - **How to organize files in the folder structure**
# Content

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using Process Dashboard

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this task when you completed it. ✅ 2025-03-31
## Using Process feature

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Adding actions to a file

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Tagging a file 

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Organizing files

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-03-31
## Practice Processing files

> [!success] In practice
> Generate exercise files by using the following button. Then use the process feature (ALT +2 ) until all files are processed.  

Practice files have been generated

- [x] Process all generated files, then delete them all to keep your system clean, finally, finish this action. ✅ 2025-03-31
## Reviewing the simple processing flow chart

Exercise has been generated.
- [x] Complete exercise to acquire knowledge, finish this action when you completed it. ✅ 2025-03-31
# Wrap-up

- [x] Once everything else is done, finish this action and complete this course 🔽 ⏳ 2025-03-31 ✅ 2025-03-31

##Course completed ! 👍

# Rewards

- Unlock [[Processing]] [level::1] ✔️
- Unlock [[Processing a file]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

