---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Global competence level
```dataviewjs
// Fetch all files in the "3.Competences" folder with #Competence or #Skill tags
let pages = dv.pages('"3.Competences" AND (#Competence)')

let globalCompetenceLevel = pages
    .filter(p => p.Level !== undefined) // Ensure the "Level" property exists
    .array() // Convert DataArray to a standard array
    .reduce((sum, p) => sum + p.Level, 0); // Sum the "Level" values

// Display the result
dv.header(1, "Mastery "+globalCompetenceLevel);
```

^e3c977



# My competences Count
```dataviewjs

const CompetencesCount = dv.pages('"3.Competences" AND (#Competence)')
    .where(c => c.Level && c.Level > 0)
    .length; 

if(CompetencesCount === 0) {
	dv.header(2, "No competences yet")
} else {
	dv.header(2,"Competences:\n"+CompetencesCount);
}

```

^94cea6

# My competences overview

```dataviewjs
let contexts = []; 
let childs = dv.pages('"3.Competences" AND (#Competence)').where(c => c.Level && c.Level > 0);

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
        .where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    pages.forEach(p => {
        let level = p.Level ? ` (**Level: ${p.Level}**)` : ''; // Get the Level property or leave empty
        subjects.push(`${p.file.link}${level}`);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let pages = dv.pages('"3.Competences" AND (#Competence)')
    .where(p => !p["Supports"])
    .where(c => c.Level && c.Level > 0)
    .sort(p => p.file.name, 'asc');

pages.forEach(page => {
    finalList.push(page.file.link);
    let childItems = listRecursive(page, 2);
    if (childItems.length > 0) {
        finalList.push(childItems); // Flatten the array before adding
    }
});

dv.list(finalList);
```

# My skill tree

```dataviewjs
let contexts = []; 
let childs = dv.pages('"3.Competences" AND (#Competence OR #Skill OR #Tactic)').where(c => c.Level && c.Level > 0);

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
        .where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    pages.forEach(p => {
        let level = p.Level ? ` (**Level: ${p.Level}**)` : ''; // Get the Level property or leave empty
        subjects.push(`${p.file.link}${level}`);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let pages = dv.pages('"3.Competences" AND (#Competence OR #Skill)')
    .where(p => !p["Supports"])
    .where(c => c.Level && c.Level > 0)
    .sort(p => p.file.name, 'asc');

pages.forEach(page => {
	let level = page.Level ? ` (Level: ${page.Level})` : '';
    finalList.push(`${page.file.link}${level}`);
    let childItems = listRecursive(page, 10);
    if (childItems.length > 0) {
        finalList.push(childItems); // Flatten the array before adding
    }
});

dv.list(finalList);
```


# All competences, skills and tactics tree

```dataviewjs
let contexts = []; 
let childs = dv.pages('"3.Competences" AND (#Competence OR #Skill OR #Tactic)');

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
        .where(p => p["Supports"]?.some(parent => parent.path == page.file.path));
    pages.forEach(p => {
        let level = p.Level ? ` (**Level: ${p.Level}**)` : ''; // Get the Level property or leave empty
        subjects.push(`${p.file.link}${level}`);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let pages = dv.pages('"3.Competences" AND (#Competence OR #Skill)')
    .where(p => !p["Supports"])
    .sort(p => p.file.name, 'asc');

pages.forEach(page => {
	let level = page.Level ? ` (Level: ${page.Level})` : '';
    finalList.push(`${page.file.link}${level}`);
    let childItems = listRecursive(page, 10);
    if (childItems.length > 0) {
        finalList.push(childItems); // Flatten the array before adding
    }
});

dv.list(finalList);
```
