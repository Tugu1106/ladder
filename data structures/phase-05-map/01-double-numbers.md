# Exercise 1 — Double Numbers

**Trains:** `map()` · turning one list into a new list
**Difficulty:** 🟢 Easy

## What you're solving

You have a list of numbers and you need a **new** list where each number is
doubled — with the original left untouched.

This is the most common operation in real applications: an API hands you a list
and you reshape every item before showing or storing it. Getting `map()` into your
fingers now is what makes Phase 8's pipelines read naturally later.

`forEach()` couldn't do this. It visits every item but throws away whatever your
callback returns, so there's no result to catch. `map()` keeps those return
values and collects them into a new array. That's the entire difference between
the two methods.

## Starter data

```javascript
const numbers = [1, 2, 3, 4];
```

## Expected output

```javascript
[2, 4, 6, 8]
```

## Toolbox

- 🎯 **Focus:** `.map()` + `return` — build a new array from each item
- ✅ **Allowed:** `.map()` · arrow functions · `return` · `console.log()`
- ❌ **Not allowed:** `for` loops · `.forEach()` · mutating `numbers` — only
  `map()` catches the return values and collects them into a new array.

## Requirements

- Use `map()` — not a `for` loop, not `forEach()`
- Do **not** modify `numbers`
- Save the result in a new variable, then `console.log()` it

## Hint

<details>
<summary>Show hint</summary>

```javascript
const doubled = numbers.map(number => {
  return number * 2;
});
console.log(doubled);
```

`map()` runs your callback once per item and builds a new array from whatever
each call **returns**. Forget the `return` and you get `[undefined, undefined,
undefined, undefined]` — the classic first `map()` bug.

You must capture the result. `numbers.map(...)` on its own line accomplishes
nothing, because `map()` doesn't touch the original.

</details>
