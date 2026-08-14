// ✅ DONE — correct.
// Exercise 5 — Destructuring in Parameters
// Phase 2: Modern JS for React
//
// Goal: write a function greet(user) that destructures `name` right in its
//       PARAMETER list, and returns "Hello, <name>!".
//
//   function greet({ name }) {
//     return `Hello, ${name}!`;
//   }
//
// >>> This is EXACTLY how React components read their props:
//        function Welcome({ title }) { ... }
//     Learn it here and React props will feel like nothing.
//
// Call greet on both users and print the results.
//
// Expected output:
//   Hello, Tugu!
//   Hello, Alex!

const user1 = { name: "Tugu", age: 22 };
const user2 = { name: "Alex", age: 30 };

// --- your code below ---

function greet({ name }) {
  return `Hello, ${name}!`;
}

console.log(greet(user1));
console.log(greet(user2));
