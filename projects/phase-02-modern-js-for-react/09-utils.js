// Helper file for Exercise 9 — you write BOTH kinds of export here.
//
// Goal:
//   - a DEFAULT export: a function greet(name) that returns "Hi <name>"
//   - a NAMED export:    const APP_NAME = "MyApp"
//   - a NAMED export:    function shout(s) that returns s.toUpperCase()
//
//   export default function greet(name) { return `Hi ${name}`; }
//   export const APP_NAME = "MyApp";
//   export function shout(s) { return s.toUpperCase(); }
//
// --- your code below ---

export default function greet(name) {
  return `Hi ${name}`;
}

export const APP_NAME = "MyApp";

export function shout(s) {
  return s.toUpperCase();
}
