# Project 20 — Final Boss: Personal Life OS Data Engine ⭐⭐⭐⭐

**Trains:** everything in Phase 9 · percentages · grouping with zero counts
**Difficulty:** ⭐⭐⭐⭐ Boss

## What you're solving

The phase boss, and it has two genuine traps. Read carefully before coding.

**Trap 1 — the percentage.** 2 completed out of 3 is 66.666...%. The spec says
`"66%"`. `Math.round(66.67)` gives **67**, not 66. You need `Math.floor()` to
truncate. It's a string with a `%` on the end, too — a display value, not a number.

**Trap 2 — `learning: 0`.** Look at the expected `categories`. Reading is *not*
completed, yet `learning` still appears with a count of `0`. So you can't just
filter to completed habits and group those — `learning` would vanish from the
result entirely.

That second one is a real reporting problem. A dashboard showing "health: 1,
career: 1" and silently omitting learning tells a different story than one showing
"learning: 0". Missing and zero are not the same, and users read them very
differently.

## Starter data

```javascript
const habits = [
  {name:"Workout",completed:true,category:"health"},
  {name:"Coding",completed:true,category:"career"},
  {name:"Reading",completed:false,category:"learning"}
];
```

## Build this

**`generateDashboard()`**:

```javascript
{
  completedHabits: 2,
  completionRate: "66%",
  categories: { health:1, career:1, learning:0 }
}
```

## Expected output

```javascript
{
  completedHabits: 2,
  completionRate: '66%',
  categories: { health: 1, career: 1, learning: 0 }
}
```

## Toolbox

- 🎯 **Focus:** floored percentages · grouping that keeps zero-count keys
- ✅ **Allowed:** `function` · `.filter()` · `.reduce()` · `Math.floor()` · `+ "%"`
- ❌ **Avoid:** `Math.round()` (66.67 → 67, spec wants 66) · filtering to completed
  *before* grouping (drops `learning: 0`) — create every key first, then count completed.

## Requirements

- `completedHabits` — count of completed: `2`
- `completionRate` — the **string** `"66%"`, floored not rounded
- `categories` — every category appears, counting **completed** habits only
- `learning` must be present with `0`

## Hint

<details>
<summary>Show hint</summary>

The percentage:

```javascript
const rate = Math.floor((completed / habits.length) * 100) + "%";
```

2/3 × 100 = 66.67. `Math.floor` → 66. `Math.round` → 67, which fails the spec.
Then `+ "%"` makes it a string.

The categories need **two passes** — one to create every key at 0, one to count
the completed:

```javascript
function generateDashboard() {
  const completed = habits.filter(h => h.completed);

  const categories = habits.reduce((acc, habit) => {
    acc[habit.category] = acc[habit.category] || 0;      // key exists, even at 0
    if (habit.completed) {
      acc[habit.category] += 1;                          // only completed count
    }
    return acc;
  }, {});

  return {
    completedHabits: completed.length,
    completionRate: Math.floor((completed.length / habits.length) * 100) + "%",
    categories
  };
}
```

The two lines inside the reduce do different jobs. The first guarantees the key
exists for **every** habit — that's what keeps `learning` in the result. The
second only fires for completed ones.

Filter to completed first and then group, and you'd get
`{health:1, career:1}` — no learning, wrong.

`{ categories }` at the end is shorthand for `categories: categories`.

</details>
