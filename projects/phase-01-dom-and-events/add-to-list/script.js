// ✅ DONE — correct. Small bonus you skipped: clear the input after adding
//    with  box.value = '';  (and maybe ignore empty input). Nice-to-haves.
// Project 3 — Add to List
// Phase 1: DOM Essentials
//
// Goal: type something, click "Add", and it appears as a new item in the list.
//
// DESIGN:
//   Steps: 1. SELECT the input, the button, and the <ul>
//          2. LISTEN for clicks on the button
//          3. on click: read the input's text
//          4. CREATE a new <li> with that text
//          5. ADD the <li> into the <ul>
//          (bonus: clear the input after adding)
//
// NEW tool: creating an element and adding it to the page.
//   - how do you MAKE a new <li> element in JS?
//   - how do you PUT it inside the <ul>?
// Stuck? Ask: "how do I create an element and add it to the page?"
//
// --- your code below ---
const box = document.getElementById("box");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = box.value;
  list.appendChild(li);
});
