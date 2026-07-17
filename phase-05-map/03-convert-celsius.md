# Exercise 3 — Convert Celsius

**Trains:** `map()` for unit conversion
**Difficulty:** 🟢 Easy

## What you're solving

A genuine use of `map()`: the same values, expressed in different units.

This is exactly what a weather app does with an API response. The data arrives in
one unit and the user wants another, so you transform the whole list on the way
to the screen — and keep the original, because the user might toggle back.

## Starter data

```javascript
const temperatures = [0, 20, 30];
```

Formula: `Celsius * 1.8 + 32`

## Expected output

```javascript
[32, 68, 86]
```

## Requirements

- Use `map()`
- Apply the formula exactly — mind the operator precedence
- Original stays in Celsius

## Hint

<details>
<summary>Show hint</summary>

```javascript
const fahrenheit = temperatures.map(c => c * 1.8 + 32);
```

`*` binds tighter than `+`, so this multiplies first and then adds — which is
what you want. `c * (1.8 + 32)` would be very wrong; check that `0` maps to `32`
and you'll catch it.

</details>
