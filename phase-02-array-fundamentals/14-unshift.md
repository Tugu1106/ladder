# Exercise 14 — unshift()

**Trains:** `unshift()` · adding to the front
**Difficulty:** 🟢 Easy

## What you're solving

`unshift()` completes the set: it adds to the **front**, the way `push()` adds to
the back.

Four methods, two axes — front or back, add or remove:

| | add | remove |
| --- | --- | --- |
| **front** | `unshift()` | `shift()` |
| **back** | `push()` | `pop()` |

Once that table is in your head, this whole family is done.

## Starter data

```javascript
let letters = ["b", "c"];
```

Add `"first"` to the beginning.

## Expected output

```javascript
["first", "b", "c"]
```

## Requirements

- Use `unshift()`
- The new item goes at index `0`, everything else slides right

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.unshift("newValue");
```

Same shape as `push()` — it just works on the other end.

</details>
