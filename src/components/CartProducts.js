import { useState } from "react";

import CartProduct from "./CartProduct";

const CartProducts = (props) => {
  const { getItems } = props;

  const [items, setItems] = useState(getPickedItems(getItems()));

  const increaseQuantity = (id) => {
    let newItems = items.slice();
    getItem(id).quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (id) => {
    let newItems = items.slice();
    let item = getItem(id);

    item.quantity -= 1;
    setItems(newItems);

    if (item.quantity <= 0) removeItem(id);
  };

  function removeItem(id) {
    let newItems = items.slice();

    newItems.splice(id, 1);

    setItems(newItems);
  }

  function getItem(id) {
    return items.find((item) => item.id === id);
  }

  function getTotalPrice(id) {
    let item = getItem(id);
    return item.quantity * item.price;
  }

  function getPickedItems(items) {
    return items.filter((item) => item.quantity > 0);
  }

  return (
    <div data-testid="cart-products" className="products">
      {(items || []).map((item) => {
        return (
          <CartProduct
            key={item.id}
            img={item.img}
            title={item.title}
            totalPrice={getTotalPrice}
            quantity={item.quantity}
            id={item.id}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
    </div>
  );
};

export default CartProducts;
