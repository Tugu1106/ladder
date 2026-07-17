# Exercise 2 — Double Numbers

**Trains:** doing arithmetic inside a callback
**Difficulty:** 🟢 Easy

## What you're solving

The callback body is ordinary code. You can compute things in it, not just print
what you were handed.

One thing to notice, because it matters enormously in Phase 5: you're printing
doubled values, but `numbers` itself never changes. `forEach()` gives you a copy
of each value to work with and throws away whatever your callback returns. It has
no result. Printing is the *only* way to see anything here.

That limitation is exactly what `map()` fixes.

## Starter data

```javascript
const numbers = [1, 2, 3, 4];
```

Print:

```javascript
2
4
6
8
```

## Expected output

```javascript
2
4
6
8
```

## Requirements

- Use `forEach()`
- Do the doubling inside the callback
- `numbers` stays `[1,2,3,4]` — check it afterwards

## Hint

<details>
<summary>Show hint</summary>

```javascript
numbers.forEach(number => {
  console.log(number * 2);
});
```

Print `numbers` after the `forEach()` and you'll see it untouched. The doubled
values existed only for a moment inside each call.

</details>
