# Exercise 4 — Change an Element

**Trains:** assigning to an index
**Difficulty:** 🟢 Easy

## What you're solving

Same lesson as Phase 1's Exercise 4, now for arrays: the syntax that **reads** a
position also **writes** to it when you put it on the left of an `=`.

And the `const` note carries over too. `const fruits` stops you from pointing
`fruits` at a different array, but it does not stop you from changing what's
inside this one.

## Starter data

```javascript
const fruits = ["apple", "banana", "orange"];
```

Change `banana` to `mango`. Print the array.

## Expected output

```javascript
["apple", "mango", "orange"]
```

## Requirements

- Assign to the index — don't rebuild the array
- The other two fruits stay put

## Hint

<details>
<summary>Show hint</summary>

```javascript
things[1] = "newValue";
```

`banana` is the second item, so remember what that means for its index.

</details>
