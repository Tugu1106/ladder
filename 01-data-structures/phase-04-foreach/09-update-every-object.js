// ✅ DONE — ran it, output correct.
// Exercise 9 — Update Every Object
// Instructions: 09-update-every-object.md
//
// Goal: set everyone's `active` to true, then print users to prove it stuck.
//
// The surprise: Exercise 2 said forEach() can't change the array — yet this
// works. Why? Objects are held by REFERENCE. A number gets copied in, so
// changing the copy does nothing. An object gets passed as a pointer to the
// SAME object, so reaching in changes the real thing.
//
// Try `user = { name: user.name, active: true }` instead and print — nothing
// changes. That reassigns your local parameter and breaks the pointer.
//
// Expected output:
//   [ { name: 'John', active: true }, { name: 'Jane', active: true } ]

const users = [
  { name: "John", active: false },
  { name: "Jane", active: false },
];

// --- your code below ---
users.forEach((element) => {
  element.active = true;
});

console.log(users);
