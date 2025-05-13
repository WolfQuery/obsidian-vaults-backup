const today = new Date().toISOString().slice(0, 10);
const dv = app.plugins.plugins.dataview.api;

// Late are all due page that are late, they should be processed first
const IsLate = dv.pages('"1.Office"')
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(p => p.file.tasks
    .where((t) => !t.completed && !t.fullyCompleted)
    .where(t => (t.status != "-"))
    .where(
      (t) =>
        (t.due && (t.due < dv.date('today').ts)) ||
        (t.scheduled && (t.scheduled < dv.date('today').ts))
    ).length > 0)
    .limit(3);

// Inbox is a page that is in the Inbox
const IsInbox =  dv.pages('"0.Inbox"').sort(p => p.file.mtime,'asc').limit(3);

// Open no task are all Non archived files in the office that have no task defined
const IsOpenNoTask = dv.pages('"1.Office"')
  .where (p => p.file.tasks
    .where(t => !t.completed)
    .where(t => (t.status != "-"))
    .length == 0)
  .where (p => p['Archived'] != true)
  .sort (p => p.file.mtime,'asc')
  .limit(3);


async function GetNextToProcess() {
  let done = "- [x] Done ✅ " + today;
  let IsLateLength = IsLate.length;
  let IsInboxLength = IsInbox.length;
  let IsOpenNoTaskLength = IsOpenNoTask.length;
  console.log(IsInboxLength, IsOpenNoTaskLength, IsLateLength);
  if (IsLateLength > 0) {
    let Index = Math.floor(Math.random() * IsLateLength);
    NextPagePath = IsLate[Index].file.path;
  } else if (IsInboxLength > 0) {
    let Index = Math.floor(Math.random() * IsInboxLength);
    NextPagePath = IsInbox[Index].file.path;
  } else if (IsOpenNoTaskLength > 0) {
    let Index = Math.floor(Math.random() * IsOpenNoTaskLength);
    NextPagePath = IsOpenNoTask[Index].file.path;
  } else {
    let donePage = await app.vault.read(app.vault.getFiles().find(t=>t.basename=="Process Done"));
    if(donePage.includes(done,0)){
      NextPagePath = "9.Config/Process Done.md";
    }else {
      NextPagePath = `9.Config/Process Done.md&data=${done}&mode=append`;
    }
  }
  let NextPageURI = `obsidian://advanced-uri?vault=Kill Zone&filepath=${NextPagePath}`;
  return NextPageURI;
}


module.exports = async (params) => {
  let NextPageURI = await GetNextToProcess();
  console.log(NextPageURI);
  return window.open(NextPageURI);
};

