# Exercise 9 — Average Score

**Trains:** reduce then divide
**Difficulty:** 🟢 Easy

## What you're solving

Phase 7's Exercise 16 — sum inside the pipeline, divide outside it.

The reminder worth repeating: not every step belongs in the chain. `reduce()`
gives you the total; ordinary division finishes the job. Forcing the divide into
the reduce makes it longer and worse.

## Starter data

```javascript
const students = [{name:"Alex",score:80},{name:"John",score:90},{name:"Sarah",score:70}];
```

Calculate average score. Expected: `80`

## Expected output

```javascript
80
```

## Toolbox

- 🎯 **Focus:** `reduce()` for the sum, division *outside* the chain
- ✅ **Allowed:** `.reduce()` · `/` and `.length` afterward · `console.log()`
- ❌ **Not allowed:** loops · dividing inside the reduce — not every step belongs
  in the chain; ordinary division finishes the job.

## Requirements

- `reduce()` for the sum
- Divide by `.length` afterwards
- One number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const average =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
```

240 ÷ 3 = 80. Splitting the total into its own variable first is fine and often
clearer.

</details>
