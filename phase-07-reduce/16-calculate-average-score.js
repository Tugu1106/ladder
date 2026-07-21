// ✅ DONE — ran it, output correct.
// Exercise 16 — Calculate Average Score
// Instructions: 16-calculate-average-score.md
//
// Goal: 80. reduce() for the sum, then divide by .length OUTSIDE the reduce.
//
//       An average is a sum divided by a count — and reduce() only does the
//       sum half. NOT EVERYTHING BELONGS INSIDE THE REDUCE. Forcing the
//       divide in means tracking a count alongside and dividing at the end
//       anyway: more code, same answer.
//
//       Divide by students.length, not a hardcoded 3.
//       (240 / 3 = 80 exactly — chosen to be clean.)
//
// Expected output:
//   80

const students = [
  { name: "Alex", score: 80 },
  { name: "John", score: 90 },
  { name: "Sarah", score: 70 },
];

// --- your code below ---
const sum = students.reduce((sum, student) => {
  sum += student.score;
  return sum;
}, 0);

console.log(sum / students.length);
