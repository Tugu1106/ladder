// ✅ DONE — ran it, output correct.
// Exercise 20 — Array Calculator ⭐
// Instructions: 20-array-calculator.md
//
// Goal: using a loop, calculate the total and print it.
//
// The accumulator pattern — three parts:
//   1. declare the total BEFORE the loop  (let, starting at 0)
//   2. add to it inside the loop
//   3. print it AFTER the loop
//
// Put the variable inside the loop and it resets every pass.
// Remember this one — Phase 7's reduce() is exactly this with the loop hidden.
//
// Expected output:
//   100

const numbers = [10, 20, 30, 40];

// --- your code below ---
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
