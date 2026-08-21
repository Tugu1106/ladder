// Helper file for Exercise 8 — you write the DEFAULT export here.
//
// Goal: ONE default export — a function that takes a message and prints
//       "LOG: <message>".
//
//   export default function log(message) {
//     console.log(`LOG: ${message}`);
//   }
//
// A file can have only ONE default export. The importer picks its name.
//
// --- your code below ---
export default function log(message) {
  console.log(`LOG: ${message}`);
}
