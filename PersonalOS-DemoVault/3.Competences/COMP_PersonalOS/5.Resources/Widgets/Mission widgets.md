---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
---
# Available missions

```dataviewjs
// Get all files tagged with "Mission-Description"
const missionFiles = dv.pages('#Mission-Description');

// Helper function to check if a requirement is met
function isRequirementMet(req, headerType) {
    const outlink = req.outlinks?.[0].path; // First outlink in the requirement
    const levelProp = req.level; // Level property in the requirement, if any

    if (!outlink) return false; // No outlink means requirement cannot be met

    const targetFile = dv.page(outlink); // Get the file metadata of the outlink

    if (!targetFile) return false; // If the target file doesn't exist, requirement is not met

    // Check requirements based on the header type
    if (headerType === "Competences and skills") {
        if (targetFile.tags.includes('Competence') || targetFile.tags.includes('Skill')) {
            const requiredLevel = levelProp || 0; // Default level to 0 if not specified
            const targetLevel = targetFile.Level || 0; // Default level of the linked file to 0
            return targetLevel >= requiredLevel; 
        }
    } else if (headerType === "Completed missions") {
        if (targetFile.tags.includes('Mission-Description')) {
            return !!targetFile["Completed on"]; // Requirement is met if "Completed on" exists
        }
    } else if (headerType === "Obtained achievements") {
        if (targetFile.tags.includes('Achievement')) {
            return !!targetFile["Completed on"]; // Requirement is met if "Completed on" exists
        }
    }

    return false; // Default to requirement not met if no match
}

// Function to check if a mission is available
function isMissionAvailable(missionFile) {
    const requirements = missionFile.file.lists?.filter(
        list => ["Competences and skills", "Completed missions", "Obtained achievements"].includes(list.header.subpath)
    ) || [];

    for (const req of requirements) {
        const headerType = req.header.subpath; // Header type (e.g., "Competences and skills")
        // If any requirement in this header is not met, mission is not available
        const allMet = requirements.every(req => isRequirementMet(req, headerType));
        if (!allMet) return false;
    }

    // If all requirements in all headers are met, the mission is available
    return true;
}

// Filter missions to only include available ones
const availableMissions = missionFiles
    .filter(file => isMissionAvailable(file))
    .map(file => file.file.link); // Get the file links of available missions

// Render the list of available missions
dv.list(availableMissions);

```


# All missions

```dataviewjs
const missionFiles = dv.pages('#Mission-Description');
dv.list(missionFiles.file.link);
```
