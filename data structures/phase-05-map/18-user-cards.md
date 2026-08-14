# Exercise 18 — User Cards

**Trains:** reshaping objects into a different structure
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Objects in, **differently-shaped objects** out. Not adding a field like Exercise
9 — replacing the structure entirely. `name`/`age` becomes `title`/`description`.

This has a name: **adapting**. Your API says `name`, your UI component wants
`title`, and rather than rewriting either you `map()` between them. It's the seam
that lets two systems that disagree about naming work together, and it's a big
part of what frontend code actually does.

No spread here — you're not preserving the old shape, you're building a new one.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:30}];
```

Create:

```javascript
[{title:"Alex",description:"Age:20"},{title:"John",description:"Age:30"}]
```

## Expected output

```javascript
[
  { title: 'Alex', description: 'Age:20' },
  { title: 'John', description: 'Age:30' }
]
```

## Toolbox

- 🎯 **Focus:** reshaping into a *new structure* (adapting `name`/`age` → `title`/`description`)
- ✅ **Allowed:** `.map()` · fresh object literals · template literals · `console.log()`
- ❌ **Not allowed:** spread `...user` (it would drag `name`/`age` along) · `for` /
  `.forEach()` — build a clean new shape with exactly the two keys.

## Requirements

- Use `map()`
- Result objects have exactly `title` and `description` — no `name`, no `age`
- `description` is the string `Age:20` — no space after the colon

## Hint

<details>
<summary>Show hint</summary>

```javascript
const cards = users.map(user => ({
  title: user.name,
  description: `Age:${user.age}`
}));
```

Parentheses around the object, as always.

No `...user` — spreading would drag `name` and `age` along and you'd get all four
keys. You want a clean new shape.

`Age:${user.age}` has no space after the colon. Match the spec exactly.

</details>
