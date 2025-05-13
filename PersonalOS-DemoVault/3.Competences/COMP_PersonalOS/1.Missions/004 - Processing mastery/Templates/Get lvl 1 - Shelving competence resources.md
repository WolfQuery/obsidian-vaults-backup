---
tags:
  - Exercise-Template
Context: "[[Shelving competence resources]]"
Access at level: 0
From template: "[[Get lvl 1 - Shelving competence resources]]"
---
<% tp.file.rename("Get lvl 1 - Shelving competence resources "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Competence in Personal OS description#^vwlx8j]]

![[Competence resource description#^z6q819]]

> [!success] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Look for 3 to 4 candidate files from your mind sweep that can represent a competence or a skill, if you can't find any find a potential resource that could be linked to a competence, and create that competence file
> - Process the competence files into a competence file by using the competence template 
> - Create a dedicated subfolder for each competence in the 3.Competences folder
> - Look for 1 or 2 potential resource for that competence
> - Since those resourcessupports your competence, add a link to that competence in the "Supports" property, finish processing those resources and move them to the corresponding competence folder. 
> ### Else
> - Create a competence file representing a competence you have by using the competence template 
> - Create a dedicated subfolder for that competence in the 3.Competences folder
> - Create a new file and add the tag "HowTo" in the "tags" property
> - Since that HowTo supports your competence, add a link to that competence in the "Supports" property
> - Take 1mn to write a draft for that HowTo
> - Move that HowTo to your competence folder
> - Verify your competence file and confirm that your HowTo is shown in the "Guides" section of your competence

> [!info]
> ![[How to shelve an competence resource#Process to shelve a competence resource]]

> [!tip] 
> Each mission in the PersonalOS competence contains a competence folder that presents a large array of supporting resources. 
> Check the [[Processing]] competence for an example. 

# Wrap-up

- [ ] When you're finished shelving your first competence resource, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Shelving competence resources]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
