# Exercise 12 — Use Index

**Trains:** the callback's second parameter
**Difficulty:** 🟢 Easy

## What you're solving

`forEach()` passes your callback more than just the item. The **second**
parameter is the index — take it when you need it, leave it out when you don't.

That's why every earlier exercise worked with one parameter: JavaScript doesn't
mind you ignoring arguments it offers. You've been getting the index all along
and simply not asking for it.

## Starter data

```javascript
const fruits = ["apple","banana","orange"];
```

`forEach()` gives `(item, index)`:

```javascript
array.forEach((item, index) => {});
```

## Expected output

```javascript
0 apple
1 banana
2 orange
```

## Requirements

- Take both parameters
- Index first in the output, then the fruit
- Indexes start at 0, matching the expected output

## Hint

<details>
<summary>Show hint</summary>

```javascript
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

Two parameters now need parentheses around them — `fruit => {}` is fine for one,
but `(fruit, index) => {}` is required for two.

Order matters and is fixed: item first, index second. Naming them backwards won't
swap them, it'll just lie to you.

</details>
