# Exercise 2 — Double Even Numbers

**Trains:** `filter().map()` on numbers · why order matters
**Difficulty:** 🟢 Easy

## What you're solving

The same pipeline on plain numbers — and a case where getting the order wrong
still produces an answer, just a wrong one.

Filter then double gives `[4,8,12]`. Double then filter gives `[2,4,6,8,10,12]`,
because doubling makes *everything* even. No error, no crash, six items instead
of three.

That's the dangerous kind of bug. Exercise 1's wrong order at least breaks
loudly. Here it lies to you.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

Steps: keep even numbers → double them.

Result: `[4,8,12]`

## Expected output

```javascript
[4, 8, 12]
```

## Toolbox

- 🎯 **Focus:** `filter().map()` where *order* changes the answer
- ✅ **Allowed:** `.filter()` · `.map()` · `%` · arithmetic · `console.log()`
- ❌ **Not allowed:** `for` / `while` loops · map-before-filter — doubling first
  makes everything even, giving a plausible-but-wrong six items.

## Requirements

- Filter first, then map
- Three items out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
```

`[2,4,6]` survives the filter, then doubles to `[4,8,12]`.

Run it in the wrong order once and look at the six-item result. Then remember
that when a pipeline gives a plausible but wrong answer, order is the first thing
to check.

</details>
