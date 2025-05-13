---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# My guides count
```dataviewjs
let howTosCount = dv.pages('"3.Competences" AND #HowTo')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))
    .length
    
if(howTosCount === 0) {
	dv.header(2, "No guides yet")
} else {
	dv.header(2,"Guides:\n"+howTosCount);
}
```

^4d34e1

# My guides
```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Filter tactics based on the "Supports" property and the "Level" condition
let howTos = dv.pages('"3.Competences" AND #HowTo')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))

// Render the Tactic Table if there are tactics to display
if (howTos.length > 0) {
    dv.list(howTos.file.link);
}
```

# All guides

```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Filter tactics based on the "Supports" property and the "Level" condition
let howTos = dv.pages('"3.Competences" AND #HowTo')

// Render the Tactic Table if there are tactics to display
if (howTos.length > 0) {
    dv.list(howTos.file.link);
}
```
