// Project 1 — Student Grade System ⭐
// Instructions: 01-student-grade-system.md
//
// Phase 9 changes the game: you write FUNCTIONS now — named, reusable,
// callable with different inputs. An expression answers one question once.
// A function answers it for any input, forever, and other code can build on it.
//
// Note the nesting: each student holds an ARRAY of grades. So calculateAverage
// reduces over student.grades, not over students.
//
// getPassedStudents must CALL calculateAverage — don't duplicate the maths.
// If you find yourself writing .reduce() again inside it, stop.
//
// Check: Alex (80+90+70)/3 = 80 ✓. John (60+50+70)/3 = 60 ✗. Sarah (95+90+100)/3 = 95 ✓.
//
// Expected output:
//   80
//   [ 'Alex', 'Sarah' ]

const students = [
  { name: "Alex", grades: [80, 90, 70] },
  { name: "John", grades: [60, 50, 70] },
  { name: "Sarah", grades: [95, 90, 100] },
];

function calculateAverage(student) {
  const avg =
    student.grades.reduce((sum, grade) => (sum += grade), 0) /
    student.grades.length;
  return avg;
}

function getPassedStudents() {
  return students
    .filter((student) => calculateAverage(student) >= 70)
    .map((student) => student.name);
}

console.log(calculateAverage(students[0])); // 80
console.log(getPassedStudents()); // ["Alex","Sarah"]
