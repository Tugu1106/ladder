// ✅ DONE — ran it, output correct.
// Exercise 12 — Nested Object Update
// Instructions: 12-nested-object-update.md
//
// Goal: change the city, then print the ENTIRE address object.
//       Change just the city — don't replace the whole address,
//       or you'll lose `district`.
//
// Expected output (your values will differ):
//   { city: 'Darkhan', district: 'Bayanzurkh' }

const person = {
  name: "Tugu",
  age: 23,
  address: { city: "Ulaanbaatar", district: "Bayanzurkh" },
};

// --- your code below ---
person.address.city = "Erdenet";
console.log(person.address);
