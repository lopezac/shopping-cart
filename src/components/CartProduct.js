import { string, number, func } from "prop-types";

import ProductTop from "./ProductTop";
import ProductBottom from "./ProductBottom";
import "../styles/Product.css";

const CartProduct = (props) => {
  const {
    img,
    title,
    totalPrice,
    quantity,
    id,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  return (
    <div data-testid="product" className="product">
      <ProductTop img={img} title={title} />
      <p role="listitem" data-testid="price">
        ${totalPrice(id)}
      </p>
      <ProductBottom
        id={id}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

CartProduct.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  totalPrice: func.isRequired,
  quantity: number.isRequired,
  id: number.isRequired,
  increaseQuantity: func.isRequired,
  decreaseQuantity: func.isRequired,
};

export default CartProduct;
