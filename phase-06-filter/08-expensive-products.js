// ✅ DONE — ran it, output correct.
// Exercise 8 — Expensive Products
// Instructions: 08-expensive-products.md
//
// Goal: keep products above $50. Strict: > 50.
//       The $ is just how prices are written — compare against the number 50.
//
// Expected output:
//   [ { name: 'Keyboard', price: 100 }, { name: 'Monitor', price: 300 } ]

const products = [
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 },
];

// --- your code below ---
const expensive = products.filter((product) => product.price > 50);
console.log(expensive);
