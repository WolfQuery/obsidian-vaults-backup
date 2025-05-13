---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Trainings done count
```dataviewjs
let trainingsDoneCount = dv.pages('#Exercice OR #Course')
    .filter(p => p['Completed on'])
    .length
    
if(trainingsDoneCount === 0) {
	dv.header(2, "No trainings done yet")
} else {
	dv.header(2,"Trainings done:\n"+trainingsDoneCount);
}
```

^3aaec2

# Training history

```dataviewjs
// Fetch all pages with #Course OR #Exercise that have a "Completed on" property
let trainingHistory = dv.pages('#Course OR #Exercise')
    .filter(p => p['Completed on']) // Ensure "Completed on" exists
    .sort(p => p['Completed on'], 'desc'); // Sort by "Completed on" in descending order

// Check if there are entries to display
if (trainingHistory.length > 0) {
    // Create a table with the link and "Completed on" date
    dv.table(
        ["Training", "Completed on"], 
        trainingHistory.map(p => [p.file.link, p['Completed on']])
    );
}

```


# All trainings 

```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];
let tactics = dv.pages('"3.Competences" AND (#Course-Template OR #Exercise-Template)')
    .sort(p => p['Access at level'], 'asc')
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
    dv.table(["Training", "Action"], tactics);
}

// Render the button Markdown blocks for binding
if (buttonMarkdownBlocks.length > 0) {
    dv.paragraph(buttonMarkdownBlocks.join('\n\n'));
}
```
