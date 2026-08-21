// ✅ DONE — ran it, output correct.
// Exercise 17 — Employee System
// Instructions: 17-employee-system.md
//
// Goal: get only IT employees. Exact string match with === — not includes().
//       A department is "IT" or it isn't.
//
// Expected output:
//   [ { name: 'Alex', department: 'IT' }, { name: 'Sarah', department: 'IT' } ]

const employees = [
  { name: "Alex", department: "IT" },
  { name: "John", department: "HR" },
  { name: "Sarah", department: "IT" },
];

// --- your code below ---

const result = employees.filter((employee) => employee.department === "IT");
console.log(result);
