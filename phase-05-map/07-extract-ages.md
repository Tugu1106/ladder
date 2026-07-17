# Exercise 7 — Extract Ages

**Trains:** plucking a different field
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 6 with a different property. Deliberately trivial — the point is that
switching which field you pluck takes one word.

## Starter data

```javascript
const users = [{name:"John",age:20},{name:"Jane",age:25}];
```

Create `[20,25]`.

## Expected output

```javascript
[20, 25]
```

## Requirements

- Use `map()`
- Numbers, not strings

## Hint

<details>
<summary>Show hint</summary>

```javascript
const ages = users.map(user => user.age);
```

One word different from Exercise 6.

</details>
