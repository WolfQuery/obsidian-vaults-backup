---
tags:
  - Course-Template
Context: "[[Applying Personal OS]]"
Access at level: 0
From template: "[[Get lvl 1 - Applying Personal OS]]"
---
<% tp.file.rename("Get lvl 1 - Applying Personal OS "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Get lvl 1 - Engaging.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Collecting useful ideas

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Get lvl 1 - Collecting.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Processing files

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Get lvl 1 - Processing.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 

# Wrap-up

- [ ] Once everything else is done, finish this action and complete this course ⏬ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
  - type: updateMetadata
    bindTarget: '3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Complete Personal OS tutorial.md#["Completed on"]'
    evaluate: true
    value: "new Date().toISOString().split('T')[0];" 
  - type: replaceSelf
    replacement: |
      ### Good job !👍 You have finished the first tutorial for Personal OS ! 
      ### This vault is yours ! Feel free to explore and use it as you go ! 
      
      # Rewards
      
      - Unlock [[Applying Personal OS]] [level::1]
      - Unlock [[Using PersOS Dashboards]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```

