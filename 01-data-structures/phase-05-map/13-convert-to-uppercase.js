// ✅ DONE — ran it, output correct.
// Exercise 13 — Convert To Uppercase
// Instructions: 13-convert-to-uppercase.md
//
// Goal: create ["JOHN","JANE"] — a flat array of strings.
//
//       Two steps chained: pluck the name, then uppercase it.
//       toUpperCase() needs parentheses (it's a method, unlike .length),
//       and it RETURNS a new string — strings can never be modified in place.
//
// Expected output:
//   [ 'JOHN', 'JANE' ]

const users = [{ name: "john" }, { name: "jane" }];

// --- your code below ---
const upper = users.map((user) => user.name.toUpperCase());

console.log(upper);
