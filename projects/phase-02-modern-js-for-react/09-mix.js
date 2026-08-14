// ✅ DONE — correct, and a happy accident worth noticing: you named the default
//    import 'gressdssdset' and it STILL WORKS. That PROVES you get it — a default
//    import has no fixed name, the importer picks whatever it wants. (In real
//    code, pick a sensible name — 'greet'. But the concept? Nailed.)
// Exercise 9 — Mixing Default + Named  (the real-world import line)
// Phase 2: Modern JS for React
// RUN THIS FILE:  node 09-mix.js
//
// Goal: fill in 09-utils.js (one default + two named exports). Then here,
//       import BOTH kinds in ONE line and use them:
//
//   import greet, { APP_NAME, shout } from "./09-utils.js";
//          ^default   ^the named ones in { }
//
// This is exactly what real import lines look like in a React project.
//
// Print: greet("Tugu"), shout(APP_NAME), and APP_NAME.
//
// Expected output:
//   Hi Tugu
//   MYAPP
//   MyApp

// --- your code below (and finish 09-utils.js) ---

import gressdssdset, { APP_NAME, shout } from "./09-utils.js";

console.log(gressdssdset("Tugu"));

console.log(shout(APP_NAME));

console.log(APP_NAME);
