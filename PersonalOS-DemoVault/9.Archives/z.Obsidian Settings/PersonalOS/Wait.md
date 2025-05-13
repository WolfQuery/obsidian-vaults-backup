Wait a bit, there are still shit to do today. In the mean time : 
![[This week time sink widget#This week time sink]]

![[Wait.png]]

### Due subjects
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due == dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled == dv.date('today').ts)))
      ).length>0;

dv.table( 
  ['Due'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDuePage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```