# Exercise 4 — Modify a Property

**Trains:** reassigning a property · `const` vs. object mutability
**Difficulty:** 🟢 Easy

## What you're solving

Objects are not frozen. You can point an existing property at a new value by
assigning to it.

There's a subtle lesson hiding here: even when the object is declared with
`const`, you **can** change its properties. `const` locks the variable to that
one object; it does not lock the object's contents. This trips up almost every
beginner, so notice it now.

## Starter data

```javascript
const person = { name: "Tugu", age: 22 };
```

Change the person's age from `22` to `23`, then print the whole object.

## Expected output

```javascript
{ name: 'Tugu', age: 23 }
```

## Toolbox

- 🎯 **Focus:** reassigning a property (`obj.key = newValue`)
- ✅ **Allowed:** dot notation · assignment `=` · `console.log()`
- ❌ **Not allowed:** a fresh object literal for `person` · `Object.assign()` /
  spread — you're mutating the existing object, and those would hide the mutation.

## Requirements

- Change the existing `age` property — don't create a new object
- Print the whole object afterwards

## Hint

<details>
<summary>Show hint</summary>

Reading a property and writing to one look almost identical. Reading puts it on
the right of the `=`; writing puts it on the left:

```javascript
thing.key = newValue;
```

</details>
