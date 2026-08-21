# Exercise 6 — Total Ages

**Trains:** reducing over objects
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 1, with the numbers inside objects. Reach in for `.age` before adding.

That's the only change — `sum + number` becomes `sum + user.age`. You've done this
transition twice before (Phase 3 Ex 12, Phase 4 Ex 8); it should feel like
nothing now.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:30},{name:"Sarah",age:25}];
```

Calculate `75`.

## Expected output

```javascript
75
```

## Toolbox

- 🎯 **Focus:** reducing over objects — reach in for `.age` (`sum + user.age`)
- ✅ **Allowed:** `.reduce()` · dot notation · `console.log()`
- ❌ **Not allowed:** loops · `.forEach()` — `NaN` means you added the whole
  object; pull the number out first.

## Requirements

- Use `reduce()`
- Initial value `0`
- Print one number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
```

`NaN` means you wrote `sum + user` and tried to add an object to a number.

</details>
