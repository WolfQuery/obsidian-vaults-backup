---
tags:
  - Course-Template
Context: "[[Using activity templates]]"
Access at level: 0
From template: "[[Get lvl 1 - Using activity templates]]"
---
<% tp.file.rename("Get lvl 1 - Using activity templates "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Course";
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
> This course helps you understand and apply the core activity templates. It also encourages you to process some files using them.

> [!info] You'll learn
> - **How to use the 4 core activity templates**
# The 4 core activity templates

![[Activity in Personal OS description#^16rywo]]

Personal OS starts with 4 core templates : 
- Responsibility
- Project
- Routine
- Backlog 

# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Using the responsibility template

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the responsibility template.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Using the project template

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the project template.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Using the routine template

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the routine template.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Using the backlog template

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the backlog template.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
# Wrap-up

- [ ] Once everything else is done, finish this action and complete this course ⏳ <% tp.date.now("YYYY-MM-DD") %>

```meta-bind-button
label: Click this only after you finished this course !
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
  - type: replaceSelf
    replacement: |
      ## Course completed ! 👍
      
      # Rewards
      
      - Unlock [[Using activity templates]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```

