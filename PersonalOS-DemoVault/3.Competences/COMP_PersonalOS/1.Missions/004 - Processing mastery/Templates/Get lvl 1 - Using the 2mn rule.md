---
tags:
  - Exercise-Template
Context: "[[Using the 2mn rule]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the 2mn rule]]"
---
<% tp.file.rename("Get lvl 1 - Using the 2mn rule "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[The 2mn rule description#Introduction]]


> [!success] In practice
>  ### If you have done a mind sweep and reserved files for processing 
> - Look for 3 to 4 candidate files from your mind sweep that can be done in less than 2 mn and get rid of them ! 
> ### Else
> - Reflect on some common action that take less than 2mn, 2mn can actually be a long time !

> [!Info] Some examples 
> - Send a text to book a meeting 
> - Clean something
> - Move some objects in your desk
> - Invite somebody to an event 
> - Smile to someone you like ;). 

# Wrap-up

- [ ] When you understand the 2mn rule, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using the 2mn rule]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
