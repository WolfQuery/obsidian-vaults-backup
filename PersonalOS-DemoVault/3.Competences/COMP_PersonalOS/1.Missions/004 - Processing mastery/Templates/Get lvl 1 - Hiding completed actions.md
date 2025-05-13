---
tags:
  - Exercise-Template
Context: "[[Hiding completed actions]]"
Access at level: 0
From template: "[[Get lvl 1 - Hiding completed actions]]"
---
<% tp.file.rename("Get lvl 1 - Hiding completed actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>


Managing all your actions in obsidian, especially recurring actions can sometimes lead to a lot of clutter in your files. 
To enhance focus and improve your files readability you can hide completed or canceled actions. 


> [!success] In practice
> Use different ways to show/Hide completed actions in this file 

[✳️::0]

- [x] This is an action 🔁 every day ⏳ 2024-11-21 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-20 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-19 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-18 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-17 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-16 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-15 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-14 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-13 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-12 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-11 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-10 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-09 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-08 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-07 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-06 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-05 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-04 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-03 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-02 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-11-01 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-10-31 ✅ 2024-11-22
- [x] This is an action 🔁 every day ⏳ 2024-10-30 ✅ 2024-11-22


>[!Info]
>![[How to hide completed actions#Ways to hide completed actions]]

# Wrap-up

- [ ] When you come back to this file using the Engage feature, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Hiding completed actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
