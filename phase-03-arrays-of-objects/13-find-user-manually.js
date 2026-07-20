// ✅ DONE — ran it, output correct.
// Exercise 13 — Find User Manually
// Instructions: 13-find-user-manually.md
//
// Goal: find John using a LOOP and an `if`. No find(), no filter().
//
//       Use === to compare, never a single =. A single = would ASSIGN,
//       silently renaming everyone to John.
//
//       Once you've found him, `break` stops the loop. That's what the
//       real find() does.
//
// Expected output (your call how to report it):
//   { name: 'John' }

const users = [{ name: "Alex" }, { name: "John" }, { name: "Sarah" }];

// --- your code below ---
for (let user of users) {
  if (user.name === "John") {
    console.log(user);
    break;
  }
}
