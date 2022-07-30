import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";
import "../styles/ProductBottom.css";

export default function ProductBottom(props) {
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
