// ✅ DONE — output correct.
//    Robustness note: you used `% 2 === 1`. Works here, but in JavaScript
//    -3 % 2 is -1, NOT 1 — so === 1 would MISS negative odd numbers. `!== 0`
//    is the bulletproof version. No negatives in this data, so both pass.
// Exercise 2 — Keep Odd Numbers
// Instructions: 02-keep-odd-numbers.md
//
// Goal: create [1,3,5]. The exact opposite of Exercise 1.
//
//       Prefer `!== 0` over `=== 1`: in JavaScript -3 % 2 is -1, not 1,
//       so `=== 1` would miss negative odd numbers.
//
// Expected output:
//   [ 1, 3, 5 ]

const numbers = [1, 2, 3, 4, 5, 6];

// --- your code below ---
const odd = numbers.filter((number) => number % 2 === 1);
console.log(odd);
