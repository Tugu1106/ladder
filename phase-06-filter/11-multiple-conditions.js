// Exercise 11 — Multiple Conditions
// Instructions: 11-multiple-conditions.md
//
// Goal: keep users who are age >= 18 AND active === true.
//       ONE filter() call with &&, not two chained.
//
//       Check the data: John is active but 16. Sarah is 30 but inactive.
//       Each fails exactly one test, and each is excluded. Only Alex passes
//       both — that's && being strict.
//
//       user.active needs no `=== true`, even inside a compound condition.
//
// Expected output:
//   [ { name: 'Alex', age: 25, active: true } ]

const users = [
  { name: "Alex", age: 25, active: true },
  { name: "John", age: 16, active: true },
  { name: "Sarah", age: 30, active: false }
];

// --- your code below ---
