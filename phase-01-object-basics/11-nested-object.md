# Exercise 11 — Nested Object

**Trains:** nested objects · chained dot notation
**Difficulty:** 🟢 Easy

## What you're solving

A property's value can itself be an **object**. That's how you group related
sub-facts: an address isn't one value, it's a city plus a district, and those
belong together.

Reading a nested value means chaining dots: `person.address.city` — go into
`person`, then into `address`, then take `city`. Real API responses nest several
levels deep, so this chain is a daily move.

## Starter data

```javascript
const person = { name: "Tugu", age: 23 };
```

Add an `address` object with this structure:

```javascript
address
    city
    district
```

Then print **only** the city.

## Expected output

Your values will differ:

```javascript
Ulaanbaatar
```

## Requirements

- `address` must be an object, not a string
- It needs both `city` and `district`
- Print only the city — not the whole address

## Hint

<details>
<summary>Show hint</summary>

The value you assign is a whole object literal:

```javascript
thing.key = { subKey: value, otherSubKey: value };
```

To read the city, chain two dots: object, then `address`, then `city`.

</details>
