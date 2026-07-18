# Exercise 7 — Price Formatting

**Trains:** `map()` numbers to display strings
**Difficulty:** 🟢 Easy

## What you're solving

Numbers to strings — the last step before data hits a screen.

Worth naming what's happening: you're crossing from **data** to **presentation**.
`100` is a number you can do arithmetic on; `"$100"` is text for a human. Once
formatted, it's useless for maths — `"$100" + "$200"` is `"$100$200"`.

So format **last**, always. Do every calculation on the numbers, then present.
Formatting early is a classic beginner mistake that poisons everything downstream.

## Starter data

```javascript
const prices = [100, 200, 300];
```

Create `["$100","$200","$300"]`.

## Expected output

```javascript
["$100", "$200", "$300"]
```

## Toolbox

- 🎯 **Focus:** `.map()` numbers → display strings (data crosses to presentation)
- ✅ **Allowed:** `.map()` · template literals · `console.log()`
- ❌ **Not allowed:** loops · formatting *before* any calculation — once it's
  `"$100"` it's useless for maths, so format last, always.

## Requirements

- Use `map()`
- Strings out, with the `$`
- Original numbers unchanged

## Hint

<details>
<summary>Show hint</summary>

```javascript
const formatted = prices.map(price => `$${price}`);
```

`$${price}` — literal `$`, then the interpolation. Same as Phase 5's Exercise 10.

Real apps use `Intl.NumberFormat` for currency, which handles separators and
locales — `$1,234.50` rather than `$1234.5`. Not needed here, but that's the
grown-up version.

</details>
