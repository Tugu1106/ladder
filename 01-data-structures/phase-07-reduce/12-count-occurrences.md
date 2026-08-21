# Exercise 12 — Count Occurrences

**Trains:** dynamic keys · counting into an object
**Difficulty:** ⭐⭐

## What you're solving

A **tally** — count how many times each value appears. And unlike Exercise 11,
you don't know the keys in advance.

Exercise 11 could start with `{ even: [], odd: [] }` because there are exactly two
buckets, known ahead of time. Here the keys come *from the data*. Start with `{}`
and create each key the first time you meet it.

Which brings back Phase 1's Exercise 8 — bracket notation with a variable.
`counts[color]` where `color` is `"red"` reaches the `red` key. Dot notation
can't do this; `counts.color` would look for a key literally named "color".

The first-time problem: `counts["red"] + 1` when `red` doesn't exist yet is
`undefined + 1`, which is `NaN`. You need a default.

## Starter data

```javascript
const colors = ["red","blue","red","green","blue"];
```

Create `{ red:2, blue:2, green:1 }`.

## Expected output

```javascript
{ red: 2, blue: 2, green: 1 }
```

## Toolbox

- 🎯 **Focus:** a tally into an object with *dynamic* keys (`counts[color]`)
- ✅ **Allowed:** `.reduce()` · `{}` start · bracket-notation keys · `|| 0` / `?? 0` · `console.log()`
- ❌ **Not allowed:** hardcoded keys · dot notation for the key (`counts.color`
  looks for a literal "color") — default the first sighting so it's not `NaN`.

## Requirements

- Use `reduce()` with `{}` as the initial value
- Keys come from the data — don't hardcode red/blue/green
- Handle the first sighting of each colour

## Hint

<details>
<summary>Show hint</summary>

```javascript
const tally = colors.reduce((counts, color) => {
  counts[color] = (counts[color] || 0) + 1;
  return counts;
}, {});
```

`counts[color] || 0` is the trick. `||` returns the left side if it's truthy,
otherwise the right — so an existing count comes through, and a missing one
becomes `0` instead of `undefined`. Then `+ 1` works either way.

The parentheses are required: `counts[color] || 0 + 1` parses as
`counts[color] || 1` because `+` binds tighter than `||`. Silently wrong.

Modern alternative: `counts[color] ?? 0`, which only defaults on `null`/`undefined`
rather than on any falsy value. Safer when `0` is a legitimate count.

This tally pattern is everywhere — word frequencies, votes, log levels, tags.

</details>
