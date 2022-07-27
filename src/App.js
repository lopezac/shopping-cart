import { useEffect, useState } from "react";

import RouteSwitch from "./components/RouteSwitch";

const App = () => {
  const [cart, setCart] = useState({});

  const getItems = () => {
    console.log("cart in getItems", cart)
    return cart;
  };

  const addItem = (id, quantity) => {
    let newCart = cart;

    if (cart[id]) newCart[id].quantity = newCart[id].quantity + quantity;
    else newCart[id] = createItem(id, quantity);

    setCart(newCart);
    console.log("cart in addItem", cart);
  };

  const createItem = (id, quantity) => {
    return { id: id, quantity: quantity };
  };

  const removeItem = (id) => {
    let editedCart = cart;

    editedCart[id].quantity -= 1;
    if (editedCart[id].quantity <= 0) editedCart.splice(id, 1);

    setCart(editedCart);
  };

  const itemsTotalSum = () => {
    return cart.reduce((prev, item) => prev + item.price * item.quantity, 0);
  };

  const itemTotalSum = (id) => {
    return cart[id].price * cart[id].quantity;
  };

  return <div>{<RouteSwitch addItem={addItem} removeItem={removeItem} getItems={getItems} itemTotalSum={itemTotalSum} itemsTotalSum={itemsTotalSum} />}</div>;
};

export default App;
