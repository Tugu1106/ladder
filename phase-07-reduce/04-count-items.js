// ✅ DONE — ran it, output correct.
// Exercise 4 — Count Items
// Instructions: 04-count-items.md
//
// Goal: count them with reduce() -> 3. Add 1 per item, ignoring the item.
//
// Then print fruits.length too. You'd never write the reduce version — it's
// here for the rep, and for one insight: when your callback ignores the
// current item entirely, either you want .length or you've misread the problem.
//
// Expected output:
//   3

const fruits = ["apple", "banana", "orange"];

// --- your code below ---
const count = fruits.reduce((count, fruit) => count + 1, 0);
console.log(count);
