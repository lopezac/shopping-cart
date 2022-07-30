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

export default CartProduct;
