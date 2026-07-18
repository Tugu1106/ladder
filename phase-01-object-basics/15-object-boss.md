# Exercise 15 — Mini Boss ⭐

**Trains:** everything in Phase 1 · designing an object from scratch
**Difficulty:** 🟢 Easy → ⭐ Boss

## What you're solving

No starter data this time. You design the whole structure yourself, then read
values back out of it at different depths.

This is the shape of a real game-save, a user profile, an API payload. If you can
build this without looking anything up, Phase 1 has done its job and arrays of
objects (Phase 3) will feel like an extension rather than a new topic.

## Starter data

None — build it from scratch.

Create a `player` object with this structure:

```javascript
player
    username
    level
    hp
    mana
    inventory
    stats
```

where `stats` is itself an object:

```javascript
stats
    strength
    agility
    intelligence
```

Then print:

- username
- hp
- intelligence

## Expected output

Your values will differ. Three lines, one per printed value:

```javascript
TuguTheBrave
100
15
```

## Toolbox

- 🎯 **Focus:** designing a nested object from scratch · reading at two depths
- ✅ **Allowed:** object literal · nested object · dot notation · `console.log()`
- ❌ **Not allowed:** arrays (Phase 1 rule — keep `inventory` a number or string) ·
  loops · `Object.keys()` / `Object.values()` — reach each value by its known path.

## Requirements

- `stats` must be a nested object
- Sensible types: `username` a string, `level`/`hp`/`mana` numbers
- `intelligence` comes from inside `stats` — a two-level chain
- Print exactly those three values, in that order

## Hint

<details>
<summary>Show hint</summary>

Build the whole thing in one object literal, nesting `stats` inline:

```javascript
const player = {
  username: "...",
  stats: { strength: 10 }
};
```

`username` and `hp` are one dot away. `intelligence` is two.

`inventory` has no required type — Phase 1 rules say no arrays, so a number (how
many slots) or a string keeps you inside the rules.

</details>
