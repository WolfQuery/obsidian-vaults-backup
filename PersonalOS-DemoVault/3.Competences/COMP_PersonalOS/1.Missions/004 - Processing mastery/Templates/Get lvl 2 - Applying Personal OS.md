---
tags:
  - Course-Template
Context: "[[Applying Personal OS]]"
Access at level: 1
From template: "[[Get lvl 2 - Applying Personal OS]]"
---
<% tp.file.rename("Get lvl 2 - Applying Personal OS "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
>  This course will enhance your ability to use the Personal OS workflow. By the end of it you will master complex processing techniques that will allow you to process with ease any kind of new file in your system, you will use automation to manage your actions, and you will be able to manage complex projects with greater clarity and focus. 
> 

> [!info] You'll learn
> - **How to better action and especially use recurring actions**
> - **How to use backlogs to engage with complex activities**
> - **How to use templates and properties to do complex file processing**

# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Improving actions management

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 2 - Managing actions.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Engaging with complex activities

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 3 - Engaging.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Using templates

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using templates.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Improving file processing

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 2 - Processing a file.md"
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
    bindTarget: '3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Master Processing.md#["Completed on"]'
    evaluate: true
    value: "new Date().toISOString().split('T')[0];" 
  - type: replaceSelf
    replacement: |
      ## Course completed ! 👍
      
      # Rewards
      
      - Unlock [[Applying Personal OS]] [level::2]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
