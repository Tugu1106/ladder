// ✅ DONE — ran it, output correct.
// Exercise 12 — Count By Category
// Instructions: 12-count-by-category.md
//
// Goal: { food: 2, drink: 1 }
//
//       Compare with Exercise 11 above: grouping pushes items into arrays,
//       tallying adds to numbers. Same dynamic-key machinery, different
//       accumulator type — so the default changes with it:  || []  becomes  || 0
//
//       Parentheses around the || are required.
//
// Expected output:
//   { food: 2, drink: 1 }

const items = [
  { category: "food" },
  { category: "food" },
  { category: "drink" },
];

// --- your code below ---
const countByCategory = items.reduce((counted, item) => {
  if (!counted[item.category]) {
    counted[item.category] = 0;
  }
  counted[item.category] += 1;
  return counted;
}, {});

console.log(countByCategory);
