import CartProducts from "./CartProducts.js";

const Cart = (props) => {
  const { addItem, removeItem, getItems, itemTotalSum, itemsTotalSum } = props;

  return (
    <div>
      <h1>Cart</h1>
      <CartProducts addItem={addItem} removeItem={removeItem} getItems={getItems} itemTotalSum={itemTotalSum} />
    </div>
  );
};

export default Cart;
