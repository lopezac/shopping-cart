import Products from "./Products";

const Shop = (props) => {
  return (
    <div>
      <h1>Watches Shop</h1>
      <Products addItem={props.addItem} />
    </div>
  );
};

export default Shop;
