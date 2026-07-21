// ✅ DONE — ran it, output correct.
// Exercise 16 — Shopping Cart
// Instructions: 16-shopping-cart.md
//
// Goal: remove items with quantity 0. Survivors keep all three properties.
//
//       You filter on ONE field and the whole record survives or doesn't.
//       price and name ride along untouched, waiting for whatever comes next.
//
// Expected output:
//   [ { name: 'Keyboard', price: 50, quantity: 2 },
//     { name: 'Monitor', price: 300, quantity: 1 } ]

const cart = [
  { name: "Keyboard", price: 50, quantity: 2 },
  { name: "Mouse", price: 20, quantity: 0 },
  { name: "Monitor", price: 300, quantity: 1 },
];

// --- your code below ---
const result = cart.filter((product) => product.quantity !== 0);
console.log(result);
