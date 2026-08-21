# Exercise 13 — Find User Manually

**Trains:** searching with a loop and a condition · why `find()` exists
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

**Searching** is looping plus a condition: check each item, and act when one
matches.

The "no `find()`" rule is deliberate. You're building by hand the thing that
`find()` will later do in one line — and when you meet `find()` in a later phase,
you'll recognise it as this loop with a nicer face rather than as magic.

Think about stopping early, too. Once you've found John, why keep looking? `break`
exits the loop immediately. Real `find()` does exactly that.

## Starter data

```javascript
const users = [{name:"Alex"},{name:"John"},{name:"Sarah"}];
```

Find John. Do **not** use `find()` — use a loop.

## Expected output

Your call how to report it — printing the matched object is the most useful:

```javascript
{ name: 'John' }
```

## Toolbox

- 🎯 **Focus:** searching by hand — loop + `if` + `break`
- ✅ **Allowed:** `for` / `for...of` · `if` · `===` · `break` · `console.log()`
- ❌ **Not allowed:** `.find()` · `.filter()` · `.indexOf()` — build the search
  yourself so `find()` later reads as this loop with a nicer face.

## Requirements

- Use a loop with an `if` inside
- No `find()`, no `filter()`
- Compare with `===`, not `=`

## Hint

<details>
<summary>Show hint</summary>

Inside the loop, test each user's name:

```javascript
if (users[i].name === "John") {
  console.log(users[i]);
  break;
}
```

`===` compares. A single `=` would *assign*, silently renaming everyone to John —
a genuinely nasty bug, and the reason to always use `===`.

`break` stops the loop once you've found what you came for.

</details>
