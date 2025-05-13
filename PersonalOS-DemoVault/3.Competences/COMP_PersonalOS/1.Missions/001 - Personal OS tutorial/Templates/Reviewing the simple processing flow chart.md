---
tags:
  - Exercise-Template
Context: "[[Processing a file]]"
Access at level: 0
From template: "[[Reviewing the simple processing flow chart]]"
---
<% tp.file.rename("Reviewing the simple processing flow chart "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>

> [!success] In practice 
> Review this simple flowchart and confirm it makes sense for you. The advanced flowchart is much more complex but this one is largely enough to start using the system. 


![[Personal OS simple file processing flowchart#Simple processing flow-chart]]


> [!tip] Also check the hotkey helper ! 
> Using hotkeys drastically improves your experience and efficiency when using obsidian. Open the right pane and notice that a hotkeys helper is present there. You can always change any hotkey in Obsidian settings. 



# Wrap-up

- [ ] When you understand the simple processing key decisions, complete this action and finish the exercise 🔽⏳ <% tp.date.now("YYYY-MM-DD") %>

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
    templater: false
```
