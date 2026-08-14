// Challenge 6 — Student Management System ⭐⭐⭐⭐
// Instructions: 06-student-management-system.md
//
// ⚠️  The original data has one student. The expanded set below makes the
//     statistics mean something.
//
// Averages of averages — and one subtlety that catches people.
//
// The CLASS AVERAGE has two readings:
//   - average of every student's average  (every STUDENT counts equally)
//   - average of every grade, pooled      (every GRADE counts equally)
//
// They disagree whenever students have different numbers of grades. Say Alex
// has 3 grades averaging 90 and Bob has 1 grade of 50: average-of-averages is
// 70, pooled is 80. Both are "the class average", 10 points apart.
//
// Neither is wrong — they answer different questions. Real reporting bugs come
// from picking one without noticing there was a choice.
//
// Here everyone has 3 grades so both agree (71.67). Pick one anyway, and say
// which.
//
//   1. student average    Alex 90, Bob 50, Sara 75
//   2. top student        -> Alex
//   3. failed students    average < 60 -> ["Bob"]
//   4. class average
//
// Write calculateAverage(student) ONCE and reuse it everywhere — that's the
// real lesson. Inlining the reduce four times means four places to fix.

const students = [
  { name: "Alex", grades: [90, 80, 100] },
  { name: "Bob", grades: [50, 60, 40] },
  { name: "Sara", grades: [70, 75, 80] }
];

// --- your code below ---
