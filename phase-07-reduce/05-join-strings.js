// Exercise 5 — Join Strings
// Instructions: 05-join-strings.md
//
// Goal: build "Hello World" with reduce(). No join() — that's the punchline.
//       Exactly one space between, none at either end.
//
// The accumulator doesn't have to be a number — here it's a STRING, so the
// initial value is "" (the neutral value for concatenation).
//
// The wrinkle: naively adding " " + word every pass gives " Hello World" —
// a leading space, because the first word gets a separator it doesn't need.
// Separators go BETWEEN items, and "between" is awkward one-at-a-time.
//
// Meet the problem first. Then know that real code writes words.join(" ").
//
// Expected output:
//   Hello World

const words = ["Hello", "World"];

// --- your code below ---
