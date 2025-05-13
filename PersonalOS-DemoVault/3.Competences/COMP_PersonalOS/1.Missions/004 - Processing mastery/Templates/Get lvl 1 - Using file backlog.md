---
tags:
  - Exercise-Template
Context: "[[Using file backlog]]"
Access at level: 0
From template: "[[Get lvl 1 - Using file backlog]]"
---
<% tp.file.rename("Get lvl 1 - Using file backlog "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!info] 
> ![[Backlog in Personal OS description#Introduction]]
# Using the file backlog widget

> [!success] In practice
> - This file contains a file backlog from the [[File backlog example]] 
> - Generate training files by using the following button. then observe how they appear in this file backlog


```meta-bind-button
label: Generate files
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: replaceSelf
    replacement: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using file backlog - Generate files template.md"
    templater: true

```


**List of "Handled by" referencing files that are not in the "frontlinks" of the current file**


```dataviewjs
let currentPath = dv.current().file.path;
let Outlinks = dv.current().file.outlinks.values

const items = dv.pages()
  .where(p => p['Archived'] != true)
  .where(p => p['Handled By']?.path == currentPath)
  .where(p => !Outlinks.some(l => l.path == p.file?.path))
  .file.link

if(items.length === 0) {
	dv.el("b", "All items are ordered 👌")
} else {
	dv.list(items);
}
```


> [!success] In practice
> - Create a new file,
> - add the "Handled By" property (ALT + P then type "Handled By). Then add a link to this file by typing "[[]]" and inserting inside the double braket the name of this file, note that this file name should resemble "Get lvl 1 - Using file backlog YYYY-MM-DD-HHmm"
> - Confirm that the newly created file appear in the backlog

> [!tip] 
> The backlog widget only show files that are 'Handled By' the current file AND are not directly reference in the current file. 
> If you want to prioritize your backlog you can do so by adding links to high priority item directly into the backlog file. 

> [!success] In practice
> - Add a link to the file you just created in this file by typing "[[]]" and searching for your newly created file name. 
> - Confirm that the newly linked file does not appear in the backlog widget anymore.
# Wrap-up

- [ ] When you feel confident about your potential use of file backlogs, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using file backlog]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
