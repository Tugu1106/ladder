// ✅ DONE — ran it, output correct.
// Exercise 17 — Update Nested Value
// Instructions: 17-update-nested-value.md
//
// Goal: change city to "Darkhan", then print the user.
//       Change only the city — assigning a fresh object to address
//       would throw away `country`.
//
// Expected output:
//   { name: 'Tugu', address: { city: 'Darkhan', country: 'Mongolia' } }

const user = {
  name: "Tugu",
  address: { city: "Ulaanbaatar", country: "Mongolia" },
};

// --- your code below ---
user.address.city = "Darkhan";
console.log(user);
