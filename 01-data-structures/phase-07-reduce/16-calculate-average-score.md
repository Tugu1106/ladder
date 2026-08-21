# Exercise 16 — Calculate Average Score

**Trains:** post-processing a reduce result
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

An average is a sum divided by a count — and `reduce()` only does the sum half.

That's the lesson: **not everything belongs inside the reduce.** Sum with
`reduce()`, then divide by `.length` afterwards. Trying to average *during* the
reduce means tracking a count alongside and dividing at the end anyway, which is
more code for the same answer.

Use the right tool for each part. `reduce()` combines; plain arithmetic divides.

## Starter data

```javascript
const students = [{name:"Alex",score:80},{name:"John",score:90},{name:"Sarah",score:70}];
```

Result `80`.

## Expected output

```javascript
80
```

## Toolbox

- 🎯 **Focus:** post-processing a reduce result — not everything belongs inside
- ✅ **Allowed:** `.reduce()` for the sum · `/` and `.length` *outside* · `console.log()`
- ❌ **Not allowed:** dividing inside the reduce — sum with `reduce()`, then divide
  by `.length` afterward; use the right tool for each half.

## Requirements

- `reduce()` for the sum
- Divide by `students.length` outside the reduce
- Print one number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;
console.log(average);
```

240 ÷ 3 = 80 exactly. Chosen to be clean — real averages give you things like
`80.33333333333333`, and `toFixed(1)` rounds for display. Phase 9's Project 6
hits that for real.

Dividing by `students.length` rather than a hardcoded `3` keeps it correct when
the class grows.

Guard `length === 0` in real code — dividing by zero gives `NaN`.

</details>
