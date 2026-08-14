# Exercise 19 — Object Inside Object Inside Array

**Trains:** three-level access chains
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Three levels: an array, holding an object, holding another object.

The chain looks intimidating written out, but it's the same two rules you've used
all phase — brackets for position, dots for names — applied three times. If you
can read `companies[0].employees.count` without pausing, you can read any API
response.

## Starter data

```javascript
const companies = [{ name: "Google", employees: { count: 100000 } }];
```

Print:

```javascript
100000
```

## Expected output

```javascript
100000
```

## Toolbox

- 🎯 **Focus:** a three-level chain (`companies[0].employees.count`)
- ✅ **Allowed:** index access · dot notation · `console.log()`
- ❌ **Not allowed:** intermediate variables · a loop — the same two rules
  (brackets for position, dots for names) applied three times in one expression.

## Requirements

- One expression
- Print just the number

## Hint

<details>
<summary>Show hint</summary>

Left to right: `companies` → `[0]` the first company → `.employees` the object →
`.count` the number.

```javascript
companies[0].employees.count
```

`employees` sounds like it should be a list, but here it's an object holding a
count. Read the data, not the name — this is exactly how real APIs mislead you.

</details>
