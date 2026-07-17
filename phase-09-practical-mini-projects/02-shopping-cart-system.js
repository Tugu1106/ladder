// Project 2 — Shopping Cart System
// Instructions: 02-shopping-cart-system.md
//
// Watch the distinction: `items: 5` is the number of THINGS — the quantities
// summed (2 + 3). Not 2, the number of lines in the cart. A cart with two
// products can hold five objects, and shoppers count objects.
//
// getCartSummary should reuse getCartTotal, so the total logic lives in ONE
// place. Add tax later and both stay correct.
//
// Expected output:
//   2150
//   { items: 5, total: 2150 }

const cart = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 }
];

function getCartTotal() {
  // returns a number
}

function getCartSummary() {
  // returns { items, total }
}

// console.log(getCartTotal());     // 2150
// console.log(getCartSummary());   // { items: 5, total: 2150 }
