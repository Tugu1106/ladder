// ✅ DONE — ran it, output correct.
// Exercise 9 — Add Multiple Properties
// Instructions: 09-add-multiple-properties.md
//
// Goal: add three properties, choosing sensible values yourself:
//         job       — a string
//         height    — a number  (175, not "175")
//         isStudent — a boolean (true / false, no quotes)
//       Then print the object.
//
// Expected output (your values will differ):
//   { name: 'Tugu', age: 23, job: 'Developer', height: 175, isStudent: true }

const person = { name: "Tugu", age: 23 };

// --- your code below ---
person.job = "developer";
person.height = 183;
person.isStudent = true;

console.log(person);
