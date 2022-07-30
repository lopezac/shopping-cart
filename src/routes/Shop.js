import Products from "../components/Products";
import { getItems } from "../data";
import "../styles/Shop.css";

const Shop = (props) => {
  const { setTotalQuantity } = props;

  return (
    <main className="content shop">
      <h1 className="content-title">Watches Shop</h1>
      <Products getItems={getItems} setTotalQuantity={setTotalQuantity} />
    </main>
  );
};

export default Shop;
