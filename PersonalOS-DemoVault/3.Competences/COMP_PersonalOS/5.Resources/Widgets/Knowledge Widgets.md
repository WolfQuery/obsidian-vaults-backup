---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# My knowledge count
```dataviewjs
let knowledgeCount = dv.pages('"3.Competences" AND (#Description OR #Knowledge OR #Rule)')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))
    .length
    
if(knowledgeCount === 0) {
	dv.header(2, "No knowledge yet")
} else {
	dv.header(2,"Knowledge:\n"+knowledgeCount);
}
```

^b371b4

# My knowledge
```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Filter tactics based on the "Supports" property and the "Level" condition
let knowledge = dv.pages('"3.Competences" AND (#Description OR #Knowledge OR #Rule)')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))

// Render the Tactic Table if there are tactics to display
if (knowledge.length > 0) {
    dv.list(knowledge.file.link);
}
```

# All knowledge

```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Filter tactics based on the "Supports" property and the "Level" condition
let knowledge = dv.pages('"3.Competences" AND (#Description OR #Knowledge OR #Rule)')

// Render the Tactic Table if there are tactics to display
if (knowledge.length > 0) {
    dv.list(knowledge.file.link);
}
```
