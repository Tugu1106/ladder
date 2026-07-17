# Exercise 13 — Convert Array To Object

**Trains:** indexing data by ID · the lookup table pattern
**Difficulty:** ⭐⭐

## What you're solving

Turning a list into a **lookup table** — one of the most useful things `reduce()`
does.

Why bother? Finding a user by ID in an array means scanning it: `users.find(u => u.id === 2)`
checks each item until it hits. In an object keyed by ID, `usersById[2]` is
instant, no scanning at all.

That difference doesn't matter for two users. It matters enormously for two
thousand, and it's why Redux, normalizr, and most serious state layers store data
this way. You'll meet it as "normalizing" — this exercise is the whole technique.

Note the values in the result have **no `id`** — it's the key now, so keeping it
inside would be redundant.

## Starter data

```javascript
const users = [{id:1,name:"Alex"},{id:2,name:"John"}];
```

Create `{ 1:{name:"Alex"}, 2:{name:"John"} }`.

## Expected output

```javascript
{ '1': { name: 'Alex' }, '2': { name: 'John' } }
```

## Requirements

- Use `reduce()` with `{}` as the initial value
- Key each entry by its `id`
- Values hold `name` only, not `id`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const byId = users.reduce((lookup, user) => {
  lookup[user.id] = { name: user.name };
  return lookup;
}, {});
```

Bracket notation with a variable again — `lookup[user.id]` uses the value of
`user.id` as the key.

Note the keys print as `'1'` and `'2'` with quotes. **Object keys are always
strings** in JavaScript; the number `1` gets converted. `byId[1]` and `byId["1"]`
both work, because the lookup converts too. A quirk worth knowing.

To keep the whole user including `id`, it'd be `lookup[user.id] = user`. The spec
here wants `name` only.

</details>
