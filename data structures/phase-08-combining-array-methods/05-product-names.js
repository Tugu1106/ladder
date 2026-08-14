// ✅ DONE — ran it, output correct.
// Exercise 5 — Product Names
// Instructions: 05-product-names.md
//
// Goal: keep products in stock -> get names -> ["Laptop","Keyboard"]
//       Write p.stock > 0, not bare p.stock.
//
// Expected output:
//   [ 'Laptop', 'Keyboard' ]

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 3 },
];

// --- your code below ---
const productWithNames = products
  .filter((product) => product.stock > 0)
  .map((product) => product.name);

console.log(productWithNames);
