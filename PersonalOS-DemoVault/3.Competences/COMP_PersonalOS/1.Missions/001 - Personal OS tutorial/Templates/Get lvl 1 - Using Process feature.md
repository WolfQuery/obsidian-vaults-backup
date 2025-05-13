---
tags:
  - Exercise-Template
Context: "[[Using Process feature]]"
Access at level: 0
From template: "[[Get lvl 1 - Using Process feature]]"
---
<% tp.file.rename("Get lvl 1 - Using Process feature "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Process feature description#^aun5a8]]

> [!success] In practice
> Generate training files by using the following button. Then use the process feature until you see a "process done" screen. You can then use the engage feature to come back to this exercise.

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Late file.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Inbox file.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Active file with no actions.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: false
  - type: replaceSelf
    replacement: "Exercise files have been generated"
```

>[!Info]
>![[How to use Process feature#Ways to use the Process feature]]

![[Process feature description#How the script works]]
# Wrap-up

- [ ] When you come back to this file using the Engage feature, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      # Rewards
      
      - Unlock [[Using Process feature]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
