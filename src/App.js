import { useEffect, useState } from "react";

import RouteSwitch from "./components/RouteSwitch";

const App = () => {
  const [cart, setCart] = useState({});

  const addItem = (item) => {
    let newCart = cart;
    console.log(item.target);
    // if (cart[item.id]) {
    //   newCart[item.id].quantity = newCart[item.id].quantity + 1; // += 1 try later;
    // } else {
    //   newCart[item.id] = createItem(item.id);
    // }
    // setCart(newCart);
    // console.log(cart);
  };

  const createItem = (id) => {
    return { id: id, quantity: 0 };
  };

  const removeItem = () => {};

  const totalSum = () => {};

  return <div>{<RouteSwitch addItem={addItem} />}</div>;
};

export default App;
