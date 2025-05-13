<% await tp.file.rename("Normal priority Scheduled "+tp.date.now("YYYYMMDDHHmm")) %>

> [!Info]
> This scheduled action priority is lower than the previous one (no priority is "normal" priority)

- [ ] Complete this scheduled action then click on the button bellow ⏳ <% tp.date.now("YYYY-MM-DD") %>


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
