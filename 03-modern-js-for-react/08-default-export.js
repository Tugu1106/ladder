// ✅ DONE — correct.
// Exercise 8 — Default Export & Import
// Phase 2: Modern JS for React
// RUN THIS FILE:  node 08-default-export.js
//
// Goal: fill in 08-logger.js with a DEFAULT export (a log function).
//       Then here, import it — NO braces, and YOU choose the name:
//
//   import log from "./08-logger.js";      // no { } for a default import
//
// >>> React components are usually default exports:
//        export default function App() {...}   ->   import App from "./App.js";
//
// Call your imported log with the message "hello modules".
//
// Expected output:
//   LOG: hello modules

// --- your code below (and finish 08-logger.js) ---
import log from "./08-logger.js";

log("hello modules");
