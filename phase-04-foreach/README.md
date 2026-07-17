# Phase 4 — forEach() (15 Exercises)

## 📖 Introduction

Phase 4 is where you start transitioning from traditional programming style
(`for` loop → manually control everything) to the modern JavaScript style
(array method → tell JavaScript what you want).

A normal loop:

```javascript
const numbers = [1,2,3];
for (let i=0; i<numbers.length; i++) {
  console.log(numbers[i]);
}
```

becomes:

```javascript
numbers.forEach(number => {
  console.log(number);
});
```

`forEach()` runs your function once for every item.

**Goal — master:** what `forEach()` does, callback functions, accessing each
item, working with arrays of objects, replacing simple loops.

## 📌 Rules

**Allowed**

✅ arrays · ✅ objects · ✅ `forEach()` · ✅ if statements · ✅ variables · ✅ modifying objects

**Avoid**

❌ `map()` · ❌ `filter()` · ❌ `reduce()` · ❌ `find()`

## 🏁 Important concept

Before: "I need to control the loop."

```javascript
for (let i=0; i<arr.length; i++) { doSomething(arr[i]); }
```

After: "For every item, do this."

```javascript
arr.forEach(item => { doSomething(item); });
```

That mindset change is the foundation for React, APIs, and modern JavaScript. 🚀

After Phase 4, Phase 5 (`map()`) will be the first one that feels truly powerful
because instead of just doing something to every item, you start **creating new
data from old data**.
