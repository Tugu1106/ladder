// ✅ DONE — output correct, but the naming is a real trap.
//    You named the parameter `users` (plural) — the SAME as the array:
//        users.filter((users) => !users.banned)
//    It works ONLY because inside the callback `users` now means the single
//    element, shadowing the outer array. Each element is ONE user, so name it
//    `user` (singular). Confusing names cause confusing bugs.
// Exercise 13 — Remove Banned Users
// Instructions: 13-remove-banned-users.md
//
// Goal: keep users who are NOT banned.
//
//       `banned: true` marks the ones you want gone, so the keep condition
//       is the negation. Read ! as "not": "keep users that are not banned."
//       This is the one place ! is clearly the right tool.
//
// Expected output:
//   [ { name: 'Alex', banned: false } ]

const users = [
  { name: "Alex", banned: false },
  { name: "John", banned: true },
];

// --- your code below ---
const bannedUsers = users.filter((users) => !users.banned);
console.log(bannedUsers);
