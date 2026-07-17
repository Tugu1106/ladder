# Exercise 1 — Create an Object

**Trains:** object literal syntax · `console.log()`
**Difficulty:** 🟢 Easy

## What you're solving

An **object** groups related facts about one thing under a single name. Instead
of juggling two loose variables `name` and `age`, you keep them together in one
`person`.

This is the foundation for everything ahead. An API response, a row from a
database, a React component's props — all of them arrive as objects shaped like
the one you're about to write.

## Starter data

Build it yourself. Create an object named `person` with:

- `name`: `"Tugu"`
- `age`: `22`

Then print the entire object.

## Expected output

```javascript
{ name: 'Tugu', age: 22 }
```

## Requirements

- Use object literal syntax (`{}`)
- Both properties go in when you create it — don't add them afterwards
- Print the whole object, not the individual properties

## Hint

<details>
<summary>Show hint</summary>

An object literal is a pair of braces holding `key: value` pairs separated by
commas:

```javascript
const thing = { key1: value1, key2: value2 };
```

Strings need quotes. Numbers don't.

</details>
