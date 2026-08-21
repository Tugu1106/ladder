// ✅ DONE — the full pipeline, correct.
//    Tiny style note: your reducer is (sum, price) => (sum += price). That
//    works — sum += price reassigns AND evaluates to the new value — but the
//    plain (sum, price) => sum + price is cleaner and says the same thing
//    without mutating the parameter. Same result either way.
// Exercise 19 — Filter + Map + Reduce
// Instructions: 19-filter-map-reduce.md
//
// Goal: 1100. Chain all three in ONE statement, in that order.
//         keep available products -> get prices -> add them
//
// The line you've been building toward since Phase 4. Read it as a sentence:
// keep what matters, reshape it, combine it. Three verbs, left to right, each
// handing its result to the next.
//
//   data
//     .filter(...)
//     .map(...)
//     .reduce(...);
//
// ORDER IS NOT OPTIONAL. `available` only exists on the objects — filter after
// mapping to prices would be impossible. Each step destroys information the
// next might have needed.
//
// Trace: filter leaves Laptop and Keyboard -> map gives [1000, 100] -> 1100.
// The Mouse never reaches the map at all.
//
// Expected output:
//   1100

const products = [
  { name: "Laptop", price: 1000, available: true },
  { name: "Mouse", price: 50, available: false },
  { name: "Keyboard", price: 100, available: true },
];

// --- your code below ---
const result = products
  .filter((item) => item.available)
  .map((item) => item.price)
  .reduce((sum, price) => (sum += price), 0);
console.log(result);
