// ✅ DONE — ran it, output correct.
// Exercise 13 — Convert Array To Object
// Instructions: 13-convert-array-to-object.md
//
// Goal: { 1: {name:"Alex"}, 2: {name:"John"} }
//       Values hold `name` only — the id is the key now, so keeping it inside
//       would be redundant.
//
// A LOOKUP TABLE. Why bother? Finding a user by id in an array means scanning
// it. In an object keyed by id, usersById[2] is instant. That's irrelevant for
// two users and enormous for two thousand — it's why Redux and most serious
// state layers store data this way. You'll meet it as "normalizing".
//
// Note the keys print as '1' and '2' WITH QUOTES: object keys are always
// strings in JavaScript, and the number gets converted. Lookups convert too,
// so byId[1] and byId["1"] both work.
//
// Expected output:
//   { '1': { name: 'Alex' }, '2': { name: 'John' } }

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
];

// --- your code below ---
const transformed = users.reduce((object, user) => {
  object[user.id] = { name: user.name };
  return object;
}, {});

console.log(transformed);
