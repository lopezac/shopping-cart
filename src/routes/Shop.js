import { func } from "prop-types";
import Products from "../components/Products";
import { getItems } from "../data";
import "../styles/Shop.css";

function Shop(props) {
  const { setTotalQuantity } = props;

  return (
    <main className="content shop">
      <h1 className="content-title">Watches Shop</h1>
      <Products getItems={getItems} setTotalQuantity={setTotalQuantity} />
    </main>
  );
}

Shop.propTypes = {
  setTotalQuantity: func.isRequired,
};

export default Shop;
