# Exercise 19 — Print Every Item

**Trains:** looping over an array
**Difficulty:** 🟢 Easy

## What you're solving

Up to now you've reached one position at a time. A **loop** visits every item
without you writing a line per item — and it works the same whether the array
holds 3 names or 3000.

This is the manual version of what `forEach()` will do for you in Phase 4. Do it
by hand now so that when the shortcut arrives you know exactly what it replaced.

## Starter data

```javascript
const names = ["John", "Jane", "Bob"];
```

Use a loop.

## Expected output

```javascript
John
Jane
Bob
```

## Requirements

- Use a loop — no three separate `console.log()` calls
- It must work unchanged if a fourth name is added
- Either a classic `for` loop or `for...of` is fine

## Hint

<details>
<summary>Show hint</summary>

A classic `for` loop counts an index from 0 up to (but not including) `.length`,
and you use that counter to reach each item:

```javascript
for (let i = 0; i < things.length; i++) {
  console.log(things[i]);
}
```

`for...of` skips the counter entirely and hands you each item:

```javascript
for (const thing of things) {
  console.log(thing);
}
```

Both are allowed. Try writing it both ways.

</details>
