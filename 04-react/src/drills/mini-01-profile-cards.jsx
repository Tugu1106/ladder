// Mini Project 1 — Profile Cards
// Goal: an array of people (objects), each shown as a Card.
//   Card takes name + role as props.
//   map people -> <Card key={p.id} name={p.name} role={p.role} />
// Combines everything so far: component + props + map + key + destructuring.

function Card({ name, role }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}
    >
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

const people = [
  { id: 1, name: "Tugu", role: "Developer" },
  { id: 2, name: "Alex", role: "Designer" },
  { id: 3, name: "Sarah", role: "Manager" },
];

function Drill() {
  return (
    <>
      {people.map((p) => (
        <Card key={p.id} name={p.name} role={p.role} />
      ))}
    </>
  );
}

export default Drill;
