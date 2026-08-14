# Exercise 16 — Shopping Cart Names

**Trains:** plucking a field that isn't called `name`
**Difficulty:** 🟢 Easy

## What you're solving

Plucking again — but the property is `item`, not `name`.

Trivial, and deliberately so. It's checking that you read the data rather than
pattern-matching on a familiar shape. Plenty of real bugs come from writing
`.name` on autopilot when the API called it `title` or `label`. `undefined` is
what you get, and it fails quietly.

## Starter data

```javascript
const cart = [{item:"Keyboard",quantity:2},{item:"Mouse",quantity:1}];
```

Create `["Keyboard","Mouse"]`.

## Expected output

```javascript
["Keyboard", "Mouse"]
```

## Toolbox

- 🎯 **Focus:** plucking a field that *isn't* called `name` (it's `item`)
- ✅ **Allowed:** `.map()` · dot notation · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` · reaching for `.name` on autopilot —
  read the data; the wrong field returns `undefined` quietly.

## Requirements

- Use `map()`
- The property is `item`
- `quantity` isn't wanted here

## Hint

<details>
<summary>Show hint</summary>

```javascript
const names = cart.map(entry => entry.item);
```

`[undefined, undefined]` means you reached for `.name` out of habit.

</details>
