// Exercise 19 — Filter Then Map
// Instructions: 19-filter-then-map.md
//
// Goal: keep adults, then get only names -> ["Alex","Sarah"]
//       Chain them — one statement.
//
// The first real PIPELINE, and the moment this whole course builds toward.
// filter() returns an array, and map() is a method on arrays — so you can
// call map() directly on what filter() gives back. Data flows left to right:
//
//   users
//     .filter(user => user.age >= 18)
//     .map(user => user.name);
//
// ORDER MATTERS. Filter first and map only runs on the survivors. Map first
// and you'd have plucked the names already — .age would be gone, and you'd
// get []. Filter first, then map.
//
// Expected output:
//   [ 'Alex', 'Sarah' ]

const users = [
  { name: "Alex", age: 20 },
  { name: "John", age: 15 },
  { name: "Sarah", age: 30 }
];

// --- your code below ---
