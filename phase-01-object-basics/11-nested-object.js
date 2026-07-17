// ✅ DONE — ran it, output correct.
// Exercise 11 — Nested Object
// Instructions: 11-nested-object.md
//
// Goal: add an `address` object holding `city` and `district`,
//       then print ONLY the city.
//       address must be an object ({ }), not a string.
//
// Expected output (your values will differ):
//   Ulaanbaatar

const person = { name: "Tugu", age: 23 };

// --- your code below ---
person.address = {
  city: "Ulaanbaatar",
  district: "BZD",
};

console.log(person.address.city);
