# Exercise 3 — Access Last Element

**Trains:** `.length` · computing an index
**Difficulty:** 🟢 Easy

## What you're solving

`.length` tells you how many items an array holds. But because indexes start at
0, the **last** index is always one less than the length — a 3-item array has its
last item at index `2`.

The reason to compute it rather than hardcode `[2]` is that real arrays change
size. `array[array.length - 1]` finds the last item whether there are 3 or 3000.

## Starter data

```javascript
const fruits = ["apple", "banana", "orange"];
```

Print the last fruit. Use `array.length` — don't hardcode the number.

## Expected output

```javascript
orange
```

## Requirements

- Use `.length` to work out the index
- Do not write `fruits[2]` — it must still work if the array grows

## Hint

<details>
<summary>Show hint</summary>

`fruits.length` is `3`. The last item sits at index `2`.

So the index you want is the length minus one — and you can do that arithmetic
right inside the brackets.

</details>
