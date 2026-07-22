// ✅ DONE — ran it, output correct.
// Exercise 4 — Active User Count
// Instructions: 04-active-user-count.md
//
// Goal: 2. Use filter() then .length — no reduce() here.
//
// You COULD reduce this (Phase 7's Ex 9 did, in four lines). Both correct.
// Part of learning these methods is learning to STOP: the fanciest tool that
// produces the answer isn't the right one, the clearest is.
//
//   users.filter(user => user.active).length
//
// filter() returns an array; arrays have .length. Done.
//
// Expected output:
//   2

const users = [
  { name: "Alex", active: true },
  { name: "John", active: false },
  { name: "Sarah", active: true },
];

// --- your code below ---
const activeUsers = users.filter((user) => user.active).length;

console.log(activeUsers);
