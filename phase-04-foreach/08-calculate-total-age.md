# Exercise 8 — Calculate Total Age

**Trains:** accumulating a property across objects
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 3 summed plain numbers. Now the numbers live inside objects, so reach in
for `.age` before adding.

Same closure, same outside-the-callback variable, one extra dot. This is the
third time you've built this pattern (Phase 2 Ex 20, Phase 3 Ex 12, here) — that
repetition is deliberate. When `reduce()` shows up in Phase 7 you'll recognise it
instantly instead of finding it cryptic.

## Starter data

```javascript
const people = [{name:"A",age:10},{name:"B",age:20},{name:"C",age:30}];
```

Calculate total age.

## Expected output

```javascript
60
```

## Requirements

- Use `forEach()`
- `total` declared before, printed after
- Print only the final number

## Hint

<details>
<summary>Show hint</summary>

```javascript
let total = 0;
people.forEach(person => {
  total += person.age;
});
console.log(total);
```

`NaN` means you added the object rather than `person.age`.

</details>
