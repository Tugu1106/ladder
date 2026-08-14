// ✅ DONE — ran it, output correct.
// Exercise 10 — Convert Products
// Instructions: 10-convert-products.md
//
// Goal: create ["Keyboard costs $50", "Mouse costs $20"]
//
//       `$${p.price}` looks like a typo and isn't: the first $ is literal
//       text, the second starts the ${}.
//
// Expected output:
//   [ 'Keyboard costs $50', 'Mouse costs $20' ]

const products = [
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 20 },
];

// --- your code below ---
const converted = products.map(
  (product) => `${product.name} costs $${product.price}`,
);

console.log(converted);
