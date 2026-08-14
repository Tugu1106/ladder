// ✅ DONE — ran it, output correct.
// Exercise 3 — Find Maximum Number
// Instructions: 03-find-maximum-number.md
//
// Goal: find the largest -> 20. No Math.max() — do the comparison yourself.
//
// The first sign reduce() isn't a "summing tool". The accumulator doesn't
// have to be a running total — here it's the LARGEST SEEN SO FAR. Same
// machinery, completely different job.
//
// The ternary operator gives you an if/else that produces a VALUE, which is
// what you need when you must return something:
//
//   condition ? valueIfTrue : valueIfFalse
//
// Seed from numbers[0], not 0 — starting at 0 would break on all-negative data.
//
// Expected output:
//   20

const numbers = [5, 10, 3, 20, 8];

// --- your code below ---
const max = numbers.reduce((max, number) => {
  if (number > max) {
    max = number;
  }
  return max;
}, numbers[0]);
console.log(max);
