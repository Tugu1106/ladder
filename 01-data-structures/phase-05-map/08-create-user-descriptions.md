# Exercise 8 — Create User Descriptions

**Trains:** `map()` building strings from multiple fields
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 6 plucked one field. This combines **two** into a sentence.

Compare with Phase 4's Exercise 7, which printed the same sentences. That version
sent them to the terminal and they were gone. This one *returns* them, so you end
up with an array of sentences you can use — sort them, join them, render them.

Printing is a dead end. Returning is a value. That's `forEach()` vs. `map()` in
one line.

## Starter data

```javascript
const users = [{name:"John",age:20}];
```

Transform into `["John is 20 years old"]`.

## Expected output

```javascript
["John is 20 years old"]
```

## Toolbox

- 🎯 **Focus:** `.map()` *returning* sentences (a value you can reuse, not a print)
- ✅ **Allowed:** `.map()` · template literals · `return` · `console.log()`
- ❌ **Not allowed:** `console.log()` *inside* the callback (that's `forEach()`'s
  dead-end job) — returning is the whole difference from Phase 4.

## Requirements

- Use `map()`
- Return the string — don't print it inside the callback
- Result is an array of strings

## Hint

<details>
<summary>Show hint</summary>

```javascript
const descriptions = users.map(user => `${user.name} is ${user.age} years old`);
```

`console.log()` inside the callback is the mistake to avoid — it prints, then
returns `undefined`, so you'd see the sentences *and* get `[undefined]` back.

</details>
