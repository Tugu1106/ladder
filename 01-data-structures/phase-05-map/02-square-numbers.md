# Exercise 2 — Square Numbers

**Trains:** `map()` with different arithmetic · implicit return
**Difficulty:** 🟢 Easy

## What you're solving

Same shape as Exercise 1, different sum. The rep is the point — `map()` needs to
become automatic.

Use this one to try the **short arrow form**. When a callback is a single
expression, you can drop the braces and the `return` keyword, and the value comes
back on its own. That's why real `map()` code is usually one line.

## Starter data

```javascript
const numbers = [2, 3, 4, 5];
```

Create `[4,9,16,25]`.

## Expected output

```javascript
[4, 9, 16, 25]
```

## Toolbox

- 🎯 **Focus:** the short arrow form — implicit return (no braces, no `return`)
- ✅ **Allowed:** `.map()` · arrow functions (both forms) · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` — and beware `n => { n * n }`: a braced
  body with no `return` gives back `undefined`.

## Requirements

- Use `map()`
- Original untouched
- Write it once with `return`, then again in short form

## Hint

<details>
<summary>Show hint</summary>

Long form:

```javascript
const squared = numbers.map(n => {
  return n * n;
});
```

Short form — no braces, no `return`, same result:

```javascript
const squared = numbers.map(n => n * n);
```

The rule: braces mean "a function body, return explicitly"; no braces mean "this
one expression is the return value." Mixing them up — `n => { n * n }` — returns
`undefined`, because a braced body with no `return` returns nothing.

`n ** 2` also works, but `n * n` is clearer for squares.

</details>
