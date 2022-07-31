import { string, number, func } from "prop-types";

import ProductTop from "./ProductTop";
import ProductBottom from "./ProductBottom";
import { ProductStyle } from "../styles/ProductsStyles";

function Product(props) {
  const {
    img,
    title,
    price,
    quantity,
    id,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  return (
    <ProductStyle data-testid="product" className="product">
      <ProductTop img={img} title={title} />
      <p role="listitem">${price}</p>
      <ProductBottom
        id={id}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </ProductStyle>
  );
}

Product.defaultProps = {
  img: "watch-1.png",
  quantity: 0,
  id: 0,
};

Product.propTypes = {
  img: string,
  title: string.isRequired,
  price: number.isRequired,
  quantity: number,
  id: number,
  increaseQuantity: func.isRequired,
  decreaseQuantity: func.isRequired,
};

export default Product;
