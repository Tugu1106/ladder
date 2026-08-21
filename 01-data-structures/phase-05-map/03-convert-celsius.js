// ✅ DONE — output correct.
//    Naming note: you called the variable `Fahrenheit` (capital F). Convention
//    in JavaScript is camelCase for variables — `fahrenheit`. A Capitalized
//    name signals a class/constructor to other readers. Small, but it's a
//    convention worth following from the start.
// Exercise 3 — Convert Celsius
// Instructions: 03-convert-celsius.md
//
// Goal: convert to Fahrenheit using  Celsius * 1.8 + 32
//
//       * binds tighter than +, so it multiplies first — which is what you want.
//       Check that 0 maps to 32 and you'll catch it if you got that wrong.
//
// Expected output:
//   [ 32, 68, 86 ]

const temperatures = [0, 20, 30];

// --- your code below ---

const Fahrenheit = temperatures.map((temp) => temp * 1.8 + 32);

console.log(Fahrenheit);
