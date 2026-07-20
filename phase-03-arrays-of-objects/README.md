# Phase 3 — Arrays of Objects (20 Exercises)

**Status: ✅ complete — all 20 reviewed and running correctly.**

| #   | Exercise                          | Status                 |
| --- | --------------------------------- | ---------------------- |
| 01  | Create User List                  | ✅                     |
| 02  | Access First Object               | ✅                     |
| 03  | Access Object Property            | ✅                     |
| 04  | Access Second User Age            | ✅                     |
| 05  | Print All Names                   | ✅ fixed — `user.name` |
| 06  | Change Property                   | ✅                     |
| 07  | Add Property                      | ✅                     |
| 08  | Delete Property                   | ✅                     |
| 09  | Add New User                      | ✅                     |
| 10  | Remove User                       | ✅                     |
| 11  | Print User Information            | ✅                     |
| 12  | Count Total Age                   | ✅                     |
| 13  | Find User Manually                | ✅                     |
| 14  | Count Adults                      | ✅                     |
| 15  | Find Highest Score                | ✅                     |
| 16  | Access Nested Object              | ✅                     |
| 17  | Update Nested Value               | ✅                     |
| 18  | Array Inside Object               | ✅                     |
| 19  | Object Inside Object Inside Array | ✅                     |
| 20  | Simple Store System ⭐            | ✅                     |

Difficulty: ⭐⭐☆☆☆ → ⭐⭐⭐☆☆

## 📖 Introduction

Phase 1 = objects. Phase 2 = arrays. Phase 3 = **arrays of objects** — this is
where JavaScript starts looking like real applications.

Almost everything you touch later will look like this:

```javascript
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
];
```

Examples from real life: API responses, React state, database results, product
lists, user lists, messages, posts.

**Goal — master:**

- accessing objects inside arrays
- changing object properties
- adding/removing objects
- nested data
- searching manually with loops
- thinking like a programmer

## 📌 Rules

**Allowed**

✅ Objects · ✅ Arrays · ✅ Loops · ✅ push/pop · ✅ if statements · ✅ variables

**Not allowed yet**

❌ `map()` · ❌ `filter()` · ❌ `find()` · ❌ `reduce()` · ❌ `sort()` · ❌ `Object.keys()`

## 🏁 Wrap-up

After Phase 3 you should be comfortable reading:

```javascript
products[0].price;
users[2].address.city;
orders[0].items[2].name;
```

because this exact pattern appears everywhere.

Phase 4 will be the first "modern JavaScript" phase: **forEach()** — where you
start replacing manual loops with cleaner functional code. 🚀
