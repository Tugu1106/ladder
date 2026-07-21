// ✅ DONE — ran it, output correct.
// Exercise 6 — Adults Only
// Instructions: 06-adults-only.md
//
// Goal: keep only adults (age >= 18).
//
//       Look at the output: you get back WHOLE user objects, not names.
//       The callback reaches into user.age to decide, but what survives is
//       the entire item, untouched. filter() selects; it never transforms.
//
//       >= 18 — an 18-year-old is an adult. Nobody here is exactly 18, so
//       only your operator choice protects you.
//
// Expected output:
//   [ { name: 'Alex', age: 20 }, { name: 'Sarah', age: 30 } ]

const users = [
  { name: "Alex", age: 20 },
  { name: "John", age: 15 },
  { name: "Sarah", age: 30 },
];

// --- your code below ---
const adults = users.filter((user) => user.age >= 18);
console.log(adults);
