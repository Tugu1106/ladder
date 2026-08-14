# Exercise 1 — Adult Names

**Trains:** `filter().map()` · the two-step pipeline
**Difficulty:** 🟢 Easy

## What you're solving

Phase 8 has no new methods. You know all four already. What's new is that you now
**combine** them by default rather than reaching for one at a time.

Start with the most common pair: select, then reshape. Keep the adults, take their
names.

The mental shift is to stop asking "which method do I need" and start asking
"what are the steps?" Write the steps in English — *keep adults, take names* —
and the code falls out one line per step.

## Starter data

```javascript
const users = [{name:"Alex",age:25},{name:"John",age:15},{name:"Sarah",age:30}];
```

Steps: keep adults → get names.

Result: `["Alex","Sarah"]`

## Expected output

```javascript
["Alex", "Sarah"]
```

## Toolbox

- 🎯 **Focus:** the two-step pipeline — `filter().map()` (select, then reshape)
- ✅ **Allowed:** `.filter()` · `.map()` · dot notation · `console.log()`
- ❌ **Not allowed:** `for` / `while` loops — say the steps in English ("keep
  adults, take names") and write one method per step.

## Requirements

- Chain `filter()` into `map()`
- No loops
- Flat array of strings

## Hint

<details>
<summary>Show hint</summary>

```javascript
const names = users
  .filter(user => user.age >= 18)
  .map(user => user.name);
```

Same as Phase 6's Exercise 19. If it feels routine now, that's the phase working.

</details>
