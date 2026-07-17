# Exercise 12 — Search System

**Trains:** `includes()` · substring matching · case sensitivity
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

A real search box. The user types `"phone"` and you show matching products.

Two things make this harder than it looks. First, search is **partial** — typing
"pho" should find "Phone", so `===` is useless and you need `includes()`, which
asks "does this string contain that one."

Second, and this is the actual lesson: `"Phone".includes("phone")` is **false**.
Capital P, lowercase p, no match. A case-sensitive search box is broken — users
don't capitalise, and they'd conclude your product doesn't exist. Lowercase both
sides before comparing.

## Starter data

```javascript
const products = [{name:"Laptop"},{name:"Phone"},{name:"Keyboard"}];
const keyword = "phone";
```

Return products containing the keyword.

Expected: `[Phone]`

## Expected output

```javascript
[{ name: 'Phone' }]
```

## Requirements

- Use `filter()` with `includes()`
- Must find `Phone` despite the keyword being lowercase
- Use the `keyword` variable — don't hardcode `"phone"` in the condition

## Hint

<details>
<summary>Show hint</summary>

The naive version returns an empty array:

```javascript
products.filter(p => p.name.includes(keyword));   // [] — case mismatch
```

Lowercase both sides so they meet in the middle:

```javascript
const results = products.filter(p =>
  p.name.toLowerCase().includes(keyword.toLowerCase())
);
```

Lowercasing the keyword too means it works even if the user types "PHONE".

Using the `keyword` variable rather than a literal is what makes this a search
*system* — change the variable and it searches for something else.

</details>
