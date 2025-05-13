---
tags:
  - Mission-Description
Image: "[[Reclaim your mind.png]]"
Difficulty: 3
Uses Template: "[[Reclaiming your mind]]"
Completed on: 2025-04-04
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
- [[Applying Personal OS]]  [level::1]
## Completed missions
- [[Complete Personal OS tutorial]]
- [[Make your system usable]]
## Obtained achievements
- [[Routine collector]]
# Goal

> [!success] Goal
> Empty your mind by completing a [[Mind sweeping|mind sweep]].
# Rewards
By completing this mission you will obtain the [[Mind cleaner]] achievement. 
# Map widget
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
//let dv = app.plugins.plugins.dataview.api;
pos.functions.mapWidget(dv)
```

^fcedb5

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
    templateFile: "3.Competences/COMP_PersonalOS/1.Missions/003 - A clear mind/Templates/Reclaiming your mind.md"
    folderPath: "2.Activities/TRAIN_Personal OS"
    fileName: Rename
    openNote: true
```
