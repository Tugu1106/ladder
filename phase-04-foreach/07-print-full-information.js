// ✅ DONE — ran it, output correct.
// Exercise 7 — Print Full Information
// Instructions: 07-print-full-information.md
//
// Goal: two properties, one line each. Match the format exactly —
//       no "years old" this time.
//
// Expected output:
//   John is 20
//   Jane is 25

const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
];

// --- your code below ---
users.forEach((element) => {
  console.log(`${element.name} is ${element.age}`);
});
