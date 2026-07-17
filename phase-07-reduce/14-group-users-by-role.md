# Exercise 14 — Group Users By Role

**Trains:** grouping with dynamic keys · the groupBy pattern
**Difficulty:** ⭐⭐⭐

## What you're solving

Exercise 11 grouped into buckets you knew about. Exercise 12 built keys from
data. This is both at once — and it's the pattern you'll reach for most often.

**Group by** is everywhere: posts by author, sales by month, errors by type,
students by class. It's the "GROUP BY" of SQL, written by hand.

The mechanics combine both earlier lessons. The key is dynamic (`group[user.role]`),
and the value is an array you push into — so before pushing, that array has to
exist. First time you meet `"admin"` there's nothing there, and `undefined.push()`
crashes.

## Starter data

```javascript
const users = [{name:"Alex",role:"admin"},{name:"John",role:"user"},{name:"Sarah",role:"admin"}];
```

Create `{ admin:["Alex","Sarah"], user:["John"] }`.

## Expected output

```javascript
{ admin: [ 'Alex', 'Sarah' ], user: [ 'John' ] }
```

## Requirements

- Use `reduce()` with `{}` as the initial value
- Roles come from the data — don't hardcode `admin`/`user`
- Arrays hold **names**, not whole objects
- Create each array before pushing into it

## Hint

<details>
<summary>Show hint</summary>

```javascript
const grouped = users.reduce((group, user) => {
  if (!group[user.role]) {
    group[user.role] = [];
  }
  group[user.role].push(user.name);
  return group;
}, {});
```

The `if (!group[user.role])` guard is the whole trick — create the array on first
sighting, then push. Drop it and you get "cannot read property 'push' of
undefined."

Compact version using `||`, same as Exercise 12:

```javascript
const grouped = users.reduce((group, user) => {
  group[user.role] = group[user.role] || [];
  group[user.role].push(user.name);
  return group;
}, {});
```

Push `user` instead of `user.name` and you'd group whole objects — often what you
actually want in real code. Here the spec says names.

Modern JavaScript has `Object.groupBy()` for this. Knowing the manual version is
still worth it — you'll read this code for years.

</details>
