# Exercise 13 — Group Users By Age

**Trains:** grouping by a numeric key · object keys are strings
**Difficulty:** ⭐⭐

## What you're solving

Exercise 11's grouping, with a **number** as the key instead of a string.

Which surfaces the quirk from Phase 7's Exercise 13: object keys are always
strings. Group by the number `20` and the key becomes `"20"` — JavaScript
converts it silently. Print the result and you'll see `{ '20': [...] }`.

It mostly doesn't matter, because lookups convert too — `grouped[20]` and
`grouped["20"]` both work. But it bites in one specific way: numeric-looking keys
get sorted numerically by JavaScript when you enumerate them, unlike string keys
which keep insertion order. Rarely matters, occasionally baffling.

## Starter data

```javascript
const users = [{name:"Alex",age:20},{name:"John",age:20},{name:"Sarah",age:30}];
```

Output: `{ 20:["Alex","John"], 30:["Sarah"] }`

## Expected output

```javascript
{ '20': [ 'Alex', 'John' ], '30': [ 'Sarah' ] }
```

## Toolbox

- 🎯 **Focus:** grouping by a *numeric* key (object keys are always strings)
- ✅ **Allowed:** `.reduce()` · `{}` start · bracket keys · `.push()` · `|| []` · `console.log()`
- ❌ **Not allowed:** loops · hardcoded ages — the code is identical to string
  grouping; the key `20` just prints as `'20'`.

## Requirements

- `reduce()` with `{}` initial value
- Ages from the data
- Arrays hold names

## Hint

<details>
<summary>Show hint</summary>

```javascript
const grouped = users.reduce((group, user) => {
  group[user.age] = group[user.age] || [];
  group[user.age].push(user.name);
  return group;
}, {});
```

Identical to Exercise 11 — the key being a number changes nothing about the code.

The quotes in the printed output are Node showing you the keys really are strings.

</details>
