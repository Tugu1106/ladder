// ✅ DONE — ran it, output correct.
// Exercise 1 — Adult Names
// Instructions: 01-adult-names.md
//
// Goal: keep adults -> get names -> ["Alex","Sarah"]
//
// Phase 8 has no new methods. You know all four. What's new is that you now
// COMBINE them by default.
//
// The shift: stop asking "which method do I need" and start asking "what are
// the steps?" Write them in English — keep adults, take names — and the code
// falls out one line per step.
//
// Expected output:
//   [ 'Alex', 'Sarah' ]

const users = [
  { name: "Alex", age: 25 },
  { name: "John", age: 15 },
  { name: "Sarah", age: 30 },
];

// --- your code below ---
const result = users.filter((user) => user.age >= 18).map((user) => user.name);
console.log(result);
