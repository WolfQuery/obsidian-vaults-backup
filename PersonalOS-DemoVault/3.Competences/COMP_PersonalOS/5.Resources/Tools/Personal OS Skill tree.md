```dataviewjs
let contexts = []; 
let childs = dv.pages('(#Competence OR #Skill) AND "3.Competences/COMP_PersonalOS"');

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
		.where(p => p["Parent Skills"]?.some(parent => parent.path == page.file.path));
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let pages = dv.pages('(#Competence OR #Skill) AND "3.Competences/COMP_PersonalOS"')
    .where(p => !p["Parent Skills"])
    .sort(p => p.file.name, 'asc');

pages.forEach(page => {
    finalList.push(page.file.link);
    let childItems = listRecursive(page, 10);
    if (childItems.length > 0) {
        finalList.push(childItems); // Flatten the array before adding
    }
});

dv.list(finalList);
```
