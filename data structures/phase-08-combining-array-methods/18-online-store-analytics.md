# Exercise 18 — Online Store Analytics ⭐

**Trains:** two stats from one filtered set · building a result object
**Difficulty:** ⭐⭐

## What you're solving

Exercise 14's shape on store data — revenue and product names from the sold items.

Both answers come from the same filtered set, so filter once and use it twice.
And note the result is an **object** with named fields, not two loose values.
That's the difference between "I calculated some numbers" and "I produced a
report."

## Starter data

```javascript
const products = [
  {name:"Laptop",price:1000,category:"tech",sold:true},
  {name:"Phone",price:500,category:"tech",sold:false},
  {name:"Chair",price:200,category:"home",sold:true}
];
```

Find: sold products, total revenue, sold product names.

### Expected

```javascript
{ revenue:1200, products:["Laptop","Chair"] }
```

## Expected output

```javascript
{ revenue: 1200, products: [ 'Laptop', 'Chair' ] }
```

## Toolbox

- 🎯 **Focus:** two stats from one filtered set, built into a report object
- ✅ **Allowed:** `.filter()` · `.reduce()` · `.map()` · a result object · `console.log()`
- ❌ **Not allowed:** loops · using `category` (a red herring) — filter the sold
  items once, then compute revenue and names from it.

## Requirements

- Only sold products count
- `category` is a red herring — nothing asks about it
- Result is one object with `revenue` and `products`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const sold = products.filter(p => p.sold);

const report = {
  revenue: sold.reduce((sum, p) => sum + p.price, 0),
  products: sold.map(p => p.name)
};
```

1000 + 200 = 1200. The unsold Phone (500) stays out — if you get 1700, your
filter isn't working.

`category` exists in the data and matters to nothing here. Real datasets are full
of fields you don't need; using them because they're there is a real temptation.

</details>
