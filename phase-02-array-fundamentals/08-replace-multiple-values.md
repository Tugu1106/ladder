# Exercise 8 — Replace Multiple Values

**Trains:** multiple index assignments · targeting positions
**Difficulty:** 🟢 Easy

## What you're solving

Two writes at two different positions, with the untouched items staying exactly
where they are.

The skill being drilled is translating "the first one" and "the third one" into
`0` and `2` without stopping to think. That translation needs to become automatic.

## Starter data

```javascript
const numbers = [10, 20, 30, 40];
```

Change `10 → 100` and `30 → 300`.

## Expected output

```javascript
[100, 20, 300, 40]
```

## Toolbox

- 🎯 **Focus:** multiple index assignments · translating "1st / 3rd" into `0` / `2`
- ✅ **Allowed:** index assignment · `console.log()`
- ❌ **Not allowed:** a new array literal · `.splice()` · loops — target each
  position directly so the index translation becomes automatic.

## Requirements

- Two index assignments
- `20` and `40` stay untouched at their positions
- Don't rebuild the array

## Hint

<details>
<summary>Show hint</summary>

`10` is first — index `0`. `30` is third — count carefully.

</details>
