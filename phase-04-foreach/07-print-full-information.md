# Exercise 7 — Print Full Information

**Trains:** two properties, one sentence
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 6 pulled out one property; this pulls two and combines them with text.
Exercise 5's template literal meets Exercise 6's objects.

## Starter data

```javascript
const users = [{name:"John",age:20},{name:"Jane",age:25}];
```

## Expected output

```javascript
John is 20
Jane is 25
```

## Requirements

- Use `forEach()`
- Both properties in one line of output each
- Match the format exactly — no "years old" this time

## Hint

<details>
<summary>Show hint</summary>

```javascript
users.forEach(user => {
  console.log(`${user.name} is ${user.age}`);
});
```

Two `${}` slots, one word of fixed text between them.

</details>
