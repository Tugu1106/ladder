# Exercise 9 — Add New Property

**Trains:** returning objects from `map()` · the spread operator · immutability
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

This is the most important exercise in Phase 5. Read the hint even if you solve
it.

Phase 4's Exercise 10 added a property by **mutating** each object. This one bans
that: "do not modify the original." So you must return **new** objects — copies,
carrying the old fields plus the new one.

That's the immutable style, and it's why React exists in the shape it does. React
decides whether to re-render by asking "is this a different object than before?"
Mutate in place and the answer is no, so nothing updates. Return copies and React
sees the change. Most "why isn't my component updating" questions are this
exact issue.

The tool is the **spread operator** `...`, which unpacks an object's properties
into a new one.

## Starter data

```javascript
const users = [{name:"John"},{name:"Jane"}];
```

Create a NEW array:

```javascript
[{name:"John",role:"student"},{name:"Jane",role:"student"}]
```

Do not modify the original.

## Expected output

```javascript
[
  { name: 'John', role: 'student' },
  { name: 'Jane', role: 'student' }
]
```

## Toolbox

- 🎯 **Focus:** returning *new* objects with spread (`{ ...user, role }`) — immutability
- ✅ **Allowed:** `.map()` · spread `...` · `console.log()`
- ❌ **Not allowed:** mutating (`user.role = ...`) · `.forEach()` — copy each
  object; that's why React sees the change. Wrap the object in `()` after the arrow.

## Requirements

- Use `map()`
- Return brand-new objects — no `user.role = "student"`
- Print `users` afterwards to prove it's still `[{name:"John"},{name:"Jane"}]`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const withRoles = users.map(user => ({ ...user, role: "student" }));
```

Two things to unpack.

**The parentheses around the object are required.** `user => { ...user }` is read
as a function *body*, not an object — braces are ambiguous after an arrow, and
JavaScript picks "body." Wrapping in `()` forces the object reading. Skip them
and you get `[undefined, undefined]`.

**`...user` copies every property** of `user` into the new object, then
`role: "student"` is added alongside. Order matters: a field listed after the
spread overrides the copied one, which is exactly how Exercise 12 does updates.

</details>
