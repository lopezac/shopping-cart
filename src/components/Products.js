import { useState } from "react";

import Product from "./Product";

const Products = (props) => {
  const { getItems } = props;

  const [items, setItems] = useState(getItems());

  const increaseQuantity = (id) => {
    let newItems = items.slice();
    newItems[id].quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (id) => {
    let newItems = items.slice();
    newItems[id].quantity -= 1;
    setItems(newItems);
  };

  return (
    <div data-testid="products" className="products">
      {(items || []).map((item) => {
        return (
          <Product
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
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

export default Products;
