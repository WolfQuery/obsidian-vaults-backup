---
tags:
  - Mission-Template
From template: "[[First step into Personal OS]]"
---
<% tp.file.rename("Getting your system 100% online "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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

> [!Important] Goal
> Finally you're there, on the cusp of success, this course objective is to push you through your first complete processing, so that your system is a 100% online. This will bring the trust and the reliability you need to be naturally pushed to use it every-day. 

# Content 

> [!success] In practice
> Complete each exercise in the order they are presented and for each complete the associated task once it's done. 
## Practicing advanced processing

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Practicing advanced processing.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Exercise has been generated."
```
- [ ] Complete exercise to practice your newly acquired skills, finish this action when you completed it.

## Complete an Inbox purge

> [!success] In practice
>  ### If you have done a mind sweep and reserved files for processing 
> - Move every files you reserved into the 1.Inbox folder before continuing

> [!tip] Tip
> The Inbox purge tactic can be launched from the [[Processing]] competence. But for conveniency you can use the button bellow

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Competences/Inbox purge tactic.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
  - type: replaceSelf
    replacement: "Task has been generated."
```
- [ ] Complete your first Inbox purge then finish this action.  

# Wrap-up

- [ ] Once you everything else is done, finish this action and complete this mission ⏬ ⏳ <% tp.date.now("YYYY-MM-DD") %>


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
    bindTarget: '3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Finally organized.md#["Completed on"]'
    evaluate: true
    value: "new Date().toISOString().split('T')[0];" 
  - type: replaceSelf
    replacement: |
      ## Mission completed ! 👍 
      ### Your system is now online, thank your for completing this ARK and trying the Personal OS method, it means a lot to me and I hope it'll be as helpful to you that it is essential to me. The rest is in your hand !
      #### Use it everyday, the engage feature will guide you
      #### Collect what's on your mind 
      #### Process regularly
      
      # 🎉🎉🎉🎉🎉
      
      # Rewards
      
      - Obtain [[System online]] achievement 
      
      `BUTTON[obtain-rewards-achiev]`
      
    templater: false
```
