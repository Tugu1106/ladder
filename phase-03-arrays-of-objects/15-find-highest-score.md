# Exercise 15 — Find Highest Score

**Trains:** tracking a running maximum
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Finding a maximum means remembering the **best so far** and replacing it whenever
you see better. One pass, one variable.

The trap is where you start. Begin at `0` and you're fine here, but a list of
negative numbers would break it — nothing beats 0, so you'd report 0, a score
nobody has. The robust move is to start with the *first item* and compare from
the second onwards. Something can't be better than everything if you never
consider it.

Note you must also report the **name**, which means tracking the whole object,
not just the number.

## Starter data

```javascript
const players = [{name:"Tom",score:80},{name:"Bob",score:95},{name:"Sam",score:70}];
```

Find the highest score.

## Expected output

```javascript
Bob 95
```

## Toolbox

- 🎯 **Focus:** tracking a running maximum (keep the best *object*, not just the number)
- ✅ **Allowed:** `for` / `for...of` · `if` · `>` · a `best` variable · `console.log()`
- ❌ **Not allowed:** `.sort()` · `Math.max()` · `.reduce()` — do the comparison
  yourself so you learn to carry the whole object along with the value.

## Requirements

- Use a loop
- No `sort()`, no `Math.max()` — do the comparison yourself
- Output the name **and** the score

## Hint

<details>
<summary>Show hint</summary>

Keep the best player, not just the best number — then you have the name too:

```javascript
let best = players[0];
// in the loop:
//   if (players[i].score > best.score) { best = players[i]; }
console.log(best.name, best.score);
```

Starting from `players[0]` and comparing everyone against it is safe for any
values, including all-negative ones.

`console.log(a, b)` prints both with a space between.

</details>
