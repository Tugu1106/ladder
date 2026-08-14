// ✅ DONE — correct.
// Exercise 7 — Named Exports & Imports
// Phase 2: Modern JS for React
// RUN THIS FILE:  node 07-named-export.js   (it imports from 07-math.js)
//
// Goal: first fill in 07-math.js with two named exports (add, PI).
//       Then here, IMPORT them by name and use them:
//
//   import { add, PI } from "./07-math.js";
//
// Named imports use { } and the names must MATCH the exports.
// >>> React is full of these:  import { useState } from "react";
//
// Print add(3, 4), then PI.
//
// Expected output:
//   7
//   3.14159

// --- your code below (and finish 07-math.js) ---
import { add, PI } from "./07-math.js";

console.log(add(3, 4));
console.log(PI);
