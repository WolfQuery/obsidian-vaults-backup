---
tags:
  - Exercise-Template
Context: "[[Customizing your vault]]"
Unlock Level: 1
From template: "[[Get lvl 1 - Customizing your vault]]"
---
<% tp.file.rename("Get lvl 1 - Customizing your vault "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
# Customize Obsidian appearance

> [!success] In practice
> Customize Obsidian Default theme to suit your taste by changing : 
> - The base color scheme (light or dark)
> - The accent color (pick your favorite!)
> - Don't hesitate to change other things, this vault is yours ! 

- [ ] When you're satisfied with your vault appearance, complete this action


>[!Info]
>![[How to customize theme#Customize default theme]]


# Customize Personal OS Images

> [!success] In practice
> Customize The 5 Core images in the files linked in the following actions, make sure to use images that resonate with you ! Be careful of block references (identifier following a "^"), do not delete them as they are used to reference those images. 

- [ ] Change your avatar image into something that proudly represents yourself in [[Avatar widgets]]
- [ ] Change the "Done" image into something that inspires you to systematically complete your day of work in [[Done]]
- [ ] Change the "Due Done" image into something that encourages you to finish a day of work in [[Due Done]]
- [ ] Change the "Process done" image into something that rewards you for keeping your system clean in [[Process Done]]


> [!info] 
> ![[How to customize Personal OS Images#Customizing Personal OS core images]]

# Add some random events 


> [!success] In practice 
> Reflect on 3 quotes that you like, for each create a new file and add the "Quote" tag property. Then move them in your references folder. 
> Check the Personal OS plugin settings (Use the gear at the bottom of the left pane, in the community plugin list look for Personal OS, then in "Engage random event" confirm that the "Quote" tag is present and the probability is set to 15%)  and configure random events. 

- [ ] Configure 3 quotes as random events. 

> [!info] 
> ![[Engage feature random events#Random events in Personal OS]]

# Wrap-up

- [ ] Once you're done customizing your vault, complete this action and finish the exercise 🔽⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Customizing your vault]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```