# Phase 6 — filter() (20 Exercises)

**Status: ✅ complete — all 20 correct on the first pass.**

| # | Exercise | Status |
| --- | --- | --- |
| 01 | Keep Even Numbers | ✅ |
| 02 | Keep Odd Numbers | ✅ · `% 2 === 1` works, `!== 0` is safer |
| 03 | Remove Negative Numbers | ✅ |
| 04 | Keep Numbers Bigger Than 50 | ✅ |
| 05 | Keep Long Words | ✅ |
| 06 | Adults Only | ✅ |
| 07 | Active Users | ✅ boolean passed through — clean |
| 08 | Expensive Products | ✅ |
| 09 | Completed Tasks | ✅ |
| 10 | Students Passed | ✅ |
| 11 | Multiple Conditions | ✅ |
| 12 | Search System | ✅ · lowercase the keyword too for safety |
| 13 | Remove Banned Users | ✅ · param named `users` should be `user` |
| 14 | Stock System | ✅ |
| 15 | Filter By Rating | ✅ boundary (8) kept correctly |
| 16 | Shopping Cart | ✅ |
| 17 | Employee System | ✅ |
| 18 | Permission System | ✅ |
| 19 | Filter Then Map | ✅ chained — nicely done |
| 20 | Mini Boss ⭐ | ✅ · `prodct` typo in param name |

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
