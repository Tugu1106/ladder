// ✅ DONE — output correct, and nicely done.
//    You defined printColor AFTER calling it. That WORKS because named
//    function declarations are 'hoisted' — JavaScript reads all function
//    declarations before running the file, so the name exists early.
//    (Note: this only works for 'function foo() {}' declarations, NOT for
//    'const foo = () => {}' — those aren't hoisted the same way.)
// Exercise 11 — Create Your Own Callback
// Instructions: 11-create-your-own-callback.md
//
// Goal: define the callback as a SEPARATE named function, then pass it
//       to forEach() by name.
//
// A function is a VALUE. You can name it and hand it around like a number.
// Inline arrows aren't special syntax forEach requires — they're just the
// convenient way to write a value you only need once.
//
// Pass `printColor`, NOT `printColor()`. With parentheses you call it
// immediately and hand forEach the result — you'd get "Color: undefined".
//
// Expected output:
//   Color: red
//   Color: blue
//   Color: green

const colors = ["red", "blue", "green"];

function printColor(color) {
  console.log(`Color: ${color}`);
}

// --- your code below ---
colors.forEach(printColor);
