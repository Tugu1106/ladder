// Exercise 12 — Count Occurrences
// Instructions: 12-count-occurrences.md
//
// Goal: { red: 2, blue: 2, green: 1 }
//       Keys come from the DATA — don't hardcode red/blue/green.
//
// A TALLY. Unlike Exercise 11, you don't know the keys in advance, so start
// with {} and create each key the first time you meet it.
//
// Which brings back Phase 1's Exercise 8 — bracket notation with a variable.
// counts[color] where color is "red" reaches the `red` key. counts.color
// would look for a key literally named "color".
//
// THE FIRST-TIME PROBLEM: counts["red"] + 1 when red doesn't exist yet is
// undefined + 1, which is NaN. You need a default:
//
//   counts[color] = (counts[color] || 0) + 1;
//
// The parentheses are REQUIRED. + binds tighter than ||, so without them
// you get `counts[color] || 1` — silently wrong.
//
// Expected output:
//   { red: 2, blue: 2, green: 1 }

const colors = ["red", "blue", "red", "green", "blue"];

// --- your code below ---
