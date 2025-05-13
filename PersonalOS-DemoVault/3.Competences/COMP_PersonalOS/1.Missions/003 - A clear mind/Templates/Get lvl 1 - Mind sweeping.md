---
tags:
  - Exercise-Template
Context: "[[Mind sweeping]]"
Access at level: 0
From template: "[[Get lvl 1 - Mind sweeping]]"
---
<% tp.file.rename("Get lvl 1 - Mind sweeping "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!success] In practice
> After reviewing the presented knowledge, take a look at the collection workspace. No need to already do a mind-sweep as this will be the content of a latter exercise. 

>[!Info]
>![[Mind sweeping description#Introduction]]

## The collection workspace
![[The collection workspace#^91qzoa]]


![[How to do a mind sweep#Mind sweeping workflow]]

# Wrap-up

- [ ] Once you reviewed the "Collecting" workspace, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Mind sweeping]] [level::1]
      - Unlock [[Collecting]] [level::2]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
