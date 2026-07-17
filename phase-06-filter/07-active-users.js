// Exercise 7 — Active Users
// Instructions: 07-active-users.md
//
// Goal: keep only active users.
//
//       The property is ALREADY a boolean — exactly what filter() wants.
//       So no comparison at all: just pass it through. `user.active === true`
//       works but is redundant, like writing `if (x === true)`.
//
//       For the opposite, `!user.active`.
//
// Expected output:
//   [ { name: 'Alex', active: true }, { name: 'Sarah', active: true } ]

const users = [
  { name: "Alex", active: true },
  { name: "John", active: false },
  { name: "Sarah", active: true }
];

// --- your code below ---
