import CartProducts from "../components/CartProducts";
import { getItems } from "../data";

const Cart = (props) => {
  const { setTotalQuantity } = props;

  return (
    <main className="content cart">
      <h1 className="content-title">Cart</h1>
      <CartProducts getItems={getItems} setTotalQuantity={setTotalQuantity} />
      <button>Order Now</button>
    </main>
  );
};

export default Cart;
