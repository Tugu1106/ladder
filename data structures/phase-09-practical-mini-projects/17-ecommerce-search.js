// Project 17 — Ecommerce Search ⭐
// Instructions: 17-ecommerce-search.md
//
// searchProducts("lap") must find "Laptop" — which rules out === completely.
// Nobody types the whole product name; they type three letters and expect
// results. That's includes().
//
// And case, as always: "LAP" would fail without lowercasing both sides.
//
// Decide the return shape — matching products, or their names? The spec is
// ambiguous. Pick one, note it, be consistent.
//
// filter() returns [] naturally when nothing matches — no special case needed.
// That's a nice property: [] still works with .map() and .length, whereas
// undefined crashes them.
//
// Expected output:
//   [ { name: 'Laptop', category: 'tech' } ]
//   [ { name: 'Laptop', category: 'tech' } ]
//   []

const products = [
  { name: "Laptop", category: "tech" },
  { name: "Chair", category: "home" }
];

function searchProducts(keyword) {
  // partial, case-insensitive match
}

// console.log(searchProducts("lap"));   // finds Laptop
// console.log(searchProducts("LAP"));   // should also find Laptop
// console.log(searchProducts("xyz"));   // []
