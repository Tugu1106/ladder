// ✅ DONE — ran it, output correct.
// Exercise 10 — Update Multiple Properties
// Instructions: 10-update-multiple-properties.md
//
// Goal: change age, height and isStudent to new values.
//       Leave name and job alone. Keep each value's type the same.
//       Then print the object.
//
// Expected output (your values will differ):
//   { name: 'Tugu', age: 24, job: 'Developer', height: 178, isStudent: false }

const person = {
  name: "Tugu",
  age: 23,
  job: "Developer",
  height: 175,
  isStudent: true,
};

// --- your code below ---
person.age = 22;
person.height = 178;
person.isStudent = false;

console.log(person);
