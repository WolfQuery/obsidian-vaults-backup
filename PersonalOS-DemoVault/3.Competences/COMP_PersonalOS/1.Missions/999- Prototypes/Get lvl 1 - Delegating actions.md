---
tags:
  - Exercise-Template
Context: "[[Delegating actions]]"
Access at level: 0
From template: "[[Get lvl 1 - Delegating actions]]"
---
<% tp.file.rename("Get lvl 1 - Delegating actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Project";
  });
}); 
%>

> [!success] In practice
> - Take any of your existing activity file where you could delegate and action
> - choose or add and action to it and add a link to an agent file, schedule the follow-up for today
> - Confirm that the action is showing in that agent file corresponding widget

> [!info] 
> ![[How to delegate an action#Process to delegate an action]]
# Wrap-up

- [ ] When you're finished with your first action delegation, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Delegating actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```

