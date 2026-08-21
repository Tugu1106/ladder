# Exercise 2 — Keep Odd Numbers

**Trains:** inverting a condition
**Difficulty:** 🟢 Easy

## What you're solving

The exact opposite of Exercise 1, which makes it a good check that you understand
the condition rather than having memorised the line.

Two ways to flip it: test for remainder `1`, or negate the even test with `!`.
Both fine. `!==` is generally the clearer of the two.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

Create `[1,3,5]`.

## Expected output

```javascript
[1, 3, 5]
```

## Toolbox

- 🎯 **Focus:** inverting a condition (`% 2 !== 0`, or `!` on the even test)
- ✅ **Allowed:** `.filter()` · `%` · `!==` / `!` · `console.log()`
- ❌ **Not allowed:** `.map()` · `for` / `.forEach()` — flip the verdict; prefer
  `!== 0` over `=== 1` (which misses negative odds).

## Requirements

- Use `filter()`
- Boolean condition

## Hint

<details>
<summary>Show hint</summary>

```javascript
const odds = numbers.filter(n => n % 2 !== 0);
```

Or negate the even test:

```javascript
const odds = numbers.filter(n => !(n % 2 === 0));
```

The first is easier to read. `!` inverts a boolean and is worth knowing, but
don't reach for it when a direct comparison says it plainly.

Careful with negatives if you ever extend this: `-3 % 2` is `-1` in JavaScript,
not `1`. So `!== 0` is safe but `=== 1` would miss negative odd numbers.

</details>
