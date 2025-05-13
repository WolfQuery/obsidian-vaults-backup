---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
```dataviewjs
const currentDate = moment().format("YYYY-MM-DD"); // Adjust format as per your daily note format
const dailyNotePath = `8.Journal/Daily logs/${currentDate}.md`; // Adjusted path to match your daily note folder
const dailyNoteExists = app.vault.getAbstractFileByPath(dailyNotePath);

if (dailyNoteExists) {
  // Embed the #Daily production heading from the daily note
  dv.el("div", `![[${dailyNotePath}#Daily production]]`);
} else {
  // Use the MetaBind button for creating the daily note
  const createButtonMarkdown = `
\`\`\`meta-bind-button
label: Create Daily Note
icon: file-plus
hidden: false
class: ""
tooltip: "Create today's daily note"
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 9.Archives/z.Obsidian Settings/Daily note/Daily Template.md
    folderPath: 8.Journal/Daily logs
    fileName: Daily
    openNote: false
    openIfAlreadyExists: false
\`\`\`
`;
  dv.el("div", createButtonMarkdown);
}

```

^a55609




```meta-bind-button
label: Create Daily Note
icon: file-plus
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 9.Archives/z.Obsidian Settings/Daily note/Daily Template.md
    folderPath: 8.Journal/Daily logs
    fileName: Daily
    openNote: false
    openIfAlreadyExists: false

```



