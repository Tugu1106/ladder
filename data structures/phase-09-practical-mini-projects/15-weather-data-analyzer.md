# Project 15 — Weather Data Analyzer

**Trains:** three stats over plain numbers · min and max
**Difficulty:** 🟢 Easy

## What you're solving

The simplest data in the whole phase — a flat array of numbers, no objects — and
three classic statistics over it.

Highest and lowest are the same `reduce()` with the comparison flipped. Seeing
that they're one pattern, not two, is the point.

Start from `temperatures[0]` for both, not `0`. Winter temperatures go negative,
and `getHighestTemperature()` starting at `0` would confidently report `0` for a
list of all-negative days — a day that never happened. Phase 3's Exercise 15 made
this point; here the data makes it real.

## Starter data

```javascript
const temperatures = [20, 25, 30, 15];
```

## Build these

**`getAverageTemperature()`** → `22.5`

**`getHighestTemperature()`** → `30`

**`getLowestTemperature()`** → `15`

## Expected output

```javascript
22.5
30
15
```

## Toolbox

- 🎯 **Focus:** min and max as one `reduce()` with the comparison flipped
- ✅ **Allowed:** `function` · `.reduce()` · ternary · comparison
- ❌ **Avoid:** `Math.max()` / `Math.min()` · seeding from `0` (negatives break
  it — seed from `temperatures[0]`). Highest vs. lowest differ by one character.

## Requirements

- All three return numbers
- No `Math.max()` / `Math.min()` — use `reduce()`
- Seed from `temperatures[0]`, not `0`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getAverageTemperature() {
  const total = temperatures.reduce((sum, t) => sum + t, 0);
  return total / temperatures.length;
}

function getHighestTemperature() {
  return temperatures.reduce((max, t) => t > max ? t : max, temperatures[0]);
}

function getLowestTemperature() {
  return temperatures.reduce((min, t) => t < min ? t : min, temperatures[0]);
}
```

Highest and lowest differ by one character: `>` becomes `<`. That's it.

The average is `90 / 4 = 22.5` — a real decimal, unlike the tidy 80s earlier. No
`toFixed()` asked for here, so leave it as a number.

</details>
