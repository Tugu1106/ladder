// Drill 3 — Nested Components
// Goal: make a small Child component, then render it INSIDE Drill.
//   function Child() { return <p>I am the child</p>; }
// Then Drill returns an <h2>Parent</h2> and <Child /> together (Fragment).

function Child() {
  return <p>Im the Child</p>;
}

function Drill() {
  return (
    <>
      <h2>Parent</h2>
      <Child />
    </>
  );
}

export default Drill;
