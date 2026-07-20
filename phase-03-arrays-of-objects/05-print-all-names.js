// ✅ DONE — fixed. user.name prints Tugu / Alex / John, correct.
// Exercise 5 — Print All Names
// Instructions: 05-print-all-names.md
//
// Goal: using a loop, print every name — no ages, no braces.
//       Must still work if a fourth user is added.
//
//       Each item is an OBJECT now, so printing it raw dumps the whole thing.
//       Reach in for the property.
//
// Expected output:
//   Tugu
//   Alex
//   John

const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 },
];

// --- your code below ---
for (let user of users) {
  console.log(user.name);
}
