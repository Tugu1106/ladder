# Exercise 5 — Print With Text

**Trains:** template literals inside a callback
**Difficulty:** 🟢 Easy

## What you're solving

Phase 3's Exercise 11 combined data with fixed text using a loop. Same job, now
with `forEach()`.

Worth appreciating how little there is to write. No counter, no `.length`, no
indexing — just "for every name, print this sentence." The code has come to
match the sentence you'd say out loud, which is the entire point of this phase.

## Starter data

```javascript
const names = ["John","Jane","Bob"];
```

## Expected output

```javascript
Hello John
Hello Jane
Hello Bob
```

## Requirements

- Use `forEach()`
- One line per name, with the space after "Hello"

## Hint

<details>
<summary>Show hint</summary>

Template literal — backticks, `${}` around the value:

```javascript
names.forEach(name => {
  console.log(`Hello ${name}`);
});
```

Backticks, not quotes. `'Hello ${name}'` prints the `${name}` literally.

</details>
