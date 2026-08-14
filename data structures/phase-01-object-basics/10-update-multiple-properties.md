# Exercise 10 — Update Multiple Properties

**Trains:** updating several properties in place
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 4 changed one property. Now change three, and watch that the properties
you *don't* touch stay exactly as they were.

That's the mental model for updating records: you reach in and change specific
fields, leaving the rest alone.

## Starter data

Your object from Exercise 9:

```javascript
const person = {
  name: "Tugu",
  age: 23,
  job: "Developer",
  height: 175,
  isStudent: true
};
```

Change `age`, `height`, and `isStudent` to new values. Print the object.

## Expected output

Your values will differ; note that `name` and `job` are untouched:

```javascript
{
  name: 'Tugu',
  age: 24,
  job: 'Developer',
  height: 178,
  isStudent: false
}
```

## Toolbox

- 🎯 **Focus:** updating several keys in place
- ✅ **Allowed:** dot notation · assignment `=` · `console.log()`
- ❌ **Not allowed:** a new object literal · spread — rebuilding reorders keys,
  but updating a value keeps each key exactly where it was.

## Requirements

- Update the three existing properties — don't add new ones
- Leave `name` and `job` alone
- Keep each value's type the same (number stays a number, boolean stays a boolean)

## Hint

<details>
<summary>Show hint</summary>

Three assignments, same as Exercise 4.

Notice the properties keep their original position in the print — updating a
value doesn't move the key to the end. Only *new* keys go to the end.

</details>
