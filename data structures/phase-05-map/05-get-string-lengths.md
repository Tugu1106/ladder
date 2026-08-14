# Exercise 5 — Get String Lengths

**Trains:** `map()` changing the type of the data
**Difficulty:** 🟢 Easy

## What you're solving

The most important `map()` lesson so far: **the output doesn't have to be the
same type as the input.**

Strings go in, numbers come out. `map()` only guarantees the *length* of the
array stays the same — three items in, three items out. What's in those slots is
entirely up to your callback.

That freedom is what makes `map()` powerful. Exercise 6 turns objects into
strings; Exercise 14 turns strings into objects. Same method, wildly different
shapes.

## Starter data

```javascript
const words = ["apple","banana","cat"];
```

Create `[5,6,3]`.

## Expected output

```javascript
[5, 6, 3]
```

## Toolbox

- 🎯 **Focus:** `.map()` changing the *type* (strings in → numbers out)
- ✅ **Allowed:** `.map()` · `.length` · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` — `map()` only promises the array's
  length is preserved; what fills each slot is up to your callback.

## Requirements

- Use `map()`
- Output is numbers, no quotes
- Same number of items as the input

## Hint

<details>
<summary>Show hint</summary>

```javascript
const lengths = words.map(word => word.length);
```

`.length` works on strings just like on arrays — and no parentheses, it's a
property.

</details>
