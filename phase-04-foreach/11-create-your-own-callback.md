# Exercise 11 — Create Your Own Callback

**Trains:** callbacks as ordinary values · named vs. inline functions
**Difficulty:** 🟢 Easy

## What you're solving

Every callback so far has been written inline. Now write it as a **named
function** and pass its name to `forEach()`.

This is the point of the exercise: a function is a *value*. You can name it,
store it in a variable, and hand it around like a number or a string. Inline
arrow functions aren't special syntax that `forEach()` requires — they're just
the convenient way to write a value you only need once.

Note carefully: you pass `printColor`, **not** `printColor()`. With parentheses
you'd call it immediately and hand `forEach()` the result. Without them you hand
over the function itself, for `forEach()` to call. That distinction bites
everyone once.

## Starter data

```javascript
const colors = ["red","blue","green"];
```

Use `forEach()`. The callback should receive one color and print:

```javascript
Color: red
Color: blue
Color: green
```

## Expected output

```javascript
Color: red
Color: blue
Color: green
```

## Requirements

- Define the callback as a separate named function
- Pass it by name — no parentheses
- It takes one parameter and prints the line

## Hint

<details>
<summary>Show hint</summary>

```javascript
function printColor(color) {
  console.log(`Color: ${color}`);
}

colors.forEach(printColor);
```

`colors.forEach(printColor())` is the classic mistake — it calls `printColor`
right away with nothing, prints `Color: undefined`, then hands `forEach()` the
`undefined` it returned.

</details>
