---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# My tactics count
```dataviewjs
let tacticsCount = dv.pages('"3.Competences" AND #Tactic')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))
    .length
    
if(tacticsCount === 0) {
	dv.header(2, "No tactics yet")
} else {
	dv.header(2,"Tactics:\n"+tacticsCount);
}
```

^765e21

# My tactics
```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Filter tactics based on the "Supports" property and the "Level" condition
let tactics = dv.pages('"3.Competences" AND #Tactic')
    .filter(p => p.Supports && p.Supports.some(supportedFile => {
        let supportedPage = dv.page(supportedFile);
        return supportedPage?.Level > 0;
    }))
    .map(p => {
        const buttonId = `${p.file.name}-launch2`;
        const button = `\`BUTTON[${buttonId}]\``;

        // Generate the button Markdown block
        const buttonMarkdown = `\`\`\`meta-bind-button
label: "Launch"
hidden: true
id: "${buttonId}"
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "${p.file.path}"
    folderPath: "2.Activities"
    fileName: Rename
    openNote: true
\`\`\``;

        buttonMarkdownBlocks.push(buttonMarkdown);
        return [p.file.link, button];
    });

// Render the Tactic Table if there are tactics to display
if (tactics.length > 0) {
    dv.table(["Tactic", "Action"], tactics);
}

// Render the button Markdown blocks for binding
if (buttonMarkdownBlocks.length > 0) {
    dv.paragraph(buttonMarkdownBlocks.join('\n\n'));
}

```

# All tactics 

```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];
let tactics = dv.pages('"3.Competences" AND #Tactic')
    .map(p => {
        const buttonId = `${p.file.name}-launch1`;
        const button = `\`BUTTON[${buttonId}]\``;

        // Generate the button Markdown block
        const buttonMarkdown = `\`\`\`meta-bind-button
label: "Launch"
hidden: true
id: "${buttonId}"
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "${p.file.path}"
    folderPath: "2.Activities"
    fileName: Rename
    openNote: true
\`\`\``;

        buttonMarkdownBlocks.push(buttonMarkdown);
        return [p.file.link, button];
    });

// Render the Tactic Table if there are tactics to display
if (tactics.length > 0) {
    dv.table(["Tactic", "Action"], tactics);
}

// Render the button Markdown blocks for binding
if (buttonMarkdownBlocks.length > 0) {
    dv.paragraph(buttonMarkdownBlocks.join('\n\n'));
}
```