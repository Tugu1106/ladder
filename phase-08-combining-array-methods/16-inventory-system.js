// ✅ DONE — ran it, output correct.
// Exercise 16 — Inventory System
// Instructions: 16-inventory-system.md
//
// Goal: inventory value, price * stock -> 4000
//
//       NO filter here. Read the requirement: nothing says to exclude
//       anything, so everything is in. Adding a filter nobody asked for is
//       its own kind of bug.
//
//       Check: 1000x3 = 3000, 50x20 = 1000, total 4000
//
// Expected output:
//   4000

const products = [
  { name: "Laptop", price: 1000, stock: 3 },
  { name: "Mouse", price: 50, stock: 20 },
];

// --- your code below ---
const inventoryValue = products.reduce(
  (total, product) => (total += product.price * product.stock),
  0,
);
console.log(inventoryValue);
