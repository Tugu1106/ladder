// ✅ DONE — output correct.
//    Same robustness note as Phase 6: lowercase the keyword too —
//    ...includes(keyword.toLowerCase()) — so "PHONE" would still match.
// Exercise 8 — Search System
// Instructions: 08-search-system.md
//
// Goal: [{ name: 'Phone' }] — whole objects, not ["Phone"].
//
//       That output shape tells you this is filter() ALONE, no map() after.
//       Get into the habit of reading the expected shape first — it dictates
//       the pipeline.
//
//       Lowercase both sides: "Phone".includes("phone") is false.
//
// Expected output:
//   [ { name: 'Phone' } ]

const products = [
  { name: "Laptop" },
  { name: "Phone" },
  { name: "Keyboard" },
  { name: "Mouse" },
];
const keyword = "phone";

// --- your code below ---
const search = products.filter((product) =>
  product.name.toLowerCase().includes(keyword),
);

console.log(search);
