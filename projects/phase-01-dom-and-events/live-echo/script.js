// ✅ DONE — clean and correct. (Could inline output.textContent = input.value,
//    but the named variable reads fine.)
// Project 2 — Live Echo
// Phase 1: DOM Essentials
//
// Goal: as you type in the input box, the same text appears live in the heading
//       below — updating on every keystroke.
//
// DESIGN:
//   Steps: 1. SELECT the input and the output heading
//          2. LISTEN for the "input" event on the box (fires on every keystroke)
//          3. on each keystroke: read what's typed, put it in the heading
//
// NEW tool: the "input" event + reading an input's value.
//   - "click" was for buttons. What event fires while TYPING?
//   - how do you read the current text INSIDE an input?
// Stuck? Ask: "what event fires on typing, and how do I read an input's value?"
//
// --- your code below ---
const input = document.getElementById("box");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  const text = input.value;
  output.textContent = text;
});
