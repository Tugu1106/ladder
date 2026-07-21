// ✅ DONE — ran it, output correct.
// Exercise 7 — Total Product Price
// Instructions: 07-total-product-price.md
//
// Goal: 70. One word different from Exercise 6.
//
//       By now you should see this as ONE shape you fill in, not three
//       decisions:  array.reduce((sum, item) => sum + item.field, 0)
//       It's the most-written reduce() in existence.
//
// Expected output:
//   70

const products = [
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 20 },
];

// --- your code below ---
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);
console.log(totalPrice);
