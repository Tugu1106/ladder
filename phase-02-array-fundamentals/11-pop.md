# Exercise 11 — pop()

**Trains:** `pop()` · a method that both changes and returns
**Difficulty:** 🟢 Easy

## What you're solving

`pop()` removes the **last** item. What makes it interesting is that it does two
things at once: it shortens the array *and* hands you back the item it removed.

That return value is easy to miss. `push()` returns something you ignore;
`pop()` returns something you usually want. Getting used to "this method gives me
back the removed thing" sets up Exercise 12.

## Starter data

```javascript
let animals = ["cat", "dog", "bird", "fish", "horse", "rabbit"];
```

Remove the last animal. Print:

1. the removed animal
2. the remaining array

## Expected output

```javascript
rabbit
["cat", "dog", "bird", "fish", "horse"]
```

## Requirements

- Use `pop()`
- Print the removed animal first, then the array
- `pop()` takes no arguments — it always removes the last one

## Hint

<details>
<summary>Show hint</summary>

The value `pop()` gives back is the removed item, so you can log it directly or
store it first:

```javascript
console.log(things.pop());
```

Careful: calling `pop()` twice removes two items. Call it once.

</details>
