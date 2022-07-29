import Products from "../components/Products";
import { getItems } from "../data";

const Shop = (props) => {
  const { setTotalQuantity } = props;

  return (
    <div>
      <h1>Watches Shop</h1>
      <Products getItems={getItems} setTotalQuantity={setTotalQuantity} />
    </div>
  );
};

export default Shop;
