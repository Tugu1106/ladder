// ✅ DONE — correct, and genuinely nice: each X button's handler 'remembers'
//    its own li and removes it. That's a CLOSURE doing real work — the same
//    idea from the factory phase, now in the wild. Well done.
// Project 4 — Delete from List
// Phase 1: DOM Essentials
//
// Goal: like Project 3, but each item has a "x" button that removes JUST that item.
//
// DESIGN:
//   When you create each <li>, also:
//     - put the text in it
//     - create a small "x" button inside it
//     - LISTEN for a click on THAT button -> remove its <li>
//
// NEW tool: attaching an event to an element you just created, and removing an
//           element from the page.
//   - each delete button needs its own click listener
//   - how do you REMOVE an element from the page?
// Tip: inside a delete button's click handler, remove the <li> it belongs to.
// Stuck? Ask: "how do I remove an element, and wire a button I just created?"
//
// --- your code below ---
const box = document.getElementById("box");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  li.textContent = box.value;
  li.appendChild(removeBtn);
  list.appendChild(li);

  removeBtn.addEventListener("click", () => {
    li.remove();
  });
});
