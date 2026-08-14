# Exercise 4 — Count Items

**Trains:** counting with `forEach()` · knowing when not to use it
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 3's accumulator, but adding `1` per item instead of the item's value.

Then the honest observation: **you would never do this in real code.**
`fruits.length` answers this instantly, and it's a property JavaScript keeps
correct for free. Looping over three items to count to three is strictly worse.

The exercise is here for the rep, not the technique. Part of getting good is
knowing when the fancy tool is the wrong tool.

## Starter data

```javascript
const fruits = ["apple","banana","orange"];
```

Count how many fruits exist.

## Expected output

```javascript
3
```

## Toolbox

- 🎯 **Focus:** counting with `forEach()` — *and* seeing why `.length` is better
- ✅ **Allowed:** `.forEach()` · a counter · `.length` · `console.log()`
- ❌ **Not allowed:** `.filter().length` (later) — this one's a deliberate
  wrong-tool rep; the callback ignoring its item is the tell.

## Requirements

- Use `forEach()` for the practice
- Then print `fruits.length` too, and note you got the same answer for less work

## Hint

<details>
<summary>Show hint</summary>

```javascript
let count = 0;
fruits.forEach(fruit => {
  count++;
});
console.log(count);
```

The callback ignores `fruit` entirely — it only cares that it was called. That's
a sign you're using the wrong tool, and it's fine here because you're practising.

</details>
