// Exercise 14 — Stock System
// Instructions: 14-stock-system.md
//
// Goal: keep available products (stock > 0).
//
//       You COULD write filter(p => p.stock) — 0 is falsy, so it works.
//       It gives the right answer for the wrong reason, and breaks the moment
//       stock can go negative (returns, corrections): -1 is truthy.
//
//       Say what you mean: p.stock > 0
//
// Expected output:
//   [ { name: 'Laptop', stock: 5 } ]

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 }
];

// --- your code below ---
