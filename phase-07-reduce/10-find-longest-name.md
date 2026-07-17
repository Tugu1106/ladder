# Exercise 10 — Find Longest Name

**Trains:** reduce as a comparison · accumulator holding an item
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

Exercise 3's maximum, on strings instead of numbers.

The accumulator holds the **best candidate so far** — a value pulled from the
data, not a total built from it. Each pass asks "is this one better?" and returns
the winner.

Decide what the accumulator holds before you write anything: the name string, or
the whole user object? Either works. Holding the string is simpler when the
string is all you want.

## Starter data

```javascript
const users = [{name:"Alex"},{name:"Christopher"},{name:"Bob"}];
```

Result `Christopher`.

## Expected output

```javascript
Christopher
```

## Requirements

- Use `reduce()`
- Print the name, not its length
- No `sort()`

## Hint

<details>
<summary>Show hint</summary>

Accumulator holds the longest name string:

```javascript
const longest = users.reduce(
  (best, user) => user.name.length > best.length ? user.name : best,
  ""
);
```

`""` is a safe start — every real name beats length 0.

Holding the whole object works too, and gives you access to other fields:

```javascript
const longest = users.reduce(
  (best, user) => user.name.length > best.name.length ? user : best,
  users[0]
);
console.log(longest.name);
```

Note `>` not `>=`: on a tie, the **first** name wins. With `>=` the last would.
Neither is wrong, but know which you chose.

</details>
