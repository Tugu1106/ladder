# Exercise 8 — Dynamic Property

**Trains:** dynamic property access · why bracket notation exists
**Difficulty:** 🟢 Easy

## What you're solving

This is the payoff for Exercise 7. When the property name lives in a **variable**
and isn't known until the program runs, dot notation cannot help you — but
brackets can.

This is how real code handles a sort column the user picked, a form field name,
or a config key read from a file. The key isn't in your source code; it arrives
while the program is running.

## Starter data

```javascript
const person = { name: "Tugu", age: 23 };
const key = "age";
```

Use the `key` variable to print the person's age. No dot notation.

## Expected output

```javascript
23
```

## Requirements

- Use the `key` variable inside brackets
- Do not write `age` anywhere in your access — that's the whole point
- Do not use dot notation

## Hint

<details>
<summary>Show hint</summary>

In Exercise 7 you put a quoted string in the brackets. Here, put the **variable**
in — no quotes:

```javascript
thing[key]
```

JavaScript evaluates `key` first, gets `"age"`, then looks up that property.
Writing `thing["key"]` with quotes would look for a property literally named
`key`, which doesn't exist.

</details>
