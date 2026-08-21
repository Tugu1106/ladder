// ✅ DONE — ran it, output correct.
// Exercise 7 — Price Formatting
// Instructions: 07-price-formatting.md
//
// Goal: ["$100","$200","$300"]
//
// You're crossing from DATA to PRESENTATION. 100 is a number you can do maths
// on; "$100" is text for a human. Once formatted it's useless for arithmetic —
// "$100" + "$200" is "$100$200".
//
// So format LAST, always. Do every calculation on the numbers, then present.
// Formatting early poisons everything downstream.
//
// Expected output:
//   [ '$100', '$200', '$300' ]

const prices = [100, 200, 300];

// --- your code below ---
const result = prices.map((price) => {
  return `$${price}`;
});

console.log(result);
