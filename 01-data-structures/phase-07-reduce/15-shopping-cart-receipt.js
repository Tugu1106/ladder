// ✅ DONE — ran it, output correct.
// Exercise 15 — Shopping Cart Receipt
// Instructions: 15-shopping-cart-receipt.md
//
// Goal: { items: 3, total: 120 }  — ONE pass, not two.
//
//       Read carefully: `items` is 3 because the QUANTITIES are 2 and 1 —
//       not 2 for two line entries. Two products, three things in the bag.
//
//       total is price * quantity summed: 100 + 20 = 120
//
// A genuinely good reason to use reduce(): two answers that belong together,
// computed together. The SHAPE of your initial value IS the shape of your
// answer — write { items: 0, total: 0 } and you've described what you're building.
//
// Expected output:
//   { items: 3, total: 120 }

const cart = [
  { name: "Keyboard", price: 50, quantity: 2 },
  { name: "Mouse", price: 20, quantity: 1 },
];

// --- your code below ---
const shoppingCart = cart.reduce(
  (cart, item) => {
    cart.items += item.quantity;
    cart.total += item.quantity * item.price;
    return cart;
  },
  { items: 0, total: 0 },
);

console.log(shoppingCart);
