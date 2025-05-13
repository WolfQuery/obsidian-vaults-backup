---
tags:
  - Course-Template
Context: "[[Shelving]]"
Access at level: 0
From template: "[[Get lvl 1 - Shelving]]"
---
<% tp.file.rename("Get lvl 1 - Shelving "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
>  This course will help you in shelving your resources at the right place. Making sure that they are easily retrievable in times of need. 

> [!info] You'll learn
> - **How to shelve an activity resource**
> - **How to shelve a competence resource**
> - **How to shelve a global resource**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

## Shelving activity resources

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Shelving activity resources.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Shelving competence resources

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Shelving competence resources.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Shelving global resources

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Shelving global resources.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 


# Wrap-up

- [ ] Once everything else is done, finish this action and complete this course  ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Shelving]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
