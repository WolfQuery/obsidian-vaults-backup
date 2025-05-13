> [!Info]
> ![[Types of files for Engage feature#^vdgqwv]]

<% await tp.file.rename("Started "+tp.date.now("YYYYMMDDHHmm")) %>
- [ ] This is a  next  action with a start date today or in the past 🛫 <% tp.date.now("YYYY-MM-DD") %>
- [ ] This is another next action with no dates. 


```meta-bind-button
label: I get it !
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: destructive
actions:
  - type: updateMetadata
    bindTarget: Archived
    evaluate: false
    value : "true" 
  - type: replaceSelf
    replacement: "**Use engage feature again (ALT+1) to continue !**"
```
