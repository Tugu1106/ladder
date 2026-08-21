// ✅ DONE — output correct, property added to every product.
//    Tiny note: you wrote "Computer" (capital C); the spec's expected output
//    was "computer" (lowercase). Both work — it's a value you typed — but
//    the expected output block shows lowercase. Worth matching exactly.
// Exercise 10 — Add Property To Objects
// Instructions: 10-add-property-to-objects.md
//
// Goal: add `category: "computer"` to every product, then print.
//       Exercise 9 changed a property that existed; this creates one that
//       doesn't — and the reference rule means it sticks just the same.
//
// Expected output:
//   [ { name: 'Keyboard', category: 'computer' },
//     { name: 'Mouse', category: 'computer' } ]

const products = [{ name: "Keyboard" }, { name: "Mouse" }];

// --- your code below ---
products.forEach((element) => {
  element.category = "Computer";
});

console.log(products);
