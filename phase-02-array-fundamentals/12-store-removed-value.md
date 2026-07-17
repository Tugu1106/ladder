# Exercise 12 — Store Removed Value

**Trains:** capturing a method's return value in a variable
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 11 printed the removed item straight away. Here you **keep** it in a
variable so you can use it later.

This is the everyday shape of "take the next job off the queue and do something
with it" — you need the item you removed, not just a shorter list.

## Starter data

```javascript
let games = ["Minecraft", "CS2", "Valorant"];
```

Remove the last game, store it in `const removedGame`, and print it.

## Expected output

```javascript
Valorant
```

## Requirements

- Store the result in a `const` named `removedGame`
- Print `removedGame`, not the `pop()` call

## Hint

<details>
<summary>Show hint</summary>

Put the call on the right of an `=`:

```javascript
const removed = things.pop();
```

`const` is fine here even though it removes an item — you're binding
`removedGame` to a string once, and never reassigning it.

</details>
