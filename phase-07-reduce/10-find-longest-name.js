// ✅ DONE — ran it, output correct.
// Exercise 10 — Find Longest Name
// Instructions: 10-find-longest-name.md
//
// Goal: "Christopher". No sort().
//
//       Exercise 3's maximum, on strings. The accumulator holds the BEST
//       CANDIDATE so far — a value pulled from the data, not a total built
//       from it.
//
//       Decide before you write: does the accumulator hold the name string,
//       or the whole user object? Either works. The string is simpler when
//       the string is all you want.
//
//       Note > not >=: on a tie the FIRST name wins. Know which you chose.
//
// Expected output:
//   Christopher

const users = [{ name: "Alex" }, { name: "Christopher" }, { name: "Bob" }];

// --- your code below ---
const longest = users.reduce((longest, user) => {
  if (user.name.length > longest.length) {
    longest = user.name;
  }
  return longest;
}, users[0].name);

console.log(longest);
