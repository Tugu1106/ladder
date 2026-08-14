# Exercise 11 — Multiple Conditions

**Trains:** combining conditions with `&&`
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Two conditions, both required. `&&` (logical AND) is `true` only when both sides
are — so an item must satisfy everything to survive.

This is where filters get real. "Active adults", "in-stock items under $50",
"unread messages from this week" — every non-trivial filter is a compound
condition.

Check the data carefully: John is active but 16, Sarah is 30 but inactive. Each
fails exactly one test, and each is excluded. Only Alex passes both. That's `&&`
being strict.

## Starter data

```javascript
const users = [{name:"Alex",age:25,active:true},{name:"John",age:16,active:true},{name:"Sarah",age:30,active:false}];
```

Keep users who are age >= 18 AND `active === true`.

Expected: `[Alex]`

## Expected output

```javascript
[{ name: 'Alex', age: 25, active: true }]
```

## Toolbox

- 🎯 **Focus:** combining conditions with `&&` (both must hold)
- ✅ **Allowed:** `.filter()` · `&&` · comparison · dot notation · `console.log()`
- ❌ **Not allowed:** two chained `filter()` calls (one pass with `&&` is clearer) ·
  `||` (that's OR, keeps too many) · `.map()`.

## Requirements

- Use `filter()` with `&&`
- One `filter()` call, not two chained
- Both conditions must hold

## Hint

<details>
<summary>Show hint</summary>

```javascript
const activeAdults = users.filter(user => user.age >= 18 && user.active);
```

`&&` is AND — both sides true. `||` would be OR — either side, which here would
keep all three.

Note `user.active` needs no `=== true`, per Exercise 7, even inside a compound
condition.

You *could* chain two `filter()` calls and get the same answer. One call with
`&&` is clearer and does one pass instead of two.

</details>
