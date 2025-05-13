---
tags:
  - Exercise-Template
Context: "[[Creating recurring actions]]"
Access at level: 0
From template: "[[Get lvl 1 - Creating recurring actions]]"
---
<% tp.file.rename("Get lvl 1 - Creating recurring actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!success] In practice
> Add an every day recurrence to that action by typing "re", selecting the recurring symbol, then typing "every day".  
> Add a scheduled date to the action at "today".  
> Finally complete the action multiple times and verify the dates.

- [ ] Call a love one 


> [!success] In practice
> Add an every week on Friday recurrence to that action by typing "re", selecting the recurring symbol, then typing "every week on Friday".  
> Add a scheduled date to the action at "Friday".  
> Finally complete the action multiple times and verify the dates.

- [ ] Send my work expenses 

> [!success] In practice
> Add an every month on the 1st Sunday recurrence to that action by typing "re", selecting the recurring symbol, then typing "every month on the 1st Sunday".  
> Add a scheduled date to the action at "Sunday".  
> Finally complete the action multiple times and verify the dates.

- [ ] Go for a barbecue with friends


>[!Info]
>![[How to add recurrence to an action#Adding a recurrence to an action]]


> [!tip]  Recurring works on the 3 dates ! 
> You can have recurrence even on tasks mixing several of the 3 dates. Give it a try ! 

# Wrap-up

- [ ] When you master recurring actions, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Creating recurring actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
