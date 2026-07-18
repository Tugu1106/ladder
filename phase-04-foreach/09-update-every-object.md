# Exercise 9 — Update Every Object

**Trains:** mutating objects through a callback · why this works
**Difficulty:** 🟢 Easy

## What you're solving

Here's the surprise. Exercise 2 taught you that `forEach()` can't change the
array — doubling numbers left the original alone. Yet this exercise changes every
object in the array and it sticks. Why?

Because objects are held by **reference**. When `forEach()` hands your callback a
number, it hands over a copy, and changing the copy affects nothing. When it hands
over an object, it hands over a *pointer to the same object*. `user.active = true`
reaches through that pointer and changes the real thing.

So the rule from Exercise 2 needs refining: `forEach()` can't replace the array's
slots, but it can absolutely reach into objects those slots point at. This one
distinction explains a large share of confusing JavaScript bugs.

## Starter data

```javascript
const users = [{name:"John",active:false},{name:"Jane",active:false}];
```

Use `forEach()` to set everyone's `active` to `true`.

## Expected output

```javascript
[{name:"John",active:true},{name:"Jane",active:true}]
```

## Toolbox

- 🎯 **Focus:** mutating objects through the callback (objects held by reference)
- ✅ **Allowed:** `.forEach()` · dot assignment (`user.active = true`) · `console.log()`
- ❌ **Not allowed:** building a new array · reassigning the parameter
  (`user = {...}`) — that breaks the pointer and the real object never changes.

## Requirements

- Use `forEach()`
- Modify the existing objects — don't build a new array
- Print `users` afterwards to prove the change survived

## Hint

<details>
<summary>Show hint</summary>

```javascript
users.forEach(user => {
  user.active = true;
});
```

Then print `users`. The change is really there.

Try `user = { name: user.name, active: true }` instead and print — nothing
changes. That reassigns your local parameter, breaking the pointer, and the real
object never hears about it.

</details>
