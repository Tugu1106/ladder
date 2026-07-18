# Exercise 11 — Group Numbers

**Trains:** an object accumulator · the pattern that makes `reduce()` worth it
**Difficulty:** ⭐⭐

## What you're solving

This is the exercise where `reduce()` stops being a fancy sum and becomes
something `map()` and `filter()` genuinely cannot do.

The accumulator is an **object**. It starts as `{ even: [], odd: [] }` and each
pass pushes the current number into one of its arrays. At the end you have one
object holding two lists — built from a flat array of six numbers.

Neither `map()` nor `filter()` can produce this. `map()` gives you an array of
the same length; `filter()` gives you a subset. Only `reduce()` can collapse a
list into an arbitrary structure of your choosing.

The mechanical catch: you must `return group` at the end of every pass. `push()`
returns a number, not the object — so `=> group[key].push(n)` quietly hands the
next pass a number and everything falls apart.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

Create `{ even:[2,4,6], odd:[1,3,5] }`.

## Expected output

```javascript
{ even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }
```

## Toolbox

- 🎯 **Focus:** an *object* accumulator — the thing `map`/`filter` can't do
- ✅ **Allowed:** `.reduce()` · object initial value · `.push()` · `if` · `console.log()`
- ❌ **Not allowed:** `.map()` / `.filter()` (they can't collapse into a custom
  shape) — and `return group` every pass, since `.push()` returns a number.

## Requirements

- Use `reduce()` with an object as the initial value
- Return the accumulator every pass
- Both keys present, arrays in original order

## Hint

<details>
<summary>Show hint</summary>

```javascript
const grouped = numbers.reduce((group, number) => {
  if (number % 2 === 0) {
    group.even.push(number);
  } else {
    group.odd.push(number);
  }
  return group;                        // ← mandatory
}, { even: [], odd: [] });
```

The initial value `{ even: [], odd: [] }` matters twice: it's the shape you're
building, and it guarantees both keys exist so `.push()` never hits `undefined`.

Braces mean you must `return` explicitly. Forget it and pass two crashes with
"cannot read property 'even' of undefined."

Mutating the accumulator with `push()` is normal and idiomatic here — it's your
own object, created fresh by the initial value, so nobody outside can see it.

</details>
