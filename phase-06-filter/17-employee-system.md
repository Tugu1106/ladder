# Exercise 17 — Employee System

**Trains:** filtering on string equality
**Difficulty:** 🟢 Easy

## What you're solving

Every condition so far has been a number comparison or a boolean. This one
matches a **string exactly**.

`===` works on strings, and unlike Exercise 12's search you want an exact match
here — a department is `"IT"` or it isn't. No partial matching, no case juggling,
just equality.

## Starter data

```javascript
const employees = [{name:"Alex",department:"IT"},{name:"John",department:"HR"},{name:"Sarah",department:"IT"}];
```

Get only IT employees.

## Expected output

```javascript
[
  { name: 'Alex', department: 'IT' },
  { name: 'Sarah', department: 'IT' }
]
```

## Toolbox

- 🎯 **Focus:** filtering on exact string equality (`department === "IT"`)
- ✅ **Allowed:** `.filter()` · `===` · dot notation · `console.log()`
- ❌ **Not allowed:** `.includes()` (that's partial matching, from Ex 12) · `.map()`
  — a department either *is* "IT" or it isn't.

## Requirements

- Use `filter()` with `===`
- Exact match — not `includes()`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const it = employees.filter(employee => employee.department === "IT");
```

`===` on strings compares content, character for character. It's case-sensitive,
so `"it"` would match nothing — fine here, since the data is consistent.

</details>
