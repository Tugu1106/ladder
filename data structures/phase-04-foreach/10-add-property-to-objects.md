# Exercise 10 — Add Property To Objects

**Trains:** adding a property to every object
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 9 changed a property that existed. This one creates a property that
doesn't — and the reference rule means it sticks just the same.

This is **enriching** data, and it's everywhere in real work: a record arrives
from an API and you tag every item with a category, a computed flag, a display
name.

## Starter data

```javascript
const products = [{name:"Keyboard"},{name:"Mouse"}];
```

Add `category: "computer"` to every product.

## Expected output

```javascript
[
  { name: 'Keyboard', category: 'computer' },
  { name: 'Mouse', category: 'computer' }
]
```

## Toolbox

- 🎯 **Focus:** creating a new property on every object (enriching data)
- ✅ **Allowed:** `.forEach()` · dot assignment · `console.log()`
- ❌ **Not allowed:** `.map()` (that returns a new array) · a new array literal —
  the reference rule makes the added property stick to the originals.

## Requirements

- Use `forEach()`
- Every product gets it
- Print `products` afterwards

## Hint

<details>
<summary>Show hint</summary>

```javascript
products.forEach(product => {
  product.category = "computer";
});
```

Same as Exercise 9 — JavaScript creates the property because it wasn't there.

</details>
