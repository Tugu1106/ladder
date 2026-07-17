// Project 10 — Restaurant Order System
// Instructions: 10-restaurant-order-system.md
//
// The parameter is the lesson. Passing the order IN — rather than reading
// `orders` from the outer scope — makes the function work for ANY order,
// including ones that don't exist yet. That's the difference between a
// function and a shortcut.
//
// Reduce over order.items, not over orders.
//
// Then watch how cheap whole-restaurant revenue becomes:
//   orders.map(calculateOrderTotal).reduce((sum, t) => sum + t, 0);
// Passing the function by NAME, exactly like Phase 4's Exercise 11.
//
// 20 + 5 = 25. No quantities here, so each item counts once.
//
// Expected output:
//   25

const orders = [
  {
    customer: "Alex",
    items: [
      { name: "Pizza", price: 20 },
      { name: "Drink", price: 5 }
    ]
  }
];

function calculateOrderTotal(order) {
  // takes an ORDER OBJECT, returns its total
}

// console.log(calculateOrderTotal(orders[0]));   // 25
