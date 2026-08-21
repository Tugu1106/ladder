# Exercise 15 — Mini Boss ⭐

**Trains:** everything in Phase 4 · three uses of one method
**Difficulty:** ⭐⭐ Boss

## What you're solving

The phase boss: three tasks over one dataset, each showing a different thing
`forEach()` is for.

- **Task 1** — a side effect (printing). What `forEach()` is genuinely designed for.
- **Task 2** — an accumulator. Works, but `reduce()` will do it better.
- **Task 3** — mutation. Works because of the reference rule from Exercise 9.

Three tasks, three different reasons to reach for the same method. If you can see
why each one behaves as it does, Phase 4 is finished and `map()` will land easily.

## Starter data

```javascript
const employees = [
  {name:"Alex",salary:3000},
  {name:"John",salary:4000},
  {name:"Sarah",salary:5000}
];
```

### Task 1 — Print

```javascript
Alex earns 3000
John earns 4000
Sarah earns 5000
```

### Task 2 — Calculate total salary

Expected: `12000`

### Task 3 — Give every employee `company: "OpenAI"`

## Expected output

```javascript
Alex earns 3000
John earns 4000
Sarah earns 5000
12000
[
  { name: 'Alex', salary: 3000, company: 'OpenAI' },
  { name: 'John', salary: 4000, company: 'OpenAI' },
  { name: 'Sarah', salary: 5000, company: 'OpenAI' }
]
```

## Toolbox

- 🎯 **Focus:** three uses of one method — side effect, accumulator, mutation
- ✅ **Allowed:** `.forEach()` · template literals · a `let` total · dot assignment ·
  `console.log()`
- ❌ **Not allowed:** `for` loops · `.map()` / `.filter()` / `.reduce()` — every
  task goes through `forEach()`, showing the three reasons you'd reach for it.

## Requirements

- `forEach()` for all three — no `for` loops, no `map()`/`filter()`/`reduce()`
- Three separate passes is clearer than one clever one
- After Task 3, print `employees` to prove the property stuck

## Hint

<details>
<summary>Show hint</summary>

Task 1 is Exercise 7 — a template literal with `earns` between the two values.

Task 2 is Exercise 14 — `let total = 0` outside, `+=` inside, print after.

Task 3 is Exercise 10 — assign a property that doesn't exist yet.

You *could* do all three in one `forEach()`. Try it if you like, then ask which
version you'd rather read in six months.

</details>
