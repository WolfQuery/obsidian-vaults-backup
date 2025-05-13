---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

await dv.view("9.Archives/z.Obsidian Settings/TimelineView", {
pages: `${OfficeFilter.map(el => `"${el}"`).join(' or ')}`,
options:"noQuickEntry noYear noDone todayFocus noHeader",
forward: true
})
```
