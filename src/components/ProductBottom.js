import { func, number } from "prop-types";

import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";
import "../styles/ProductBottom.css";

function ProductBottom(props) {
  const { increaseQuantity, decreaseQuantity, id, quantity } = props;

  return (
    <div className="product-bottom">
      <DecreaseBtn decreaseQuantity={decreaseQuantity} id={id} />
      <p className="quantity" role="listitem" data-testid="quantity">
        {quantity}
      </p>
      <IncreaseBtn increaseQuantity={increaseQuantity} id={id} />
    </div>
  );
}

ProductBottom.defaultProps = {
  id: 0,
  quantity: 0,
};

ProductBottom.propTypes = {
  increaseQuantity: func.isRequired,
  decreaseQuantity: func.isRequired,
  id: number,
  quantity: number,
};

export default ProductBottom;
