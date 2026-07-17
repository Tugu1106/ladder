# Phase 5 — map() (20 Exercises)

## 📖 Introduction

You already learned: Phase 1 → Objects, Phase 2 → Arrays, Phase 3 → Arrays of
Objects, Phase 4 → `forEach()` (do something to every item).

`forEach()`: "Go through every item and do something." It does **not** create a
new array.

`map()`: "Go through every item and transform it into something new."

```javascript
const doubled = numbers.map(number => { return number * 2; });
```

Original: `[1,2,3]` → New: `[2,4,6]`

### Rules of map()

- ✅ always returns a new array
- ✅ original array stays unchanged
- ✅ output array has the same length
- ✅ callback must return something

```javascript
const names = ["john","alex"];
const upperNames = names.map(name => name.toUpperCase());
// ["JOHN","ALEX"]
```

## 📌 Rules

**Allowed**

✅ objects · ✅ arrays · ✅ loops (for checking) · ✅ `map()` · ✅ arrow functions · ✅ `return`

**Avoid**

❌ `filter()` · ❌ `reduce()` · ❌ `find()` · ❌ `sort()`

## 🏁 Mastery checkpoint

```javascript
const names = users.map(user => user.name);
```

means: "Take every user object, take only their name, create a new array."

```javascript
const newUsers = users.map(user => ({ ...user, active: true }));
```

means: "Take every user, create a modified copy."

After this, **Phase 6 filter()** will teach the opposite skill — `map()`
transforms everything, `filter()` keeps only things that match a condition.
Those two together are basically the daily bread of JavaScript developers. 🚀
