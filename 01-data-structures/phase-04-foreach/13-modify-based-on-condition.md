# Exercise 13 — Modify Based On Condition

**Trains:** conditional logic inside a callback · deriving a field from data
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

An `if` inside the callback, where the property you add **depends on** the
property already there.

This is a **derived field** — `passed` isn't new information, it's `score`
restated as a yes/no. Real systems do this constantly: computing `isOverdue` from
a date, `inStock` from a count, `canEdit` from a role. Storing the answer next to
the raw value saves recomputing it everywhere later.

Every student gets `passed`, note — `true` for some, `false` for others. Nobody
is skipped.

## Starter data

```javascript
const students = [
  {name:"John",score:80},
  {name:"Jane",score:95},
  {name:"Bob",score:60}
];
```

Using `forEach()`, add `passed: true/false` where score >= 70 → true, else false.

## Expected output

```javascript
[
  {name:"John",score:80,passed:true},
  {name:"Jane",score:95,passed:true},
  {name:"Bob",score:60,passed:false}
]
```

## Toolbox

- 🎯 **Focus:** a derived field from a condition inside the callback
- ✅ **Allowed:** `.forEach()` · `if` / comparison · dot assignment · `console.log()`
- ❌ **Not allowed:** `.map()` · `.filter()` — and prefer `student.passed =
  student.score >= 70` over an `if/else` that just stores `true`/`false`.

## Requirements

- Use `forEach()`
- Every student gets a `passed` property — including Bob, whose is `false`
- `>= 70` passes, so exactly 70 would pass

## Hint

<details>
<summary>Show hint</summary>

The straightforward way:

```javascript
students.forEach(student => {
  if (student.score >= 70) {
    student.passed = true;
  } else {
    student.passed = false;
  }
});
```

That works — but look at what it says: "if the comparison is true, store true,
otherwise store false." The comparison **is already** a boolean. So:

```javascript
student.passed = student.score >= 70;
```

One line, same result. Writing `if (x) { y = true } else { y = false }` is a tell
that you've forgotten comparisons produce values.

</details>
