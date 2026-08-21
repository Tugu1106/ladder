// ✅ DONE — ran it, output correct.
// Exercise 2 — Double Numbers
// Instructions: 02-double-numbers.md
//
// Goal: print each number doubled.
//
// Then print `numbers` afterwards — it's unchanged. forEach() throws away
// whatever your callback returns, so printing is the ONLY way to see anything.
// That limitation is exactly what map() fixes in Phase 5.
//
// Expected output:
//   2
//   4
//   6
//   8

const numbers = [1, 2, 3, 4];

// --- your code below ---
numbers.forEach((number) => {
  console.log(number * 2);
});
