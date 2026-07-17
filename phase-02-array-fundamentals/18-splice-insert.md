# Exercise 18 — splice insert

**Trains:** `splice()` · inserting into the middle
**Difficulty:** 🟢 Easy

## What you're solving

The same method that deletes can also **insert** — delete zero items and add one
instead.

That's the trick: `splice(1, 0, "yellow")` means "at index 1, delete nothing,
insert yellow." The `0` is what turns a removal into a pure insertion. It looks
odd until you realise `splice` was designed to do both at once, and you're just
switching one half off.

## Starter data

```javascript
const colors = ["red", "blue"];
```

Insert `yellow` between `red` and `blue`.

Before: `["red","blue"]`
After: `["red","yellow","blue"]`

## Expected output

```javascript
["red", "yellow", "blue"]
```

## Requirements

- Use `splice()`
- Nothing gets deleted — both original colours survive
- `yellow` lands between them, not at either end

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.splice(startIndex, 0, "newValue");
```

The start index is the position the new item should **end up at**. You want
`yellow` to become the second item.

If `blue` disappears, your second argument isn't `0`.

</details>
