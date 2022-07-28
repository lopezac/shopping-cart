import CartProducts from "../components/CartProducts";
import { getItems } from "../data";

const Cart = (props) => {
  return (
    <div>
      <h1>Cart</h1>
      <CartProducts getItems={getItems} />
    </div>
  );
};

export default Cart;
