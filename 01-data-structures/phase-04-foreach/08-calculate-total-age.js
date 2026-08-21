// ✅ DONE — ran it, output correct.
// Exercise 08 — Calculate Total Age
// Instructions: 08-calculate-total-age.md
//
// Goal: total the ages with forEach() and print it.
//       Same closure as Exercise 3, one extra dot to reach .age.
//
//       NaN means you added the object rather than person.age.
//
// Expected output:
//   60

const people = [
  { name: "A", age: 10 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];
let total = 0;
// --- your code below ---
people.forEach((element) => {
  total += element.age;
});

console.log(total);
