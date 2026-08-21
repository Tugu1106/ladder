# Exercise 4 — Keep Numbers Bigger Than 50

**Trains:** threshold conditions · strict vs. inclusive comparison
**Difficulty:** 🟢 Easy

## What you're solving

A threshold test — the shape behind every "show me items over X" feature.

Watch the boundary. "Bigger than 50" means `> 50`, and 50 itself would **not**
qualify. The data has no 50 in it, so you can't tell the difference from the
output — which is exactly why boundaries are where bugs hide. Pick the operator
because it's right, not because the test passes.

## Starter data

```javascript
const numbers = [20, 60, 40, 90, 100];
```

Result `[60,90,100]`.

## Expected output

```javascript
[60, 90, 100]
```

## Toolbox

- 🎯 **Focus:** a threshold condition · strict vs. inclusive (`>` vs. `>=`)
- ✅ **Allowed:** `.filter()` · comparison operators · `console.log()`
- ❌ **Not allowed:** `.map()` · `for` / `.forEach()` — pick `>` because "bigger
  than 50" excludes 50 itself, not because the test happens to pass.

## Requirements

- Use `filter()`
- "Bigger than" is strict — `>`, not `>=`
- Order preserved

## Hint

<details>
<summary>Show hint</summary>

```javascript
const big = numbers.filter(n => n > 50);
```

Add a `50` to the data and run it again. With `>` it's excluded; with `>=` it's
kept. Knowing which you want is the job — "over 50" and "50 or more" are
different requirements, and users notice.

</details>
