// ✅ DONE — ran it, output correct.
// Exercise 14 — Count Adults
// Instructions: 14-count-adults.md
//
// Goal: count people aged >= 18 and print the count.
//       Add 1 per match, not the age.
//
//       >= not > — someone exactly 18 IS an adult.
//
// Expected output:
//   2

const people = [
  { name: "A", age: 15 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];
let count = 0;
// --- your code below ---
for (let person of people) {
  if (person.age >= 18) {
    count++;
  }
}
console.log(count);
