---
tags:
  - Exercise-Template
Context: "[[Focusing on MIT]]"
Unlock Level: 1
From template: "[[Get lvl 1 - Focusing on MIT]]"
---
<% tp.file.rename("Get lvl 1 - Focusing on MIT "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>

# Understand the "Focusing on MIT" skill

MIT stands for "Most important task". In the productivity sphere, this skill is extremely basic as it helps in every situation, irrespective of your level of mastery. And is usually the first thing we do in a crisis.  

> [!success] In practice
> Read the following information to understand why this skill is important. 

> [!info] 
> Focusing daily on your most important task presents several advantages as it : 
> 1. **Insures effective prioritization**
> 2. **Maximizes Impact**
> 3. **Avoids Decision Fatigue**
> 4. **Builds Momentum**

If you wish to, you can read more on each subject in [[Why focus on MIT]]. 

- [ ] When you understand this skill, complete this action. 

# Understand the concept of Tactic

> [!success] In practice
> Read the following information to understand how we define a tactic in Personal OS. 

>[!Info]
>![[Tactics in Personal OS#What is a tactic in Personal OS]]

- [ ] When you understand the concept, complete this action. 

> [!tip] 
> This concept is introduced here as a tactic is already defined for the "Focusing on MIT" Skill. 
# Launching a tactic


> [!success] In practice
> Launch the "Focusing on MIT" tactic from the skill page. 
> Note that the tactic file is generated in your inbox. 
> Don't bother with it's content for now and delete the generated file. 

> [!info] 
> ![[How to launch a tactic#How to launch a tactic linked to a skill]]

You can use "CTRL + Click " on the following link to open the skill page :   [[Focusing on MIT]]

- [ ] Once you've launched and deleted the generated tactic file, complete this action. 
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
      
      - Unlock [[Focusing on MIT]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
