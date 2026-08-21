// ✅ DONE — ran it, output correct.
// Exercise 14 — Mixed Challenge
// Instructions: 14-mixed-challenge.md
//
// Goal: WITHOUT creating a new object, do all three:
//         - change one property
//         - add one property
//         - delete one property
//       Then print the final object.
//
// Expected output: depends on your choices — but the result must show
// one value changed, one key that wasn't there before, and one key gone.

const person = {
  name: "Tugu",
  age: 23,
  job: "Developer",
  height: 175,
  isStudent: true,
};

// --- your code below ---
person.name = "Tuguldur";
person.ambition = "rocket";
delete person.height;

console.log(person);
