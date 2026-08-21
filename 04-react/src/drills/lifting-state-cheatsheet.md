# Lifting State Up — Simple Cheatsheet

## The problem (why this exists)

State is **local** to the component that declares it. That's fine for one
component — but real apps have *many* components that need to **share** the same
data. A child can't reach into another component's state.

**The fix:** move the state **up** into a shared **parent**, then pass it **down**
to the children that need it. That's "lifting state up."

## The one rule — the whole idea in a line

> **Data flows DOWN (props). Events flow UP (function props).**

- **Down:** the parent passes its *value* to a child as a prop → the child can **read** it.
- **Up:** the parent passes a *function* to a child → the child **calls** it to change the parent's state.

A child never grabs the parent's state directly. The parent **hands** it a value
to read and a function to call.

```
        ┌─────────── PARENT (owns the state) ───────────┐
        │  const [count, setCount] = useState(0);        │
        └───────────────────────────────────────────────┘
             │  count (a value)        │  a function
             │  flows DOWN ▼           │  flows DOWN ▼
        ┌──────────────┐          ┌───────────────────────┐
        │  <Display />  │          │  <Button onAdd={...} /> │
        │  reads count  │          │  calls onAdd on click  │
        └──────────────┘          └───────────────────────┘
                                        │ event flows UP ▲
                                        └─ changes the parent's state
```

---

## Pattern 1 — pass state DOWN (read only)   → lift-01

The parent owns the state; a child just **reads and shows** it.

```jsx
function Display({ count }) {          // child receives count as a prop
  return <p>The count is: {count}</p>;
}

function App() {
  const [count, setCount] = useState(0);   // state lives HERE, in the parent
  return (
    <>
      <Display count={count} />            {/* pass the VALUE down */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
```

**Takeaway:** a child can read a parent's state through a prop. Data flows down.

---

## Pattern 2 — child CHANGES the parent's state   → lift-02

The parent passes a **function** down; the child calls it to change the state.

```jsx
function PlusButton({ onAdd }) {         // child receives a FUNCTION as a prop
  return <button onClick={onAdd}>+1</button>;   // and calls it on click
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <PlusButton onAdd={() => setCount(count + 1)} />  {/* pass a FUNCTION down */}
    </>
  );
}
```

**Takeaway:** children "talk back up" by **calling function props.** The child
doesn't own the state — it just triggers the parent's setter. Events flow up.

---

## Pattern 3 — two SIBLINGS share one state   → lift-03

The real reason to lift up: two components need the **same** state, so it lives
in their shared parent, which gives each what it needs.

```jsx
function Display({ count }) {
  return <p>Count: {count}</p>;               // one sibling READS it
}

function Controls({ onAdd, onReset }) {
  return (
    <>
      <button onClick={onAdd}>+1</button>      {/* the other sibling CHANGES it */}
      <button onClick={onReset}>Reset</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);        // state lives in the PARENT
  return (
    <>
      <Display count={count} />
      <Controls onAdd={() => setCount(count + 1)} onReset={() => setCount(0)} />
    </>
  );
}
```

**Takeaway:** neither sibling owns the state — the **parent** does, and passes the
value to one child and the handlers to the other. This is *the* pattern for shared
state.

---

## Real-life example

A **shopping cart**: `<ProductList>` (add items) and `<CartSummary>` (show total)
both need the same cart data. They're siblings, so the cart state lives in their
**parent**, which passes the total *down* to CartSummary and an "add" *function
down* to ProductList. That's Pattern 3, for real.

---

## The rule to remember

> **When two components need the same state, move it UP to their nearest shared
> parent, then pass it down (value as a prop, setter as a function prop).**

- Need a child to **read** state → pass the **value** down (`count={count}`).
- Need a child to **change** state → pass a **function** down (`onAdd={...}`).

That's the complete model for state bigger than one component — i.e. every real app.
```
data DOWN as props · events UP as function props
```
