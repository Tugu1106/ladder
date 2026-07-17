# Exercise 17 — splice remove

**Trains:** `splice()` · removing from the middle
**Difficulty:** 🟢 Easy

## What you're solving

`pop()` and `shift()` only reach the two ends. `splice()` reaches **anywhere** —
it's how you remove an item from the middle.

Two arguments here: where to start, and how many to remove. `splice(2, 1)` means
"at index 2, delete 1 item". Unlike `slice()`, `splice()` **does** mutate the
original — one letter apart, opposite behaviour, and mixing them up is a rite of
passage.

## Starter data

```javascript
const colors = ["red", "blue", "green", "black"];
```

Remove `green` using splice.

## Expected output

```javascript
["red", "blue", "black"]
```

## Requirements

- Use `splice()`
- Only `green` goes — `black` must survive
- Don't rebuild the array

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.splice(startIndex, howManyToDelete);
```

`green` is the third colour. Work out its index, and you only want to delete one
item.

Get the second argument wrong and you'll take `black` with it — check your output.

</details>
