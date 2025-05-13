---
tags:
  - Exercise-Template
Context: "[[Using tactics]]"
Access at level: 0
From template: "[[Get lvl 1 - Using tactics]]"
---
<% tp.file.rename("Get lvl 1 - Using tactics "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
# Understand the concept of Tactic

> [!success] In practice
> Read the following information to understand how we define a tactic in Personal OS. 

>[!Info]
>![[Tactics in Personal OS#What is a tactic in Personal OS]]

- [ ] When you understand the concept, complete this action. 
# Launching a tactic


> [!success] In practice
> Tactics can be launched from any skill or competence page that has associated tactics. 
> Use "CTLR + Left Click" on any of the following Link to verify that the "Mind Sweep" tactic is present. No need to launch it for now. 
> [[Applying Personal OS]]
> [[Collecting]]

> [!info] 
> ![[How to launch a tactic#How to launch a tactic linked to a skill]]

- [ ] Once you've seen available tactic is the Applying personal OS competence, complete this action. 
# Wrap-up

- [ ] Once you're done with everything else, complete this action and finish the exercise 🔽⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using tactics]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
