---
tags:
  - Mission-Description
Image: "[[Complete Personal OS tutorial.png]]"
Difficulty: 3
Uses Template: "[[Get lvl 1 - Applying Personal OS]]"
Completed on: 2025-03-31
---
# Requirements
```dataviewjs
// Helper function to verify "Competences and skills" requirement
function verifyCompetenceAndSkill(list) {
    if (list.outlinks.length !== 1) {
        // No outlink found in the task text
        return false;
    }

    const linkedPagePath = list.outlinks[0].path; // Extract the linked page name
    const linkedPage = dv.page(linkedPagePath); // Get the linked page's data

    if (!linkedPage) return false; // Linked page does not exist

    const linkedLevel = linkedPage["Level"] ?? 0; // Fetch the "Level" property or default to 0
    const listLevel = list["level"] ?? 0; // Fetch the "level" property or default to 0

    return linkedLevel >= listLevel; // Requirement met if linked level >= required level
}

// Helper function to verify "Completed missions" and "Obtained achievements"
function verifyCompletionRequirement(list, tag) {
    if (list.outlinks.length !== 1) {
        // No outlink found in the task text
        return false;
    }

    const linkedPagePath = list.outlinks[0].path; // Extract the linked page name
    const linkedPage = dv.page(linkedPagePath); // Get the linked page's data

    if (!linkedPage) return false; // Linked page does not exist

    // Check if the linked page has the appropriate tag and is marked as completed
    return (
        linkedPage.tags.includes(tag) &&
        linkedPage["Completed on"] !== undefined
    );
}

// Calculate total and completed requirements for all categories
const requirementHeaders = ["Competences and skills", "Completed missions", "Obtained achievements"];
let totalRequirements = 0;
let completedRequirements = 0;

requirementHeaders.forEach((header) => {
    const lists = dv.current().file.lists.filter((list) => list.header.subpath === header);

    totalRequirements += lists.length;

    lists.forEach((list) => {
        if (
            (header === "Competences and skills" && verifyCompetenceAndSkill(list)) ||
            (header === "Completed missions" && verifyCompletionRequirement(list, "Mission-Description")) ||
            (header === "Obtained achievements" && verifyCompletionRequirement(list, "Achievement"))
        ) {
            completedRequirements++;
        }
    });
});

// Calculate progress percentage
const progressPercentage = totalRequirements > 0 ? Math.round((completedRequirements / totalRequirements) * 100) : 0;

// Render progress bar and summary
dv.el("progress-bar", "", {
    attr: {
        value: progressPercentage,
        max: 100,
        style: "width: 100%; text-align: center; color: white;",
    },
});

dv.paragraph(`<p>${completedRequirements} / ${totalRequirements} requirements met</p>`);

```
## Competences and skills 

- [[Applying Personal OS]] [level::0]
# Goal

> [!success]
> Improve your [[Applying Personal OS]] competence by completing the course to get it to level 1. 
# Rewards
- 8 new competences
- 10 new skills
- [[Applying Personal OS]] [level::1]
# Map widget
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
//let dv = app.plugins.plugins.dataview.api;
pos.functions.mapWidget(dv)
```

^70abea


# Force launch 

```meta-bind-button
label: Generate mission
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/001 - Personal OS tutorial/Templates/Get lvl 1 - Applying Personal OS.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
```

