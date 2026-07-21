// ✅ DONE — all three tasks correct.
//    Tiny typo: the Task 3 map parameter is `prodct` (missing 'u'). Harmless
//    because it's spelled the same both times inside the callback — but a
//    typo'd name is one keystroke from a bug. Worth fixing to `product`.
// Exercise 20 — Mini Boss ⭐
// Instructions: 20-filter-boss.md
//
// Three steps, each narrowing further:
//
//   Task 1 — only computer products (one condition):
//              Laptop, Mouse, Keyboard
//
//   Task 2 — only EXPENSIVE computers, category === "computer" AND price >= 100:
//              Laptop, Keyboard
//            Keyboard is exactly 100 and >= keeps it. With > you'd lose it.
//
//   Task 3 — their names only (filter then map):
//              [ 'Laptop', 'Keyboard' ]
//
// That's how real queries get built: start broad, add conditions, shape the
// output last.
//
// Print `products` at the end — all four are still there. filter() never
// mutates, which is what makes chaining safe.

const products = [
  { name: "Laptop", price: 1000, category: "computer" },
  { name: "Phone", price: 500, category: "mobile" },
  { name: "Mouse", price: 50, category: "computer" },
  { name: "Keyboard", price: 100, category: "computer" },
];

// --- Task 1 ---
const task1 = products.filter((product) => product.category === "computer");
console.log(task1);
// --- Task 2 ---
const task2 = products.filter(
  (product) => product.category === "computer" && product.price >= 100,
);
console.log(task2);
// --- Task 3 ---
const task3 = products
  .filter((product) => product.category === "computer" && product.price >= 100)
  .map((prodct) => prodct.name);
console.log(task3);
