# Exercise 12 — Increase Salaries

**Trains:** spread with an overridden field
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Exercise 9 spread an object and **added** a field. This spreads and **overrides**
one that already exists.

The mechanism is order. `{ ...employee, salary: newValue }` copies everything —
including the old salary — and then `salary:` is listed afterwards, so it wins.
Flip the order to `{ salary: newValue, ...employee }` and the spread overwrites
your new value with the old one. Silent, confusing, and a real bug people ship.

This is the canonical React state update: copy the object, override the one field
that changed.

## Starter data

```javascript
const employees = [{name:"Alex",salary:3000},{name:"John",salary:4000}];
```

Create a new array where salary increases by 500.

## Expected output

```javascript
[{name:"Alex",salary:3500},{name:"John",salary:4500}]
```

## Toolbox

- 🎯 **Focus:** spread + an *overridden* field (`{ ...e, salary: e.salary + 500 }`)
- ✅ **Allowed:** `.map()` · spread `...` · arithmetic · `console.log()`
- ❌ **Not allowed:** mutating · putting `salary:` *before* the spread (order
  matters — the later key wins, so the override must come after `...e`).

## Requirements

- Use `map()`
- Spread to copy — don't mutate
- `name` survives; only `salary` changes
- Print the original afterwards to confirm 3000 and 4000 are intact

## Hint

<details>
<summary>Show hint</summary>

```javascript
const raised = employees.map(e => ({ ...e, salary: e.salary + 500 }));
```

The new value is computed from the old one — `e.salary` on the right still reads
the original, because you haven't changed anything yet, you're building a
description of a new object.

Parentheses around the braces, same as Exercise 9.

</details>
