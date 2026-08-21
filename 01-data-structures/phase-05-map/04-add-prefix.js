// ✅ DONE — ran it, output correct.
// Exercise 4 — Add Prefix
// Instructions: 04-add-prefix.md
//
// Goal: create ["Mr. John", "Mr. Jane", "Mr. Bob"]
//       Mind the space after the dot. map() isn't only for numbers, and the
//       transformation doesn't have to compute anything.
//
// Expected output:
//   [ 'Mr. John', 'Mr. Jane', 'Mr. Bob' ]

const names = ["John", "Jane", "Bob"];

// --- your code below ---
const prefixed = names.map((name) => `Mr. ${name}`);

console.log(prefixed);
