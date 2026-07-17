# Exercise 14 — Count Adults

**Trains:** counting conditionally · a counter that only sometimes increments
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 12's accumulator always added. This one adds **only when a condition
holds** — a counter that steps forward for matches and stays put for everything
else.

That's the shape behind every "how many are X" question you'll ever answer: how
many unread, how many in stock, how many failed. Later, `filter().length` does
this in one line; today you build it.

## Starter data

```javascript
const people = [{name:"A",age:15},{name:"B",age:20},{name:"C",age:30}];
```

Count people age >= 18.

## Expected output

```javascript
2
```

## Requirements

- Use a loop with an `if`
- Add `1` per match, not the age
- Print only the final count

## Hint

<details>
<summary>Show hint</summary>

```javascript
let count = 0;
// in the loop:
//   if (people[i].age >= 18) { count++; }
console.log(count);
```

`count++` adds one. `>=` is "greater than or equal", so 18 itself counts as an
adult — using `>` would give you `1` and quietly lose anyone exactly 18.

</details>
