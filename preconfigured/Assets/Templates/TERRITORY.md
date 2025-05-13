<%*
// ###########################################################
//                        Helper Functions
// ###########################################################

// Convert string to camelCase
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+|[-_])/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/[\s-_]+/g, '');
}

// Return icon based on type
function getIcon(type) {
  const iconMappings = {
    Country: ':FasFlag:',
    'General Region': ':FasMap:',
    Kingdom: ':FasChessRook:',
    Nation: ':FasFlag:'
  };

  return iconMappings[type] || ':FasCircleQuestion:';
}


// Return modified path based on location
const dv = app.plugins.plugins.dataview.api;
function getPath(location) {
    const match = dv.pages('"Compendium/Atlas"')
        .where(p => (p.type === "continent" || p.type === "ocean") && p.file.name === location)
        .map(obj => obj.file.path.split('/').slice(2, -1).join('/'))
        .find(Boolean);

    return match || '';
}

// ###########################################################
//                        Main Code Section
// ###########################################################

// Call modal form & declare variables
const result = await MF.openForm('TERRITORY');
const location = result.Location.value;
const name = result.Name.value;
const type = result.Type.value;
const icon = getIcon(type);
const path = getPath(location);

if (result.status === 'ok') {

    // Rename file & open in new tab; Fire toast notification
    await tp.file.move(`Compendium/Atlas/${location ? `${path}/` : ''}${name}/${name}`);
    await app.workspace.getLeaf(true).openFile(tp.file.find_tfile(name));
    new Notice().noticeEl.innerHTML = `<span style="color: green; font-weight: bold;">Finished!</span><br>New territory <span style="text-decoration: underline;">${name}</span> added`;

} else {

    // Fire toast notification & exit templater
    new Notice().noticeEl.innerHTML = `<span style="color: red; font-weight: bold;">Cancelled:</span><br>Territory has not been added`;
    return;
}
_%>

---
type: territory
locations:
 - <% location ? `"[[${location}]]"` : '' %>
tags:
 - <% type ? `location/${toCamelCase(type)}` : '' %>
headerLink: "[[<% name %>#<% name %>]]"
---

![[banner.jpg|banner]]
###### <% name %>
<span class="sub2"><% type ? `${icon} ${type}` : '' %></span>
___

> [!quote|no-t] SUMMARY
>Description of the <% type ? type.toLowerCase() : 'territory' %> <% name %>.

#### marker
> [!column|flex 3]
> > [!hint]-  NPC's
> > <input type="checkbox" id="npc"/><ul class="sortMenu"><li class="sortIcon">:RiListSettingsLine:<ul class="dropdown npcedit"><li><label for="npc" class="directLabel active">Direct Links Only</label></li><li><label for="npc" class="childLabel">Include Sub-Locations</label></li></ul></li></ul>
> >```dataviewjs
dv.container.className += ' npcDirect';
dv.list(dv.pages('"Compendium/NPC\'s"')
 .where(p => p.file.outlinks.includes(dv.current().file.link))
.sort(p => p.file.link)
.map(p => p.headerLink), 1);
>>```
>>```dataviewjs
dv.container.className += ' npcChild';
let page = dv.current().file.path;
let pages = new Set();
let stack = [page];
while (stack.length > 0) {
let elem = stack.pop();
let meta = dv.page(elem);
if (!meta) continue;
for (let inlink of meta.file.inlinks.concat(meta.file.outlinks).array()) {
let locations = dv.page(inlink.path);
if (!locations || pages.has(inlink.path) || inlink.path === meta.locations?.[0]) continue;
 if (dv.array(locations.locations).join(", ").includes(meta.file.path)) {
 pages.add(inlink.path);
 stack.push(inlink.path);
}}}
let data = Array.from(pages)
.filter(p => dv.page(p)?.type === "npc")
.map(p => dv.page(p).headerLink)
.sort((a, b) => {
if (a < b) return -1;
if (a > b) return 1;
return 0;
});
dv.list(data);
> 
>> [!example]- LOCATIONS
>>```dataview
LIST WITHOUT ID headerlink + " (" + type + ")"
FROM "Compendium/Atlas/<% location ? `${path}/` : '' %><% name %>"
WHERE type="province"
SORT file.name ASC
>
>> [!note]- HISTORY
>>```dataview
LIST WITHOUT ID headerLink
FROM "Session Notes" AND [[<% name %>]]
SORT file.ctime DESC
#### marker