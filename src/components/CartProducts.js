import { useState } from "react";
import { func } from "prop-types";

import CartProduct from "./CartProduct";
import TotalPrice from "./TotalPrice";
import { ProductsStyle } from "../styles/ProductsStyles";

function CartProducts(props) {
  const { getItems, setTotalQuantity } = props;

  const [items, setItems] = useState(getPickedItems(getItems()));

  const increaseQuantity = (id) => {
    let newItems = items.slice();

    getItem(id).quantity += 1;

    setItems(newItems);
    handleQuantityChange();
  };

  const decreaseQuantity = (id) => {
    let newItems = items.slice();
    let item = getItem(id);

    item.quantity -= 1;
    setItems(newItems);
    handleQuantityChange();
    if (item.quantity === 0) removeItem(id);
  };

  function handleQuantityChange() {
    if (setTotalQuantity) setTotalQuantity(getTotalQuantity());
  }

  function getTotalQuantity() {
    return items.reduce((prev, cur) => prev + cur.quantity, 0);
  }

  function removeItem(id) {
    let newItems = items.slice();
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === id) id = i;
    }

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

  function getSumPrices() {
    return items.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  }

  return (
    <>
      <ProductsStyle data-testid="cart-products" className="products">
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
      </ProductsStyle>
      <TotalPrice price={getSumPrices} />
    </>
  );
}

CartProducts.propTypes = {
  getItems: func,
  setTotalQuantity: func,
};

export default CartProducts;
