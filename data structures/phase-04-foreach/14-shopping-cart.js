// ✅ DONE — ran it, output correct.
// Exercise 14 — Shopping Cart
// Instructions: 14-shopping-cart.md
//
// Goal: calculate the total price with forEach() and print it.
//       Nothing new — Exercise 8 with `price` instead of `age`.
//
//       But recognise the shape: this is a cart subtotal, the most-written
//       calculation in e-commerce.
//
// Expected output:
//   270

const cart = [
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 200 },
];
let total = 0;
// --- your code below ---
cart.forEach((element) => {
  total += element.price;
});

console.log(total);
