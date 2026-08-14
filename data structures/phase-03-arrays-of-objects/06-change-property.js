// ✅ DONE — ran it, output correct.
// Exercise 6 — Change Property
// Instructions: 06-change-property.md
//
// Goal: change Tugu's age from 22 to 23, then print users.
//       Reach the property through its index. Only Tugu changes.
//
// Expected output:
//   [ { name: 'Tugu', age: 23 }, { name: 'Alex', age: 25 }, { name: 'John', age: 30 } ]

const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 },
];

// --- your code below ---
users[0].age = 23;
console.log(users);
