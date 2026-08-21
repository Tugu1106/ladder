// ✅ DONE — ran it, output correct.
// Exercise 6 — Total Ages
// Instructions: 06-total-ages.md
//
// Goal: 75. Exercise 1 with the numbers inside objects — reach in for .age.
//       NaN means you wrote `sum + user` and tried to add an object to a number.
//
// Expected output:
//   75

const users = [
  { name: "Alex", age: 20 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 25 },
];

// --- your code below ---
const total = users.reduce((sum, user) => sum + user.age, 0);
console.log(total);
