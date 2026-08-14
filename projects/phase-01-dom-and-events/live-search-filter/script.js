// ✅ DONE — correct and clean. You reused includes() + toLowerCase() from the
//    DS course exactly right. Tiny idiom: the if/else could be a ternary —
//    item.style.display = itemText.includes(input) ? '' : 'none';  (optional).
// Project 5 — Live Search Filter
// Phase 1: DOM Essentials
//
// Goal: as you type in the search box, hide list items that DON'T match and show
//       the ones that do. (The <li> items already exist in index.html.)
//
// DESIGN:
//   Steps: 1. SELECT the search box and all the <li> items
//          2. LISTEN for "input" on the search box
//          3. on each keystroke:
//               - read the search text (lowercase it)
//               - for each <li>: if its text contains the search text -> show it,
//                 otherwise -> hide it
//
// NEW-ish: selecting MANY elements and looping over them; showing/hiding one.
//   - how do you select ALL the <li>s (not just the first)?
//   - how do you hide / show a single element?
// You already know includes() + lowercasing from the DS course — that's the
// matching logic. Ask: "how do I select all elements, and hide/show one?"
//
// --- your code below ---
const search = document.getElementById("search");
const list = document.getElementById("list");

search.addEventListener("input", () => {
  const input = search.value.toLowerCase();
  const all = list.querySelectorAll("li");
  all.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
