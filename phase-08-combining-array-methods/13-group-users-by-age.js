// Exercise 13 — Group Users By Age
// Instructions: 13-group-users-by-age.md
//
// Goal: { 20: ["Alex","John"], 30: ["Sarah"] }
//
//       Exercise 11's grouping with a NUMBER as the key — which surfaces the
//       quirk from Phase 7's Ex 13: object keys are always strings, so the
//       number 20 becomes "20". Print it and you'll see the quotes.
//
//       The code doesn't change at all. Lookups convert too, so grouped[20]
//       and grouped["20"] both work.
//
// Expected output:
//   { '20': [ 'Alex', 'John' ], '30': [ 'Sarah' ] }

const users = [
  { name: "Alex", age: 20 },
  { name: "John", age: 20 },
  { name: "Sarah", age: 30 }
];

// --- your code below ---
