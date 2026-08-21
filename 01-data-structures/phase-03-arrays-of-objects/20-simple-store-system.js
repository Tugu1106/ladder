// ✅ DONE — all three tasks correct, output 1500.
//    One naming note: you called the Task 3 total 'maxValue'. It's not a
//    maximum — it's a running SUM (total inventory value). A reader seeing
//    'maxValue' would expect the single biggest item, not the total. Name it
//    'totalValue' or 'inventoryValue'. Naming is real: it tells the next
//    person (you, later) what the variable means.
// Exercise 20 — Simple Store System ⭐
// Instructions: 20-simple-store-system.md
//
// Goal: three tasks, loops only — no map/filter/reduce.
//       A loop each is fine and clearer than one clever loop.
//
//   Task 1 — print every product:
//              Keyboard - $50
//              Mouse - $20
//              Monitor - $200
//            (`$${p.price}` — two $ in a row is correct: one literal, one for ${})
//
//   Task 2 — print products that are available (stock > 0):
//              Keyboard
//              Monitor
//
//   Task 3 — total inventory value, each product contributing price * stock:
//              50*10 + 20*0 + 200*5 = 1500
//            Mouse contributes 0 and needs no special case.
//
// Expected output (Task 3):
//   1500

const products = [
  { name: "Keyboard", price: 50, stock: 10 },
  { name: "Mouse", price: 20, stock: 0 },
  { name: "Monitor", price: 200, stock: 5 },
];

// --- Task 1 ---
for (let product of products) {
  console.log(`${product.name} - $${product.price}`);
}
console.log(
  "----------------------------------------------------------------------\n",
);
// --- Task 2 ---
for (let product of products) {
  if (product.stock > 0) {
    console.log(product.name);
  }
}
console.log(
  "----------------------------------------------------------------------\n",
);
// --- Task 3 ---
let totalValue = 0;
for (let product of products) {
  totalValue += product.price * product.stock;
}
console.log(totalValue);
