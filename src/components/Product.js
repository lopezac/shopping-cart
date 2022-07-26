import {useState} from "react";

import ProductHeader from "./ProductHeader";
import "../styles/Product.css";

const Product = (props) => {
  const { title, img, id, price, addItem } = props;
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    let value = Number(event.target.value);
    setQuantity(value);
  };

  return (
    <div className="product">
      <ProductHeader title={title} img={img} />
      <p className="product-price">{price}</p>
      <input className="quantity-input" value={quantity} type="number" min="0" max="100" onChange={handleQuantityChange}/>
      <button
        className="addCartBtn"
        type="button"
        onClick={addItem.bind(this, id, quantity)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
