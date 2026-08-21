// ✅ DONE — correct.
// Exercise 2 — Skip & Rest
// Phase 2: Modern JS for React
//
// Goal: two small moves.
//   (a) grab ONLY the second score by skipping index 0 with a gap:
//         const [, second] = scores;
//   (b) grab the first number, and gather THE REST into an array:
//         const [first, ...rest] = numbers;
//
// Print: second, first, rest.
//
// Expected output:
//   20
//   1
//   [ 2, 3, 4 ]

const scores = [10, 20, 30];
const numbers = [1, 2, 3, 4];

// --- your code below ---
const [, second] = scores;
const [first, ...rest] = numbers;

console.log(second);
console.log(first);
console.log(rest);
