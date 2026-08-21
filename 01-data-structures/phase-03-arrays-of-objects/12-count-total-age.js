// ✅ DONE — ran it, output correct.
// Exercise 12 — Count Total Age
// Instructions: 12-count-total-age.md
//
// Goal: using a loop, calculate the total age and print it.
//       Same accumulator as Phase 2's Exercise 20 — but the numbers are
//       inside objects now, so reach in for .age before adding.
//
// Expected output:
//   90

const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

// --- your code below ---
let total = 0;

for (let user of users) {
  total += user.age;
}

console.log(total);
