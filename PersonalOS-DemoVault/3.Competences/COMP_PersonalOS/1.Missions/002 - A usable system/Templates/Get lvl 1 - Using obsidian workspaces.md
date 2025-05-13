---
tags:
  - Exercise-Template
Context: "[[Using obsidian workspaces]]"
Access at level: 0
From template: "[[Get lvl 1 - Using obsidian workspaces]]"
---
<% tp.file.rename("Get lvl 1 - Using obsidian workspaces "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Workspace in obsidian description#Introduction]]

# Switching between workspaces

> [!warning] 
> Switching workspaces can be disorienting as you lose your current layout, remember to use the "Engage" feature (ALT +1) to reopen this exercise if needed when moving through workspaces.

> [!success] In practice
> Quickly move to different existing workspaces using various ways.

>[!Info]
>![[How to switch workspace in obsidian#Ways to load workspaces]]

# Manage workspaces

> [!success] In practice
> Create our own test workspace, try different layouts and go back and forth between your new workspace and some other ones. 

>[!Info]
>![[How to manage obsidian workspaces#Ways to manage workspace]]

# Automatic workspace opening

> [!info] 
> ![[Automatic workspace opening#How automatic workspace opening works]]

> [!success] In practice
> - Create a new test file and add a timed action, (add a time emoji using ALT+A) with a time 20mn before your current time. schedule it for today by adding a schedule date a move it your activity folder.  The goal is for this file to be the highest priority file in the engage feature. 
> - Add the "Workspace" property to that file and fill it with your test workspace name. 
> - Save your test workspace with the newly  created file as if you don't this specific file won't be opened with your workspace (but you can always find it as the focused file in the Engage dashboard)
> - Use the engage feature and confirm that your test workspace is automatically opened, then delete this test file. 
> - Finally delete your test workspace before finishing this exercise. 

# Wrap-up

- [ ] When you feel comfortable with using workspaces, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using obsidian workspaces]] [level::1]
      - Unlock [[Managing workspaces]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
