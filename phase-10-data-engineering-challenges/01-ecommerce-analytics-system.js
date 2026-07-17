// Challenge 1 — E-commerce Analytics System ⭐⭐⭐⭐
// Instructions: 01-ecommerce-analytics-system.md
//
// ⚠️  The spec says total revenue -> 260. It's 340, and the spec contradicts
//     itself: Alex is 100x2 + 50x1 = 250, John is 30x3 = 90, total 340 — which
//     matches its OWN category breakdown { electronics: 250, education: 90 }.
//     260 appears nowhere in any reading of this data. Use 340.
//
// Phase 10: nobody holds your hand. Nested two levels, real questions, no
// step-by-step. No for loops — map/filter/reduce/flatMap/find/sort all allowed.
//
//   Task 1 — total revenue -> 340
//   Task 2 — highest spending customer -> Alex
//   Task 3 — best selling product BY REVENUE -> Keyboard
//            (Ambiguous on purpose: by UNITS Book wins, 3 vs 2. By MONEY
//             Keyboard wins, 200 vs 90. The spec says Keyboard, so it means
//             revenue. Notice that you had to decide.)
//   Task 4 — revenue by category -> { electronics: 250, education: 90 }
//            (category is on the ITEM, not the order — so you group across a
//             level of nesting.)
//
// Write a helper first and everything gets easier:
//   const orderTotal = order => order.items.reduce(...)
//
// flatMap() is the key move for Tasks 3 and 4. Once items are flat, they're
// ordinary Phase 7 problems — the nesting was the only thing making them hard.
//
// Check: electronics 200 + 50 = 250, education 90. Sum 340 — matching Task 1
// is your proof both are right.

const orders = [
  {
    id: 1,
    customer: "Alex",
    items: [
      { name: "Keyboard", category: "electronics", price: 100, quantity: 2 },
      { name: "Mouse", category: "electronics", price: 50, quantity: 1 }
    ]
  },
  {
    id: 2,
    customer: "John",
    items: [{ name: "Book", category: "education", price: 30, quantity: 3 }]
  }
];

// --- Task 1: total revenue ---


// --- Task 2: highest spending customer ---


// --- Task 3: best selling product (by revenue) ---


// --- Task 4: revenue by category ---
