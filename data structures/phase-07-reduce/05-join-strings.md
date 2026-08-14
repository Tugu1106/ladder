# Exercise 5 — Join Strings

**Trains:** a string accumulator · the separator problem
**Difficulty:** 🟢 Easy

## What you're solving

The accumulator doesn't have to be a number. Here it's a **string** you build up.

Which means the initial value is `""`, following Exercise 2's rule: the neutral
value for concatenation is the empty string.

There's a wrinkle that teaches something real. Naively adding `" " + word` every
pass gives you `" Hello World"` — a leading space, because the first word gets a
separator it doesn't need. Separators go *between* items, and "between" is
awkward when you're processing one at a time.

Real code uses `join(" ")` for exactly this reason. But meet the problem first.

## Starter data

```javascript
const words = ["Hello","World"];
```

Create `"Hello World"`.

## Expected output

```javascript
Hello World
```

## Toolbox

- 🎯 **Focus:** a *string* accumulator (`""` start) · the separator-between problem
- ✅ **Allowed:** `.reduce()` · `+` · ternary · `console.log()`
- ❌ **Not allowed:** `.join()` — that's the punchline you're feeling the need for;
  the neutral start for concatenation is the empty string.

## Requirements

- Use `reduce()`
- Exactly one space between, none at either end
- No `join()` — that's the punchline, not the exercise

## Hint

<details>
<summary>Show hint</summary>

The naive version has a leading space:

```javascript
words.reduce((sentence, word) => sentence + " " + word, "");  // " Hello World"
```

Fix it by only adding the space when the accumulator isn't empty:

```javascript
const sentence = words.reduce(
  (acc, word) => acc === "" ? word : acc + " " + word,
  ""
);
```

Another way: skip the initial value entirely. With no second argument, `reduce()`
uses the first item as the starting accumulator and begins at the second item —
so the first word never gets a separator:

```javascript
const sentence = words.reduce((acc, word) => acc + " " + word);
```

Elegant, but it **throws on an empty array**. That's why passing an initial value
is the safer default habit.

And in real code: `words.join(" ")`.

</details>
