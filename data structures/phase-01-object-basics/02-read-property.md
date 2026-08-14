# Exercise 2 — Read One Property

**Trains:** dot notation · reading a property
**Difficulty:** 🟢 Easy

## What you're solving

Creating an object is only useful if you can get data back out of it. **Dot
notation** is how you reach in and pull out a single value.

You will type this more than almost any other thing in JavaScript: `user.name`,
`product.price`, `response.status`.

## Starter data

Keep the same `person` object from Exercise 1.

```javascript
const person = { name: "Tugu", age: 22 };
```

Print **only** the person's name.

## Expected output

```javascript
Tugu
```

## Toolbox

- 🎯 **Focus:** dot notation read (`obj.key`)
- ✅ **Allowed:** dot notation · `console.log()`
- ❌ **Not allowed:** bracket notation `[]` — that's Exercise 7; here you're
  grooving the dot until it's automatic.

## Requirements

- Use dot notation
- Print just the name — not the whole object

## Hint

<details>
<summary>Show hint</summary>

Dot notation is the object name, a dot, then the property name — no quotes:

```javascript
console.log(thing.key1);
```

Note the output has no quotes around `Tugu`. That's because you printed the
string itself, not the object containing it.

</details>
