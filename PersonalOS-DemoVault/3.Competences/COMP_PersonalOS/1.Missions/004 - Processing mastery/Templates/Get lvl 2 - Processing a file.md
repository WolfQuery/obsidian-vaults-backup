---
tags:
  - Course-Template
Context: "[[Processing a file]]"
Access at level: 1
From template: "[[Get lvl 2 - Processing a file]]"
---
<% tp.file.rename("Get lvl 2 - Processing a file "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
> This course will help you master complex processing actions, improving your system ability to present you relevant files in a timely manner. 

> [!info] You'll learn
> - **How to use contexts to create Activity trees**
> - **How to improve processing efficiency with the 2mn rule**
> - **How to shelve files in the correct location to improve retrieval**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 

## Using the context property

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the context property.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Using the 2mn Rule

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using the 2mn rule.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
## Shelving

```meta-bind-button
label: Generate course
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Shelving.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Reviewing the advanced processing flow chart

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Reviewing the advanced processing flow chart.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to acquire knowledge, finish this action when you completed it. 
# Wrap-up

- [ ] Once everything else is done, finish this action and complete this course 🔽 ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Processing a file]] [level::2]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
