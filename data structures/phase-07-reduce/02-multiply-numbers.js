// ✅ DONE — ran it, output correct.
// Exercise 2 — Multiply Numbers
// Instructions: 02-multiply-numbers.md
//
// Goal: multiply them all together -> 24
//
// THE TRAP: start at 0 and your answer is 0. Always. 0 * 2 * 3 * 4 is zero,
// and no amount of correct multiplication saves you.
//
// The initial value must be NEUTRAL for the operation:
//   addition       -> 0  (adding zero changes nothing)
//   multiplication -> 1  (multiplying by one changes nothing)
//
// Get it wrong and you don't get an error — you get a confident wrong answer.
// Try it with 0 once and watch.
//
// Trace: 1*2=2, 2*3=6, 6*4=24
//
// Expected output:
//   24

const numbers = [2, 3, 4];

// --- your code below ---
const product = numbers.reduce((product, number) => product * number, 1);
console.log(product);
