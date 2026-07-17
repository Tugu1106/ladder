# Exercise 14 — Create IDs

**Trains:** `map()`'s index parameter · strings to objects
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

The reverse of Exercise 6. That turned objects into strings; this turns strings
into **objects**.

`map()` takes an index as its second parameter, exactly like `forEach()` did. The
catch: indexes start at 0 but the IDs must start at 1, so you need `index + 1`.
That off-by-one is the whole exercise.

A caution for later: using array position as an ID is fine for display, but real
IDs come from a database. Position changes when the list is sorted or filtered —
if you've ever seen a React list render the wrong rows after a sort, this is why.

## Starter data

```javascript
const names = ["Alex","John","Sarah"];
```

Create:

```javascript
[{id:1,name:"Alex"},{id:2,name:"John"},{id:3,name:"Sarah"}]
```

Use the index parameter.

## Expected output

```javascript
[
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Sarah' }
]
```

## Requirements

- Use `map()` with both parameters
- IDs start at 1, not 0
- Each result is an object with `id` and `name`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const withIds = names.map((name, index) => ({ id: index + 1, name: name }));
```

Parentheses around the object again — same rule as Exercise 9.

`{ name: name }` can be shortened to just `{ name }` when the key and variable
share a name. That's **shorthand property syntax**, and it's everywhere in modern
code:

```javascript
names.map((name, index) => ({ id: index + 1, name }));
```

</details>
