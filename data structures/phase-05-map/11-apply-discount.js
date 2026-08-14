// ✅ DONE — ran it, output correct.
// Exercise 11 — Apply Discount
// Instructions: 11-apply-discount.md
//
// Goal: create a new array with a 10% discount applied.
//
//       Two ways to think about it: subtract 10% (n - n * 0.1), or keep 90%
//       (n * 0.9). Same answer; the second is what real code uses.
//
// Expected output:
//   [ 90, 180, 270 ]

const prices = [100, 200, 300];

// --- your code below ---
const discounted = prices.map((price) => price * 0.9);
console.log(discounted);
