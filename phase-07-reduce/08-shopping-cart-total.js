// ✅ DONE — ran it, output correct.
// Exercise 8 — Shopping Cart Total
// Instructions: 08-shopping-cart-total.md
//
// Goal: 2150, using price * quantity.
//
//       The first reduce() that does more than read a field — each pass
//       computes, then adds. * binds tighter than +, so it multiplies before
//       adding, which is right. Add parentheses if it reads better to you.
//
//       Check: 1000x2 = 2000, 50x3 = 150, total 2150
//
// Expected output:
//   2150

const cart = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 },
];

// --- your code below ---
const total = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0,
);
console.log(total);
