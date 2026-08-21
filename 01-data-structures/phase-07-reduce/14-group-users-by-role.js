// ✅ DONE — ran it, output correct.
// Exercise 14 — Group Users By Role
// Instructions: 14-group-users-by-role.md
//
// Goal: { admin: ["Alex","Sarah"], user: ["John"] }
//       Roles come from the data. Arrays hold NAMES, not whole objects.
//
// GROUP BY — the pattern you'll reach for most often. Posts by author, sales
// by month, errors by type. It's SQL's GROUP BY, written by hand.
//
// Combines both earlier lessons: the key is dynamic (Ex 12), and the value is
// an array you push into (Ex 11). So before pushing, that array has to EXIST —
// first time you meet "admin" there's nothing there, and undefined.push() crashes:
//
//   if (!group[user.role]) { group[user.role] = []; }
//   group[user.role].push(user.name);
//
// Modern JavaScript has Object.groupBy() for this. Knowing the manual version
// is still worth it — you'll read this code for years.
//
// Expected output:
//   { admin: [ 'Alex', 'Sarah' ], user: [ 'John' ] }

const users = [
  { name: "Alex", role: "admin" },
  { name: "John", role: "user" },
  { name: "Sarah", role: "admin" },
];

// --- your code below ---
const groupedByRole = users.reduce((grouped, user) => {
  if (!grouped[user.role]) {
    grouped[user.role] = [];
  }
  grouped[user.role].push(user.name);
  return grouped;
}, {});

console.log(groupedByRole);
