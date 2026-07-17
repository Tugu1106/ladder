# Phase 3 — Arrays of Objects (20 Exercises)

Difficulty: ⭐⭐☆☆☆ → ⭐⭐⭐☆☆

## 📖 Introduction

Phase 1 = objects. Phase 2 = arrays. Phase 3 = **arrays of objects** — this is
where JavaScript starts looking like real applications.

Almost everything you touch later will look like this:

```javascript
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 }
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
products[0].price
users[2].address.city
orders[0].items[2].name
```

because this exact pattern appears everywhere.

Phase 4 will be the first "modern JavaScript" phase: **forEach()** — where you
start replacing manual loops with cleaner functional code. 🚀
