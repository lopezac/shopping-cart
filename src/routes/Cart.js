import { func } from "prop-types";
import CartProducts from "../components/CartProducts";
import { getItems } from "../data";

function Cart(props) {
  const { setTotalQuantity } = props;

  return (
    <main className="content cart">
      <h1 className="content-title">Cart</h1>
      <CartProducts getItems={getItems} setTotalQuantity={setTotalQuantity} />
      <button>Order Now</button>
    </main>
  );
}

Cart.propTypes = {
  setTotalQuantity: func.isRequired,
};

export default Cart;
