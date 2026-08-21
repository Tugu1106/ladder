// ✅ DONE — ran it, output correct.
// Exercise 20 — Mini Boss ⭐
// Instructions: 20-map-boss.md
//
// One dataset, three map() calls, three different output shapes:
//
//   Task 1 — product names (plucking):
//              [ 'Laptop', 'Phone', 'Mouse' ]
//
//   Task 2 — total values, price * quantity (arithmetic):
//              [ 2000, 1500, 500 ]
//
//   Task 3 — reshaping. Exactly name and total — no price, no quantity:
//              [ { name: 'Laptop', total: 2000 },
//                { name: 'Phone', total: 1500 },
//                { name: 'Mouse', total: 500 } ]
//
// The takeaway: map() isn't a "doubling tool" or a "plucking tool". It's
// "give me one thing per item, you decide what."
//
// Print `products` at the end — through all three, it never changed.

const products = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Mouse", price: 50, quantity: 10 },
];

// --- Task 1 ---
const task1 = products.map((product) => product.name);
console.log(task1);

// --- Task 2 ---
const task2 = products.map((product) => product.price * product.quantity);
console.log(task2);
// --- Task 3 ---
const task3 = products.map((product) => ({
  name: product.name,
  total: product.price * product.quantity,
}));
console.log(task3);
