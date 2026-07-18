# Exercise 6 — User Cards

**Trains:** `map()` reshaping objects · adapting data for a UI
**Difficulty:** 🟢 Easy

## What you're solving

No filter here — every user becomes a card. Just `map()`, reshaping objects into
a different structure.

Note this is Phase 5's Exercise 18 with `text` instead of `description`. The rep
is checking you read the spec rather than recalling the old one. Real work has
this trait: two systems, nearly identical shapes, different field names, and no
warning when you get it wrong.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:30}];
```

Create: `[{title:"Alex",text:"Age:20"},{title:"John",text:"Age:30"}]`

## Expected output

```javascript
[
  { title: 'Alex', text: 'Age:20' },
  { title: 'John', text: 'Age:30' }
]
```

## Toolbox

- 🎯 **Focus:** `.map()` reshaping every object (no filter — read the spec)
- ✅ **Allowed:** `.map()` · fresh object literals · template literals · `console.log()`
- ❌ **Not allowed:** `.filter()` (everyone gets a card) · spread (the new shape
  drops `name`/`age`) · loops — match the keys `title`/`text` exactly.

## Requirements

- `map()` only — no filter, everyone gets a card
- Keys are `title` and `text` — not `description`
- `Age:20` has no space after the colon

## Hint

<details>
<summary>Show hint</summary>

```javascript
const cards = users.map(user => ({
  title: user.name,
  text: `Age:${user.age}`
}));
```

Parentheses around the returned object. No spread — the new shape doesn't want
`name` or `age`.

</details>
