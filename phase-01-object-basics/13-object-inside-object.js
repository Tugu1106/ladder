// ✅ DONE — ran it, output correct.
//    Note: you named it `favouriteFood`; the spec says `favoriteFood` (no 'u').
//    Works fine — but it's a spec mismatch, and those bite when someone else
//    reads your data expecting the documented name.
// Exercise 13 — Object Inside Object
// Instructions: 13-object-inside-object.md
//
// Goal: add a `favoriteFood` object holding `breakfast`, `lunch` and `dinner`,
//       then print ONLY dinner. Leave `address` where it is.
//
// Expected output (your values will differ):
//   Buuz

const person = {
  name: "Tugu",
  age: 23,
  address: { city: "Darkhan", district: "Bayanzurkh" },
};

// --- your code below ---
person.favouriteFood = {
  breakfast: "egg",
  lunch: "soup",
  dinner: "buuz",
};

console.log(person.favouriteFood.dinner);
