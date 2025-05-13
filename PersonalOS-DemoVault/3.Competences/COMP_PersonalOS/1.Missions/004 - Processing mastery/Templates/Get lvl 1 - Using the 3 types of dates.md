---
tags:
  - Exercise-Template
Context: "[[Using the 3 types of dates]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the 3 types of dates]]"
---
<% tp.file.rename("Get lvl 1 - Using the 3 types of dates "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
# The theory

> [!success] In practice
> Read and reflect on the following concepts to understand the 3 types of dates.  

>[!Info]
>![[Action anatomy in Personal OS#Overview]]
>

![[Action anatomy in Personal OS#🛫Start Date]]


![[Action anatomy in Personal OS#⏳Scheduled Date or Do Date]]


![[Action anatomy in Personal OS#📅Due Date]]

![[Action anatomy in Personal OS#Actions example]]

# Use the right date

> [!success] In practice
> Add the right type of date on each action before checking for the answer. 

- [ ] I'd like to read this book some time in July

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a 🛫 start date"
    templater: false
```

- [ ] I should send that e-mail on Monday 

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a ⏳scheduled date"
    templater: false
```

- [ ] Friday is the last day to buy that thing with my promo code

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a 📅 due date"
    templater: false
```

- [ ] I can work on that paper today, but I wont do it before next Sunday

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a 🛫 start date and a ⏳ scheduled date"
    templater: false
```

- [ ] I'd like to start on that project next month, but it has to be finished before the end of net month. 

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a 🛫 start date and a 📅 due date"
    templater: false
```

- [ ] Tomorrow I'm cleaning my garage, and it has to be finished by next week when my in-laws are coming

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a ⏳scheduled date and a 📅 due date"
    templater: false
```

- [ ] I can buy a new shirt anytime next week but it needs to be done by Sunday as the following Monday I have an important meeting, I think I might go to the store on Tuesday

```meta-bind-button
label: Check answer
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: "Use : a 🛫 start date, a ⏳ scheduled date and a 📅 due date"
    templater: false
```

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
      
      - Unlock [[Using the 3 types of dates]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
