// Project 5 — Inventory System
// Instructions: 05-inventory-system.md
//
// ⚠️  The original spec says getInventoryValue() -> 5250. With this data it's
//     5000: the Mouse has stock 0, so it contributes 50 x 0 = 0. For 5250 the
//     Mouse would need stock 5 — but then getAvailableProducts() couldn't
//     return ["Laptop"] alone. The two requirements contradict each other.
//     Use 5000. (See the .md for the full explanation.)
//
// The zero-stock Mouse is excluded from availability but still COUNTED in the
// value, contributing 0. The arithmetic handles it — no filter needed.
//
// Expected output:
//   [ 'Laptop' ]
//   5000

const products = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Mouse", price: 50, stock: 0 },
];

function getAvailableProducts() {
  return products.filter((item) => item.stock > 0).map((item) => item.name);
}

function getInventoryValue() {
  return products.reduce(
    (total, item) => (total += item.price * item.stock),
    0,
  );
}

console.log(getAvailableProducts()); // ["Laptop"]
console.log(getInventoryValue()); // 5000
