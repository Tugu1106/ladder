// ✅ DONE — ran it, output correct.
// Exercise 15 — Employee Report
// Instructions: 15-employee-report.md
//
// Goal: total salary of the IT department -> 9000
//       No map() needed — reduce straight from the filtered objects.
//
//       Notice how ordinary this has become. Two months ago it would have
//       meant a loop, a counter, an if, and careful thought.
//
// Expected output:
//   9000

const employees = [
  { name: "Alex", department: "IT", salary: 4000 },
  { name: "John", department: "HR", salary: 3000 },
  { name: "Sarah", department: "IT", salary: 5000 },
];

// --- your code below ---
const report = employees
  .filter((employee) => employee.department === "IT")
  .reduce((total, employee) => (total += employee.salary), 0);
console.log(report);
