// ✅ DONE — ran it, output correct.
// Exercise 10 — Total Shopping Cart
// Instructions: 10-total-shopping-cart.md
//
// Goal: 2150, price * quantity summed.
//
//       Third time you've seen this exact calculation. The repetition is
//       deliberate — it's the most commercially important line of code in
//       this whole course.
//
// Expected output:
//   2150

const cart = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 },
];

// --- your code below ---
const total = cart.reduce((sum, item) => {
  return (sum += item.price * item.quantity);
}, 0);

console.log(total);
