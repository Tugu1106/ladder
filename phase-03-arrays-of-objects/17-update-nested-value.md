# Exercise 17 — Update Nested Value

**Trains:** writing to a nested property
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 16 read through the chain. Now write through it.

The rule that's held all along holds here too: the path that reads a value writes
to it when you move it left of the `=`. Depth never changes that.

## Starter data

```javascript
const user = {
  name: "Tugu",
  address: { city: "Ulaanbaatar", country: "Mongolia" }
};
```

Change `city` to `Darkhan`.

## Expected output

```javascript
{
  name: 'Tugu',
  address: { city: 'Darkhan', country: 'Mongolia' }
}
```

## Requirements

- Change only `city` — `country` must survive
- Don't replace the whole `address` object
- Print the user afterwards

## Hint

<details>
<summary>Show hint</summary>

```javascript
user.address.city = "Darkhan";
```

Assigning a fresh object to `user.address` would work for `city` but throw away
`country`. Reach in for the one property.

</details>
