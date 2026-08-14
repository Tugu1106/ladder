// ✅ DONE — correct. (You printed both on one line with console.log(name, age);
//    that's fine — the values are right. Two console.logs would give two lines.)
// Exercise 3 — Object Destructuring
// Phase 2: Modern JS for React
//
// Goal: pull `name` and `age` out of the object by KEY, then print them.
//
//   const { name, age } = user;
//
// Objects destructure by KEY (not position). The names inside { } must match
// the object's keys. `city` is simply left behind.
//
// Expected output:
//   Tugu
//   22

const user = { name: "Tugu", age: 22, city: "UB" };

// --- your code below ---
const { name, age } = user;

console.log(name, age);
