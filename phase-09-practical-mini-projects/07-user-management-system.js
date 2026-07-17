// Project 7 — User Management System
// Instructions: 07-user-management-system.md
//
// Three independent questions, three small functions. No composition — just
// the everyday shape of a data module.
//
// Notice how small each one is. A function that's one filter() still earns
// its name: getAdmins() says what it means at every call site, and if "admin"
// ever becomes "admin or owner" you change ONE line.
//
// countUsers counts EVERYONE — no filter.
// Be consistent: if getAdmins returns objects, getActiveUsers should too.
// (Alex happens to be both admin and active — coincidence, not a rule.)
//
// Expected output:
//   [ { name: 'Alex', role: 'admin', active: true } ]
//   [ { name: 'Alex', role: 'admin', active: true } ]
//   2

const users = [
  { name: "Alex", role: "admin", active: true },
  { name: "John", role: "user", active: false }
];

function getAdmins() {
  // role === "admin"
}

function getActiveUsers() {
  // active: true
}

function countUsers() {
  // how many in total
}

// console.log(getAdmins());
// console.log(getActiveUsers());
// console.log(countUsers());   // 2
