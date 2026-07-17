# Exercise 18 — Permission System

**Trains:** role checks · the shape of authorization
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 17's string match, applied to roles — and this is the shape of every
permissions system you'll ever touch.

Real apps ask this constantly: who can see the admin panel, who can delete, who
gets the dashboard. It's the same `filter()` you've written five times now, which
is rather the point — permissions aren't a special technique, they're a filter
with high stakes.

## Starter data

```javascript
const users = [{name:"Alex",role:"admin"},{name:"John",role:"user"},{name:"Sarah",role:"admin"}];
```

Get admins only.

## Expected output

```javascript
[
  { name: 'Alex', role: 'admin' },
  { name: 'Sarah', role: 'admin' }
]
```

## Requirements

- Use `filter()` with `===`
- Two admins in the result

## Hint

<details>
<summary>Show hint</summary>

```javascript
const admins = users.filter(user => user.role === "admin");
```

If roles could be `"admin"` or `"superadmin"`, you'd reach for `includes()` on an
array of allowed roles instead. Not needed here — just worth knowing the simple
version has limits.

</details>
