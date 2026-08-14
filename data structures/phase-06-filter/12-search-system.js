// ✅ DONE — output correct.
//    Robustness note: you lowercased the NAME but not the keyword. It works
//    because `keyword` is already "phone" (lowercase). But if the user typed
//    "PHONE" it'd break. Lowercase BOTH sides:
//        product.name.toLowerCase().includes(keyword.toLowerCase())
// Exercise 12 — Search System
// Instructions: 12-search-system.md
//
// Goal: return products whose name contains the keyword -> [{name:"Phone"}]
//       Use the `keyword` variable — don't hardcode "phone" in the condition.
//
// Two things make this harder than it looks:
//
//   1. Search is PARTIAL — typing "pho" should find "Phone". So === is
//      useless; use includes(), which asks "does this string contain that one".
//
//   2. "Phone".includes("phone") is FALSE. Capital P, lowercase p, no match.
//      A case-sensitive search box is broken — users don't capitalise.
//      Lowercase BOTH sides before comparing.
//
// Expected output:
//   [ { name: 'Phone' } ]

const products = [{ name: "Laptop" }, { name: "Phone" }, { name: "Keyboard" }];
const keyword = "phone";

// --- your code below ---
const result = products.filter((product) =>
  product.name.toLowerCase().includes(keyword),
);

console.log(result);
