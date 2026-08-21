// ✅ DONE — ran it, output correct.
// Exercise 20 — Final Boss ⭐
// Instructions: 20-reduce-boss.md
//
// Goal: total revenue across all orders -> 1200
//
// The hardest so far. Each order holds an ARRAY of items, so the total isn't
// a sum over orders — it's a sum over items INSIDE orders. Two levels.
//
// The natural answer is a reduce() whose callback contains another reduce().
// That sounds worse than it is: the inner one answers "what is this ONE order
// worth?", the outer adds those up. Solve them separately in your head and
// the nesting stops being scary — it's Exercise 8 called from inside Exercise 1.
//
// Naming the inner result (const orderTotal = ...) is what keeps it readable.
// You CAN write it as one expression; you shouldn't.
//
// There's another route: flatMap() flattens the items out first, then one
// reduce finishes it. Try both.
//
// Check: Alex = 1000x1 + 50x2 = 1100.  John = 100x1 = 100.  Total 1200.
//
// Expected output:
//   1200

const orders = [
  {
    customer: "Alex",
    items: [
      { name: "Laptop", price: 1000, quantity: 1 },
      { name: "Mouse", price: 50, quantity: 2 },
    ],
  },
  {
    customer: "John",
    items: [{ name: "Keyboard", price: 100, quantity: 1 }],
  },
];

// --- your code below ---
const revenue = orders.reduce((revenue, order) => {
  revenue += order.items.reduce((total, item) => {
    total += item.price * item.quantity;
    return total;
  }, 0);
  return revenue;
}, 0);

console.log(revenue);
