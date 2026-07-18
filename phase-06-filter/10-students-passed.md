# Exercise 10 — Students Passed

**Trains:** a pass/fail threshold
**Difficulty:** 🟢 Easy

## What you're solving

Another threshold, and worth comparing against Phase 4's Exercise 13.

There you *added* a `passed` field to every student — everyone stayed, tagged with
a verdict. Here you **remove** the failures entirely. Same question, two very
different answers: `map()`/`forEach()` annotate, `filter()` selects.

Which you want depends on the job. Showing a class list with pass/fail badges
needs everyone. Emailing the ones who passed needs only the survivors.

## Starter data

```javascript
const students = [{name:"Alex",score:90},{name:"John",score:40},{name:"Sarah",score:75}];
```

Keep students with score >= 60.

## Expected output

```javascript
[
  { name: 'Alex', score: 90 },
  { name: 'Sarah', score: 75 }
]
```

## Toolbox

- 🎯 **Focus:** a pass/fail threshold that *removes* (vs. Phase 4's annotate)
- ✅ **Allowed:** `.filter()` · dot notation · comparison · `console.log()`
- ❌ **Not allowed:** `.map()` / `.forEach()` (those tag everyone) — `filter()`
  drops the failures entirely rather than marking them.

## Requirements

- Use `filter()`
- `>= 60` — exactly 60 passes
- Whole objects out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const passed = students.filter(student => student.score >= 60);
```

John's 40 doesn't survive. He isn't marked as failed — he simply isn't there.

</details>
