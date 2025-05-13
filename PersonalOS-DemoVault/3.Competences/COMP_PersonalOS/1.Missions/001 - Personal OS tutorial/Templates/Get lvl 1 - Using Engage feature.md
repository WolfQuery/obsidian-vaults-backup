---
tags:
  - Exercise-Template
Context: "[[Using Engage feature]]"
Access at level: 0
From template: "[[Get lvl 1 - Using Engage feature]]"
---
<% tp.file.rename("Get lvl 1 - Using Engage feature "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Engage feature description#^zziu28]]

> [!success] In practice
> Generate exercise files by using the following button. Then use the engage feature until you come back to this file. 

```meta-bind-button
label: Generate files
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Started.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Scheduled with time.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Scheduled with later time.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/High priority Scheduled.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Normal priority Scheduled.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: replaceSelf
    replacement: "Exercise files have been generated"
```

>[!Info]
>![[How to use Engage feature#Ways to use the Engage feature]]

![[Engage feature description#How the script works]]
# Wrap-up

- [ ] When you come back to this file using the Engage feature, complete this action and finish the exercise 🔽⏳ <% tp.date.now("YYYY-MM-DD") %>

```meta-bind-button
label: Click this only after you finished the exercise !
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
      ## Exercise completed ! 👍 
      ## Keep using Engage from now on to always get back to what matters most ! 
      ## Use it after getting your reward to continue, do the same after each exercise or course end.
      
      # Rewards
      
      - Unlock [[Using Engage feature]] [level::1]
      - Unlock [[Engaging]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
