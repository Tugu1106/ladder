// ✅ DONE — ran it, output correct.
// Exercise 8 — Delete Property
// Instructions: 08-delete-property.md
//
// Goal: remove `age` from the SECOND user only, then print the array.
//
//       Look at what you've made: the array is no longer uniform.
//       Reading users[1].age now gives undefined rather than an error —
//       that quiet inconsistency is where real bugs come from.
//
// Expected output:
//   [ { name: 'Tugu', age: 22, country: 'Mongolia' },
//     { name: 'Alex', country: 'Mongolia' },
//     { name: 'John', age: 30, country: 'Mongolia' } ]

const users = [
  { name: "Tugu", age: 22, country: "Mongolia" },
  { name: "Alex", age: 25, country: "Mongolia" },
  { name: "John", age: 30, country: "Mongolia" },
];

// --- your code below ---
delete users[1].age;
console.log(users);
