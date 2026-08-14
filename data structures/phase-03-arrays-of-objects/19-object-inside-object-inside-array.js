// ✅ DONE — ran it, output correct.
// Exercise 19 — Object Inside Object Inside Array
// Instructions: 19-object-inside-object-inside-array.md
//
// Goal: print 100000, in one expression.
//
//       Three levels. Read it left to right: the array, then [0] the first
//       company, then .employees the object, then .count the number.
//
//       Note `employees` SOUNDS like a list but is an object holding a count.
//       Read the data, not the name — real APIs mislead exactly like this.
//
// Expected output:
//   100000

const companies = [{ name: "Google", employees: { count: 100000 } }];

// --- your code below ---
console.log(companies[0].employees.count);
