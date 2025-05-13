---
tags:
  - Exercise-Template
Context: "[[Accessing competence and skill resources]]"
Access at level: 0
From template: "[[Get lvl 1 - Accessing competence and skill resources]]"
---
<% tp.file.rename("Get lvl 1 - Accessing competence and skill resources "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!Info] 
> ![[Competence and skill template description#Introduction]]

> [!success] In practice
> After reading the competence and skill file composition, take a tour of your competence tree starting with [[Applying Personal OS]] or any other competence in your competence dashboard. Feel free to explore guides and knowledge, this is your library anytime you need to review something. Understanding this structure will help you develop your own competences trees in the future. It's also possible to redo any training if you feel like you need some practice. 

# Wrap-up

- [ ] When you come back to this file after exploring your competence and associated resources tree, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Accessing competence and skill resources]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
