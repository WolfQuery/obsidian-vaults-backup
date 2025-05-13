---
tags:
  - Tactic
Supports:
  - "[[Processing]]"
From template: "[[Inbox purge tactic]]"
---
<% tp.file.rename("Inbox purge "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Task";
  });
}); 
%>

- [ ] First ! Move this file to an appropriate activity folder so it can be taken back from the Engage feature
## Empty your Inbox

> [!warning] 
> A complete inbox purge is a critical step in getting organized and liberating your mind from every "useless" ideas that can interrupt you. See [[The brain is a bad organizing tool]]. 
> A proper inbox processing in NOT about doing any required action from files, except for the 2mn rule, you should ONLY focus on processing files, and it should take on average a little bit less than 2mn per file. Make sure you have sufficient uninterrupted time to complete-it !

> [!tip] 
> The processing workspace contains a recap of the processing flowcharts and a recap of useful hotkeys in the right panel sidebar. Use them to your advantage !

> [!success] In practice
> - Take a tea or a coffee, make sure your are in an appropriate environment for some focused work. 
> - Treat this as a cinema session, put your phone in silence mode, close your door, turn-off the tv, put some music you like working to
> - Make sure everything that needs to be processed is in your Inbox.
> - Open the "Processing" workspace and proceed to purge your Inbox (CTRL+P and search "Load: Processing)

- [ ] When you have finished your inbox purge, complete this action. 🔺 ⏳ <% tp.date.now("YYYY-MM-DD") %>


```meta-bind-button
label: Click this only after you finished processing everything that is in your inbox !
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
      
      ![[System online.png]]
      
    templater: false
```
