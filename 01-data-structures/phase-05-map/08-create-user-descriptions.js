// ✅ DONE — ran it, output correct.
// Exercise 08 — Create User Descriptions
// Instructions: 08-create-user-descriptions.md
//
// Goal: create ["John is 20 years old"] — RETURN the string, don't print it
//       inside the callback.
//
// Compare with Phase 4's Exercise 7, which printed the same sentence. That
// version sent it to the terminal and it was gone. This one returns it, so
// you end up with an array you can use — sort it, join it, render it.
//
// Printing is a dead end. Returning is a value.
//
// Expected output:
//   [ 'John is 20 years old' ]

const users = [{ name: "John", age: 20 }];

// --- your code below ---
const usersWithDescription = users.map(
  (user) => `${user.name} is ${user.age} years old`,
);
console.log(usersWithDescription);
