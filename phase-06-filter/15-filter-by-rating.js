// Exercise 15 — Filter By Rating
// Instructions: 15-filter-by-rating.md
//
// Goal: keep movies with rating >= 8.
//
//       This one has a boundary case IN the data: movie A is exactly 8.
//       With >= you keep it; with > you'd get only C, and the difference
//       shows in your output. That's the value of a boundary in test data —
//       the mistake can't hide.
//
// Expected output:
//   [ { title: 'A', rating: 8 }, { title: 'C', rating: 9 } ]

const movies = [
  { title: "A", rating: 8 },
  { title: "B", rating: 5 },
  { title: "C", rating: 9 }
];

// --- your code below ---
