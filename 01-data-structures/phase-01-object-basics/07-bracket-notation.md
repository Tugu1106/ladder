# Exercise 7 — Bracket Notation

**Trains:** bracket notation · the second way to read a property
**Difficulty:** 🟢 Easy

## What you're solving

There are two ways to reach a property: dot notation (`person.name`) and
**bracket notation** (`person["name"]`). They do the same thing here.

So why learn both? Because brackets accept any string — including keys with
spaces (`data["first name"]`) and, crucially, keys held in a *variable*. That
last one is Exercise 8, and it's the reason brackets exist.

## Starter data

```javascript
const person = { name: "Tugu", age: 23 };
```

Print the name **using bracket notation** instead of dot notation.

## Expected output

```javascript
Tugu
```

## Toolbox

- 🎯 **Focus:** bracket notation with a string key (`obj["key"]`)
- ✅ **Allowed:** bracket notation `["..."]` · `console.log()`
- ❌ **Not allowed:** dot notation — the whole point is to practise the *other*
  syntax, the one that unlocks dynamic keys in Exercise 8.

## Requirements

- Use bracket notation — no dots
- Print just the name

## Hint

<details>
<summary>Show hint</summary>

Square brackets after the object, with the property name as a **string** inside:

```javascript
console.log(thing["key1"]);
```

The quotes are not optional here. Without them JavaScript looks for a *variable*
named `name` instead of the property — which is exactly what Exercise 8 uses on
purpose.

</details>
