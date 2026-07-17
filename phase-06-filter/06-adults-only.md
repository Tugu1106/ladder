# Exercise 6 — Adults Only

**Trains:** `filter()` on objects · whole objects survive
**Difficulty:** 🟢 Easy

## What you're solving

First `filter()` over objects, and the key observation is in the output: you get
back **whole user objects**, not names or ages.

That's the rule. The callback reaches into `user.age` to decide, but what survives
is the entire item, untouched. `filter()` selects; it never transforms. If you
want just the names, you filter *and then* map — which is Exercise 19.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:15},{name:"Sarah",age:30}];
```

Keep only adults.

## Expected output

```javascript
[{name:"Alex",age:20},{name:"Sarah",age:30}]
```

## Requirements

- Use `filter()`
- Full objects in the result, with both properties
- Adult means `>= 18`, so exactly 18 counts

## Hint

<details>
<summary>Show hint</summary>

```javascript
const adults = users.filter(user => user.age >= 18);
```

Reach into the object for the condition; return nothing yourself — `filter()`
keeps the whole object for you.

`>= 18` not `> 18`. An 18-year-old is an adult, and `>` would quietly exclude
them. Nobody in this data is 18, so only your operator choice protects you.

</details>
