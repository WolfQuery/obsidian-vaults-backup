---
tags:
  - Mission-Template
From template: "[[Making your Personal OS usable]]"
---
<% tp.file.rename("Making your Personal OS usable "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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
>  This course ties the first knot of your personal system. By the end of it you will have access to the basic necessary tools to make it work and start using it.

> [!info] You'll learn
> - **How to improve engagement by using workspaces**
> - **How to access already acquired knowledge on the system through the competence documentation**
> - **How to customize your vault to really make it yours**
# Content 

> [!success] In practice
> Complete each course or exercise in the order they are presented and for each complete the associated task once it's done. 
## Engaging with ease

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system/Templates/Get lvl 2 - Engaging.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Managing competences

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system/Templates/Get lvl 1 - Managing competences.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Course has been generated."
```
- [ ] Complete course to improve a competence, finish this action when you completed it. 
## Customizing your vault

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system/Templates/Get lvl 1 - Customizing your vault.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to obtain a new skill, finish this action when you completed it. 
# Wrap-up

- [ ] Once you have completed all exercises, finish this action and complete this mission ⏬ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
    bindTarget: '3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system/Make your system usable.md#["Completed on"]'
    evaluate: true
    value: "new Date().toISOString().split('T')[0];" 
  - type: replaceSelf
    replacement: |
      ## Mission completed ! 👍 
      
      # Rewards

      - Unlock [[Using PersOS Dashboards]] [level::2]
      - Obtain [[Routine collector]] achievement
      
      ### Your system is online ! You can now practice using it daily, collect what's on your mind, process all those inputs at least once a day, and engage with your activities regularly. Note that even if the system is online, it's currently only partially usable. It'll only be complete when you can trust it, and you will only be able to trust it when it contains everything that is on your mind. Finish the 5 mission ARC to get there ! 
      
      `BUTTON[obtain-rewards-achiev]`
      
    templater: false
```
