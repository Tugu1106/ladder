// Exercise 18 — Online Store Analytics ⭐
// Instructions: 18-online-store-analytics.md
//
// Goal: { revenue: 1200, products: ["Laptop","Chair"] }
//       Only SOLD products count. Both answers come from the same filtered
//       set — filter once, use it twice.
//
//       `category` is a red herring: it's in the data and nothing asks about
//       it. Real datasets are full of fields you don't need, and using them
//       because they're there is a real temptation.
//
//       1000 + 200 = 1200. If you get 1700, your filter isn't working.
//
// Expected output:
//   { revenue: 1200, products: [ 'Laptop', 'Chair' ] }

const products = [
  { name: "Laptop", price: 1000, category: "tech", sold: true },
  { name: "Phone", price: 500, category: "tech", sold: false },
  { name: "Chair", price: 200, category: "home", sold: true }
];

// --- your code below ---
