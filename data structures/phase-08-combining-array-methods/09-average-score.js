// ✅ DONE — ran it, output correct.
// Exercise 9 — Average Score
// Instructions: 09-average-score.md
//
// Goal: 80. reduce() for the sum, divide by .length afterwards.
//       Not every step belongs in the chain.
//
// Expected output:
//   80

const students = [
  { name: "Alex", score: 80 },
  { name: "John", score: 90 },
  { name: "Sarah", score: 70 },
];

// --- your code below ---
const total = students.reduce((total, student) => (total += student.score), 0);
const avg = total / students.length;
console.log(avg);
