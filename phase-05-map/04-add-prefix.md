# Exercise 4 — Add Prefix

**Trains:** `map()` over strings · transforming without arithmetic
**Difficulty:** 🟢 Easy

## What you're solving

`map()` isn't only for numbers. It transforms whatever's in the array — here,
strings.

Notice the transformation doesn't have to *compute* anything. Gluing a word onto
the front is a perfectly good transformation. `map()` cares only that your
callback returns something for each item.

## Starter data

```javascript
const names = ["John","Jane","Bob"];
```

Create `["Mr. John","Mr. Jane","Mr. Bob"]`.

## Expected output

```javascript
["Mr. John", "Mr. Jane", "Mr. Bob"]
```

## Requirements

- Use `map()`
- Mind the space after the dot
- `names` unchanged

## Hint

<details>
<summary>Show hint</summary>

Template literal:

```javascript
const titled = names.map(name => `Mr. ${name}`);
```

Or concatenation:

```javascript
const titled = names.map(name => "Mr. " + name);
```

Both fine. Watch the space — `"Mr."+name` gives `Mr.John`.

</details>
