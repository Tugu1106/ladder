// Drill 6 — Prop Types (string, number, boolean)
// Goal: Product takes name (string), price (number), inStock (boolean).
// Show all three. For the boolean, print "In stock" or "Sold out" with a ternary:
//   {inStock ? "In stock" : "Sold out"}
// How each type is passed:  name="Mouse"   price={20}   inStock={true}

function Product({ name, price, inStock }) {
  return (
    <p>
      name = {name} price = {price} inStock ={" "}
      {inStock ? "in stock" : "Sold out"}
    </p>
  );
}

function Drill() {
  return (
    <>
      <Product name={"Airpods max 2"} price={2000000} inStock={false} />
      <Product name={"Whole setup"} price={4000000} inStock={true} />
    </>
  );
}

export default Drill;
