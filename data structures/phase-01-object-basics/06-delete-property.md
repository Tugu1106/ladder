# Exercise 6 — Delete a Property

**Trains:** the `delete` operator
**Difficulty:** 🟢 Easy

## What you're solving

`delete` removes a key from an object entirely — not setting it to `null` or
`undefined`, but making it genuinely not there.

The difference matters: a property set to `undefined` still exists as a key,
while a deleted one doesn't. That distinction shows up later when you count keys
or serialize objects to JSON.

## Starter data

```javascript
const person = { name: "Tugu", age: 23, country: "Mongolia" };
```

Delete the `country` property, then print the object.

## Expected output

```javascript
{
  name: 'Tugu',
  age: 23
}
```

## Toolbox

- 🎯 **Focus:** the `delete` operator
- ✅ **Allowed:** `delete` · `console.log()`
- ❌ **Not allowed:** setting the key to `null` / `undefined` — that leaves the
  key in place; `delete` removes it entirely, which is the distinction here.

## Requirements

- Use the `delete` operator
- Print the whole object afterwards

## Hint

<details>
<summary>Show hint</summary>

`delete` is a keyword you put in front of the property you want gone:

```javascript
delete thing.key;
```

It's a statement on its own line — you don't assign anything to it.

</details>
