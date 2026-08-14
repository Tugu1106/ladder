// ✅ DONE — ran it, output correct.
// Exercise 5 — Print With Text
// Instructions: 05-print-with-text.md
//
// Goal: greet each name.
//
// Template literal — BACKTICKS, not quotes:  `Hello ${name}`
// With single quotes, 'Hello ${name}' prints the ${name} literally.
//
// Expected output:
//   Hello John
//   Hello Jane
//   Hello Bob

const names = ["John", "Jane", "Bob"];

// --- your code below ---
names.forEach((element) => {
  console.log(`Hello ${element}`);
});
