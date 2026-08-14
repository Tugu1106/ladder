// ✅ DONE — ran it, output correct.
// Exercise 1 — Keep Even Numbers
// Instructions: 01-keep-even-numbers.md
//
// Goal: create [2,4,6]. Capture the result in a new variable.
//
// filter() is map()'s sibling. The difference is what your callback returns:
//   map()    wants a VALUE   — whatever you return becomes the new item
//   filter() wants a VERDICT — true keeps the item as-is, false drops it
//
// filter() never changes items; it only decides which survive. That's also
// why the output length varies, where map()'s never does.
//
// % is MODULO — the remainder after division. 6 % 2 is 0, so evens have
// remainder 0.
//
// Write `n % 2 === 0`, not just `n % 2`. The bare version returns 0 or 1, and
// JavaScript treats 0 as falsy — so you'd get the ODD numbers.
//
// Expected output:
//   [ 2, 4, 6 ]

const numbers = [1, 2, 3, 4, 5, 6];

// --- your code below ---

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
