// ✅ DONE — ran it, output correct.
// Exercise 2 — Square Numbers
// Instructions: 02-square-numbers.md
//
// Goal: create [4,9,16,25]. Write it once with `return`, then again short-form.
//
// When a callback is a single expression you can drop the braces AND the
// `return` — the value comes back on its own:
//
//   numbers.map(n => { return n * n; });     // long
//   numbers.map(n => n * n);                 // short
//
// The rule: braces mean "a function body, return explicitly". No braces mean
// "this one expression is the return value". Mixing them — n => { n * n } —
// returns undefined.
//
// Expected output:
//   [ 4, 9, 16, 25 ]

const numbers = [2, 3, 4, 5];

// --- your code below ---
const squared = numbers.map((number) => {
  return number * number;
});

console.log(squared);
