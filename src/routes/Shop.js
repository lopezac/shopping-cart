import Products from "../components/Products";
import { getItems, increaseQuantity, decreaseQuantity } from "../data";

const Shop = (props) => {
  return (
    <div>
      <h1>Watches Shop</h1>
      <Products getItems={getItems} />
    </div>
  );
};

export default Shop;