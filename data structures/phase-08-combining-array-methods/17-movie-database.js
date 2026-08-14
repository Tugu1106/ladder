// ✅ DONE — ran it, output correct.
// Exercise 17 — Movie Database
// Instructions: 17-movie-database.md
//
// Goal: movies rated >= 8 -> ["A","C"]
//
//       The output is STRINGS, which tells you a map() follows the filter.
//       Reading the output shape first is worth more than it sounds:
//       ["A","C"] means filter-then-map; [{title:"A",...}] would mean filter alone.
//
//       >= keeps A's exactly-8 rating.
//
// Expected output:
//   [ 'A', 'C' ]

const movies = [
  { title: "A", rating: 8 },
  { title: "B", rating: 5 },
  { title: "C", rating: 9 },
];

// --- your code below ---
const result = movies
  .filter((movie) => movie.rating >= 8)
  .map((movie) => movie.title);
console.log(result);
