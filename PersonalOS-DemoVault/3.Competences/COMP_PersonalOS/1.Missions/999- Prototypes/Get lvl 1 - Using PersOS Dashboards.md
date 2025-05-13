---
tags:
  - Course-Template
Context: 
Access at level: 0
From template: "[[Get lvl 1 - Using PersOS Dashboards]]"
---
<% tp.file.rename("Get lvl 1 - Using PersOs Dashboards "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
 This course will allow you to navigate more easily inside the Personal OS system by using Dashboards. By the end of it you will have mastered some basic tools to get an overview of your system health at a glance. 

> [!info] You'll learn
> - **How to access the 3 most important dashboards**
> - **How those dashboards work and how they help navigate in the system**

# Content
![[Personal OS Dashboards#^emhfzc]]

## Using Home Dashboard

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Get lvl 1 - Using Home Dashboard.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this task when you completed it. 

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
      
      - Unlock [[Using PersOS Dashboards]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
