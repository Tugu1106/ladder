// Drill 8 — Destructure Props
// These two are IDENTICAL — destructuring is just shorter:
//   function Greeting(props)   { return <p>Hi, {props.name}!</p>; }
//   function Greeting({ name }) { return <p>Hi, {name}!</p>; }
// Write the destructured version and render it a couple times.

function Greeting({ name }) {
  return <p> Hi {name}</p>;
}

function Drill() {
  return <Greeting name={"Tugu"} />;
}

export default Drill;
