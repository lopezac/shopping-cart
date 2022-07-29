import CartProducts from "../components/CartProducts";
import { getItems } from "../data";

const Cart = (props) => {
  const { setTotalQuantity } = props;

  return (
    <div>
      <h1>Cart</h1>
      <CartProducts getItems={getItems} setTotalQuantity={setTotalQuantity} />
    </div>
  );
};

export default Cart;
