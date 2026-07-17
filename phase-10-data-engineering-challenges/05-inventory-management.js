// Challenge 5 — Inventory Management ⭐⭐⭐⭐⭐
// Instructions: 05-inventory-management.md
//
// The first two tasks are routine. restockProduct(name, amount) is different
// from everything you've written — and that's the point.
//
// Every function so far has been a QUERY: given data, return an answer, change
// nothing. This one is a COMMAND: it changes the world. That distinction is
// one of the most useful ideas in programming.
//
// Which forces a real decision — mutate in place, or return a new array?
//   mutate      — simple, direct, what the spec implies. But callers holding
//                 a reference see it change under them, and React wouldn't
//                 re-render.
//   return new  — immutable, safe, works with React. But callers must use the
//                 return value, and forgetting is silent.
//
// No universal right answer. Pick one, know why, say which in a comment.
// That's what this challenge actually tests.
//
// The immutable idiom — change the match, pass the rest through:
//   products.map(p => p.name === name ? { ...p, stock: amount } : p)
//
// Also note the ambiguity: does restocking SET stock to 20, or ADD 20 to it?
// Starting from 0, both give 20 — the spec can't tell you. Real specs are
// like this. Pick and document.
//
//   getOutOfStockProducts() -> Mouse   (stock === 0)
//   getBestSeller()         -> Mouse   (ranks by sales)
//   restockProduct("Mouse", 20)
//
// (Mouse is both out of stock AND the best seller. That's realistic, not a
//  coincidence — things sell out BECAUSE they sell well.)

const products = [
  { name: "Laptop", stock: 5, sales: 100 },
  { name: "Mouse", stock: 0, sales: 200 }
];

function getOutOfStockProducts() {
  //
}

function getBestSeller() {
  //
}

function restockProduct(name, amount) {
  // mutate or return-new? say which, and why
}

// console.log(getOutOfStockProducts());
// console.log(getBestSeller());
// console.log(restockProduct("Mouse", 20));
