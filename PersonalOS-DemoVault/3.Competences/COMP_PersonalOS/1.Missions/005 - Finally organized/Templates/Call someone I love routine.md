---
tags: []
Context:
---
<% tp.file.rename("Call someone I love routine "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Routine";
  });
}); 
%>
> [!success] In practice
> This routine is failed because you just didn't do it for the last 5 days
> - To reschedule it use the "Auto fail work in progress files" command in the command palette (CTRL+P)
> - Confirm that it is rescheduled to today
> - Sadly it's too late for you to do it today, so fail it by using the "Auto fail current file" command in the command palette (CTRL+P)
> - Confirm that it is rescheduled for tomorrow
> - Play with the "toggle action hider" (CTRL+R) to show and hide completed or failed task
> - This file is now processed, use  Alt+2 again

```dataviewjs

function calculateDateStreak(dateArray) {
  const currentDate = new Date(); // Get the current date
  let streak = 0;
  let streakAdjust= 0;

  // Convert the date strings in the array to Date objects and sort them
  const sortedDates = dateArray
    .map(dateString => new Date(dateString))
    .sort((a, b) => b - a);

	// check the first date it it's today or yesterday. 
	let diffInDays = Math.floor((currentDate - sortedDates[0]) / (24 * 60 * 60 * 1000));
	if (diffInDays === 1) {
	streakAdjust = -1;
	streak++;
	}
  for (let date of sortedDates) {
    // Calculate the difference in days between the current date and the date in the array
    let diffInDays = Math.floor((currentDate - date) / (24 * 60 * 60 * 1000));

    if (diffInDays === streak) {
      // If the difference is equal to the current streak, increment the streak
      streak++;
    } else if (diffInDays > streak) {
      // If the difference is more than the streak, it's not consecutive
      return (streak + streakAdjust);
    }
  }
  return (streak + streakAdjust);
}

// Example usage:
let dateArray = ["2024-01-19", "2024-01-18", "2024-01-21", "2024-01-22"];
let dates= dv.current().file.tasks.completion;
let streak = calculateDateStreak(dates);
let global = dv.current().file.tasks.length
let completed  = dv.current().file.tasks.where(t=>t.completion).length
let percentage = global > 0 ? Math.round((completed / global) * 100) : 0;


dv.header(1,"Streak : "+streak);
dv.header(1,"Completed : "+completed);
dv.header(1,"Reliability : "+percentage+"%");
```
# Routine
[✳️::0]

- [ ] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-5) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-6) %> ✅ <% tp.date.now("YYYY-MM-DD",-6) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-7) %> ✅ <% tp.date.now("YYYY-MM-DD",-7) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-8) %> ✅ <% tp.date.now("YYYY-MM-DD",-8) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-9) %> ✅ <% tp.date.now("YYYY-MM-DD",-9) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-10) %> ✅ <% tp.date.now("YYYY-MM-DD",-10) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-11) %> ✅ <% tp.date.now("YYYY-MM-DD",-11) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-12) %> ✅ <% tp.date.now("YYYY-MM-DD",-12) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-13) %> ✅ <% tp.date.now("YYYY-MM-DD",-13) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-14) %> ✅ <% tp.date.now("YYYY-MM-DD",-14) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-15) %> ✅ <% tp.date.now("YYYY-MM-DD",-15) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-16) %> ✅ <% tp.date.now("YYYY-MM-DD",-16) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-17) %> ✅ <% tp.date.now("YYYY-MM-DD",-17) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-18) %> ✅ <% tp.date.now("YYYY-MM-DD",-18) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-19) %> ✅ <% tp.date.now("YYYY-MM-DD",-19) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-20) %> ✅ <% tp.date.now("YYYY-MM-DD",-20) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-21) %> ✅ <% tp.date.now("YYYY-MM-DD",-21) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-22) %> ✅ <% tp.date.now("YYYY-MM-DD",-22) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-23) %> ✅ <% tp.date.now("YYYY-MM-DD",-23) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-24) %> ✅ <% tp.date.now("YYYY-MM-DD",-24) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-25) %> ✅ <% tp.date.now("YYYY-MM-DD",-25) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-26) %> ✅ <% tp.date.now("YYYY-MM-DD",-26) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-27) %> ✅ <% tp.date.now("YYYY-MM-DD",-27) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-28) %> ✅ <% tp.date.now("YYYY-MM-DD",-28) %>
- [x] Call someone I love just to say hi 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD",-29) %> ✅ <% tp.date.now("YYYY-MM-DD",-29) %>
