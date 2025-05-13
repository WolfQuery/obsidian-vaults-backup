---
tags:
  - Tactic
Supports:
  - "[[Mind sweeping]]"
From template: "[[Mind sweep tactic]]"
---
<% tp.file.rename("Mind sweep "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Task";
  });
}); 
%>

- [ ] First ! Move this file to an appropriate activity folder so it can be taken back from the Engage feature
## Empty your mind 

> [!warning] 
> A complete mind sweep is both the hardest challenge and the most critical achievement toward getting your Personal OS on track. Make sure you have sufficient uninterrupted time to complete-it ! For most people, this can take up to 2 hours ! 

> [!success] In practice
> - Take a tea or a coffee, make sure your are in an appropriate environment for some focused work. 
> - Treat this as a cinema session, put your phone in silence mode, close your door, turn-off the tv, put some music you like working to
> - Open the "Collecting" workspace and proceed to do a full mind sweep (CTRL+P and search "Load: Collecting)

- [ ] When you have finished your mind sweep, complete this action. 🔺 ⏳ <% tp.date.now("YYYY-MM-DD") %>


```meta-bind-button
label: Click this only after you finished collecting everything that is on your mind !
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
      ## Tactic completed ! 👍 
      
      ![[Mind cleaner.png]]
      
    templater: false
```
