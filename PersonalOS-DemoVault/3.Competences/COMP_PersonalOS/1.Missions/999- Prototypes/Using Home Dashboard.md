---
tags:
  - Skill
Supports:
  - "[[Using PersOS Dashboards]]"
---
# Tactics
```dataviewjs
// Initialize an array to store button Markdown blocks
let buttonMarkdownBlocks = [];

// Collect all supporting skills and competences in the tree
let supports = new Set();
let childs = dv.pages('#Competence OR #Skill');

// Recursive function to collect all file paths in the supports tree
function collectSupports(page, depth) {
    if (supports.has(page.file.path) || depth <= 0) return;
    supports.add(page.file.path);

    // Find child pages linked through "Parent Skills"
    let childPages = childs.where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    childPages.forEach(p => collectSupports(p, depth - 1));
}

// Start collecting supports from the current file
let currentPage = dv.current();
collectSupports(currentPage, 10); // Depth limit set to 10

// Collect tactics that match the "Supports" property with the collected supports tree
let tactics = dv.pages('#Tactic')
    .where(p => p.Supports?.some(support => supports.has(support.path)))
    .map(p => {
        const buttonId = `${p.file.name}-launch`;
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
# Guides 
```dataviewjs
let supports = new Set(); // Use a Set for better performance and avoiding duplicates
let childs = dv.pages('#Competence OR #Skill');

// Recursive function to collect all file paths in the supports tree
function collectSupports(page, depth) {
    if (supports.has(page.file.path) || depth <= 0) return; // Skip already visited or depth limit
    supports.add(page.file.path);

    // Find child pages linked through "Parent Skills"
    let childPages = childs.where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    childPages.forEach(p => collectSupports(p, depth - 1)); // Recursively collect supports
}

// Start collecting supports from the current file
let currentPage = dv.current();
collectSupports(currentPage, 10); // Depth limit set to 10

// Filter and list relevant #Howto files
let relevantHowtoPages = dv.pages('#Howto')
    .where(p => p.Supports?.some(support => supports.has(support.path))) // Match Supports in the collected supports
    .sort(p => p.priority, 'desc'); // Sort by priority (if available)

// Display the list of relevant #Howto files
dv.list(relevantHowtoPages.file.link);
```
# Knowledge
```dataviewjs
let supports = new Set(); // Use a Set for better performance and avoiding duplicates
let childs = dv.pages('#Competence OR #Skill');

// Recursive function to collect all file paths in the supports tree
function collectSupports(page, depth) {
    if (supports.has(page.file.path) || depth <= 0) return; // Skip already visited or depth limit
    supports.add(page.file.path);

    // Find child pages linked through "Parent Skills"
    let childPages = childs.where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    childPages.forEach(p => collectSupports(p, depth - 1)); // Recursively collect supports
}

// Start collecting supports from the current file
let currentPage = dv.current();
collectSupports(currentPage, 10); // Depth limit set to 10

// Filter and list relevant #Howto files
let relevantHowtoPages = dv.pages('#Description OR #Knowledge OR #Rule')
    .where(p => p.Supports?.some(support => supports.has(support.path))) // Match Supports in the collected supports
    .sort(p => p.priority, 'desc'); // Sort by priority (if available)

// Display the list of relevant #Howto files
dv.list(relevantHowtoPages.file.link);

```
# Resources
```dataviewjs
let supports = new Set(); // Use a Set for better performance and avoiding duplicates
let childs = dv.pages('#Competence OR #Skill');

// Recursive function to collect all file paths in the supports tree
function collectSupports(page, depth) {
    if (supports.has(page.file.path) || depth <= 0) return; // Skip already visited or depth limit
    supports.add(page.file.path);

    // Find child pages linked through "Parent Skills"
    let childPages = childs.where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    childPages.forEach(p => collectSupports(p, depth - 1)); // Recursively collect supports
}

// Start collecting supports from the current file
let currentPage = dv.current();
collectSupports(currentPage, 10); // Depth limit set to 10

// Filter and list relevant #Howto files
let relevantHowtoPages = dv.pages('#Reflection OR #Example OR #ResearchMaterial OR #Resource OR #Source OR #Gadget OR #Tool')
    .where(p => p.Supports?.some(support => supports.has(support.path))) // Match Supports in the collected supports
    .sort(p => p.priority, 'desc'); // Sort by priority (if available)

// Display the list of relevant #Howto files
dv.list(relevantHowtoPages.file.link);

```
# Trainings 
```dataviewjs
let currentPath = dv.current().file.path;
let currentLevel = dv.current().Level || 0; // Default to 0 if no "Level" property

let buttonMarkdownBlocks = [];

const pages = dv.pages('#Exercise-Template OR #Course-Template')
    .where(p => p.Context && p.Context?.path == currentPath)
    .sort(p => p['Access at level'], 'asc')
    .map(p => {
        // Default to 0 if "Access at level" property is missing
        let accessLevel = p['Access at level'] || 0;

        // Determine if the button should be shown
        let showLaunchButton =
            accessLevel === 0 || // Always show if "Access at level" is 0
            !p['Access at level'] || // Always show if "Access at level" is missing
            currentLevel >= accessLevel; // Show if "Access at level" >= current file's "Level"

        // Fetch related files to check completion status and last completion
        const relatedFiles = dv.pages('#Course OR #Exercice')
            .where(rf => rf['From template']?.path === p.file.path);

        // Ensure relatedFiles is properly formatted as an array
        const relatedFilesArray = relatedFiles?.values || [];

        // Calculate the "Last completion" date (handle empty or malformed arrays)
        let lastCompletionDate = null;
        if (Array.isArray(relatedFilesArray) && relatedFilesArray.length > 0) {
            lastCompletionDate = relatedFilesArray
                .filter(rf => rf['Completed on']) // Only consider files with "Completed on"
                .map(rf => new Date(rf['Completed on']))
                .reduce((latest, current) => (current > latest ? current : latest), null);
        }

        // Check if any related file is incomplete to determine the "Continue" button
        let incompleteFile = Array.isArray(relatedFilesArray)
            ? relatedFilesArray.find(rf => !rf['Completed on'])
            : null;

        const buttonId = `${p.file.name}-launch`;
        const continueButtonId = `${p.file.name}-continue`;

        let button = '';
        if (incompleteFile) {
            // Show the "Continue" button for incomplete trainings
            button = `\`BUTTON[${continueButtonId}]\``;

            // Generate the "Continue" button Markdown block
            const continueButtonMarkdown = `\`\`\`meta-bind-button
label: "Continue"
icon: ""
hidden: true
id: "${continueButtonId}"
style: primary
actions:
  - type: open
    link: "[[${incompleteFile.file.path}]]"
    newTab: true
\`\`\``;
            buttonMarkdownBlocks.push(continueButtonMarkdown);
        } else if (showLaunchButton) {
            // Show the "Launch" button if requirements are met
            button = `\`BUTTON[${buttonId}]\``;

            // Generate the "Launch" button Markdown block
            const launchButtonMarkdown = `\`\`\`meta-bind-button
label: "Launch"
icon: ""
hidden: true
id: "${buttonId}"
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "${p.file.path}"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
\`\`\``;
            buttonMarkdownBlocks.push(launchButtonMarkdown);
        }

        // Format the "Last completion" column
        const lastCompletion = lastCompletionDate
            ? `✅ **${lastCompletionDate.toISOString().split('T')[0]}**`
            : "Never";

        return [p.file.link, button, lastCompletion];
    });

// Display the table only if there are pages
if (pages.length > 0) {
    dv.table(["Files", "Action", "Last completion"], pages);
}

// Render the button Markdown blocks for binding
if (buttonMarkdownBlocks.length > 0) {
    dv.paragraph(buttonMarkdownBlocks.join('\n\n'));
}
```