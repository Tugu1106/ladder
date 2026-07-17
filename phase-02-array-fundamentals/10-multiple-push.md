# Exercise 10 — Multiple push()

**Trains:** `push()` with several arguments
**Difficulty:** 🟢 Easy

## What you're solving

`push()` isn't limited to one item. Hand it several, separated by commas, and
they all get appended in order.

Small thing, but it's your first taste of a function that accepts a variable
number of arguments — a pattern you'll meet again.

## Starter data

```javascript
let animals = ["cat", "dog", "bird"];
```

Add `fish`, `horse`, `rabbit` using **one** push call.

## Expected output

```javascript
["cat", "dog", "bird", "fish", "horse", "rabbit"]
```

## Requirements

- Exactly one `push()` call — not three
- The three new animals keep the order given

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.push("a", "b", "c");
```

Commas between arguments, all inside the one set of parentheses.

</details>
