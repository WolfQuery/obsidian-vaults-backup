<% await tp.file.rename("Scheduled with time "+tp.date.now("YYYYMMDDHHmm")) %>

> [!Info]
> ![[Types of files for Engage feature#^55g2y9]]

- [ ] Complete this timed scheduled action by checking the box on the left, then click on the button bellow ⌚<%* tR += moment().add(-5, "m").format("HH:mm") %> ⏳ <% tp.date.now("YYYY-MM-DD") %>  



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
