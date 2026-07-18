# Project 10 — Restaurant Order System

**Trains:** a function taking an object · reducing over a nested array
**Difficulty:** ⭐

## What you're solving

`calculateOrderTotal(order)` takes **one order** and totals its items.

The parameter is the lesson. Passing the order in — rather than reading `orders`
from the outer scope — makes the function work for *any* order, including ones
that don't exist yet. That's the difference between a function and a shortcut.

It's also what makes the nested case easy. Phase 7's Exercise 20 needed a nested
reduce; here, if you have `calculateOrderTotal`, totalling all orders is just
`orders.map(calculateOrderTotal).reduce(...)`. Small functions compose.

## Starter data

```javascript
const orders = [{customer:"Alex",items:[{name:"Pizza",price:20},{name:"Drink",price:5}]}];
```

## Build this

**`calculateOrderTotal(order)`** → `25`

```javascript
calculateOrderTotal(orders[0])   // 25
```

## Expected output

```javascript
25
```

## Toolbox

- 🎯 **Focus:** a function taking an *object* · reducing over its nested array
- ✅ **Allowed:** `function` with args · `.reduce()` · `.map()` · loops if needed
- ❌ **Avoid:** reading `orders` from outer scope or by index — take the order in,
  so it works for any order and composes (`orders.map(calculateOrderTotal)`).

## Requirements

- Takes an order **object** as a parameter, not an index
- Reduces over `order.items`
- Returns a number

## Hint

<details>
<summary>Show hint</summary>

```javascript
function calculateOrderTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price, 0);
}
```

`order.items` — reduce the array inside the object, not the orders array.

20 + 5 = 25. No quantities in this data, so each item counts once.

Now watch how cheap the whole-restaurant revenue becomes:

```javascript
orders.map(calculateOrderTotal).reduce((sum, t) => sum + t, 0);
```

`map(calculateOrderTotal)` passes your function by name, exactly like Phase 4's
Exercise 11. That's why the parameter mattered.

</details>
