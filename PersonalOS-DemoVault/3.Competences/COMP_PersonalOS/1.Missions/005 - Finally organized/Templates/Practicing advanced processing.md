---
tags:
  - Exercise-Template
Context: "[[Processing a file]]"
Access at level: 2
From template: "[[Practicing advanced processing]]"
---
<% tp.file.rename("Practicing advanced processing "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!warning] Important
> Before generating files for this training, **create a subfolder "Process" in the 2.Activities folder**. This folder will receive some generated files and all your processed files. Allowing you to delete it after this exercise to keep your system clean. 
> Also, **make sure the 1.Inbox folder is empty**, if needed create a temporary folder and move all your inbox files into it first. 

> [!success] In practice
> Once you've created the "Process" folder and cleaned up your system : 
> - Generate the training files using the button bellow. 
> - Open the "Processing" workspace by using the command palette (CTRL+P) and searching for "Load: Processing" 
> - Use the "Process" feature (ALT +2) until you're finished with processing everything. Then continue using the "Engage" feature

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Call someone I love routine.md"
    folderPath: "2.Activities/Process"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Call back all important customers.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Research the templater plugin for obsidian.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Drink some water.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/Gym 3 times a week routine.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/005 - Finally organized/Templates/John's last meeting note.md"
    folderPath: "1.Inbox"
    fileName: Rename
    openNote: false
  - type: replaceSelf
    replacement: "Practice files have been generated"
```
# Wrap-up

> [!success] In practice
> Once you're finished with processing, **before finishing that exercise**
> - Delete the "Process" folder to keep your system clean. 

- [ ] When you're finished, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
    templater: false
```
