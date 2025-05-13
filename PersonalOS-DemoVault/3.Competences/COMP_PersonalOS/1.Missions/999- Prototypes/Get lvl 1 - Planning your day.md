---
tags:
  - Exercise-Template
Context: "[[Planning your day]]"
Unlock Level: 1
From template: "[[Get lvl 1 - Planning your day]]"
---
<% tp.file.rename("Get lvl 1 - Planning your day "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
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

> [!tip] 
> This concept is introduced here as a tactic is already defined for the "Planning your day" Skill. 
# Plan your day using the associated tactic


> [!success] In practice
> Launch the "Planning your day" tactic from the skill page. 
> Note that the tactic file is generated in your activity folder. 
> Follow the instructions to complete the tactic.  

> [!info] 
> ![[How to launch a tactic#How to launch a tactic linked to a skill]]

You can use "CTRL + Click " on the following link to open the skill page :   [[Planning your day]]

- [ ] Once you've launched and completed the generated tactic file, complete this action. 
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
      
      - Unlock [[Planning your day]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```