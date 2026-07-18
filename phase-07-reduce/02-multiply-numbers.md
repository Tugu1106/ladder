# Exercise 2 — Multiply Numbers

**Trains:** choosing the right initial value
**Difficulty:** 🟢 Easy

## What you're solving

Same as Exercise 1 with `*` instead of `+` — and one trap that teaches the most
important thing about initial values.

Start at `0` and your answer is `0`. Always. `0 * 2 * 3 * 4` is zero, and no
amount of correct multiplication saves you.

The initial value must be **neutral for the operation**. For addition that's `0`
(adding zero changes nothing). For multiplication it's `1` (multiplying by one
changes nothing). Get this wrong and you don't get an error — you get a confident
wrong answer.

## Starter data

```javascript
const numbers = [2, 3, 4];
```

Result `24`.

## Expected output

```javascript
24
```

## Toolbox

- 🎯 **Focus:** choosing a *neutral* initial value (`1` for multiplication)
- ✅ **Allowed:** `.reduce()` · arithmetic · `console.log()`
- ❌ **Not allowed:** loops · `.forEach()` · starting at `0` — zero times anything
  is zero; the initial value must not change the operation's result.

## Requirements

- Use `reduce()`
- Initial value must be `1`
- Print one number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const product = numbers.reduce((total, number) => total * number, 1);
```

Trace: `1*2=2`, `2*3=6`, `6*4=24`.

Try it with `0` and watch it produce `0`. That failure is worth seeing once.

</details>
