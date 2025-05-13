const today = new Date().toISOString().slice(0, 10);
const dv = app.plugins.plugins.dataview.api;

// A due Page is a page with at least one due or schedule date in the past on non completed checklist items
const IsDuePage = (p) =>
  p.file.tasks
    .where((t) => !t.completed && !t.fullyCompleted)
    .where(
      (t) =>
        (t.due && dv.date(t.due) <= dv.date(today)) ||
        (t.scheduled && dv.date(t.scheduled) <= dv.date(today))
    ).length > 0;

// A Next page is a page with either (a start date in the past) OR ((no dates at all on non completed checklist items AND no Someday on non completed items))
const IsNextPage = (p) =>
  (p.file.tasks
    .where((t) => !t.completed && !t.fullyCompleted)
    .where((t) => t.start && dv.date(t.start) <= dv.date(today)).length > 0 )
    ||
  (p.file.tasks
    .where((t) => t.start || t.due || t.scheduled || t.text.contains('[[Someday]]')||t.text.contains('#Someday'))
    .where((t) => !t.completed && !t.fullyCompleted).length == 0 
    &&
    p.file.tasks.where((t) => !t.completed && !t.fullyCompleted).length > 0);

/* A Someday page is a page with at least 1 task referencing the "Someday" context >> Todo
const IsSomedayPage = (p) =>
  (p.file.tasks
    .where((t) => !t.completed && !t.fullyCompleted)
    .where((t) => t.start && dv.date(t.start) <= dv.date(today)).length > 0 )
    ||
  (p.file.tasks
    .where((t) => t.start || t.due || t.scheduled)
    .where((t) => !t.completed && !t.fullyCompleted).length == 0 
    &&
    p.file.tasks.where((t) => !t.completed && !t.fullyCompleted).length > 0); */

const TodayPages = dv.pages('"1.Office"').where(p => p['Archived'] != true).where(IsDuePage);
const NextPages = dv.pages('"1.Office"').where(p => p['Archived'] != true).where(IsNextPage);
//const TodayPages = dv.pages().where(p => p['Review Status'] == "Open").where(p => p.Archived == "true").where(IsDuePage);
//const NextPages = dv.pages().where(p => p['Review Status'] == "Open").where(p => p.Archived == "true").where(IsNextPage);
const TasksCompletedTodayCount = dv
  .pages()
  .file.tasks.where((t) => t.completed)
  .where(
    (t) =>
      t.completion &&
      dv.date(t.completion) <= dv.date(today) &&
      dv.date(t.completion) >= dv.date(today)
  ).length;

console.log(TasksCompletedTodayCount);

function GetNextAction() {
  let TodayPageLength = TodayPages.length;
  let NextPageLength = NextPages.length;
  console.log(TodayPageLength, NextPageLength);
  if (TodayPageLength > 0) {
    let Index = Math.floor(Math.random() * TodayPageLength);
    NextPagePath = TodayPages[Index].file.path;
  } else if (NextPageLength > 0) {
    let Index = Math.floor(Math.random() * NextPageLength);
    NextPagePath = NextPages[Index].file.path;
  } else {
    NextPagePath = "9.Config/Done";
  }
  let NextPageURI = `obsidian://advanced-uri?vault=Kill Zone&filepath=${NextPagePath}`;
  return NextPageURI;
}
/* Next Page can be a ThumbUP or a Next Action, based on the number of Actions done today
*/

function GetNextPage() {
 if (TasksCompletedTodayCount > 10 && true /*number of thumbs up received < 2*/){
    result = GetNextAction();
 } else

 return result;
}

module.exports = (params) => {
  let NextPageURI = GetNextAction();
  return window.open(NextPageURI);
};

/*

`obsidian://advanced-uri?vault=Kill Zone&&filepath=ThumbUp1&data=Hello%2520World&mode=append`

p.file.tasks
.where((t) => !t.completed && !t.fullyCompleted)
.where((t) => t.due && dv.date(t.due) <= dv.date(today)).length > 0 ||
(p.file.tasks
.where((t) => t.due)
.where((t) => !t.completed && !t.fullyCompleted).length == 0 &&
p.file.tasks.where((t) => !t.completed && !t.fullyCompleted).length > 0);


p.file.tasks
  .where((t) => !t.completed && !t.fullyCompleted)
  .where((t) => t.due && dv.date(t.due) <= dv.date(today)).length > 0 ||
(p.file.tasks
  .where((t) => t.due)
  .where((t) => !t.completed && !t.fullyCompleted).length == 0 &&
  p.file.tasks.where((t) => !t.completed && !t.fullyCompleted).length > 0);
  */
