// Lifting State Drill 1 — Pass state DOWN as a prop
// NEW idea: state can live in a PARENT and be shared with a CHILD via props.
//   Parent owns `count`. A <Display count={count} /> child just shows it.
// Goal: Parent holds count state + a +1 button. A separate Display component
//       receives count as a prop and renders it. One state, two components.
//
//   function Display({ count }) {
//     return <p>The count is: {count}</p>;
//   }
//   function Drill() {
//     const [count, setCount] = useState(0);
//     return (<> <Display count={count} /> <button ...>+1</button> </>);
//   }

import { useState } from "react";

function Display({ count }) {
  return (
    <>
      <p>{count}</p>;
    </>
  );
}

function Drill() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Drill;
