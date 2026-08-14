// ✅ DONE — works, clean. ONE upgrade worth knowing (see the chat review):
//    you read the number back OUT of the DOM (parseInt(count.textContent)+1).
//    The pro pattern is to keep state in a JS variable — let count = 0 — and
//    write the DOM FROM it. That 'one source of truth' is EXACTLY what React's
//    useState formalizes. Try refactoring it that way; it's a 2-line change.
// Project 1 — Click Counter
// Phase 1: DOM Essentials
//
// Goal: click the +1 button, the number on the page goes up by 1.
//
// DESIGN (do this in your head first — it's tiny):
//   Data:  one variable `count`, starts at 0
//   Steps: 1. SELECT the button and the number element from the page
//          2. LISTEN for clicks on the button
//          3. on each click: add 1 to count
//          4. CHANGE what the number element shows, to match count
//
// You already know the logic of steps 3 and 4 (add 1; show a value).
// The NEW part — your first "I don't know the tool" moment — is:
//   - how do I SELECT an element from the HTML?      (a "get this element" tool)
//   - how do I LISTEN for a click?                   (an "on click, run this" tool)
//   - how do I CHANGE what an element displays?      (a "set its text" tool)
//
// Stuck on those three? Good — that's the plan. Ask me:
// "what selects an element, listens for a click, and sets its text?"
// I'll give you the syntax; you wire it together yourself.
//
// STRETCH (optional, after it works): add a -1 button and a Reset button.
// You'll add them to index.html and wire them up the same way.

// --- your code below ---

const count = document.getElementById("count");
const incrementBtn = document.getElementById("increment");

incrementBtn.addEventListener("click", () => {
  count.textContent = parseInt(count.textContent) + 1;
});
