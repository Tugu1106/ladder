// ✅ DONE — ran it, output correct.
// Exercise 11 — Group Products By Category
// Instructions: 11-group-products-by-category.md
//
// Goal: { computer: ["Laptop","Mouse"], mobile: ["Phone"] }
//       Categories come from the data. Values are NAMES, not whole products.
//
//       The guard is the whole exercise: create the array before pushing.
//       First time you meet "computer" there's no array there, and
//       undefined.push() crashes.
//
// Expected output:
//   { computer: [ 'Laptop', 'Mouse' ], mobile: [ 'Phone' ] }

const products = [
  { name: "Laptop", category: "computer" },
  { name: "Phone", category: "mobile" },
  { name: "Mouse", category: "computer" },
];

// --- your code below ---
const groupedByCategory = products.reduce((grouped, item) => {
  if (!grouped[item.category]) {
    grouped[item.category] = [];
  }

  grouped[item.category].push(item.name);
  return grouped;
}, {});

console.log(groupedByCategory);
