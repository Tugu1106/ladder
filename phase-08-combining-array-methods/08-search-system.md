# Exercise 8 — Search System

**Trains:** case-insensitive search
**Difficulty:** 🟢 Easy

## What you're solving

Phase 6's Exercise 12 again — and note the result is `[{name:"Phone"}]`, whole
objects, not `["Phone"]`.

That's the tell that this is `filter()` alone with no `map()` after it. Read the
expected output shape before writing; it tells you how many steps you need.

## Starter data

```javascript
const products = [{name:"Laptop"},{name:"Phone"},{name:"Keyboard"},{name:"Mouse"}];
const keyword = "phone";
```

Return `[{name:"Phone"}]`

## Expected output

```javascript
[{ name: 'Phone' }]
```

## Toolbox

- 🎯 **Focus:** case-insensitive search · reading the output shape to size the pipeline
- ✅ **Allowed:** `.filter()` · `.includes()` · `.toLowerCase()` · `console.log()`
- ❌ **Not allowed:** a `.map()` after (the result is whole objects, so `filter()`
  alone) · loops — the expected shape tells you how many steps you need.

## Requirements

- `filter()` only — the result is objects
- Must match despite the case difference
- Use the `keyword` variable

## Hint

<details>
<summary>Show hint</summary>

```javascript
const results = products.filter(p =>
  p.name.toLowerCase().includes(keyword.toLowerCase())
);
```

Lowercase both sides. `"Phone".includes("phone")` is `false` and would give you
an empty array.

</details>
