---
tags:
  - Exercise-Template
Context: "[[Tagging a file]]"
Access at level: 0
From template: "[[Get lvl 1 - Tagging a file]]"
---
<% tp.file.rename("Get lvl 1 - Tagging a file "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>


![[Categorizing or tagging files in Personal OS#^p63h8r]]

When processing, the first step is to ask yourself  "what is this file ?" Example of answers are : 
- A quote I like and I need to review
- A meeting note I need to use for a quick report
- An interesting photo I'd like to review when buying my next car
- A goal I have regarding my hobby

**As an introduction to this practice, only 4 tags are advised :** 
- **Task**
- **Routine**
- **Project**
- **Goal**

Tags can be added anywhere in a file, but to streamline file identification we use the "tags" property (for example this file currently have the tag #Exercise )
> [!success] In practice
> Create a new file, add the tags property and add the "Task" tag in the "tags" property. Then delete the test file before finishing this exercise. 

> [!info]
> ![[How to add properties to a file#Ways to add properties to a file]]

> [!tip]
> To add a tag anywhere outside the tag property, start by typing "#" then type the name of the tag. 
> Files are also retrievable by tags by using the tag explorer (left pane near the file explorer menu button). 


# Wrap-up

- [ ] When you come back to this file after successfully adding a property to a new file,  complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Tagging a file]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
