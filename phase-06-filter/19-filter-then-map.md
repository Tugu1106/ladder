# Exercise 19 — Filter Then Map

**Trains:** chaining `filter()` into `map()` · pipelines
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

The first real **pipeline**, and the moment this whole course has been building
toward.

`filter()` returns an array. `map()` is a method on arrays. So you can call
`map()` directly on what `filter()` gives back — no intermediate variable, no
loop. Data flows left to right through a series of steps.

Order matters, and not just for correctness. Filter first and `map()` only runs
on the survivors. Map first and you'd transform everyone before throwing some
away — wasted work, and worse, you'd have plucked the names already and lost the
ages you needed to filter on.

**Filter first, then map.** That instinct is most of Phase 8.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:15},{name:"Sarah",age:30}];
```

First keep adults, then get only names.

## Expected output

```javascript
["Alex", "Sarah"]
```

## Requirements

- Use `filter()` then `map()`
- Chain them — one statement
- Result is a flat array of strings

## Hint

<details>
<summary>Show hint</summary>

The two-step version, which is fine and clear:

```javascript
const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);
```

Chained, because `filter()` hands back an array:

```javascript
const names = users
  .filter(user => user.age >= 18)
  .map(user => user.name);
```

Breaking the chain across lines with each `.method()` indented is the convention.
It reads as a list of steps: take users, keep adults, take names.

Try the wrong order — `.map(u => u.name).filter(u => u.age >= 18)` — and you get
`[]`. Once you've mapped to strings, `.age` is gone.

</details>
