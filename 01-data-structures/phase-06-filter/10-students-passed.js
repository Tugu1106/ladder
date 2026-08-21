// ✅ DONE — ran it, output correct.
// Exercise 10 — Students Passed
// Instructions: 10-students-passed.md
//
// Goal: keep students with score >= 60.
//
//       Compare with Phase 4's Exercise 13: there you ADDED a `passed` field
//       and everyone stayed, tagged. Here the failures are REMOVED entirely.
//       Same question, very different answers — map/forEach annotate,
//       filter selects.
//
//       John isn't marked as failed. He simply isn't there.
//
// Expected output:
//   [ { name: 'Alex', score: 90 }, { name: 'Sarah', score: 75 } ]

const students = [
  { name: "Alex", score: 90 },
  { name: "John", score: 40 },
  { name: "Sarah", score: 75 },
];

// --- your code below ---
const passed = students.filter((student) => student.score >= 60);
console.log(passed);
