---
tags: "#Mission"
From template: "[[Reclaiming your mind]]"
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
> The goal of this mission is to help you completely clear your mind by collecting every big or little subject that can pop-up and break your focus because it's not properly handled. Take your time ! Do this properly ! don't try to separate personal and professional subjects, you can choose later what you want to manage in your system. Most people are amazed by the feeling of clarity they get once they have finished this exercise, you're only a bit of work away from that feeling ! 

> [!info] You'll learn
> - **How to use tactics for templated recurring tasks**
> - **What is the mind sweep exercise**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using tactics

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04

## Discovering the mind sweep 

Exercise has been generated.
- [x] Complete exercise to obtain a new skill, finish this action when you completed it. ✅ 2025-04-04

## Complete a mind sweep

> [!tip] Tip
> As you just leaned, the mind sweep tactic can be launched from the [[Collecting]] competence. But for conveniency you can use the button bellow

Task has been generated.
- [x] Complete your first mind sweep then finish this action. ✅ 2025-04-04

# Wrap-up

- [x] Once you have finished your first mind-sweep , finish this action and complete this mission ⏬ ⏳ 2025-04-04 ✅ 2025-04-04


## Congratulations !🎉 You have succeeded in your first mind sweep. 
### Most people never get to experience it in their lifetime, keep up your collect habit and you will never have to do this again

# Rewards

- Obtain [[Mind cleaner]] achievement  ✔️

![[Achievement obtained.png|400]]


