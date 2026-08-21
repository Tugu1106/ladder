// ✅ DONE — ran it, output correct.
// Exercise 12 — Increase Salaries
// Instructions: 12-increase-salaries.md
//
// Goal: new array where each salary is 500 higher. Spread to copy — don't
//       mutate. Print the original afterwards: 3000 and 4000 must be intact.
//
// Exercise 9 spread and ADDED a field. This spreads and OVERRIDES one.
// The mechanism is ORDER:
//
//   { ...employee, salary: newValue }   // salary: wins — listed after
//   { salary: newValue, ...employee }   // spread wins — your value is lost!
//
// This is the canonical React state update: copy, override the one field.
//
// Expected output:
//   [ { name: 'Alex', salary: 3500 }, { name: 'John', salary: 4500 } ]

const employees = [
  { name: "Alex", salary: 3000 },
  { name: "John", salary: 4000 },
];

// --- your code below ---
const increased = employees.map((employee) => ({
  ...employee,
  salary: employee.salary + 500,
}));

console.log(increased);
