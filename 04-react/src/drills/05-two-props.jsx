// Drill 5 — Two Props
// Goal: Person takes `name` AND `age`, returns "<name> is <age> years old".
// Render a few with different values.
// Passing: strings use quotes  name="Tugu"  ·  numbers use braces  age={22}

function Person({ name, age }) {
  return (
    <h1>
      {name} is {age} years old
    </h1>
  );
}

function Drill() {
  return (
    <>
      <Person name={"Tugu"} age={22} />
      <Person name={"Tugu2"} age={21} />
      <Person name={"Tugu3"} age={20} />
      <Person name={"Tugu4"} age={19} />
    </>
  );
}

export default Drill;
