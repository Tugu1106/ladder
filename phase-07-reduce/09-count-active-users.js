// Exercise 9 — Count Active Users
// Instructions: 09-count-active-users.md
//
// Goal: 2. Counting only what matches — the accumulator grows on some passes
//       and stays put on others.
//
// THE TRAP: you must ALWAYS return the accumulator, even when you're not
// changing it. reduce() replaces the accumulator with whatever comes back, so
// a branch that returns nothing hands you undefined and everything after
// breaks.
//
//   user.active ? total + 1 : total
//                             ^^^^^ "otherwise leave it alone" — mandatory
//
// With if/else, every path must return.
//
// Expected output:
//   2

const users = [
  { name: "Alex", active: true },
  { name: "John", active: false },
  { name: "Sarah", active: true }
];

// --- your code below ---
