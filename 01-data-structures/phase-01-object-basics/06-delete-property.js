// ✅ DONE — ran it, output correct.
// Exercise 6 — Delete a Property
// Instructions: 06-delete-property.md
//
// Goal: delete the `country` property, then print the object.
//       Use the `delete` operator.
//
// Expected output:
//   { name: 'Tugu', age: 23 }

const person = { name: "Tugu", age: 23, country: "Mongolia" };

// --- your code below ---
delete person.country;
console.log(person);
