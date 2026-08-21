// ✅ DONE — ran it, output correct.
// Exercise 6 — Extract Names
// Instructions: 06-extract-names.md
//
// Goal: create ["John","Jane"] — a flat array of strings, no objects.
//
// This is PLUCKING: reaching into every record and pulling one field out.
// The most common map() in existence — a list of IDs to fetch, emails to
// notify, names to display.
//
// Learn to read  users.map(user => user.name)  as one thought:
// "the users' names".
//
// Expected output:
//   [ 'John', 'Jane' ]

const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
];

// --- your code below ---
const names = users.map((user) => user.name);
console.log(names);
