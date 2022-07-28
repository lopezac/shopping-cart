import "../styles/Product.css";
import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";

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
      <img src={`./assets/${img}`} alt={title} />
      <p role="listitem" data-testid="product-title">
        {title}
      </p>
      <p role="listitem" data-testid="price">
        {totalPrice(id)}
      </p>
      <DecreaseBtn decreaseQuantity={decreaseQuantity} id={id} />
      <p role="listitem" data-testid="quantity">
        {quantity}
      </p>
      <IncreaseBtn increaseQuantity={increaseQuantity} id={id} />
    </div>
  );
};

export default CartProduct;
