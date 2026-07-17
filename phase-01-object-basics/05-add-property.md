# Exercise 5 — Add a Property

**Trains:** adding a new property to an existing object
**Difficulty:** 🟢 Easy

## What you're solving

Assigning to a property that **doesn't exist yet** creates it. That's the same
syntax as Exercise 4 — JavaScript decides between "update" and "create" based on
whether the key is already there.

Real code leans on this constantly: tagging records with a computed field,
attaching a status after a check, enriching API data before you use it.

## Starter data

```javascript
const person = { name: "Tugu", age: 23 };
```

Add a new property:

```javascript
country : "Mongolia"
```

Print the object.

## Expected output

```javascript
{
  name: 'Tugu',
  age: 23,
  country: 'Mongolia'
}
```

## Requirements

- Add `country` after the object already exists — don't rewrite the literal
- Print the whole object

## Hint

<details>
<summary>Show hint</summary>

It's exactly the syntax from Exercise 4. The only difference is that `country`
isn't there yet, so JavaScript adds it instead of replacing it.

New properties land at the end of the object.

</details>
