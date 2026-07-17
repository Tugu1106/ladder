# Exercise 6 — Count Items

**Trains:** `.length` as a value in its own right
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 3 used `.length` to compute an index. Here it's the answer itself.

`.length` is not a function — no parentheses. It's a property that JavaScript
keeps up to date for you, so it's always correct no matter how the array changed.
Any time you need a count ("3 items in cart", "12 unread"), this is it.

## Starter data

```javascript
const colors = ["red","blue","green","yellow"];
```

Print how many items exist.

## Expected output

```javascript
4
```

## Requirements

- Use `.length`
- Don't count by hand and print `4`

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.length
```

No parentheses. `things.length()` is an error — it's a property, not a method.

</details>
