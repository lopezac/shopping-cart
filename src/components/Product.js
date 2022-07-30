import ProductTop from "./ProductTop";
import ProductBottom from "./ProductBottom";
import "../styles/Product.css";

const Product = (props) => {
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
    <div data-testid="product" className="product">
      <ProductTop img={img} title={title} />
      <p role="listitem">${price}</p>
      <ProductBottom
        id={id}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default Product;
