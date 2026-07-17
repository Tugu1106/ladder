# Exercise 6 — Extract Names

**Trains:** `map()` over objects · the plucking pattern
**Difficulty:** 🟢 Easy

## What you're solving

Objects in, strings out. This is the single most common `map()` in existence.

It has a name: **plucking** — reaching into every record and pulling one field
out to get a flat list. You'll write this constantly: a list of IDs to fetch, a
list of emails to notify, a list of names to display.

Learn to read `users.map(user => user.name)` as one thought — "the users' names"
— rather than parsing it word by word. That fluency is what Phase 8 needs.

## Starter data

```javascript
const users = [{name:"John",age:20},{name:"Jane",age:25}];
```

Create `["John","Jane"]`.

## Expected output

```javascript
["John", "Jane"]
```

## Requirements

- Use `map()`
- Output is a flat array of strings — no objects
- `users` unchanged

## Hint

<details>
<summary>Show hint</summary>

```javascript
const names = users.map(user => user.name);
```

Short and idiomatic. `age` is simply not returned, so it's not in the result —
you didn't delete anything, you just built something new without it.

</details>
