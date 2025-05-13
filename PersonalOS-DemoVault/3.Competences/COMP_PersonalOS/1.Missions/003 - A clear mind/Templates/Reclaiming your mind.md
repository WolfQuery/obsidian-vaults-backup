---
tags:
  - Mission-Template
From template: "[[Reclaiming your mind]]"
---
<% tp.file.rename("Reclaiming your mind "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Mission";
  });
}); 
%>
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

```meta-bind-button
label: Generate exercise
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/003 - A clear mind/Templates/Get lvl 1 - Using tactics.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 

## Discovering the mind sweep 

```meta-bind-button
label: Generate exercise
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/003 - A clear mind/Templates/Get lvl 1 - Mind sweeping.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 

## Complete a mind sweep

> [!tip] Tip
> As you just leaned, the mind sweep tactic can be launched from the [[Collecting]] competence. But for conveniency you can use the button bellow

```meta-bind-button
label: Generate task from tactic
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/003 - A clear mind/Competences/Mind sweep tactic.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Task has been generated."
```
- [ ] Complete your first mind sweep then finish this action.  

# Wrap-up

- [ ] Once you have finished your first mind-sweep , finish this action and complete this mission ⏬ ⏳ <% tp.date.now("YYYY-MM-DD") %>


```meta-bind-button
label: Click this only after you finished this mission !
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: destructive
actions:
  - type: updateMetadata
    bindTarget: '["Completed on"]'
    evaluate: true
    value : "new Date().toISOString().split('T')[0];" 
  - type: updateMetadata
    bindTarget: Archived
    evaluate: false
    value : "true" 
  - type: updateMetadata
    bindTarget: '3.Competences/COMP_PersonalOS/1.Missions/003 - A clear mind/Reclaim your mind.md#["Completed on"]'
    evaluate: true
    value: "new Date().toISOString().split('T')[0];" 
  - type: replaceSelf
    replacement: |
      ## Congratulations !🎉 You have succeeded in your first mind sweep. 
      ### Most people never get to experience it in their lifetime, keep up your collect habit and you will never have to do this again
      
      # Rewards
      
      - Obtain [[Mind cleaner]] achievement 
      
      `BUTTON[obtain-rewards-achiev]`
      
    templater: false
```

