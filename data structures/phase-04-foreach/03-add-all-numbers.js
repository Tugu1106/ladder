// ✅ DONE — ran it, output correct.
// Exercise 3 — Add All Numbers
// Instructions: 03-add-all-numbers.md
//
// Goal: calculate the total with forEach() and print it.
//
// `total` must live OUTSIDE the callback. The callback can still reach it —
// that's a CLOSURE: a function keeps access to the variables surrounding it.
// Declare it inside and it resets to 0 on every single item.
//
// Expected output:
//   30

const numbers = [5, 10, 15];
let total = 0;
// --- your code below ---
numbers.forEach((number) => {
  total += number;
});
console.log(total);
