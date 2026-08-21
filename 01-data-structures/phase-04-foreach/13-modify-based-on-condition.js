// ✅ DONE — ran it, output correct.
// Exercise 13 — Modify Based On Condition
// Instructions: 13-modify-based-on-condition.md
//
// Goal: add `passed: true/false` to every student — score >= 70 passes.
//       EVERY student gets the property, including Bob, whose is false.
//
// You can write if/else. But notice what it says: "if the comparison is true,
// store true, otherwise store false." The comparison IS already a boolean:
//
//   student.passed = student.score >= 70;
//
// Expected output:
//   [ { name: 'John', score: 80, passed: true },
//     { name: 'Jane', score: 95, passed: true },
//     { name: 'Bob', score: 60, passed: false } ]

const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 95 },
  { name: "Bob", score: 60 },
];

// --- your code below ---
students.forEach((student) => {
  if (student.score >= 70) {
    student.passed = true;
  } else {
    student.passed = false;
  }
});

console.log(students);
