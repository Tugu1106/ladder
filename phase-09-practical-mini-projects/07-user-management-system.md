# Project 7 — User Management System

**Trains:** three small functions over one list
**Difficulty:** 🟢 Easy

## What you're solving

Three independent questions, three small functions. No composition, no nesting —
just the everyday shape of a data module.

Worth noticing how small each one is. A function that's one `filter()` still earns
its name: `getAdmins()` says what it means at every call site, and if "admin" ever
becomes "admin or owner" you change one line rather than hunting through the
codebase.

The spec doesn't say what these return, so choose sensibly and be consistent.

## Starter data

```javascript
const users = [{name:"Alex",role:"admin",active:true},{name:"John",role:"user",active:false}];
```

## Build these

**`getAdmins()`** — users with `role === "admin"`

**`getActiveUsers()`** — users with `active: true`

**`countUsers()`** — how many users in total

## Expected output

Returning whole objects from the first two:

```javascript
[{ name: 'Alex', role: 'admin', active: true }]
[{ name: 'Alex', role: 'admin', active: true }]
2
```

## Requirements

- `countUsers` counts **everyone** — no filter
- Be consistent: if `getAdmins` returns objects, `getActiveUsers` should too
- Alex happens to be both admin and active — coincidence, not a rule

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getAdmins() {
  return users.filter(user => user.role === "admin");
}

function getActiveUsers() {
  return users.filter(user => user.active);
}

function countUsers() {
  return users.length;
}
```

`countUsers()` is just `.length`. Wrapping it in a function is still worth it —
it names the concept and gives you somewhere to put "excluding deleted users"
later.

</details>
