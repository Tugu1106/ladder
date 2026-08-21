// ✅ DONE — correct.
// Exercise 4 — Rename & Default
// Phase 2: Modern JS for React
//
// Goal: two moves, both real-world:
//   (a) pull `name` but call it `userName`:
//         const { name: userName } = user;
//   (b) pull `role`, but default to "guest" when it's missing:
//         const { role = "guest" } = user;
//
// Print userName, then role.
//
// Expected output:
//   Tugu
//   guest

const user = { name: "Tugu" }; // note: there is NO `role` key

// --- your code below ---

const { name: userName } = user;
const { role = "guest" } = user;

console.log(userName);
console.log(role);
