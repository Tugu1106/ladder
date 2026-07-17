# Phase 6 — filter() (20 Exercises)

## 📖 Introduction

You already know:

`forEach()` — "Visit every item and do something." No new array.

```javascript
numbers.forEach(number => { console.log(number); });
```

`map()` — "Transform every item into something new." Creates a new array with
same length.

```javascript
const doubled = numbers.map(number => number * 2);
```

`filter()` — "Look at every item and keep only the ones that pass a test."

```javascript
const evenNumbers = numbers.filter(number => number % 2 === 0);
```

Input `[1,2,3,4,5,6]` → Output `[2,4,6]`

### Core rule

The callback must return `true` (keep the item) or `false` (remove the item).

```javascript
const ages = [12,18,25,10];
const adults = ages.filter(age => age >= 18); // [18,25]
```

## 🏁 Mastery check

```javascript
array.filter(item => { return condition; });
```

means: "Check every item. If condition is true, keep it."

Common patterns:

```javascript
users.filter(user => user.age >= 18);                  // Adults
users.filter(user => user.active);                     // Active users
products.filter(p => p.name.includes("phone"));        // Search
users.filter(user => user.age >= 18 && user.active);   // Multiple conditions
```

| Method | Purpose |
| --- | --- |
| `forEach()` | Do something |
| `map()` | Transform |
| `filter()` | Select |

Next Phase 7 should be **reduce()**, because it teaches you how to calculate
totals, group data, build carts, statistics, and basically think like a backend
developer. 🚀
