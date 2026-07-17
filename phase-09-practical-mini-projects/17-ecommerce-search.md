# Project 17 — Ecommerce Search ⭐

**Trains:** partial matching · a search function with a parameter
**Difficulty:** ⭐

## What you're solving

A real search box, as a reusable function.

`searchProducts("lap")` must find `"Laptop"` — which rules out `===` completely.
Nobody types the whole product name; they type three letters and expect results.
That's `includes()`.

And case, as always. `"Laptop".includes("lap")` happens to be `true` here, but
`"LAP"` would fail. Lowercase both sides and it works whatever they type.

Decide the return shape: matching products, or their names? The spec's `Laptop`
is ambiguous. Pick one, note it, be consistent.

## Starter data

```javascript
const products = [{name:"Laptop",category:"tech"},{name:"Chair",category:"home"}];
```

## Build this

**`searchProducts(keyword)`**

```javascript
searchProducts("lap")     // matches Laptop
searchProducts("LAP")     // should also match Laptop
searchProducts("xyz")     // []
```

## Expected output

Returning matching product objects:

```javascript
[{ name: 'Laptop', category: 'tech' }]
[{ name: 'Laptop', category: 'tech' }]
[]
```

## Requirements

- Partial matching — `"lap"` finds `"Laptop"`
- Case-insensitive both ways
- Takes the keyword as a parameter
- No match returns an empty array, not `undefined`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function searchProducts(keyword) {
  return products.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
}
```

`filter()` returns `[]` naturally when nothing matches — no special case needed.
That's a nice property: an empty array still works with `.map()`, `.length`, and
everything else, whereas `undefined` crashes them.

To search category too, `||` the two conditions:

```javascript
product.name.toLowerCase().includes(k) || product.category.toLowerCase().includes(k)
```

</details>
