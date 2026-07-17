// Exercise 9 — Add New Property
// Instructions: 09-add-new-property.md
//
// Goal: create a NEW array where each user has role: "student".
//       Do NOT modify the original — print `users` afterwards to prove it.
//
// The most important exercise in Phase 5. Phase 4 added properties by
// MUTATING. This bans that, so you must return new objects — copies carrying
// the old fields plus the new one. That's the immutable style, and it's why
// React works the way it does: mutate in place and React sees no change, so
// nothing re-renders.
//
// The spread operator `...` unpacks an object's properties into a new one:
//
//   users.map(user => ({ ...user, role: "student" }));
//
// The PARENTHESES around the braces are required. Without them, JavaScript
// reads { } as a function body, not an object, and you get [undefined, undefined].
//
// Expected output:
//   [ { name: 'John', role: 'student' }, { name: 'Jane', role: 'student' } ]

const users = [{ name: "John" }, { name: "Jane" }];

// --- your code below ---
