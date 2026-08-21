// Drill 7 — List with map
// Goal: turn an array of names into <Greeting> components using .map().
// Don't forget key={...} on each.
// (After =>, use ( ) for implicit return, or { } with an explicit return.)

function Greeting({ name }) {
  return <p>Hi, {name}!</p>;
}

const names = ["Tugu", "Alex", "Sarah", "John"];

function Drill() {
  return (
    <>
      {names.map((name) => {
        return <Greeting key={name} name={name} />;
      })}
    </>
  );
}

export default Drill;
