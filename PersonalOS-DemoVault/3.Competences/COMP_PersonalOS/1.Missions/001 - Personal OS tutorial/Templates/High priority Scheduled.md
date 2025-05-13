<% await tp.file.rename("High priority Scheduled "+ tp.date.now("YYYYMMDDHHmm")) %>

> [!Info]
> ![[Types of files for Engage feature#^1kyub6]]

Note that the "🔺" sign represent the highest priority

- [ ] Complete this highest priority scheduled action then click on the button bellow 🔺⏳ <% tp.date.now("YYYY-MM-DD") %>


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
