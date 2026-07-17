# Project 13 — URL Analyzer

**Trains:** chained `split()` · parsing structured text
**Difficulty:** ⭐⭐⭐

## What you're solving

The hardest string exercise here — pulling three pieces out of one URL by
splitting it repeatedly on different characters.

Work out the plan on paper first:

```
"https://google.com/users?id=5"
  split on "//"  → ["https:", "google.com/users?id=5"]
  split on "?"   → ["google.com/users", "id=5"]
  split on "/"   → ["google.com", "users"]
  split on "="   → ["id", "5"]
```

Each split narrows the target. That's parsing: chip away with a series of small,
dumb operations until only the piece you want is left.

Note `id: 5` is a **number** in the expected output, but `split()` always gives
strings. `"5"` and `5` are different, and you'll need `Number()` to cross over.

## Starter data

```javascript
const url = "https://google.com/users?id=5";
```

## Build this

Extract: `{ domain:"google.com", path:"users", id:5 }`

## Expected output

```javascript
{ domain: 'google.com', path: 'users', id: 5 }
```

## Requirements

- `domain` and `path` are strings
- `id` is a **number**, not `"5"`
- Do it with `split()` — meet the problem before the shortcut

## Hint

<details>
<summary>Show hint</summary>

Step by step, naming each stage:

```javascript
const afterProtocol = url.split("//")[1];      // "google.com/users?id=5"
const [beforeQuery, query] = afterProtocol.split("?");

const domain = beforeQuery.split("/")[0];      // "google.com"
const path = beforeQuery.split("/")[1];        // "users"
const id = Number(query.split("=")[1]);        // 5

const result = { domain, path, id };
```

`Number("5")` gives `5`. Without it you'd have `"5"`, and `id + 1` would be
`"51"` rather than `6`.

`const [a, b] = someArray` is **array destructuring** — it pulls positions into
named variables in one line. Same as `const a = arr[0]; const b = arr[1];`.

Real code uses the built-in parser, which handles ports, hashes, and encoding:

```javascript
const parsed = new URL(url);
parsed.hostname;                    // "google.com"
parsed.searchParams.get("id");      // "5"
```

Learn the manual way first — the same chip-away thinking works on log lines, CSVs,
and file paths, where no built-in exists.

</details>
